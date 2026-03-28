"use client";

import Link from "next/link";
import { useMemo, useState, useSyncExternalStore } from "react";

import {
  applyConsentModeUpdate,
  ConsentState,
  createConsentState,
  emitConsentEvent,
  persistConsentState
} from "@/lib/analytics/consent";
import { Locale } from "@/content/types";
import { CONSENT_STORAGE_KEY, CONSENT_STORAGE_VERSION } from "@/lib/analytics/constants";

type ConsentBannerProps = {
  locale: Locale;
};

type ConsentContent = {
  title: string;
  description: string;
  privacyLabel: string;
  acceptLabel: string;
  rejectLabel: string;
  preferencesLabel: string;
  saveLabel: string;
  necessaryLabel: string;
  analyticsLabel: string;
  analyticsHint: string;
  alwaysOnLabel: string;
  onLabel: string;
};

const CONSENT_CONTENT: Record<Locale, ConsentContent> = {
  ru: {
    title: "Настройки конфиденциальности",
    description:
      "Мы используем только необходимые технологии и, при вашем согласии, аналитические сигналы для улучшения сайта.",
    privacyLabel: "Политика конфиденциальности",
    acceptLabel: "Принять",
    rejectLabel: "Отклонить",
    preferencesLabel: "Настроить",
    saveLabel: "Сохранить настройки",
    necessaryLabel: "Необходимые",
    analyticsLabel: "Аналитика",
    analyticsHint: "Помогает понимать, какие страницы и действия действительно полезны пользователям.",
    alwaysOnLabel: "Всегда активно",
    onLabel: "Вкл"
  },
  hr: {
    title: "Postavke privatnosti",
    description:
      "Koristimo samo nužne tehnologije i, uz vašu suglasnost, analitičke signale za poboljšanje stranice.",
    privacyLabel: "Politika privatnosti",
    acceptLabel: "Prihvati",
    rejectLabel: "Odbij",
    preferencesLabel: "Postavke",
    saveLabel: "Spremi postavke",
    necessaryLabel: "Nužno",
    analyticsLabel: "Analitika",
    analyticsHint: "Pomaže razumjeti koje su stranice i radnje korisnicima stvarno korisne.",
    alwaysOnLabel: "Uvijek aktivno",
    onLabel: "Uklj"
  }
};

function getPrivacyPath(locale: Locale) {
  return locale === "hr" ? "/hr/privacy-policy" : "/privacy-policy";
}

function subscribeToConsentStorage(onChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_STORAGE_KEY) {
      onChange();
    }
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener("storage", handleStorage);
  };
}

function readConsentStorageRaw() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(CONSENT_STORAGE_KEY);
}

function parseConsentState(raw: string | null): ConsentState | null {
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as ConsentState;

    if (
      parsed &&
      typeof parsed === "object" &&
      parsed.version === CONSENT_STORAGE_VERSION &&
      (parsed.status === "accepted" || parsed.status === "rejected" || parsed.status === "custom") &&
      typeof parsed.analytics === "boolean" &&
      typeof parsed.updatedAt === "string"
    ) {
      return parsed;
    }
  } catch {
    return null;
  }

  return null;
}

function subscribeToHydration() {
  return () => {};
}

export function ConsentBanner({ locale }: ConsentBannerProps) {
  const content = useMemo(() => CONSENT_CONTENT[locale], [locale]);
  const isHydrated = useSyncExternalStore(subscribeToHydration, () => true, () => false);
  const storedRaw = useSyncExternalStore(subscribeToConsentStorage, readConsentStorageRaw, () => null);
  const storedDecision = useMemo(() => parseConsentState(storedRaw), [storedRaw]);
  const [localDecision, setLocalDecision] = useState<ConsentState | null>(null);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [analyticsSelection, setAnalyticsSelection] = useState<boolean | null>(null);
  const decision = localDecision ?? storedDecision;
  const baseAnalyticsSelection = decision?.analytics ?? false;
  const analyticsEnabled = analyticsSelection ?? baseAnalyticsSelection;

  function commitConsentState(state: ConsentState) {
    persistConsentState(state);
    applyConsentModeUpdate(state);
    emitConsentEvent(state);

    setLocalDecision(state);
    setAnalyticsSelection(state.analytics);
    setIsPreferencesOpen(false);
  }

  function handleAccept() {
    commitConsentState(createConsentState("accepted", true));
  }

  function handleReject() {
    commitConsentState(createConsentState("rejected", false));
  }

  function handleSavePreferences() {
    commitConsentState(createConsentState("custom", analyticsEnabled));
  }

  if (!isHydrated || decision) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] px-3 pb-3 pt-2 sm:px-4 sm:pb-4">
      <div className="mx-auto w-full max-w-5xl rounded-2xl border border-border bg-white/96 shadow-[0_20px_50px_rgba(19,31,45,0.22)] backdrop-blur-sm">
        <div className="px-4 py-4 sm:px-5 sm:py-5">
          <h2 className="text-base font-medium text-charcoal">{content.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-light">{content.description}</p>
          <div className="mt-3">
            <Link
              href={getPrivacyPath(locale)}
              className="text-sm font-medium text-charcoal underline decoration-warm-orange/50 underline-offset-4 transition-colors hover:text-warm-orange"
            >
              {content.privacyLabel}
            </Link>
          </div>

          {isPreferencesOpen ? (
            <div className="mt-4 rounded-xl border border-border bg-secondary/35 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-charcoal">{content.necessaryLabel}</p>
                  <p className="mt-1 text-xs text-charcoal-light">{content.alwaysOnLabel}</p>
                </div>
                <span className="rounded-full bg-charcoal px-2.5 py-1 text-xs font-medium text-white">{content.onLabel}</span>
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-charcoal">{content.analyticsLabel}</p>
                  <p className="mt-1 text-xs leading-relaxed text-charcoal-light">{content.analyticsHint}</p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={analyticsEnabled}
                  onClick={() => setAnalyticsSelection((value) => !(value ?? baseAnalyticsSelection))}
                  className={`relative inline-flex h-7 w-12 flex-shrink-0 rounded-full transition-colors ${
                    analyticsEnabled ? "bg-warm-orange" : "bg-muted"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                      analyticsEnabled ? "translate-x-[22px]" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>
          ) : null}

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleAccept}
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-warm-orange px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-warm-orange-dark"
            >
              {content.acceptLabel}
            </button>

            <button
              type="button"
              onClick={handleReject}
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-warm-orange hover:text-warm-orange"
            >
              {content.rejectLabel}
            </button>

            {isPreferencesOpen ? (
              <button
                type="button"
                onClick={handleSavePreferences}
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-warm-orange hover:text-warm-orange"
              >
                {content.saveLabel}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsPreferencesOpen(true)}
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-warm-orange hover:text-warm-orange"
              >
                {content.preferencesLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
