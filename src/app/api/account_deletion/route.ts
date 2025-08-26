import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { AccountDeletionEmail } from "@/components/emails/AccountDeletionEmail";

interface DeletionRequestData {
  phoneNumber: string;
  reasons: string[];
}

export async function POST(request: NextRequest) {
  try {
    const data: DeletionRequestData = await request.json();

    // Validate required fields
    if (!data.phoneNumber || !data.reasons || data.reasons.length === 0) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Render email template
    const emailHtml = await render(
      AccountDeletionEmail({
        ...data,
        submissionDate: new Date().toISOString(),
      })
    );

    // Send email to support team
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.SUPPORT_EMAIL || "support@vibenear.com",
      subject: `Account Deletion Request - ${data.phoneNumber}`,
      html: emailHtml,
    });

    return NextResponse.json({
      message: "Deletion request sent successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send deletion request" },
      { status: 500 }
    );
  }
}
