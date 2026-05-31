import Link from "next/link";
import { ArrowUpRight } from "iconoir-react";

export default function ServiceCard({ title, description, slug }) {
  return (
    <Link 
      href={`/tjanster/${slug}`}
      className="group relative flex flex-col justify-between p-8 min-h-[300px] bg-surface/50 border border-surface-hover rounded-4xl transition-all duration-200 hover:border-border-subtle hover:bg-surface cursor-pointer"
    >
      <div>
        <h3 className="text-lg md:text-xl font-light text-foreground leading-relaxed mb-2">{title}</h3>
        <p className="text-muted-text text-base font-light">{description}</p>
      </div>

      <div className="self-end mt-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-surface-hover text-muted-text transition-all duration-200 group-hover:border-foreground group-hover:text-foreground group-hover:bg-surface-hover group-hover:rotate-45">
          <ArrowUpRight strokeWidth={1.5} className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}