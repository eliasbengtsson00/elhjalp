"use client";
import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin } from "iconoir-react";
import Image from "next/image";

export default function KontaktPage() {
  return (
    <main className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center gap-16 md:gap-32">
        {/* Vänster: Kontaktinformation */}
        <div className="flex flex-col">
          {/* Rubrik & Ingress */}
          <div>
            <h1 className="text-4xl font-light leading-[1.2] mb-6">
              Hur kan vi hjälpa dig?
            </h1>
            <p className="mt-8 text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Skicka ett meddelande via formuläret eller ring oss direkt så hjälper vi
              dig vidare.
            </p>
          </div>

          <div className="mt-16 flex flex-col gap-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full overflow-hidden relative border border-zinc-800">
                <Image
                  src="/placeholder.jpg"
                  alt="Philip Falk"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-light text-zinc-500 mb-0.5">
                  Grundare
                </p>
                <p className="text-xl font-light text-white">Philip Falk</p>
              </div>
            </div>

            {/* Kontaktuppgifter med ServiceCard-ikoner */}
            <div className="space-y-2">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 flex items-center justify-center text-zinc-500">
                  <Phone className="w-6 h-6" strokeWidth={1} />
                </div>
                <div>
                  <p className="text-sm font-light text-zinc-500 mb-0.5">
                    Telefon
                  </p>
                  <a
                    href="tel:+46723071194"
                    className="block text-lg font-light text-white hover:text-zinc-300 transition-colors"
                  >
                    0723-07 11 94
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 flex items-center justify-center text-zinc-500">
                  <Mail className="w-6 h-6" strokeWidth={1} />
                </div>
                <div>
                  <p className="text-sm font-light text-zinc-500 mb-0.5">
                    E-post
                  </p>
                  <a
                    href="mailto:philip@elhjalp.com"
                    className="block text-lg font-light text-white hover:text-zinc-300 transition-colors"
                  >
                    philip@elhjalp.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-4xl p-8 md:p-12 h-fit">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
