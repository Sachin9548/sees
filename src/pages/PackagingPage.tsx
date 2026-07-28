import { Link } from "@tanstack/react-router";
import { ArrowRight, PackageOpen } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PackagingSection } from "@/components/PackagingSection";

export function PackagingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar active="packaging" />

      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-wrap items-center gap-2 text-sm text-cream/70">
            <Link to="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-gold">Packaging</span>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <span className="gold-diamond">Packaging Solutions</span>
              <h1 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-5xl">
                Export-ready packaging for every market and buyer.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/80 md:text-base">
                We provide hygienic, moisture-protected and transit-ready packaging options for retail, food service and bulk buyers.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-gold">
                  <PackageOpen className="h-4 w-4" /> Request Packaging Quote
                </Link>
                <Link to="/products" className="btn-outline-gold">
                  View Products <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12">
        <PackagingSection />
      </div>

      <Footer />
    </div>
  );
}
