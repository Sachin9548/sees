import type { LucideIcon } from "lucide-react";

export function ApproachCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center px-3">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-deep text-gold shadow-[0_10px_30px_-12px_rgba(20,30,60,0.35)]">
        <Icon className="h-7 w-7" strokeWidth={1.5} />
      </div>
      <h4 className="mt-4 text-[11px] font-bold tracking-[0.12em] text-navy-deep uppercase leading-snug">
        {title}
      </h4>
      <div className="my-3 h-[2px] w-8 bg-gold/60" />
      <p className="text-xs leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}