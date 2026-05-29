import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const mailtoLink = `mailto:windmansmart0101@gmail.com?subject=${encodeURIComponent(
      `[Portfolio Contact] ${subject}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // In a production environment, you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - AWS SES
    // - Nodemailer with Gmail SMTP

    // For now, we'll return the mailto link for client-side handling
    return NextResponse.json({
      success: true,
      mailtoLink,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to process request" },
      { status: 500 }
    );
  }
}
