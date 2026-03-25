import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site-config";
import { locales } from "@/lib/routing/locales";

const routes = [
  "",
  "/adaptacije-kuca-i-stanova",
  "/adaptacije-kupaonica",
  "/fasade",
  "/rekonstrukcije-kuca",
  "/hidroizolacija",
  "/radovi",
  "/kontakt"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteConfig.siteUrl}/${locale}${route}`,
      lastModified: new Date()
    }))
  );
}
