"use client";

import { ReactNode } from "react";

import { useLeadFormModal } from "@/components/lead-form/LeadFormProvider";
import { Locale } from "@/content/types";

type LeadFormTriggerProps = {
  locale: Locale;
  className: string;
  children: ReactNode;
};

export function LeadFormTrigger({ locale, className, children }: LeadFormTriggerProps) {
  const { openLeadForm } = useLeadFormModal();

  return (
    <button type="button" onClick={() => openLeadForm(locale)} className={className}>
      {children}
    </button>
  );
}
