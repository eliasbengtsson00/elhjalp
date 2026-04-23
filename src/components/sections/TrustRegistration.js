import Image from "next/image";
import { BadgeCheck } from "iconoir-react";

export default function TrustRegistration() {
  const registryUrl = "https://www.elsakerhetsverket.se/kollaelforetaget/foretagsregister/?foretag=11980897";

  return (
    <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-between gap-10">
        
        {/* Text */}
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="mb-6 text-emerald-500/80">
            <BadgeCheck height={38} width={38} strokeWidth={1} />
          </div>

          <p className="text-muted-text text-lg md:text-xl font-light leading-relaxed max-w-md">
            Elhjälp Sverige AB är registrerat hos <span className="text-white">Elsäkerhetsverket</span> för din säkerhet.
          </p>

        </div>

        {/* Badge */}
        <div className="relative">
          <a 
            href={registryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative bg-white px-7 py-3 rounded-full transition-all duration-200 ease-in-out hover:scale-105 active:scale-95">
              <Image
                src="/kollaelforetaget.png"
                alt="Kolla elföretaget"
                width={140}
                height={26}
                className="h-auto w-auto object-contain"
                priority
              />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}