"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState, formData) {
  const gotcha = formData.get("_gotcha");

  // Silent exit for bots
  if (gotcha) {
    return { success: true };
  }

  const name = formData.get("name")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const message = formData.get("message")?.toString() || "";
  const pageUrl = formData.get("page_url")?.toString() || "Okänd sida";

  // Basic validation
  if (!name || !email || !message) {
    return { error: "Vänligen fyll i alla obligatoriska fält (*)." };
  }

  try {
    await resend.emails.send({
      from: `Elhjälp Webbformulär <info@elhjalp.com>`,
      to: [process.env.CONTACT_EMAIL],
      replyTo: [email.toString()],
      subject: `Ny förfrågan: ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333; max-width: 600px;">
          <h2 style="border-bottom: 2px solid #E5E7EB; padding-bottom: 10px; color: #111827;">Ny förfrågan från webben</h2>
          
          <p><strong>Inskickad från:</strong> <code style="background: #F3F4F6; padding: 2px 4px; border-radius: 4px;">${pageUrl}</code></p>
          
          <div style="margin: 20px 0; padding: 15px; border: 1px solid #E5E7EB; border-radius: 8px;">
            <p style="margin: 5px 0;"><strong>Namn:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>E-post:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Telefon:</strong> ${phone || "Ej angivet"}</p>
          </div>

          <div style="padding: 15px; background-color: #F9FAFB; border-radius: 8px;">
            <strong>Meddelande:</strong><br/>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="font-size: 12px; color: #6B7280; margin-top: 20px;">
            Denna förfrågan spårades även som en 'Lead' i GA4 och GTM.
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { error: "Kunde inte skicka meddelandet. Försök igen senare." };
  }
}
