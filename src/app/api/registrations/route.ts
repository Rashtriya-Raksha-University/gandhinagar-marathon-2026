import { NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { prisma } from "@/lib/prisma";
import { RACE_PRICES } from "@/lib/constants";

const createSchema = z.object({
  firstName: z.string().min(1),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(6),
  tshirtSize: z.enum(["XS", "S", "M", "L", "XL", "XXL"]),
  street: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  zipCode: z.string().min(1),
  country: z.string().min(1),
  raceName: z
    .enum(["MARATHON", "HALF_MARATHON", "TEN_K", "FIVE_K"])
    .default("MARATHON"),
  amount: z.coerce.number().nonnegative(),
});

type CreateBody = z.infer<typeof createSchema>;

export async function GET() { 
  const items = await prisma.registration.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  try {
    const json: unknown = await req.json();
    const data: CreateBody = createSchema.parse(json);

    const existingEmail = await prisma.registration.findUnique({
      where: { email: data.email },
    });
    if (existingEmail) {
      return NextResponse.json(
        {
          error: "EMAIL_ALREADY_REGISTERED",
          message: "Email already registered",
        },
        { status: 409 }
      );
    }

    const existingPhone = await prisma.registration.findUnique({
      where: { phone: data.phone },
    });
    if (existingPhone) {
      return NextResponse.json(
        {
          error: "PHONE_ALREADY_REGISTERED",
          message: "Phone already registered",
        },
        { status: 409 }
      );
    }

    const amount = RACE_PRICES[data.raceName] || 0;

    const created = await prisma.registration.create({
      data: {
        ...data,
        amount,
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { error: "ValidationError", details: err.issues },
        { status: 400 }
      );
    }
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { error: "ServerError", message },
      { status: 500 }
    );
  }
}
