import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/services";
import Link from "next/link";

export default function ServicesGrid() {
  const homeServices = SERVICES.slice(0, 3);

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Grid - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homeServices.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>

        {/* View all */}
        <div className="mt-16 flex justify-center">
          <Link 
            href="/tjanster" 
            className="text-zinc-500 text-base font-light hover:text-white transition-all duration-200"
          >
              Visa alla tjänster
          </Link>
        </div>
      </div>
    </section>
  );
}