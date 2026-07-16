import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://www.theharivilashotels.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/rooms/deluxe", changefreq: "monthly", priority: "0.9" },
          { path: "/rooms/premium", changefreq: "monthly", priority: "0.9" },
          { path: "/rooms/suite", changefreq: "monthly", priority: "0.9" },
          { path: "/rooms/standard", changefreq: "monthly", priority: "0.9" },
          { path: "/blog/things-to-do-sri-ganganagar", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/heritage-and-amenities", changefreq: "monthly", priority: "0.7" },
          { path: "/blog/best-time-to-visit", changefreq: "monthly", priority: "0.7" },
        ];
        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
