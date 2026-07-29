import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Building2, CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  productInterest: string;
  quantity: string;
  packaging: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  productInterest: "Jaggery Powder",
  quantity: "",
  packaging: "",
  message: "",
};

const submissionEndpoint = "/api/contact";

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    setIsSubmitting(true);

    try {
      const response = await fetch(submissionEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      const responseText = await response.text();
      let responseData: { ok?: boolean; message?: string; error?: string } | null = null;

      try {
        responseData = responseText ? JSON.parse(responseText) : null;
      } catch {
        responseData = null;
      }

      if (!response.ok || responseData?.ok === false) {
        throw new Error(responseData?.error || responseData?.message || "Request failed");
      }

      setStatus({
        type: "success",
        message: "Your request has been received. We will follow up shortly.",
      });
      setFormData(initialForm);
    } catch (error) {
      const message = error instanceof Error ? error.message : "The submission could not be sent right now.";
      setStatus({
        type: "error",
        message: message.includes("Failed to fetch")
          ? "The contact service is currently unavailable. Please try again in a moment or contact us directly on WhatsApp."
          : "The submission could not be sent right now. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar active="contact" />

      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div>
              <span className="gold-diamond">Contact Us</span>
              <h1 className="mt-5 font-serif text-4xl font-bold leading-tight md:text-5xl">
                Request a quote or start a conversation with our export team.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/80 md:text-base">
                Share your product interest, target market, quantity and packaging preference. 
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:hello@7seasenterprise.com" className="btn-gold">
                  <Mail className="h-4 w-4" /> Email Us
                </a>
                <a href="https://wa.me/919371002996" className="btn-outline-gold">
                  <Phone className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>


            <div className="rounded-lg border border-cream/10 bg-cream/10 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-serif text-xl font-semibold text-cream">7 Seas Enterprise</h2>
                  <p className="mt-2 text-sm text-cream/75">
                    Premium Indian jaggery for global buyers, with export support and reliable communication.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-cream/80">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gold" />
                  <span>hello@7seasenterprise.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gold" />
                  <span>+91 82378 87289</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span>41B Jai Gurudev Nagar Besa, Behind Bharat Gas Godown Manewada Road, Nagpur, Maharashtra, India 440027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-8 lg:px-12 lg:py-20">
        <div className="">
          <div className="rounded-lg border border-border bg-card p-6 shadow-[0_2px_16px_-10px_rgba(20,30,60,0.15)] md:p-8">
            <h2 className="font-serif text-2xl font-bold text-navy-deep">Request Export Quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the details below and we will get back to you with the right proposal.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-navy-deep" htmlFor="name">Full Name *</label>
                  <input id="name" name="name" required value={formData.name} onChange={handleChange} className="mt-2 w-full rounded-md border border-border bg-cream px-3 py-2 text-sm outline-none ring-0 focus:border-gold" />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy-deep" htmlFor="company">Company / Buyer Name</label>
                  <input id="company" name="company" value={formData.company} onChange={handleChange} className="mt-2 w-full rounded-md border border-border bg-cream px-3 py-2 text-sm outline-none ring-0 focus:border-gold" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-navy-deep" htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="mt-2 w-full rounded-md border border-border bg-cream px-3 py-2 text-sm outline-none ring-0 focus:border-gold" />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy-deep" htmlFor="phone">Phone / WhatsApp</label>
                  <input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-2 w-full rounded-md border border-border bg-cream px-3 py-2 text-sm outline-none ring-0 focus:border-gold" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-navy-deep" htmlFor="country">Country</label>
                  <input id="country" name="country" value={formData.country} onChange={handleChange} className="mt-2 w-full rounded-md border border-border bg-cream px-3 py-2 text-sm outline-none ring-0 focus:border-gold" />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy-deep" htmlFor="productInterest">Product Interest</label>
                  <select id="productInterest" name="productInterest" value={formData.productInterest} onChange={handleChange} className="mt-2 w-full rounded-md border border-border bg-cream px-3 py-2 text-sm outline-none ring-0 focus:border-gold">
                    <option>Jaggery Powder</option>
                    <option>Jaggery Cubes</option>
                    <option>Jaggery Blocks</option>
                    <option>Custom Packaging</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-navy-deep" htmlFor="quantity">Required Quantity</label>
                  <input id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className="mt-2 w-full rounded-md border border-border bg-cream px-3 py-2 text-sm outline-none ring-0 focus:border-gold" placeholder="e.g. 5 MT / 20 containers" />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy-deep" htmlFor="packaging">Packaging Preference</label>
                  <input id="packaging" name="packaging" value={formData.packaging} onChange={handleChange} className="mt-2 w-full rounded-md border border-border bg-cream px-3 py-2 text-sm outline-none ring-0 focus:border-gold" placeholder="e.g. 500g retail / 10kg bulk" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-navy-deep" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="mt-2 w-full rounded-md border border-border bg-cream px-3 py-2 text-sm outline-none ring-0 focus:border-gold" placeholder="Tell us about your target market, destination port, MOQs or required documentation." />
              </div>

              {status.message ? (
                <div className={`rounded-md border px-3 py-3 text-sm ${status.type === "success" ? "border-green-200 bg-green-50 text-green-700" : "border-red-200 bg-red-50 text-red-700"}`}>
                  {status.type === "success" ? <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" />{status.message}</div> : status.message}
                </div>
              ) : null}

              <button type="submit" disabled={isSubmitting} className="btn-gold inline-flex items-center gap-2 disabled:opacity-70">
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
