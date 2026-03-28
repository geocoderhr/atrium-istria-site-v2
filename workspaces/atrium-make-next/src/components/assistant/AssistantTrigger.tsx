"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { useAssistantModal } from "@/components/assistant/AssistantProvider";
import { Locale } from "@/content/types";

type AssistantTriggerProps = {
  locale: Locale;
  className: string;
  children: ReactNode;
  initialIntent?: string;
  initialMessage?: string;
};

export function AssistantTrigger({ locale, className, children, initialIntent, initialMessage }: AssistantTriggerProps) {
  const pathname = usePathname();
  const { openAssistant } = useAssistantModal();

  return (
    <button
      type="button"
      onClick={() =>
        openAssistant({
          locale,
          page: pathname,
          initialIntent,
          initialMessage
        })
      }
      className={className}
    >
      {children}
    </button>
  );
}
