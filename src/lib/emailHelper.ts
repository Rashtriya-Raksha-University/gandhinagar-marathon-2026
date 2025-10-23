// lib/emailHelper.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Night Marathon 2026 <onboarding@resend.dev>"; // Replace with your verified domain later
const ADMIN_EMAIL = "siddiqiss1234@gmail.com";

// ✅ Helper: Thank You Email (to user)
const getThankYouEmailTemplate = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Thank You for Contacting Night Marathon 2026</title>
</head>
<body style="font-family:Arial,sans-serif;background:#f4f4f7;padding:0;margin:0;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:white;border-radius:8px;overflow:hidden;">
    <tr>
      <td style="background:#0EA5E9;padding:30px;text-align:center;color:white;">
        <h1 style="margin:0;font-size:24px;">🎉 Thank You for Reaching Out!</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:30px;">
        <p>Hi <strong>${name}</strong>,</p>
        <p>We’ve received your message regarding <strong>Night Marathon 2026</strong>. Our team will get back to you within 24–48 hours.</p>
        <p>Meanwhile, feel free to follow our latest updates and marathon info on our official channels.</p>
        <p>🏃‍♂️ Stay fit, stay inspired!</p>
        <p style="margin-top:30px;">Cheers,<br><strong>Night Marathon Team</strong></p>
      </td>
    </tr>
    <tr>
      <td style="background:#f8f9fa;text-align:center;padding:15px;color:#666;font-size:12px;">
        © ${new Date().getFullYear()} Night Marathon. All rights reserved.
      </td>
    </tr>
  </table>
</body>
</html>
`;

// ✅ Helper: Admin Notification Email (to you)
const getAdminEmailTemplate = (
  name: string,
  email: string,
  phone: string,
  category: string,
  message: string
) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Contact Submission - Night Marathon 2026</title>
</head>
<body style="font-family:Arial,sans-serif;background:#f4f4f7;padding:0;margin:0;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:white;border-radius:8px;overflow:hidden;">
    <tr>
      <td style="background:#10B981;padding:30px;text-align:center;color:white;">
        <h1 style="margin:0;font-size:24px;">🏁 New Contact Submission</h1>
        <p style="margin:10px 0 0;font-size:14px;text-transform:uppercase;">${category}</p>
      </td>
    </tr>
    <tr>
      <td style="padding:30px;">
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#10B981;">${email}</a></p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <h3 style="margin-top:25px;">Message</h3>
        <div style="background:#f8f9fa;padding:15px;border-left:4px solid #10B981;border-radius:4px;">
          <p>${message}</p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background:#f8f9fa;text-align:center;padding:15px;color:#666;font-size:12px;">
        Sent from Night Marathon 2026 Contact Form
      </td>
    </tr>
  </table>
</body>
</html>
`;

// ✅ Send Thank You Email
export async function sendThankYouEmail(name: string, email: string) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: "Thank You for Contacting Night Marathon 2026 🎉",
    html: getThankYouEmailTemplate(name),
  });
}

// ✅ Send Notification to Admin
export async function sendAdminNotification(
  name: string,
  email: string,
  phone: string,
  category: string,
  message: string
) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    replyTo: email,
    subject: `[${category.toUpperCase()}] New Contact - ${name}`,
    html: getAdminEmailTemplate(name, email, phone, category, message),
  });
}
