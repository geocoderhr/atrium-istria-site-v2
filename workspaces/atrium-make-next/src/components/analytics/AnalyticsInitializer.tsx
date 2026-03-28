"use client";

import { useEffect } from "react";

import { readConsentState, toConsentModePayload } from "@/lib/analytics/consent";
import { ANALYTICS_DATA_LAYER_NAME } from "@/lib/analytics/constants";

type AnalyticsInitializerProps = {
  gtmId: string | null;
  ga4MeasurementId: string | null;
};

const DEFAULT_CONSENT_PAYLOAD = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  functionality_storage: "granted",
  security_storage: "granted"
} as const;

declare global {
  interface Window {
    __atriumAnalyticsInitialized?: boolean;
  }
}

function initDataLayerAndGtag() {
  if (!Array.isArray(window[ANALYTICS_DATA_LAYER_NAME])) {
    window[ANALYTICS_DATA_LAYER_NAME] = [];
  }
  const dataLayer = window[ANALYTICS_DATA_LAYER_NAME] as Array<Record<string, unknown> | unknown[]>;

  if (typeof window.gtag !== "function") {
    window.gtag = (...args: unknown[]) => {
      dataLayer.push(args);
    };
  }

  return dataLayer;
}

function ensureGtmScript(gtmId: string) {
  if (document.getElementById("atrium-gtm-script")) {
    return;
  }

  const script = document.createElement("script");
  script.id = "atrium-gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);
}

export function AnalyticsInitializer({ gtmId, ga4MeasurementId }: AnalyticsInitializerProps) {
  useEffect(() => {
    if (typeof window === "undefined" || window.__atriumAnalyticsInitialized) {
      return;
    }

    const dataLayer = initDataLayerAndGtag();
    window.gtag?.("consent", "default", DEFAULT_CONSENT_PAYLOAD);

    const restoredConsent = readConsentState();
    if (restoredConsent) {
      window.gtag?.("consent", "update", toConsentModePayload(restoredConsent));
    }

    if (ga4MeasurementId) {
      dataLayer.push({
        event: "atrium_measurement_context",
        ga4_measurement_id: ga4MeasurementId
      });
    }

    if (gtmId) {
      ensureGtmScript(gtmId);
    }

    window.__atriumAnalyticsInitialized = true;
  }, [ga4MeasurementId, gtmId]);

  return null;
}
