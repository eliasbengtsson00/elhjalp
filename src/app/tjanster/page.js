import { SERVICES } from "@/lib/services";
import ServiceCard from "@/components/ui/ServiceCard";
import Link from "next/link";

export default function ServicesPage() {

  return (
    <section className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
      <h1 className="text-4xl font-light leading-[1.2]">Service och installationer</h1>
      <p className="mt-8 text-muted-text text-base md:text-lg font-light leading-relaxed max-w-2xl">
        Vi hjälper dig med allt från moderna laddboxar och smarta hem-lösningar
        till säkra nydragningar och felsökning i Borås med omnejd.
      </p>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <ServiceCard key={service.slug} {...service} />
        ))}
      </div>
    </section>
  );
}
