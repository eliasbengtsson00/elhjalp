"use server";
import { Resend } from "resend";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Namn krävs (minst 2 tecken)."),
  email: z.string().email("Ogiltig e-postadress."),
  phone: z.string().optional(),
  message: z.string().min(10, "Meddelandet måste vara minst 10 tecken."),
  page_url: z.string().optional(),
  _gotcha: z.string().optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState, formData) {
  const data = Object.fromEntries(formData);

  const validated = ContactSchema.safeParse(data);

  if (!validated.success) {
    return { error: validated.error.errors[0].message };
  }

  const { name, email, phone, message, page_url: pageUrl } = validated.data;

  if (data._gotcha) {
    return { success: true };
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
