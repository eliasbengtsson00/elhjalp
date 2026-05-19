"use client";
import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, PhoneSolid } from "iconoir-react";
import Image from "next/image";

export default function KontaktPage() {
  return (
    <main className="mt-24 px-6 md:px-12 py-24 md:py-28 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="flex flex-col text-left pt-4">
          <div>
            <h1 className="text-4xl font-light leading-[1.2] mb-6">
              Hur kan vi hjälpa dig?
            </h1>
            <p className="mt-8 text-muted-text text-base md:text-lg font-light leading-relaxed">
              Skicka ett meddelande via formuläret eller ring oss direkt så
              hjälper vi dig vidare.
            </p>
          </div>
          <div className="mt-20">
            <a
              href="tel:+46723071194"
              className="group flex items-center gap-4 border border-green-900 text-white px-7 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 w-fit"
            >
              <Phone width={20} height={20} strokeWidth={1} />
              <span className="text-sm font-light">Ring direkt</span>
            </a>
          </div>
        </div>

        <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-4xl p-8 md:p-12">
          <h3 className="mb-8 font-light text-muted-text text-base">
            Kontakta oss
          </h3>
          <ContactForm />
        </div>
      </div>

      <h2 className="mt-24 mb-8 text-lg md:text-xl font-light text-white leading-relaxed">
        Medarbetare
      </h2>

      <div className="bg-zinc-900/20 border border-zinc-800/50 rounded-3xl p-8 flex flex-col gap-8 max-w-md w-full">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full overflow-hidden relative shrink-0">
            <Image
              src="/profile.jpeg"
              alt="Philip Falk"
              fill
              sizes="80px"
              className="object-cover object-[50%_40%]"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-light text-zinc-500 mb-0.5">Grundare</p>
            <p className="text-xl font-light text-white">Philip Falk</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-6 group">
            <Phone className="w-5 h-5 text-zinc-500 shrink-0" strokeWidth={1} />
            <div>
              <p className="text-sm font-light text-zinc-500 mb-0.5">Telefon</p>
              <a
                href="tel:+46723071194"
                className="block text-base font-light text-white hover:text-zinc-300 transition-colors"
              >
                072 307 11 94
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <Mail className="w-5 h-5 text-zinc-500 shrink-0" strokeWidth={1} />
            <div>
              <p className="text-sm font-light text-zinc-500 mb-0.5">E-post</p>
              <a
                href="mailto:philip@elhjalp.com"
                className="block text-base font-light text-white hover:text-zinc-300 transition-colors"
              >
                philip@elhjalp.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
