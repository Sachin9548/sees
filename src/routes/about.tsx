import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/AboutPage";

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
