"use client";

import React, { useActionState } from "react";
import { SendDiagonal, Check } from "iconoir-react";
import { sendEmail } from "@/lib/actions";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendEmail, null);

  // Success State View
  if (state?.success) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-background border border-border-subtle rounded-3xl text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
          <Check className="text-green-500 w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Tack för din förfrågan!</h3>
        <p className="text-muted-text">
          Vi hör av oss till dig så snart vi kan.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="flex flex-col gap-2">
          <input
            name="name" // Added name
            type="text"
            placeholder="Namn *"
            required
            className="bg-background border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-foreground/50 transition-colors"
          />
        </div>

        {/* Phone number Field */}
        <div className="flex flex-col gap-2">
          <input
            name="phone" // Added name
            type="tel"
            placeholder="Telefon"
            className="bg-background border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-foreground/50 transition-colors"
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <input
          name="email" // Added name
          type="email"
          placeholder="E-post *"
          required
          className="bg-background border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-foreground/50 transition-colors"
        />
      </div>

      {/* Message Field */}
      <div className="flex flex-col gap-2">
        <textarea
          name="message" // Added name
          rows="4"
          required
          placeholder="Beskriv ditt ärende... *"
          className="bg-background border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-foreground/50 transition-colors resize-none"
        ></textarea>
      </div>

      {state?.error && (
        <p className="text-red-500 text-xs italic">{state.error}</p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="mt-2 flex items-center justify-center gap-3 bg-foreground text-background py-4 rounded-full text-sm hover:opacity-90 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>{isPending ? "Skickar..." : "Skicka"}</span>
        {!isPending && <SendDiagonal width={18} height={18} />}
      </button>
    </form>
  );
}
