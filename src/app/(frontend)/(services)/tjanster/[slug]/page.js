import { notFound } from "next/navigation";
import ServiceCard from "@/components/ui/ServiceCard";
import Link from "next/link";
import { ArrowUpLeft } from "iconoir-react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import {
  SERVICES_INDEX_QUERY,
  SERVICE_BY_SLUG_QUERY,
  RELATED_SERVICES_QUERY,
} from "@/sanity/lib/queries";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await client.fetch(SERVICE_BY_SLUG_QUERY, { slug });

  if (!service) return { title: "Tjänst hittades inte" };

  return {
    title: `${service.title} | Elhjälp`,
    description: service.seo?.metaDescription ?? service.description,
  };
}

export async function generateStaticParams() {
  const services = (await client.fetch(SERVICES_INDEX_QUERY)) ?? [];
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = await client.fetch(SERVICE_BY_SLUG_QUERY, { slug });
  if (!service) notFound();

  const relatedServices =
    (await client.fetch(RELATED_SERVICES_QUERY, {
      slug,
      category: service.category,
    })) ?? [];

  return (
    <main className="mt-24 px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
      <h1 className="text-4xl font-light leading-[1.2]">{service.title}</h1>

      <div className="w-fit max-w-2xl mt-8">
        <div className="text-muted-text text-base md:text-lg font-light leading-relaxed max-w-2xl space-y-4">
          <PortableText value={service.content ?? []} />
        </div>
      </div>

      <div className="mt-24">
        <p className="text-muted-text text-base md:text-lg font-light leading-relaxed">
          Hittar du inte det du behöver hjälp med? Kontakta oss så hittar vi en
          lösning!
        </p>
      </div>

      <section className="mt-24 md:mt-32 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((s) => (
            <ServiceCard key={s.slug} {...s} />
          ))}

          <Link
            href="/tjanster"
            className="group flex flex-col items-center justify-center p-8 min-h-[300px] rounded-4xl border border-surface-hover bg-surface/50 transition-all duration-300 hover:border-border-subtle hover:bg-surface"
          >
            <div className="mb-4 flex items-center justify-center w-10 h-10 rounded-full border border-surface-hover text-muted-text transition-all duration-300 group-hover:border-foreground group-hover:text-foreground group-hover:-rotate-45">
              <ArrowUpLeft strokeWidth={1.5} className="w-5 h-5" />
            </div>

            <span className="text-muted-text text-base font-light tracking-wide group-hover:text-foreground transition-colors duration-300">
              Visa alla tjänster
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
