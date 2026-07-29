import { Link } from "@tanstack/react-router";
import { Award, CheckCircle2, Globe, Send, Settings, ShieldCheck, Truck } from "lucide-react";
import retailPack from "@/assets/retail-packaging.png";
import bulkPack from "@/assets/bulk-packaging.jpg";

const packagingFeatures = [
  {
    icon: ShieldCheck,
    title: "MOISTURE PROTECTED PACKAGING",
    desc: "Protects product quality and freshness",
  },
  {
    icon: Award,
    title: "FOOD GRADE MATERIALS",
    desc: "Safe, hygienic and export compliant",
  },
  {
    icon: Truck,
    title: "EXPORT TRANSIT READY",
    desc: "Designed for safe international shipment",
  },
  {
    icon: Settings,
    title: "CUSTOM PACKAGING AVAILABLE",
    desc: "As per buyer requirement",
  },
];

export function PackagingSection() {
  return (
    <>
      <section className="pb-16">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep">
            PACKAGING & EXPORT SUPPLY
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            Flexible packaging solutions for international markets
          </p>
          <div className="mt-4 flex justify-center">
            <span className="inline-block h-2 w-2 rotate-45 bg-gold" />
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="text-center">
              <div className="font-serif text-lg font-bold text-navy-deep tracking-wide">
                RETAIL PACKAGING
              </div>
              <div className="text-[11px] text-gold mt-1">
                Resealable • High Barrier • Export Ready
              </div>
            </div>
            <img
              src={retailPack}
              alt="Retail packaging"
              loading="lazy"
              className="mt-4 w-full h-56 object-cover rounded-md"
            />
            <div className="mt-3 flex justify-center gap-3 text-[11px] font-semibold">
              <span className="rounded border border-gold px-3 py-1 text-navy-deep">500 g</span>
              <span className="rounded border border-gold px-3 py-1 text-navy-deep">1 kg</span>
            </div>
            <ul className="mt-4 space-y-2">
              {[
                "Attractive retail-ready packaging",
                "Custom labeling available on request",
                "Shelf stable and easy to store",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-5">
            <div className="text-center">
              <div className="font-serif text-lg font-bold text-navy-deep tracking-wide">
                BULK / FOOD SERVICE PACKAGING
              </div>
              <div className="text-[11px] text-gold mt-1">
                Strong & Safe • For Commercial Use
              </div>
            </div>
            <img
              src={bulkPack}
              alt="Bulk packaging"
              loading="lazy"
              className="mt-4 w-full h-56 object-cover rounded-md"
            />
            <div className="mt-3 flex justify-center gap-3 text-[11px] font-semibold">
              <span className="rounded border border-gold px-3 py-1 text-navy-deep">5 kg</span>
              <span className="rounded border border-gold px-3 py-1 text-navy-deep">10 kg</span>
            </div>
            <ul className="mt-4 space-y-2">
              {[
                "Food grade packaging materials",
                "Moisture protected for safe transportation",
                "Available in 5 kg & 10 kg packs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 space-y-5">
            {packagingFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold tracking-[0.08em] text-navy-deep uppercase">
                    {title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-0">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
          <div className="rounded-lg bg-navy-deep text-cream p-6 md:p-8">
            <div className="grid gap-16 lg:grid-cols-[auto_1fr_auto] items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
                  <Globe className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div className="lg:max-w-[500px]">
                  <h3 className="font-serif text-lg md:text-xl font-bold text-gold">
                    LOOKING FOR A RELIABLE INDIAN JAGGERY SUPPLIER?
                  </h3>
                  <p className="text-xs md:text-sm text-cream/75 leading-relaxed">
                    Tell us your country, required quantity, packaging preference and destination port. Our export team will prepare a suitable commercial proposal for your business.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-gold">
                  <Send className="h-4 w-4" /> Request Export Quote
                </Link>
                <a
                  href="https://wa.me/919371002996"
                  className="btn-outline-gold"
                  style={{ borderColor: "#25D366", color: "#25D366" }}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.49 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.32-1.66a11.87 11.87 0 005.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.42z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
