import { Leaf, Settings, Package, Truck, Handshake } from "lucide-react";

const trust = [
  { icon: Leaf, label: "Authentic Indian Jaggery" },
  { icon: Settings, label: "Modern & Hygienic Processing" },
  { icon: Package, label: "Export Quality Packaging" },
  { icon: Truck, label: "Timely Delivery" },
  { icon: Handshake, label: "Long-term Business Partnership" },
];

export function TrustBar() {
  return (
    <div className="bg-navy-deep border-t border-cream/10 py-6">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid grid-cols-2 gap-y-5 gap-x-4 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-cream/10">
          {trust.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 lg:justify-center lg:px-4">
              <Icon className="h-6 w-6 text-gold shrink-0" strokeWidth={1.5} />
              <span className="text-[11px] font-semibold tracking-[0.15em] text-cream uppercase">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <TrustBar />
      <div className="bg-navy py-6 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} 7 Seas Enterprise. All rights reserved.
      </div>
    </footer>
  );
}