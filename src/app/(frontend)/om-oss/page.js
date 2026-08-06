import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";

export default async function AboutPage() {
  const aboutPage = await client.fetch(ABOUT_PAGE_QUERY);
  const { heading, body } = aboutPage ?? {};

  return (
    <main className="mt-24 px-6 md:px-12 py-24 md:py-32 max-w-7xl mx-auto">
      {/* 1. Header Section */}
      <section className="">
        <h1 className="text-4xl font-light leading-[1.2]">{heading}</h1>
        <div className="mt-8 text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-2xl space-y-4">
          <PortableText value={body ?? []} />
        </div>
      </section>
    </main>
  );
}
