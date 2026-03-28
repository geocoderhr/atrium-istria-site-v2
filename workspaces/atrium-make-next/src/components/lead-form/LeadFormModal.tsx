"use client";

import Link from "next/link";
import { Check, ExternalLink, ShieldCheck, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { LeadFormModalStateSeed } from "@/components/lead-form/lead-form.types";
import { ModalConsentStep } from "@/components/ui/modal/ModalConsentStep";
import { ModalShell } from "@/components/ui/modal/ModalShell";
import { LeadFormModalReturnSnapshot } from "@/components/ui/modal/modal-return";
import { useModalDismiss } from "@/components/ui/modal/useModalDismiss";
import { useModalPrivacyNavigation } from "@/components/ui/modal/useModalPrivacyNavigation";
import { getLeadFormUi, leadFormUrl } from "@/content/lead-form";
import { getPrivacyPolicyPath } from "@/content/privacy-policy";
import { Locale } from "@/content/types";
import { trackEvent } from "@/lib/analytics/events";

type LeadFormModalProps = {
  isOpen: boolean;
  locale: Locale;
  returnPath: string;
  initialState?: LeadFormModalStateSeed | null;
  onClose: () => void;
};

export function LeadFormModal({ isOpen, locale, returnPath, initialState, onClose }: LeadFormModalProps) {
  const ui = getLeadFormUi(locale);
  const privacyHref = getPrivacyPolicyPath(locale);
  const navigateToPrivacy = useModalPrivacyNavigation();
  const [isConsentChecked, setIsConsentChecked] = useState(initialState?.isConsentChecked ?? false);
  const [isFormUnlocked, setIsFormUnlocked] = useState(initialState?.isFormUnlocked ?? false);
  const hasTrackedIframeOpenRef = useRef(false);

  useModalDismiss({ isOpen, onClose });

  useEffect(() => {
    if (!isFormUnlocked) {
      hasTrackedIframeOpenRef.current = false;
    }
  }, [isFormUnlocked]);

  if (!isOpen) {
    return null;
  }

  function handlePrivacyClick() {
    const snapshot: LeadFormModalReturnSnapshot = {
      type: "lead-form",
      returnPath,
      returnScrollY: window.scrollY,
      locale,
      state: {
        isConsentChecked,
        isFormUnlocked
      }
    };

    navigateToPrivacy({
      href: privacyHref,
      snapshot
    });
  }

  function handleConsentContinue() {
    if (!isConsentChecked) {
      return;
    }

    trackEvent("atrium_lead_form_consent_accept", {
      pathname: returnPath,
      locale
    });
    setIsFormUnlocked(true);
  }

  function handleIframeLoad() {
    if (hasTrackedIframeOpenRef.current) {
      return;
    }

    hasTrackedIframeOpenRef.current = true;
    trackEvent("atrium_lead_form_iframe_open", {
      pathname: returnPath,
      locale
    });
  }

  return (
    <ModalShell
      closeLabel={ui.closeLabel}
      onClose={onClose}
      containerClassName="fixed inset-0 z-[90] flex items-end justify-center overflow-y-auto px-0 pb-0 pt-3 sm:items-center sm:px-6 sm:py-6 lg:px-8"
      backdropClassName="absolute inset-0 bg-charcoal/72 backdrop-blur-sm"
      panelClassName="relative z-10 flex h-[min(calc(100dvh-0.75rem),900px)] w-full max-w-6xl flex-col overflow-hidden rounded-t-[2rem] rounded-b-none bg-white shadow-[0_40px_120px_rgba(14,22,32,0.38)] sm:h-[min(92dvh,900px)] sm:rounded-[2rem]"
      panelProps={{
        role: "dialog",
        "aria-modal": "true",
        "aria-label": ui.modalTitle
      }}
    >
      <div className="border-b border-border bg-white px-5 py-5 sm:px-7">
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-medium text-charcoal sm:text-3xl">{ui.modalTitle}</h2>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-light sm:text-base">{ui.modalDescription}</p>
          </div>

          <div className="flex items-center gap-2">
            {isFormUnlocked ? (
              <a
                href={leadFormUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-warm-orange hover:text-warm-orange"
              >
                {ui.openExternalLabel}
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : null}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-charcoal transition-colors hover:border-warm-orange hover:text-warm-orange"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-2xl bg-secondary/40 px-4 py-3 text-sm text-charcoal-light">
          <ShieldCheck className="h-4 w-4 flex-shrink-0 text-warm-orange" />
          <span>
            {ui.consentPrefix}{" "}
            <Link
              href={privacyHref}
              onClick={(event) => {
                event.preventDefault();
                handlePrivacyClick();
              }}
              className="font-medium text-charcoal underline decoration-warm-orange/50 underline-offset-4 transition-colors hover:text-warm-orange"
            >
              {ui.privacyLabel}
            </Link>
            .
          </span>
        </div>
      </div>

      <div className="relative min-h-0 flex-1 bg-secondary/20">
        {isFormUnlocked ? (
          <iframe
            src={leadFormUrl}
            title={ui.iframeTitle}
            className="h-full w-full bg-white"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={handleIframeLoad}
          />
        ) : (
          <ModalConsentStep
            headerIcon={<ShieldCheck className="h-7 w-7" />}
            checkboxIndicator={<Check className="h-4 w-4" />}
            title={ui.consentStepTitle}
            description={ui.consentStepDescription}
            checkboxLabel={ui.consentCheckboxLabel}
            isChecked={isConsentChecked}
            onCheckedChange={setIsConsentChecked}
            hint={ui.consentRequiredHint}
            actions={
              <button
                type="button"
                onClick={handleConsentContinue}
                disabled={!isConsentChecked}
                className="inline-flex items-center justify-center rounded-full bg-warm-orange px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-warm-orange-dark disabled:cursor-not-allowed disabled:bg-warm-orange/40"
              >
                {ui.continueLabel}
              </button>
            }
            indicatorBaseClassName="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 shadow-[0_1px_3px_rgba(19,31,45,0.08)] transition-colors"
            indicatorCheckedClassName="border-warm-orange bg-warm-orange text-white shadow-[0_0_0_3px_rgba(234,91,12,0.14)]"
            indicatorUncheckedClassName="border-warm-orange/55 bg-[#fff4ef] text-transparent"
          />
        )}
      </div>

      <div className="border-t border-border bg-white px-5 py-3 text-sm text-charcoal-light sm:px-7">
        {isFormUnlocked ? (
          <>
            {ui.fallbackLabel}{" "}
            <a
              href={leadFormUrl}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-charcoal underline decoration-warm-orange/50 underline-offset-4 transition-colors hover:text-warm-orange"
            >
              {ui.openExternalLabel}
            </a>
            .
          </>
        ) : (
          <span>{ui.consentRequiredHint}</span>
        )}
      </div>
    </ModalShell>
  );
}
