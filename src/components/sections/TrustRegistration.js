import Image from "next/image";
import { BadgeCheck } from "iconoir-react";

export default function TrustRegistration() {
  const registryUrl = "https://www.elsakerhetsverket.se/kollaelforetaget/foretagsregister/?foretag=11980897";

  return (
    <section className="py-16 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative group">
          {/* Subtle background glow */}
          <div className="absolute -inset-px bg-gradient-to-r from-zinc-800 via-zinc-400/10 to-zinc-800 rounded-2xl blur-sm opacity-20" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12 bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
            
            {/* Background Radial Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Left Side: Icon, Content & Action */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
              
              {/* Iconoir Badge Check Icon */}
              <div className="mb-6 text-emerald-500/90">
                <BadgeCheck height={36} width={36} strokeWidth={1.5} />
              </div>

              <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed max-w-md mb-8">
                Elhjälp Sverige AB är registrerat hos <span className="text-white font-normal">Elsäkerhetsverket</span> för din säkerhet.
              </p>
              
              <a 
                href={registryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium tracking-widest transition-all border border-zinc-700 hover:border-zinc-500 uppercase"
              >
                Kontrollera behörighet
                <svg className="w-3.5 h-3.5 opacity-60 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Right Side: The Clickable Badge */}
            <div className="relative z-10">
              <a 
                href={registryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group/badge"
                aria-hidden="true"
                tabIndex={-1}
              >
                <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-white/95 p-5 rounded-xl shadow-2xl transition-all duration-700 group-hover/badge:scale-[1.05] group-hover/badge:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                  <Image
                    src="/kollaelforetaget.png"
                    alt="Kolla elföretaget"
                    width={180}
                    height={32}
                    className="h-auto w-auto object-contain"
                    priority
                  />
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}