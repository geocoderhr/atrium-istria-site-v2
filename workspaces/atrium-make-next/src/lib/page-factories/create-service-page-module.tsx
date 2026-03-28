import { ServicePageTemplate } from "@/components/sections/service/ServicePageTemplate";
import { StructuredData } from "@/components/ui/StructuredData";
import { getServicePageContent } from "@/content/locales";
import { Locale, ServiceSlug } from "@/content/types";
import { buildWebPageJsonLd } from "@/lib/seo/build-json-ld";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export function createServicePageModule(locale: Locale, slug: ServiceSlug) {
  const content = getServicePageContent(locale, slug);
  const metadata = buildPageMetadata(locale, content.meta);

  function Page() {
    return (
      <>
        <StructuredData data={buildWebPageJsonLd(locale, content.meta)} />
        <ServicePageTemplate content={content} locale={locale} />
      </>
    );
  }

  return {
    metadata,
    Page
  };
}
