import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/product",
    "/solutions",
    "/ai",
    "/security",
    "/pricing",
    "/book-a-demo",
    "/contact",
    "/privacy",
    "/terms",
    "/data-processing",
  ];
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/book-a-demo" || path === "/pricing" ? 0.9 : 0.7,
  }));
}
