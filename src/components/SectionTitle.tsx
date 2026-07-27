export function SectionTitle({ eyebrow, title, subtitle, light = false }: { eyebrow?: string; title: string; subtitle?: string; light?: boolean }) {
  return (
    <div className="text-center">
      {eyebrow && (
        <div className="mb-4 flex justify-center">
          <span className="gold-diamond">{eyebrow}</span>
        </div>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold ${light ? "text-cream" : "text-navy-deep"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm md:text-base ${light ? "text-cream/70" : "text-muted-foreground"}`}>{subtitle}</p>
      )}
      <div className="mt-4 flex justify-center">
        <span className="inline-block h-2 w-2 rotate-45 bg-gold" />
      </div>
    </div>
  );
}