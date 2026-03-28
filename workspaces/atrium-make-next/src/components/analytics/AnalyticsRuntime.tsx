"use client";

import { Locale } from "@/content/types";
import { AnalyticsInitializer } from "@/components/analytics/AnalyticsInitializer";
import { ContactLinkTracker } from "@/components/analytics/ContactLinkTracker";
import { ConsentBanner } from "@/components/analytics/ConsentBanner";
import { PageTracker } from "@/components/analytics/PageTracker";

type AnalyticsRuntimeProps = {
  locale: Locale;
  showConsentUi: boolean;
  gtmId: string | null;
  ga4MeasurementId: string | null;
};

export function AnalyticsRuntime({ locale, showConsentUi, gtmId, ga4MeasurementId }: AnalyticsRuntimeProps) {
  return (
    <>
      <AnalyticsInitializer gtmId={gtmId} ga4MeasurementId={ga4MeasurementId} />
      <PageTracker />
      <ContactLinkTracker />
      {showConsentUi ? <ConsentBanner locale={locale} /> : null}
    </>
  );
}
