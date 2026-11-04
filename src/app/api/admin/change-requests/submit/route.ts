import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { escapeHtml } from "@/lib/form-guard";

// Auth is enforced upstream by src/proxy.ts on /api/admin/:path*.
// If the request reaches this handler, the caller has a valid admin session.

function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(request: Request) {
  const { description, requestType, priority } = await request.json();

  if (!description || description.trim().length < 10) {
    return Response.json(
      { error: "Please describe your request" },
      { status: 400 }
    );
  }

  const supabaseAdmin = getSupabaseAdmin();

  const { data, error } = await supabaseAdmin
    .from("change_requests")
    .insert({
      client_email: "moa@arsitechgroup.com",
      business_name: "Arsi Tech Group Website",
      request_type: requestType || "general",
      description: description.trim(),
      priority: priority || "normal",
      status: "pending",
    })
    .select()
    .single();

  if (error) {
    return Response.json({ error: "Failed to submit" }, { status: 500 });
  }

  try {
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
      subject: `ArsiTech Change Request: ${requestType}`,
      html: `
        <h2>New change request for arsitechgroup.com</h2>
        <p><strong>Type:</strong> ${escapeHtml(requestType)}</p>
        <p><strong>Priority:</strong> ${escapeHtml(priority)}</p>
        <p><strong>Request:</strong> ${escapeHtml(description)}</p>
        <p><small>ID: ${escapeHtml(data.id)}</small></p>
      `,
    });
  } catch (e) {
    console.error("Email failed:", e);
  }

  return Response.json({ success: true, id: data.id });
}
