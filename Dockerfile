# ───────────────────────────────
# 1. Install dependencies
# ───────────────────────────────
FROM node:20-slim AS deps
WORKDIR /app
# Install OpenSSL to fix Prisma warnings
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
# Copy only package files first for better caching
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN \
  if [ -f package-lock.json ]; then npm ci --ignore-scripts; \
  elif [ -f yarn.lock ]; then yarn install --frozen-lockfile --ignore-scripts; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm install --frozen-lockfile --ignore-scripts; \
  else npm install --ignore-scripts; \
  fi

# ───────────────────────────────
# 2. Build application
# ───────────────────────────────
FROM node:20-slim AS builder
WORKDIR /app
# Install OpenSSL for Prisma
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Accept build arguments
ARG NEXT_PUBLIC_CLOUDFLARE_SITE_KEY
ENV NEXT_PUBLIC_CLOUDFLARE_SITE_KEY=$NEXT_PUBLIC_CLOUDFLARE_SITE_KEY

# Bring over dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma client and build
RUN npx prisma generate
RUN npm run build

# ───────────────────────────────
# 3. Runtime image (minimal)
# ───────────────────────────────
FROM node:20-slim AS runner
WORKDIR /app
# Install OpenSSL for runtime
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
ENV NODE_ENV=production
ENV PORT=3000

# Security best practice: use non-root user
RUN addgroup --gid 1001 nodejs \
    && useradd --uid 1001 --gid nodejs --shell /bin/bash --create-home nextjs

# Copy only what's needed at runtime
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

# Change ownership to nextjs user
RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000
CMD ["npm", "start"]