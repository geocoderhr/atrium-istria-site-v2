import { PrivacyPolicyPage } from "@/components/sections/legal/PrivacyPolicyPage";
import { StructuredData } from "@/components/ui/StructuredData";
import { getPrivacyPolicyContent } from "@/content/privacy-policy";
import { Locale } from "@/content/types";
import { buildWebPageJsonLd } from "@/lib/seo/build-json-ld";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export function createPrivacyPageModule(locale: Locale) {
  const privacyPolicyContent = getPrivacyPolicyContent(locale);
  const metadata = buildPageMetadata(locale, privacyPolicyContent.meta);

  function Page() {
    return (
      <>
        <StructuredData data={buildWebPageJsonLd(locale, privacyPolicyContent.meta)} />
        <PrivacyPolicyPage locale={locale} />
      </>
    );
  }

  return {
    metadata,
    Page
  };
}
