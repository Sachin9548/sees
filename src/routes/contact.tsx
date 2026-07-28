import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — 7 Seas Enterprise" },
      { name: "description", content: "Request a quote or send your inquiry to 7 Seas Enterprise for premium Indian jaggery export support." },
      { property: "og:title", content: "Contact Us — 7 Seas Enterprise" },
      { property: "og:description", content: "Contact 7 Seas Enterprise for export quotes, product samples and packaging enquiries." },
    ],
  }),
  component: ContactPage,
});
