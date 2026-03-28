import type { Metadata } from "next";

import { siteConfig } from "@/content/site-config";
import { DEFAULT_SOCIAL_IMAGE_PATH, GOOGLE_VERIFICATION_TOKEN } from "@/lib/seo/site-foundation";

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
      hr: "/hr",
      "x-default": "/"
    }
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    images: [DEFAULT_SOCIAL_IMAGE_PATH]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [DEFAULT_SOCIAL_IMAGE_PATH]
  },
  verification: {
    google: GOOGLE_VERIFICATION_TOKEN
  }
};
