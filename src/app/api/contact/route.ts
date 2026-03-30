import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !businessName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send notification email to yourself
    await resend.emails.send({
      from: `Arsi Tech Contact <${process.env.RESEND_FROM_EMAIL}>`,
      to: "arsitechgroup@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission - ${businessName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Business Type:</strong> ${businessType || "Not specified"}</p>
        <p><strong>Service Interest:</strong> ${serviceInterest || "Not specified"}</p>
        <p><strong>Contact Preference:</strong> ${contactPreference || "Either"}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message || "No message provided"}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">This message was sent from the Arsi Technology Group website contact form.</p>
      `,
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: `Arsi Technology Group <${process.env.RESEND_FROM_EMAIL}>`,
      to: email,
      subject: "We received your message - Arsi Technology Group",
      html: `
        <h2>Thank you for contacting Arsi Technology Group!</h2>
        <p>Hi ${firstName},</p>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>Here's a summary of your inquiry:</p>
        <ul>
          <li><strong>Business:</strong> ${businessName}</li>
          <li><strong>Service Interest:</strong> ${serviceInterest || "General inquiry"}</li>
        </ul>
        <p>In the meantime, feel free to call us at <strong>(763) 639-3746</strong> if you have any urgent questions.</p>
        <p>Best regards,<br />Moyata Ebisso<br />Arsi Technology Group</p>
        <hr />
        <p style="color: #666; font-size: 12px;">Minnesota-Based Technology Consulting</p>
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
