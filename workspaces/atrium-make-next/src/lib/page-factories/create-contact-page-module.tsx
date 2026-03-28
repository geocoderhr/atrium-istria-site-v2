import { ContactPage } from "@/components/sections/kontakt/ContactPage";
import { StructuredData } from "@/components/ui/StructuredData";
import { getContactPageContent } from "@/content/locales";
import { Locale } from "@/content/types";
import { buildWebPageJsonLd } from "@/lib/seo/build-json-ld";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export function createContactPageModule(locale: Locale) {
  const contactPageContent = getContactPageContent(locale);
  const metadata = buildPageMetadata(locale, contactPageContent.meta);

  function Page() {
    return (
      <>
        <StructuredData data={buildWebPageJsonLd(locale, contactPageContent.meta)} />
        <ContactPage content={contactPageContent} locale={locale} />
      </>
    );
  }

  return {
    metadata,
    Page
  };
}
