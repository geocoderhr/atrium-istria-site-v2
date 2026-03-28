import type { Metadata } from "next";

import { getSiteConfig } from "@/content/site-config";
import { Locale, PageMeta } from "@/content/types";
import { getLocalizedPath, stripLocalePrefix } from "@/lib/routing/locales";
import { DEFAULT_SOCIAL_IMAGE_PATH } from "@/lib/seo/site-foundation";

export function buildPageMetadata(locale: Locale, meta: PageMeta): Metadata {
  const siteConfig = getSiteConfig(locale);
  const url = new URL(meta.path, siteConfig.siteUrl).toString();
  const sharedPath = stripLocalePrefix(meta.path);
  const ruPath = getLocalizedPath(sharedPath, "ru");
  const titleSuffix = ` | ${siteConfig.name}`;
  const resolvedTitle = meta.title.endsWith(titleSuffix) ? meta.title : `${meta.title}${titleSuffix}`;

  return {
    title: resolvedTitle,
    description: meta.description,
    alternates: {
      canonical: meta.path,
      languages: {
        ru: ruPath,
        hr: getLocalizedPath(sharedPath, "hr"),
        "x-default": ruPath
      }
    },
    openGraph: {
      title: resolvedTitle,
      description: meta.description,
      url,
      siteName: siteConfig.name,
      locale: locale === "ru" ? "ru_RU" : "hr_HR",
      type: "website",
      images: [DEFAULT_SOCIAL_IMAGE_PATH]
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: meta.description,
      images: [DEFAULT_SOCIAL_IMAGE_PATH]
    }
  };
}
