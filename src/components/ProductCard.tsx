import type { LucideIcon } from "lucide-react";

export function ProductCard({ image, title, desc, icon: Icon }: { image: string; title: string; desc: string; icon: LucideIcon }) {
  return (
    <div className="group relative rounded-lg border border-gold/30 bg-cream-deep/60 p-5 shadow-[0_2px_16px_-8px_rgba(20,30,60,0.1)] transition-all hover:shadow-[0_20px_40px_-16px_rgba(20,30,60,0.2)]">
      <div className="flex items-center gap-4">
        <img src={image} alt={title} loading="lazy" className="h-24 w-28 shrink-0 rounded-md object-cover" />
        <div className="min-w-0">
          <h3 className="font-serif text-lg font-bold text-navy-deep">{title}</h3>
          <div className="mt-1 h-[1.5px] w-8 bg-gold" />
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{desc}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-deep text-gold">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}