import type { Metadata } from "next";

import { SeoFields } from "@/content/schema";
import { siteConfig } from "@/content/site-config";

export function buildPageMetadata(seo: SeoFields, locale: string): Metadata {
  const canonicalPath = `/${locale}${seo.path}`;
  const absoluteUrl = `${siteConfig.siteUrl}${canonicalPath}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: canonicalPath
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: absoluteUrl
    }
  };
}
