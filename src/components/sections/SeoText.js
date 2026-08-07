import { PortableText } from "@portabletext/react";

export default function SeoText({ value }) {
  if (!value) return null;

  return (
    <section className="my-24 md:my-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mx-auto max-w-4xl text-center text-text-dim font-light leading-relaxed hover:text-foreground transition-colors duration-200">
          <PortableText value={value} />
        </div>
      </div>
    </section>
  );
}
