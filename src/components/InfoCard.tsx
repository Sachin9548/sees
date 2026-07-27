import type { LucideIcon } from "lucide-react";

export function InfoCard({ icon: Icon, title, paragraphs }: { icon: LucideIcon; title: string; paragraphs: string[] }) {
  return (
    <div className="rounded-md border border-border bg-card p-6 shadow-[0_2px_20px_-8px_rgba(20,30,60,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(20,30,60,0.18)]">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-deep text-gold">
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>
        <div className="min-w-0">
          <h3 className="font-serif text-xl font-bold text-navy-deep">{title}</h3>
          <div className="mt-2 h-[2px] w-10 bg-gold" />
        </div>
      </div>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}