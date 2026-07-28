import { createFileRoute } from "@tanstack/react-router";
import { PackagingPage } from "@/pages/PackagingPage";

export const Route = createFileRoute("/packaging")({
  head: () => ({
    meta: [
      { title: "Packaging Solutions — 7 Seas Enterprise" },
      { name: "description", content: "Explore export-ready packaging solutions for retail, food service and bulk buyers." },
      { property: "og:title", content: "Packaging Solutions — 7 Seas Enterprise" },
      { property: "og:description", content: "Premium packaging for jaggery export supply and international shipment." },
    ],
  }),
  component: PackagingPage,
});
