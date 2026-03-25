"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CONSENT_KEY = "atrium-consent-choice";
const gtmEnabled = Boolean(process.env.NEXT_PUBLIC_GTM_ID);

type ConsentState = "granted" | "denied" | null;

function updateConsent(choice: Exclude<ConsentState, null>) {
  window.gtag?.("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: choice === "granted" ? "granted" : "denied",
    functionality_storage: "granted",
    personalization_storage: "denied",
    security_storage: "granted"
  });

  window.dataLayer?.push({
    event: choice === "granted" ? "consent_accept" : "consent_reject"
  });
}

export function ConsentBanner() {
  const [choice, setChoice] = useState<ConsentState>(null);

  useEffect(() => {
    if (!gtmEnabled) {
      return;
    }

    const storedChoice = window.localStorage.getItem(CONSENT_KEY) as ConsentState;

    if (storedChoice === "granted" || storedChoice === "denied") {
      setChoice(storedChoice);
      updateConsent(storedChoice);
    }
  }, []);

  if (!gtmEnabled || choice) {
    return null;
  }

  function handleChoice(nextChoice: Exclude<ConsentState, null>) {
    window.localStorage.setItem(CONSENT_KEY, nextChoice);
    setChoice(nextChoice);
    updateConsent(nextChoice);
  }

  return (
    <aside className="consent-banner" aria-label="Consent banner">
      <div className="stack-md">
        <strong>Kolačići i analitika</strong>
        <p>
          Koristimo analitiku kako bismo razumjeli koje stranice i upiti donose stvarne kontakte. Možete prihvatiti ili
          odbiti analitičke kolačiće.
        </p>
      </div>
      <div className="consent-banner__actions">
        <button type="button" className="section-link section-link--accent" onClick={() => handleChoice("granted")}>
          Prihvatite analitiku
        </button>
        <button type="button" className="section-link" onClick={() => handleChoice("denied")}>
          Odbijte
        </button>
      </div>
    </aside>
  );
}
