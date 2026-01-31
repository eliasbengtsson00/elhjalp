import { SERVICES } from "@/lib/services";
import ServiceCard from "@/components/ui/ServiceCard";
import Link from "next/link";

export default function ForetagPage() {
  const foretagServices = SERVICES.filter((s) => s.category === "foretag");

  return (
    <main className="pt-30 pb-20 max-w-7xl mx-auto px-6 md:px-12">
      {/* 1. Professional Intro Section */}
      <section className="max-w-3xl mb-20">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-text">
          Verksamhet & Industri
        </span>
        <h1 className="text-4xl mt-6 mb-8">Elinstallationer för företag.</h1>
        <p className="text-sm md:text-base text-muted-text">
          Vi förstår att driften är hjärtat i er verksamhet. Elhjälp erbjuder
          skalbara lösningar för kontor, butiker, industrier och
          bostadsrättsföreningar. Från energieffektivisering till löpande
          underhåll och komplexa nyinstallationer – vi är er trygga partner i
          Borås och Sjuhärad.
        </p>
      </section>

      {/* 2. Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foretagServices.map((service) => (
          <ServiceCard key={service.slug} {...service} />
        ))}
      </div>

      {/* 3. The "Business Partner" Block */}
      <section className="mt-20 p-10 md:p-16 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] flex flex-col md:flex-row items-start md:items-center gap-12">
        <div className="flex-1">
          <h2 className="text-2xl mb-4 tracking-tight">
            Ramavtal & Serviceavtal
          </h2>
          <p className="text-sm md:text-base text-muted-text mb-8 max-w-xl leading-relaxed">
            Många av våra företagskunder väljer att teckna serviceavtal för att
            säkerställa snabb inställelsetid och regelbundet underhåll. Det
            minimerar risken för driftstopp och ger en förutsägbar elkostnad.
          </p>

          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white">
              Fastighetsbolag
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white">
              Bostadsrättsföreningar
            </div>
          </div>
        </div>

        <div className="w-full md:w-auto self-center md:self-auto">
          <Link
            href="/kontakt"
            className="flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-full text-xs uppercase tracking-widest hover:bg-zinc-200 transition duration-300 whitespace-nowrap"
          >
            Boka konsultation
          </Link>
        </div>
      </section>
    </main>
  );
}
