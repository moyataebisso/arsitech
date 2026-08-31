import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  escapeHtml,
  guard,
  SILENT_SUCCESS_BODY,
} from "@/lib/form-guard";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      businessName,
      businessType,
      serviceInterest,
      message,
      contactPreference,
    } = body ?? {};

    const decision = guard({
      request,
      body,
      nameFields: ["firstName", "lastName", "businessName"],
      emailField: "email",
    });

    if (decision.action === "silent-drop") {
      return NextResponse.json(SILENT_SUCCESS_BODY);
    }
    if (decision.action === "reject") {
      return NextResponse.json({ error: decision.error }, { status: decision.status });
    }

    if (!firstName || !lastName || !email || !businessName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    if (!notificationEmail) {
      throw new Error("NOTIFICATION_EMAIL env var is not set");
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL;
    if (!fromEmail) {
      throw new Error("RESEND_FROM_EMAIL env var is not set");
    }

    const fromName = process.env.RESEND_FROM_NAME ?? "Arsi Technology Group";
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: notificationEmail,
      replyTo: email,
      subject: `New Contact Form Submission - ${businessName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Business Name:</strong> ${escapeHtml(businessName)}</p>
        <p><strong>Business Type:</strong> ${escapeHtml(businessType || "Not specified")}</p>
        <p><strong>Service Interest:</strong> ${escapeHtml(serviceInterest || "Not specified")}</p>
        <p><strong>Contact Preference:</strong> ${escapeHtml(contactPreference || "Either")}</p>
        <hr />
        <h3>Message:</h3>
        <p>${escapeHtml(message || "No message provided")}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">This message was sent from the Arsi Technology Group website contact form.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
