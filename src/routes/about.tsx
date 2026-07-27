import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users, Target, Eye, Leaf, Settings, ClipboardCheck, ShieldCheck, Package, Search, Truck,
  Globe, Handshake, Award, Anchor, PackageOpen, FileText, ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { InfoCard } from "@/components/InfoCard";
import { ApproachCard } from "@/components/ApproachCard";
import { Footer } from "@/components/Footer";
import heroImg from "@/assets/hero-jaggery.jpg";
import worldMap from "@/assets/world-map.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About 7 Seas Enterprise — Premium Indian Jaggery Exporter" },
      { name: "description", content: "Learn about 7 Seas Enterprise, an Indian export company supplying premium jaggery to international buyers with a structured, quality-first approach." },
      { property: "og:title", content: "About 7 Seas Enterprise" },
      { property: "og:description", content: "Bridging borders, building trade. Indian jaggery for global markets." },
    ],
  }),
  component: AboutPage,
});

const approach = [
  { icon: Leaf, title: "Quality-Controlled Sourcing", desc: "Carefully selected sugarcane from trusted and ethical sources." },
  { icon: Settings, title: "Hygienic Processing", desc: "Processed in hygienic facilities using modern methods." },
  { icon: ClipboardCheck, title: "Batch Documentation", desc: "Batch-wise documentation and COA available for every shipment." },
  { icon: ShieldCheck, title: "COA Availability", desc: "Certificate of Analysis available to ensure quality transparency." },
  { icon: Package, title: "Export-Ready Packaging", desc: "Professional & secure packaging suitable for international transit." },
  { icon: Search, title: "Third-Party Inspection Support", desc: "Inspection support at every stage for complete peace of mind." },
  { icon: Truck, title: "Reliable Supply", desc: "Consistent quality, competitive pricing and on-time delivery." },
];

const globalPoints = [
  { icon: Globe, title: "Global Reach", desc: "Expanding to key markets worldwide" },
  { icon: Handshake, title: "Trusted by Partners", desc: "Building long-term business relationships" },
  { icon: Award, title: "Premium Quality", desc: "Strict quality control at every step" },
  { icon: Anchor, title: "Consistent Supply", desc: "Reliable supply with timely deliveries" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar active="about" />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep text-cream">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 pt-6 pb-14 lg:pb-20">
          <div className="text-xs text-cream/60 flex items-center gap-2">
            <Link to="/" className="hover:text-gold">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold">About Us</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center mt-6">
            <div>
              <span className="gold-diamond mb-5 inline-flex">About 7 Seas Enterprise</span>
              <h1 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-cream">
                Bringing India's <br /> Natural Goodness to <br />
                <span className="text-gold">Global Markets</span>
              </h1>
              <div className="mt-6 flex items-center gap-2">
                <span className="h-[1px] w-16 bg-gold" />
                <span className="h-2 w-2 rotate-45 bg-gold" />
                <span className="h-[1px] w-16 bg-gold" />
              </div>
              <p className="mt-6 max-w-lg text-sm md:text-base leading-relaxed text-cream/80">
                7 Seas Enterprise is an Indian export company focused on supplying premium Indian jaggery to international buyers. We work with quality-focused producers and follow a structured approach to sourcing, quality verification, packaging and export supply.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="btn-gold"><Package className="h-4 w-4" /> Explore Products</button>
                <button className="btn-outline-gold"><PackageOpen className="h-4 w-4" /> Packaging Solutions</button>
                <button className="btn-outline-gold"><FileText className="h-4 w-4" /> Request Export Quote</button>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImg}
                alt="Premium Indian jaggery — powder and cubes"
                width={1400}
                height={1200}
                className="w-full rounded-lg object-cover shadow-2xl"
              />
              <div className="absolute -top-2 right-2 md:top-6 md:right-6 flex h-24 w-24 md:h-32 md:w-32 flex-col items-center justify-center rounded-full border-2 border-gold bg-navy-deep text-center text-gold shadow-2xl">
                <Handshake className="h-6 w-6 md:h-7 md:w-7" strokeWidth={1.5} />
                <div className="mt-1 text-[9px] md:text-[10px] font-bold tracking-wider leading-tight px-2">QUALITY YOU CAN TRUST</div>
                <div className="mt-1 text-gold">★ ★ ★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE INFO CARDS */}
      <section className="bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 grid gap-6 md:grid-cols-3">
          <InfoCard
            icon={Users}
            title="WHO WE ARE"
            paragraphs={[
              "We are an Indian exporter dedicated to bringing premium quality jaggery to global markets.",
              "Our focus is on building long-term relationships with importers, distributors, wholesalers, retailers and food-service buyers through quality products, transparent communication and dependable service.",
            ]}
          />
          <InfoCard
            icon={Target}
            title="OUR MISSION"
            paragraphs={[
              "To deliver consistent-quality Indian jaggery with dependable packaging, documentation and professional export service.",
              "We aim to exceed buyer expectations through quality assurance, timely delivery and a commitment to ethical and sustainable business practices.",
            ]}
          />
          <InfoCard
            icon={Eye}
            title="OUR VISION"
            paragraphs={[
              "To build 7 Seas Enterprise into a trusted Indian food-export brand across international markets.",
              "We envision a future where our jaggery is recognized worldwide for its purity, taste, quality and the trust it creates with every partnership we build.",
            ]}
          />
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-cream-deep/60 py-14 md:py-20 border-y border-border">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
          <div className="text-center">
            <span className="gold-diamond">Our Approach</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl font-bold text-navy-deep">
              Quality at Every Step. Trust in Every Shipment.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-y-10 gap-x-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {approach.map((a) => (
              <ApproachCard key={a.title} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL DARK SECTION */}
      <section className="bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-lg bg-navy-deep p-8 md:p-12 lg:p-16 text-cream">
            <div
              className="absolute inset-0 opacity-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${worldMap})` }}
            />
            <div className="relative grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <span className="gold-diamond">From India to Global Markets</span>
                <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight">
                  Connecting Goodness <br /> Across the Globe
                </h2>
                <p className="mt-5 max-w-md text-sm md:text-base text-cream/75 leading-relaxed">
                  We supply premium Indian jaggery to importers, distributors, wholesalers, food-service companies and retail partners worldwide.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  {globalPoints.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <Icon className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold tracking-[0.12em] text-cream uppercase">{title}</div>
                        <div className="mt-1 text-xs text-cream/70 leading-relaxed">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-cream pb-16 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 text-center">
          <div className="flex justify-center items-center gap-3">
            <span className="h-[1px] w-16 bg-gold" />
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-navy-deep">From India. Built for the World.</h2>
            <span className="h-[1px] w-16 bg-gold" />
          </div>
          <p className="mt-4 text-sm text-muted-foreground tracking-wide">
            Quality <span className="text-gold">•</span> Integrity <span className="text-gold">•</span> Consistency <span className="text-gold">•</span> Partnership
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/products" className="btn-gold"><Package className="h-4 w-4" /> Explore Products</Link>
            <button className="btn-outline-navy"><ShieldCheck className="h-4 w-4" /> Quality & Compliance</button>
            <button className="btn-outline-navy"><FileText className="h-4 w-4" /> Request Export Quote</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}