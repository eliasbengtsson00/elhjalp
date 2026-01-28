import { SERVICES } from "@/lib/services";
import { notFound } from "next/navigation";
import ContactForm from "@/components/forms/ContactForm"; // Assuming this is your form path
import ServiceCard from "@/components/ui/ServiceCard";
import { PhoneSolid } from "iconoir-react";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Tjänst hittades ej" };
  return {
    title: `${service.title} | Elhjälp Sverige AB`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  // Filter for 2-3 other services in the same category
  const relatedServices = SERVICES.filter(
    (s) => s.category === service.category && s.slug !== slug,
  ).slice(0, 3);

  return (
    <main className="pt-30 pb-20 max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* LEFT COLUMN: Content (8 cols) */}
        <div className="">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-text border border-border-subtle px-4 py-2 rounded-full">
            Tjänster /{" "}
            {service.category === "privat" ? "Privatperson" : "Företag"}
          </span>

          <h1 className="text-4xl mt-12 mb-6">
            {service.title}
          </h1>

          <p className="text-sm text-muted-text mb-20">
            {service.description}
          </p>

          <div className="prose prose-invert max-w-none border-t border-border-subtle pt-8 text-zinc-400">
            <div className="whitespace-pre-wrap">
              {service.content}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Contact Sidebar */}

          <div className="sticky top-32 space-y-6">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-10">
              <h2 className="text-lg mb-8 uppercase tracking-tighter">
                {service.category === "foretag"
                  ? "Offertförfrågan"
                  : `Boka ${service.title}`}
              </h2>
              <ContactForm />
            </div>

            <a
              href="tel:+46723071194"
              className="flex items-center justify-center gap-4 border-green-900/30 border bg-green-900/10 rounded-2xl p-6 text-sm uppercase tracking-widest hover:bg-green-900 hover:text-white transition duration-300"
            >
              <PhoneSolid width={20} height={20} className="text-green-500" />
              <span>Ring för snabb hjälp</span>
            </a>
          </div>
        </div>


      {/* RELATED SERVICES: Footer of the page */}
      {relatedServices.length > 0 && (
        <section className="mt-20 pt-20 border-t border-border-subtle">
          <h2 className="text-xl mb-10">
            Fler tjänster inom {service.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
