"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState, formData) {
  const gotcha = formData.get("_gotcha");

  // Silent exit for bots
  if (gotcha) {
    return { success: true };
  }

  const name = formData.get("name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const message = formData.get("message");

  // Basic validation
  if (!name || !email || !message) {
    return { error: "Vänligen fyll i alla obligatoriska fält (*)." };
  }

  try {
    await resend.emails.send({
      from: `Elhjälp Webbformulär <info@elhjalp.com>`, 
      to: [process.env.CONTACT_EMAIL],
      reply_to: email,
      subject: `Ny förfrågan: ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">Ny förfrågan från webbplatsen</h2>
          <p><strong>Namn:</strong> ${name}</p>
          <p><strong>E-post:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || "Ej angivet"}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
            <strong>Meddelande:</strong><br/>
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { error: "Kunde inte skicka meddelandet. Försök igen senare." };
  }
}