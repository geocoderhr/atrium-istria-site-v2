import { getSiteConfig } from "@/content/site-config";
import { Locale, PageMeta } from "@/content/types";

function getWebSiteSchemaId(siteUrl: string) {
  return `${siteUrl}/#website`;
}

function getLocalBusinessSchemaId(siteUrl: string, locale: Locale) {
  return `${siteUrl}/#localbusiness-${locale}`;
}

export function buildWebSiteJsonLd(locale: Locale) {
  const siteConfig = getSiteConfig(locale);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": getWebSiteSchemaId(siteConfig.siteUrl),
    url: siteConfig.siteUrl,
    name: siteConfig.name,
    inLanguage: ["ru", "hr"]
  };
}

export function buildWebPageJsonLd(locale: Locale, meta: PageMeta) {
  const siteConfig = getSiteConfig(locale);
  const url = new URL(meta.path, siteConfig.siteUrl).toString();
  const webSiteId = getWebSiteSchemaId(siteConfig.siteUrl);
  const localBusinessId = getLocalBusinessSchemaId(siteConfig.siteUrl, locale);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: meta.title,
    description: meta.description,
    inLanguage: siteConfig.locale,
    url,
    isPartOf: {
      "@id": webSiteId
    },
    about: {
      "@id": localBusinessId
    }
  };
}

export function buildLocalBusinessJsonLd(locale: Locale) {
  const siteConfig = getSiteConfig(locale);

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": getLocalBusinessSchemaId(siteConfig.siteUrl, locale),
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.locale,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.primaryPhone,
    areaServed: {
      "@type": "AdministrativeArea",
      name: siteConfig.location
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: "HR"
    }
  };
}
