import type { MetadataRoute } from "next";

import { getContactPageContent, getHomePageContent, getServicePages, getWorksPageContent } from "@/content/locales";
import { getPrivacyPolicyContent } from "@/content/privacy-policy";
import { siteConfig } from "@/content/site-config";
import { supportedLocales } from "@/lib/routing/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = supportedLocales.flatMap((locale) => [
    getHomePageContent(locale).meta.path,
    getWorksPageContent(locale).meta.path,
    getContactPageContent(locale).meta.path,
    getPrivacyPolicyContent(locale).meta.path,
    ...Object.values(getServicePages(locale)).map((page) => page.meta.path)
  ]);

  return pages.map((path) => ({
    url: new URL(path, siteConfig.siteUrl).toString(),
    changeFrequency: path === "/" || path === "/hr" ? "weekly" : "monthly",
    priority: path === "/" || path === "/hr" ? 1 : 0.8
  }));
}
