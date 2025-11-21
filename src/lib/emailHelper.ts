// lib/emailHelper.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Night Marathon 2026 <onboarding@resend.dev>";
const ADMIN_EMAIL = "bcorenightrun@rru.ac.in";

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
        <p>We've received your message regarding <strong>Night Marathon 2026</strong>. Our team will get back to you within 24–48 hours.</p>
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

// ==========================================
// 💰 DONATION EMAIL FUNCTIONS
// ==========================================

// ✅ Helper: Donation Admin Notification Email Template
const getDonationAdminEmailTemplate = (
  name: string,
  email: string,
  phone: string,
  amount: string,
  message: string
) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Donation Received - Night Marathon 2026</title>
</head>
<body style="font-family:Arial,sans-serif;background:#f4f4f7;padding:0;margin:0;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:white;border-radius:8px;overflow:hidden;">
    <tr>
      <td style="background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);padding:30px;text-align:center;color:white;">
        <h1 style="margin:0;font-size:28px;">🎉 New Donation Received!</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:30px;background:#f9f9f9;">
        <div style="text-align:center;margin:20px 0;">
          <div style="font-size:16px;color:#666;margin-bottom:5px;">Donation Amount</div>
          <div style="font-size:48px;font-weight:bold;color:#667eea;">₹${amount}</div>
        </div>
        
        <div style="background:white;padding:15px;margin:15px 0;border-left:4px solid #667eea;border-radius:4px;">
          <p style="margin:5px 0;"><strong style="color:#667eea;">Donor Name:</strong> ${name}</p>
        </div>
        
        <div style="background:white;padding:15px;margin:15px 0;border-left:4px solid #667eea;border-radius:4px;">
          <p style="margin:5px 0;"><strong style="color:#667eea;">Email:</strong> <a href="mailto:${email}" style="color:#667eea;">${email}</a></p>
        </div>
        
        ${
          phone
            ? `
        <div style="background:white;padding:15px;margin:15px 0;border-left:4px solid #667eea;border-radius:4px;">
          <p style="margin:5px 0;"><strong style="color:#667eea;">Phone:</strong> ${phone}</p>
        </div>
        `
            : ""
        }
        
        ${
          message
            ? `
        <div style="background:white;padding:15px;margin:15px 0;border-left:4px solid #667eea;border-radius:4px;">
          <p style="margin:5px 0;"><strong style="color:#667eea;">Message:</strong></p>
          <p style="margin:10px 0 5px 0;color:#333;">${message}</p>
        </div>
        `
            : ""
        }
        
        <div style="margin-top:30px;padding-top:20px;border-top:2px solid #ddd;color:#666;">
          <p><strong>⚠️ Action Required:</strong></p>
          <p>Please verify the payment in your UPI account and send an official receipt to the donor.</p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background:#f8f9fa;text-align:center;padding:15px;color:#666;font-size:12px;">
        Sent from Night Marathon 2026 Donation Form
      </td>
    </tr>
  </table>
</body>
</html>
`;

// ✅ Helper: Donation Thank You Email Template (to donor)
const getDonationThankYouEmailTemplate = (name: string, amount: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Thank You for Your Generous Donation!</title>
</head>
<body style="font-family:Arial,sans-serif;background:#f4f4f7;padding:0;margin:0;">
  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:white;border-radius:8px;overflow:hidden;">
    <tr>
      <td style="background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);padding:40px 30px;text-align:center;color:white;">
        <h1 style="margin:0;font-size:28px;">🙏 Thank You, ${name}!</h1>
        <p style="font-size:18px;margin-top:10px;">Your generosity makes a real difference</p>
      </td>
    </tr>
    <tr>
      <td style="padding:30px;background:#f9f9f9;">
        <p>Dear <strong>${name}</strong>,</p>
        
        <p>We are deeply grateful for your generous donation to the BCORE Gandhinagar Night Marathon. Your support helps us create a healthier, more active community and inspire thousands to embrace an active lifestyle.</p>
        
        <div style="background:white;border:3px solid #667eea;border-radius:10px;padding:20px;text-align:center;margin:20px 0;">
          <div style="color:#666;font-size:14px;margin-bottom:5px;">Your Donation</div>
          <div style="font-size:42px;font-weight:bold;color:#667eea;">₹${amount}</div>
        </div>
        
        <div style="background:white;padding:20px;border-radius:10px;margin:20px 0;">
          <h3 style="color:#667eea;margin-bottom:15px;">Your Impact 🌟</h3>
          <div style="margin:10px 0;padding-left:25px;position:relative;">
            <span style="position:absolute;left:0;color:#667eea;font-weight:bold;">✓</span>
            Support training programs for young athletes
          </div>
          <div style="margin:10px 0;padding-left:25px;position:relative;">
            <span style="position:absolute;left:0;color:#667eea;font-weight:bold;">✓</span>
            Fund fitness awareness campaigns and workshops
          </div>
          <div style="margin:10px 0;padding-left:25px;position:relative;">
            <span style="position:absolute;left:0;color:#667eea;font-weight:bold;">✓</span>
            Enable participation for para-athletes
          </div>
          <div style="margin:10px 0;padding-left:25px;position:relative;">
            <span style="position:absolute;left:0;color:#667eea;font-weight:bold;">✓</span>
            Improve running facilities and infrastructure
          </div>
        </div>
        
        <p><strong>What's Next?</strong></p>
        <p>Our team will verify your payment and send you an official receipt for tax purposes within 24-48 hours. This receipt will be sent to this email address.</p>
        
        <p>If you have any questions or concerns, please don't hesitate to reach out to us at <a href="mailto:${ADMIN_EMAIL}" style="color:#667eea;">${ADMIN_EMAIL}</a></p>
        
        <div style="text-align:center;margin-top:30px;padding-top:20px;border-top:2px solid #ddd;">
          <p><strong>BCORE Gandhinagar Night Marathon</strong></p>
          <p style="color:#666;">Building a healthier, more active community together 🏃‍♂️</p>
          <p style="margin-top:15px;font-size:12px;color:#999;">
            This is an automated confirmation email. For any queries, please contact us at ${ADMIN_EMAIL}
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td style="background:#f8f9fa;text-align:center;padding:15px;color:#666;font-size:12px;">
        © ${new Date().getFullYear()} Night Marathon 2026. All rights reserved.
      </td>
    </tr>
  </table>
</body>
</html>
`;

// ✅ Send Donation Admin Notification
export async function sendDonationAdminNotification(
  name: string,
  email: string,
  phone: string,
  amount: string,
  message: string
) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    replyTo: email,
    subject: `💰 New Donation: ₹${amount} from ${name}`,
    html: getDonationAdminEmailTemplate(name, email, phone, amount, message),
  });
}

// ✅ Send Donation Thank You Email
export async function sendDonationThankYouEmail(
  name: string,
  email: string,
  amount: string
) {
  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    subject: "Thank You for Your Generous Donation! 🙏",
    html: getDonationThankYouEmailTemplate(name, amount),
  });
}
