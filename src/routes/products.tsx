import { createFileRoute } from "@tanstack/react-router";
import { ProductsPage } from "@/pages/ProductsPage";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Specifications — 7 Seas Enterprise Jaggery" },
      { name: "description", content: "Premium Indian jaggery powder, cubes and blocks. Full technical specifications, packaging options and export-grade supply for global markets." },
      { property: "og:title", content: "Products & Specifications — 7 Seas Enterprise" },
      { property: "og:description", content: "Premium Indian Jaggery — Traditional Goodness, Export Quality." },
    ],
  }),
  component: ProductsPage,
});
