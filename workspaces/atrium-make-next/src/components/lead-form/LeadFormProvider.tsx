"use client";

import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { LeadFormModal } from "@/components/lead-form/LeadFormModal";
import { LeadFormModalStateSeed } from "@/components/lead-form/lead-form.types";
import { consumeModalReturnSnapshot } from "@/components/ui/modal/modal-return";
import { Locale } from "@/content/types";
import { trackEvent } from "@/lib/analytics/events";

type LeadFormContextValue = {
  openLeadForm: (locale: Locale) => void;
  closeLeadForm: () => void;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function LeadFormProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>("ru");
  const [instanceKey, setInstanceKey] = useState(0);
  const [openPathname, setOpenPathname] = useState(pathname);
  const [initialState, setInitialState] = useState<LeadFormModalStateSeed | null>(null);

  const openLeadForm = useCallback((nextLocale: Locale) => {
    trackEvent("atrium_lead_form_open", {
      pathname,
      locale: nextLocale
    });
    setLocale(nextLocale);
    setOpenPathname(pathname);
    setInitialState(null);
    setInstanceKey((current) => current + 1);
    setIsOpen(true);
  }, [pathname]);

  const closeLeadForm = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      openLeadForm,
      closeLeadForm
    }),
    [closeLeadForm, openLeadForm]
  );

  useEffect(() => {
    const snapshot = consumeModalReturnSnapshot("lead-form", pathname);
    if (!snapshot) {
      return;
    }

    let isCancelled = false;

    queueMicrotask(() => {
      if (isCancelled) {
        return;
      }

      setLocale(snapshot.locale);
      setOpenPathname(snapshot.returnPath);
      setInitialState(snapshot.state);
      setInstanceKey((current) => current + 1);
      setIsOpen(true);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: snapshot.returnScrollY, behavior: "auto" });
        });
      });
    });

    return () => {
      isCancelled = true;
    };
  }, [pathname]);

  return (
    <LeadFormContext.Provider value={value}>
      {children}
      <LeadFormModal
        key={instanceKey}
        isOpen={isOpen && pathname === openPathname}
        locale={locale}
        returnPath={openPathname}
        initialState={initialState}
        onClose={closeLeadForm}
      />
    </LeadFormContext.Provider>
  );
}

export function useLeadFormModal() {
  const context = useContext(LeadFormContext);

  if (!context) {
    throw new Error("useLeadFormModal must be used within LeadFormProvider");
  }

  return context;
}
