"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { getUiCopy } from "@/content/locales/ui";
import { Locale } from "@/lib/routing/locales";

type ConversationPanelProps = {
  prompt: string;
  placeholder: string;
  locale: Locale;
};

export function ConversationPanel({ prompt, placeholder, locale }: ConversationPanelProps) {
  const router = useRouter();
  const [value, setValue] = useState("");
  const ui = getUiCopy(locale);

  function handleContinue() {
    const target = `/${locale}`;
    const query = value.trim() ? `?opis=${encodeURIComponent(value.trim())}` : "";

    router.push(`${target}${query}#contact`);
  }

  return (
    <section className="conversation-panel" aria-label={ui.conversationAria}>
      <p className="conversation-panel__prompt">{prompt}</p>
      <div className="conversation-panel__input" role="group" aria-label={ui.objectDescriptionAria}>
        <textarea rows={3} placeholder={placeholder} value={value} onChange={(event) => setValue(event.target.value)} />
        <button type="button" onClick={handleContinue}>
          {ui.continueToContact}
        </button>
      </div>
    </section>
  );
}
