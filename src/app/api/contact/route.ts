import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
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
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.GMAIL_USER,
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
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
