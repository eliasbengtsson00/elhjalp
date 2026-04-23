import { SERVICES } from "@/lib/services";
import { notFound } from "next/navigation";
import ServiceCard from "@/components/ui/ServiceCard";
import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight } from "iconoir-react";

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedServices = SERVICES.filter(
    (s) => s.category === service.category && s.slug !== slug,
  ).slice(0, 2);

  return (
    <main className="px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
      <h1 className="text-4xl font-light leading-[1.2]">{service.title}</h1>

      <div className="w-fit max-w-2xl mt-8">
        <p className="text-muted-text text-base md:text-lg font-light leading-relaxed max-w-2xl">
          {service.content}
        </p>
      </div>

      {/* Related Services & View All */}
      <section className="mt-32 pt-16 border-t borderb border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* The 2 Related Service Cards */}
          {relatedServices.map((s) => (
            <ServiceCard key={s.slug} {...s} />
          ))}

          <Link
            href="/tjanster"
            className="group flex flex-col items-center justify-center p-8 min-h-[300px] rounded-4xl border border-zinc-900 bg-zinc-950/20 transition-all duration-300 hover:border-zinc-800 hover:bg-zinc-900/50"
          >
            {/* The Icon Circle */}
            <div className="mb-4 flex items-center justify-center w-10 h-10 rounded-full border border-zinc-900 text-zinc-600 transition-all duration-300 group-hover:border-zinc-700 group-hover:text-zinc-400 group-hover:-rotate-45">
              <ArrowUpLeft strokeWidth={1.5} className="w-5 h-5" />
            </div>

            {/* The Label */}
            <span className="text-zinc-700 text-base font-light tracking-wide group-hover:text-zinc-500 transition-colors duration-300">
              Visa alla tjänster
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
