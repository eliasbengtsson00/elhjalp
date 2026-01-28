import Image from "next/image";

export default function TrustRegistration() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center gap-8">
          
          {/* Subtle Label */}
          <div className="space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              Trygghet & Behörighet
            </h2>
            <p className="text-sm text-zinc-500 max-w-sm mx-auto leading-relaxed">
              Elhjälp Sverige AB är registrerat hos Elsäkerhetsverket för din säkerhet.
            </p>
          </div>

          {/* The Badge Card */}
          <div className="relative group">
            {/* Soft background glow to bridge the dark theme */}
            <div className="absolute -inset-6 bg-white/5 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-white px-10 py-6 rounded-2xl shadow-xl border border-white/10 transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/kollaelforetaget.png"
                alt="Kolla elföretaget"
                width={200}
                height={36}
                className="h-auto w-auto object-contain"
              />
            </div>
          </div>

          {/* Minimalist Link */}
          <a 
            href="https://www.elsakerhetsverket.se/kollaelforetaget/foretagsregister/?foretag=11980897"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors border-b border-zinc-800 pb-1"
          >
            Kontrollera vår registrering här
          </a>
        </div>
      </div>
    </section>
  );
}