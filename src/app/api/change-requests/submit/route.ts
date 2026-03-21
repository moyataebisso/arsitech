import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(request: Request) {
  const { description, requestType, priority, secret } = await request.json();

  // Simple secret check — only Moa can submit
  if (secret !== process.env.ADMIN_SECRET) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

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

  // Notify yourself
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: `Arsi Tech <${process.env.RESEND_FROM_EMAIL}>`,
      to: "arsitechgroup@gmail.com",
      subject: `🔧 ArsiTech Change Request: ${requestType}`,
      html: `
        <h2>New change request for arsitechgroup.com</h2>
        <p><strong>Type:</strong> ${requestType}</p>
        <p><strong>Priority:</strong> ${priority}</p>
        <p><strong>Request:</strong> ${description}</p>
        <p><small>ID: ${data.id}</small></p>
      `,
    });
  } catch (e) {
    console.error("Email failed:", e);
  }

  return Response.json({ success: true, id: data.id });
}
