import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="px-6 md:px-12 max-w-5xl mx-auto pt-30 pb-32">
      {/* 1. Subtle Header */}
      <section className="mb-24">
        <h1 className="text-4xl font-light mb-6">
          Om Elhjälp.
        </h1>
        <p className="text-sm md:text-base text-muted-text max-w-xl">
          Vi bygger vår verksamhet på transparens och säkerhet. För oss är det en 
          självklarhet att du som kund har full insyn i vår behörighet och våra 
          registreringar.
        </p>
      </section>

      {/* 2. Focused Registration Section */}
      <section className="border-t border-zinc-800 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Legal Text - Compliant Phrasing */}
          <div className="flex flex-col gap-6">
            <h2 className="text-sm uppercase tracking-[0.2em] text-muted-text">
              Elsäkerhetsverket
            </h2>
            <div className="space-y-4 text-sm text-zinc-500 leading-relaxed">
              <p>
                Vårt företag är <strong className="text-zinc-300 font-medium">registrerat hos Elsäkerhetsverket</strong>. 
                Detta bekräftar att vi uppfyller lagstadgade krav på kompetens 
                och följer ett fastställt egenkontrollprogram.
              </p>
              <p>
                Vi finns med i registret <strong className="text-zinc-300 font-medium">”Kolla elföretaget”</strong>. 
                Vi uppmuntrar alla att kontrollera våra behörigheter direkt via 
                myndighetens hemsida för en trygg affär.
              </p>
            </div>
          </div>

          {/* Minimalist Badge Display */}
          <div className="flex flex-col items-start md:items-center gap-6">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-zinc-200">
              <Image
                src="/kollaelforetaget.png"
                alt="Kolla elföretaget"
                width={180}
                height={32}
                className="h-auto w-auto object-contain"
              />
            </div>
            <a 
              href="https://www.elsakerhetsverket.se/kollaelforetaget/foretagsregister/?foretag=11980897"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors duration-300"
            >
              Kontrollera oss i registret →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}