// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { sendAdminNotification, sendThankYouEmail } from "@/lib/emailHelper";

export async function POST(req: Request) {
  try {
    const { name, email, phone, category, message } = await req.json();

    await Promise.all([
      sendAdminNotification(name, email, phone, category, message),
      sendThankYouEmail(name, email),
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
