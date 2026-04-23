"use client";
import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin } from "iconoir-react";

export default function KontaktPage() {
  return (
    <main className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Contact Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-light leading-[1.2]">
            Hur kan vi hjälpa dig?
          </h1>

          <div className="space-y-8 mt-12">
            <div className="flex items-center gap-6">
              <Phone className="text-zinc-500 w-6 h-6" />
              <div>
                <p className="text-base font-light text-zinc-600 mb-1">
                  Telefon
                </p>
                <a href="tel:+46723071194" className="inline-block text-lg font-light hover:scale-105 active:scale-95 transition-all duration-200">
                  0723-07 11 94
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Mail className="text-zinc-500 w-6 h-6" />
              <div>
                <p className="text-base font-light text-zinc-600 mb-1">
                  E-post
                </p>
                <a
                  href="mailto:philip@elhjalp.com"
                  className="inline-block text-lg font-light hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  philip@elhjalp.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <MapPin className="text-zinc-500 w-6 h-6" />
              <div>
                <p className="text-base font-light text-zinc-600 mb-1">
                  Område
                </p>
                <p className="text-lg font-light">
                  Borås & Sjuhärad med omnejd
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-4xl p-8 md:p-12">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
