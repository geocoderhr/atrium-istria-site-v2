import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site-config";
import { locales } from "@/lib/routing/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteConfig.siteUrl}/${locale}`,
    lastModified: new Date()
  }));
}
