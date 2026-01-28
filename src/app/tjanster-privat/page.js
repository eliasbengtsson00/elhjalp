import { SERVICES } from "@/lib/services";
import ServiceCard from "@/components/ui/ServiceCard";

export default function PrivatPage() {
  const privatServices = SERVICES.filter(s => s.category === "privat");

  return (
    <main className="pt-30 pb-20 max-w-7xl mx-auto px-6 md:px-12">
      {/* 1. Intro Section */}
      <section className="max-w-3xl mb-20">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-text">
          Hem & Villa
        </span>
        <h1 className="text-4xl mt-6 mb-8">
          Elinstallationer för ditt hem.
        </h1>
        <p className="text-sm md:text-base text-muted-text">
          Från moderna laddboxar och smarta hem-lösningar till säkra nydragningar 
          och felsökning. Vi hjälper dig att skapa ett tryggt och energieffektivt 
          hem i Borås med omnejd. Alla våra arbeten utförs av auktoriserade 
          elektriker med fokus på kvalitet och estetik.
        </p>
      </section>

      {/* 2. Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {privatServices.map((service, index) => (
          <ServiceCard key={service.slug} {...service} />
        ))}
      </div>

      {/* 3. Small Trust Footer for the category */}
      <div className="mt-20 flex flex-col justify-between items-center gap-6">
        <p className="text-xs uppercase tracking-widest text-muted-text">
          Hittar du inte det du söker?
        </p>
        <a 
          href="tel:+46723071194" 
          className="text-sm font-semibold hover:text-zinc-400 transition-colors"
        >
          Ring oss på 0723-07 11 94 →
        </a>
      </div>
    </main>
  );
}