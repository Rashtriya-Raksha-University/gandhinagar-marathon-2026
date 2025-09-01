-- CreateEnum
CREATE TYPE "tshirt_size" AS ENUM ('XS', 'S', 'M', 'L', 'XL', '2XL');

-- CreateEnum
CREATE TYPE "race_name" AS ENUM ('MARATHON', 'HALF_MARATHON', 'TEN_K', 'FIVE_K');

-- CreateEnum
CREATE TYPE "registration_status" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "payment_status" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- CreateTable
CREATE TABLE "registrations" (
    "id" TEXT NOT NULL,
    "runnerId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "tshirtSize" "tshirt_size" NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "raceName" "race_name" NOT NULL DEFAULT 'MARATHON',
    "amount" DOUBLE PRECISION NOT NULL,
    "paymentId" TEXT,
    "receiptId" TEXT,
    "paymentStatus" "payment_status" NOT NULL DEFAULT 'PENDING',
    "status" "registration_status" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "registrations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "registrations_runnerId_key" ON "registrations"("runnerId");
