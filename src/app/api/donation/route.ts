// app/api/donation/route.ts
import { NextResponse } from "next/server";
import {
  sendDonationAdminNotification,
  sendDonationThankYouEmail,
} from "@/lib/emailHelper";

export async function POST(req: Request) {
  try {
    const { name, email, phone, amount, message } = await req.json();

    await Promise.all([
      sendDonationAdminNotification(name, email, phone, amount, message),
      sendDonationThankYouEmail(name, email, amount),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
