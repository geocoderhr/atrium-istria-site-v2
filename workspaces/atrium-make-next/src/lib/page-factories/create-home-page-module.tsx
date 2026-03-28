import { HomePage } from "@/components/sections/home/HomePage";
import { StructuredData } from "@/components/ui/StructuredData";
import { getHomePageContent } from "@/content/locales";
import { Locale } from "@/content/types";
import { buildWebPageJsonLd } from "@/lib/seo/build-json-ld";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export function createHomePageModule(locale: Locale) {
  const homePageContent = getHomePageContent(locale);
  const metadata = buildPageMetadata(locale, homePageContent.meta);

  function Page() {
    return (
      <>
        <StructuredData data={buildWebPageJsonLd(locale, homePageContent.meta)} />
        <HomePage content={homePageContent} locale={locale} />
      </>
    );
  }

  return {
    metadata,
    Page
  };
}
