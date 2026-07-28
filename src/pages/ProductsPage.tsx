import {
  Boxes,
  Grid3x3,
  Package as PackageIcon,
  Droplet,
  FlaskConical,
  Hammer,
  Gem,
  Coffee,
  Award,
  Clock,
  MapPin,
  Sprout,
  Palette,
  Utensils,
  Timer,
  Warehouse,
  CheckCircle2,
  Download,
  FileText,
  Send,
  ShieldCheck,
  Truck,
  Settings,
  Globe,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { PackagingSection } from "@/components/PackagingSection";
import powderImg from "@/assets/jaggery-powder.jpg";
import cubesImg from "@/assets/jaggery-cubes.jpg";
import blocksImg from "@/assets/jaggery-blocks.jpg";
import powderDetail from "@/assets/powder-detail.jpg";

const specs = [
  { icon: PackageIcon, k: "Product", v: "Sugarcane Jaggery Powder" },
  { icon: MapPin, k: "Origin", v: "India" },
  { icon: Sprout, k: "Ingredient", v: "Sugarcane juice" },
  { icon: FlaskConical, k: "Appearance", v: "Free-flowing powder / granules" },
  { icon: Palette, k: "Colour", v: "Golden brown to brown*" },
  { icon: Utensils, k: "Taste", v: "Characteristic sweet jaggery flavour" },
  { icon: Timer, k: "Shelf Life", v: "12 months from date of packaging*" },
  {
    icon: Warehouse,
    k: "Storage",
    v: "Store in a cool, dry place away from moisture and direct sunlight.",
  },
];

const benefits = [
  { icon: Droplet, title: "100% NATURAL", desc: "Made from sugarcane juice" },
  {
    icon: FlaskConical,
    title: "NO ADDED CHEMICALS,",
    desc: "Colours or Preservatives",
  },
  {
    icon: Hammer,
    title: "TRADITIONALLY CRAFTED",
    desc: "Using traditional methods",
  },
  {
    icon: Gem,
    title: "RICH IN MINERALS",
    desc: "Iron, Calcium, Potassium & more",
  },
  { icon: Coffee, title: "CONSISTENT TASTE,", desc: "Aroma & Quality" },
  { icon: Award, title: "EXPORT QUALITY —", desc: "Global Standards" },
  {
    icon: Clock,
    title: "12 MONTHS SHELF LIFE",
    desc: "When stored in cool & dry place",
  },
];

export function ProductsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar active="products" />

      {/* Title */}
      <section className="pt-12 pb-10 md:pt-16 md:pb-14">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy-deep tracking-tight">
            PRODUCTS & SPECIFICATIONS
          </h1>
          <p className="mt-3 text-sm md:text-base text-gold font-medium">
            Premium Indian Jaggery – Traditional Goodness, Export Quality
          </p>
          <div className="mt-4 flex justify-center">
            <span className="inline-block h-2 w-2 rotate-45 bg-gold" />
          </div>
        </div>
      </section>

      {/* Top 3 product cards */}
      <section className="pb-14">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 grid gap-6 md:grid-cols-3">
          <ProductCard
            image={powderImg}
            title="JAGGERY POWDER"
            desc="Fine, convenient and ideal for retail, food service and food-processing applications."
            icon={Droplet}
          />
          <ProductCard
            image={cubesImg}
            title="JAGGERY CUBES"
            desc="Hygienic, uniform cubes. Perfect for retail, hospitality and portion use."
            icon={Boxes}
          />
          <ProductCard
            image={blocksImg}
            title="JAGGERY BLOCKS"
            desc="Traditional cane jaggery blocks. Ideal for wholesale, food processing and bulk supply."
            icon={Grid3x3}
          />
        </div>
      </section>

      {/* Detailed Powder section */}
      <section className="pb-14">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1.2fr_0.9fr] rounded-lg overflow-hidden border border-border">
            <div className="relative">
              <img
                src={powderDetail}
                alt="Jaggery powder detail"
                loading="lazy"
                className="h-full w-full object-cover min-h-[300px]"
              />
            </div>

            <div className="bg-navy-deep text-cream p-6 md:p-8">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream">
                JAGGERY POWDER
              </h3>
              <div className="mt-2 h-[2px] w-12 bg-gold" />
              <p className="mt-3 text-sm text-cream/75 leading-relaxed">
                Traditional Indian sweetness in fine powder form, made from the
                finest sugarcane.
              </p>
              <div className="mt-5 divide-y divide-cream/10">
                {specs.map(({ icon: Icon, k, v }) => (
                  <div
                    key={k}
                    className="grid grid-cols-[24px_100px_1fr] items-start gap-3 py-2.5"
                  >
                    <Icon
                      className="h-4 w-4 text-gold mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div className="text-xs font-semibold text-gold tracking-wide">
                      {k}
                    </div>
                    <div className="text-xs text-cream/85 leading-relaxed">
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-cream-deep/70 p-6 md:p-8">
              <div className="space-y-4">
                {benefits.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-deep text-gold">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold tracking-[0.08em] text-navy-deep">
                        {title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cubes + Blocks */}
      <section className="pb-14">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 grid gap-6 md:grid-cols-2">
          {[
            {
              img: cubesImg,
              title: "JAGGERY CUBES",
              items: [
                "Uniform size and shape",
                "Easy to use and store",
                "Consistent sweetness",
                "Ideal for retail and hospitality",
              ],
            },
            {
              img: blocksImg,
              title: "JAGGERY BLOCKS",
              items: [
                "Traditional cane jaggery",
                "Ideal for bulk buyers",
                "Suitable for food processing industries",
                "Available in multiple weights",
              ],
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-border bg-card p-5 md:p-6 shadow-[0_2px_16px_-10px_rgba(20,30,60,0.15)]"
            >
              <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[160px_1fr] gap-5 items-center">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-32 sm:h-40 w-full rounded-md object-cover"
                />
                <div className="min-w-0">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-navy-deep">
                    {s.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {s.items.map((i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech doc dark CTA bar */}
      <section className="pb-16">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
          <div className="rounded-lg bg-navy-deep text-cream p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] items-center md:divide-x md:divide-cream/10">
              <div className="md:pr-6">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gold">
                  NEED COMPLETE TECHNICAL DOCUMENTATION?
                </h3>
                <p className="mt-2 text-xs md:text-sm text-cream/75 leading-relaxed">
                  COA, laboratory reports, product specifications and applicable
                  certifications are available to qualified buyers upon request.
                </p>
              </div>
              {[
                {
                  icon: Download,
                  label: "DOWNLOAD SPECIFICATION",
                  to: "/contact",
                },
                { icon: PackageIcon, label: "REQUEST SAMPLE", to: "/contact" },
                { icon: FileText, label: "GET A QUOTE", to: "/contact" },
              ].map(({ icon: Icon, label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="flex items-center justify-center md:justify-start gap-3 md:px-6 text-gold group"
                >
                  <Icon className="h-8 w-8 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm font-bold tracking-[0.12em] group-hover:underline">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packaging & Export Supply */}
      <PackagingSection />

      {/* Enquiry strip */}
      <section className="pb-0">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12">
          <div className="rounded-lg bg-navy-deep text-cream p-6 md:p-8">
            <div className="grid gap-16 lg:grid-cols-[auto_1fr_auto] items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
                  <Globe className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div className="lg:max-w-[500px] ">
                  <h3 className="font-serif text-lg md:text-xl font-bold text-gold">
                    LOOKING FOR A RELIABLE INDIAN JAGGERY SUPPLIER?
                  </h3>
                  <p className="text-xs md:text-sm text-cream/75 leading-relaxed">
                    Tell us your country, required quantity, packaging
                    preference and destination port. Our export team will
                    prepare a suitable commercial proposal for your business.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-gold">
                  <Send className="h-4 w-4" /> Request Export Quote
                </Link>
                <a
                  href="https://wa.me/918237887289"
                  className="btn-outline-gold"
                  style={{ borderColor: "#25D366", color: "#25D366" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.49 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.32-1.66a11.87 11.87 0 005.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.42z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16" />
      <Footer />
    </div>
  );
}
