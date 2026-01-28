import Link from "next/link";
import { ArrowUpRight } from "iconoir-react";

export default function ServiceCard({ title, description, slug }) {
  return (
    <Link 
      href={`/tjanster/${slug}`}
      className="group relative flex flex-col justify-between p-8 min-h-[300px] bg-zinc-900/50 border border-zinc-800 rounded-2xl transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 cursor-pointer"
    >
      <div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-zinc-400 leading-relaxed">{description}</p>
      </div>

      <div className="self-end mt-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 group-hover:border-white group-hover:text-white group-hover:bg-zinc-800 group-hover:rotate-45">
          <ArrowUpRight strokeWidth={1.5} className="w-5 h-5" />
        </div>
      </div>
    </Link>
  );
}