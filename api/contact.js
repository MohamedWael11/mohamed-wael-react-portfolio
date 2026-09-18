import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const { name, email, message, website } = request.body || {};

  if (website) {
    return response.status(400).json({ error: "Invalid submission." });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !emailPattern.test(email.trim()) ||
    !message.trim()
  ) {
    return response.status(400).json({ error: "Please provide a valid name, email, and message." });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.CONTACT_TO_EMAIL || "mwael3834@gmail.com";
  const senderEmail = process.env.RESEND_FROM_EMAIL;

  if (!supabaseUrl || !supabaseServiceRoleKey || !resendApiKey || !senderEmail) {
    console.error("Contact API is missing one or more required environment variables.");
    return response.status(500).json({ error: "Contact service is not configured." });
  }

  const cleanName = name.trim().slice(0, 100);
  const cleanEmail = email.trim().slice(0, 254);
  const cleanMessage = message.trim().slice(0, 5000);
  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
  const resend = new Resend(resendApiKey);

  const { error: databaseError } = await supabase.from("contact_messages").insert({
    name: cleanName,
    email: cleanEmail,
    message: cleanMessage
  });

  if (databaseError) {
    console.error("Failed to save contact message:", databaseError);
    return response.status(500).json({ error: "Unable to save your message." });
  }

  const { error: emailError } = await resend.emails.send({
    from: senderEmail,
    to: recipientEmail,
    replyTo: cleanEmail,
    subject: `Portfolio inquiry from ${cleanName}`,
    text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`
  });

  if (emailError) {
    console.error("Failed to send contact notification:", emailError);
    return response.status(502).json({ error: "Message saved, but email delivery failed." });
  }

  return response.status(200).json({ ok: true });
}
