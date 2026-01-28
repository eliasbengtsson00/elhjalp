import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/services"; // Import centralized data

export default function ServicesGrid() {

  const homeServices = SERVICES.slice(0, 3);

  return (
    <section id="services" className="py-15 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homeServices.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}