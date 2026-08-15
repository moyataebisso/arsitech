import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  escapeHtml,
  guard,
  safeHref,
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
    } = body ?? {};

    const decision = guard({
      request,
      body,
      nameFields: ["firstName", "lastName", "school", "major"],
      emailField: "email",
    });

    if (decision.action === "silent-drop") {
      return NextResponse.json(SILENT_SUCCESS_BODY);
    }
    if (decision.action === "reject") {
      return NextResponse.json({ error: decision.error }, { status: decision.status });
    }

    if (!firstName || !lastName || !email || !school || !major || !whyInterested) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const linkedInHref = safeHref(linkedIn);
    const portfolioHref = safeHref(portfolio);

    const fromName = process.env.RESEND_FROM_NAME ?? "Arsi Technology Group";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${fromName} <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Internship Application - ${firstName} ${lastName}`,
      html: `
        <h2>New Internship Application</h2>

        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>

        <h3>Education</h3>
        <p><strong>School:</strong> ${escapeHtml(school)}</p>
        <p><strong>Major:</strong> ${escapeHtml(major)}</p>
        <p><strong>Expected Graduation:</strong> ${escapeHtml(graduationDate || "Not specified")}</p>

        <h3>Application Details</h3>
        <p><strong>Position Interest:</strong> ${escapeHtml(position || "General Internship")}</p>
        <p><strong>Availability:</strong> ${escapeHtml(availability || "Not specified")}</p>
        <p><strong>Prior Experience:</strong> ${escapeHtml(experience || "None specified")}</p>

        <h3>Skills</h3>
        <p>${escapeHtml(skills || "Not specified")}</p>

        <h3>Why Interested in Arsi Technology Group?</h3>
        <p>${escapeHtml(whyInterested)}</p>

        <h3>Links</h3>
        <p><strong>LinkedIn:</strong> ${
          linkedInHref
            ? `<a href="${escapeHtml(linkedInHref)}">${escapeHtml(linkedInHref)}</a>`
            : "Not provided"
        }</p>
        <p><strong>Portfolio/GitHub:</strong> ${
          portfolioHref
            ? `<a href="${escapeHtml(portfolioHref)}">${escapeHtml(portfolioHref)}</a>`
            : "Not provided"
        }</p>

        <hr />
        <p style="color: #666; font-size: 12px;">This application was submitted through the Arsi Technology Group careers page.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application form error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
