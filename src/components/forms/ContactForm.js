"use client";

import React, { useActionState, useEffect } from "react";
import { SendDiagonal, Check } from "iconoir-react";
import { sendEmail } from "@/lib/actions";
import { ArrowUpRight } from "iconoir-react";
import { sendGTMEvent } from "@next/third-parties/google";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendEmail, null);

  useEffect(() => {
    if (state?.success) {
      sendGTMEvent({
        event: "form_success",
        value: "lead_form_electrical",
        page_location: window.location.pathname,
      });
    }
  }, [state?.success]);

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
    <form action={formAction} className="flex flex-col gap-6 font-light">
      <input type="hidden" name="page_url" value={typeof window !== 'undefined' ? window.location.pathname : ''} />
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
            name="name"
            type="text"
            placeholder="Namn *"
            required
            className="bg-background border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-foreground/50 transition-colors"
          />
        </div>

        {/* Phone number Field */}
        <div className="flex flex-col gap-2">
          <input
            name="phone"
            type="tel"
            placeholder="Telefon"
            className="bg-background border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-foreground/50 transition-colors"
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="flex flex-col gap-2">
        <input
          name="email"
          type="email"
          placeholder="E-post *"
          required
          className="bg-background border border-border-subtle rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-foreground/50 transition-colors"
        />
      </div>

      {/* Message Field */}
      <div className="flex flex-col gap-2">
        <textarea
          name="message"
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
        className="group flex items-center justify-center gap-4 border border-white bg-white text-zinc-900 px-7 py-4 rounded-full transition-all duration-200 ease-in-out hover:scale-105 active:scale-95"
      >
        <span>{isPending ? "Skickar..." : "Skicka förfrågan"}</span>
        {!isPending && <ArrowUpRight strokeWidth={1.5} className="w-5 h-5 group-hover:rotate-45 transition-all duration-200" />}
      </button>
    </form>
  );
}
