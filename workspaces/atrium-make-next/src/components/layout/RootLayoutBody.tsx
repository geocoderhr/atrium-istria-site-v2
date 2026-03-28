import { AssistantProvider } from "@/components/assistant/AssistantProvider";
import { AnalyticsRuntime } from "@/components/analytics/AnalyticsRuntime";
import { LeadFormProvider } from "@/components/lead-form/LeadFormProvider";
import { DocumentLanguage } from "@/components/layout/DocumentLanguage";
import { LanguageSwitchRestore } from "@/components/layout/LanguageSwitchRestore";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StructuredData } from "@/components/ui/StructuredData";
import { Locale } from "@/content/types";
import { buildLocalBusinessJsonLd, buildWebSiteJsonLd } from "@/lib/seo/build-json-ld";

type RootLayoutBodyProps = Readonly<{
  children: React.ReactNode;
  locale: Locale;
}>;

export function RootLayoutBody({ children, locale }: RootLayoutBodyProps) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim() || null;
  const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID?.trim() || null;

  return (
    <body>
      <AssistantProvider>
        <LeadFormProvider>
          <DocumentLanguage />
          <LanguageSwitchRestore />
          <AnalyticsRuntime
            locale={locale}
            showConsentUi={Boolean(gtmId)}
            gtmId={gtmId}
            ga4MeasurementId={ga4MeasurementId}
          />
          <StructuredData data={buildWebSiteJsonLd(locale)} />
          <StructuredData data={buildLocalBusinessJsonLd(locale)} />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </LeadFormProvider>
      </AssistantProvider>
    </body>
  );
}
