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
      school,
      major,
      graduationDate,
      position,
      experience,
      skills,
      whyInterested,
      availability,
      linkedIn,
      portfolio,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !school || !major || !whyInterested) {
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
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Internship Application - ${firstName} ${lastName}`,
      html: `
        <h2>New Internship Application</h2>

        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

        <h3>Education</h3>
        <p><strong>School:</strong> ${school}</p>
        <p><strong>Major:</strong> ${major}</p>
        <p><strong>Expected Graduation:</strong> ${graduationDate || "Not specified"}</p>

        <h3>Application Details</h3>
        <p><strong>Position Interest:</strong> ${position || "General Internship"}</p>
        <p><strong>Availability:</strong> ${availability || "Not specified"}</p>
        <p><strong>Prior Experience:</strong> ${experience || "None specified"}</p>

        <h3>Skills</h3>
        <p>${skills || "Not specified"}</p>

        <h3>Why Interested in Arsi Technology Group?</h3>
        <p>${whyInterested}</p>

        <h3>Links</h3>
        <p><strong>LinkedIn:</strong> ${linkedIn ? `<a href="${linkedIn}">${linkedIn}</a>` : "Not provided"}</p>
        <p><strong>Portfolio/GitHub:</strong> ${portfolio ? `<a href="${portfolio}">${portfolio}</a>` : "Not provided"}</p>

        <hr />
        <p style="color: #666; font-size: 12px;">This application was submitted through the Arsi Technology Group careers page.</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to applicant
    const confirmationMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Application Received - Arsi Technology Group",
      html: `
        <h2>Thank you for your application!</h2>
        <p>Hi ${firstName},</p>
        <p>We've received your internship application at Arsi Technology Group. We appreciate your interest in joining our team!</p>
        <p>We review applications on a rolling basis and will reach out if your background aligns with our current needs.</p>
        <p><strong>What's next?</strong></p>
        <ul>
          <li>We'll review your application within 1-2 weeks</li>
          <li>If there's a fit, we'll schedule a brief phone or video call</li>
          <li>Selected candidates will have a technical discussion</li>
        </ul>
        <p>In the meantime, feel free to connect with us on <a href="https://www.linkedin.com/in/moyata-ebisso">LinkedIn</a>.</p>
        <p>Best of luck,<br />Moyata Ebisso<br />Founder, Arsi Technology Group</p>
        <hr />
        <p style="color: #666; font-size: 12px;">Minnesota-Based Technology Consulting</p>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application form error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
