"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ConversationPanelProps = {
  prompt: string;
  placeholder: string;
  locale: string;
};

export function ConversationPanel({ prompt, placeholder, locale }: ConversationPanelProps) {
  const router = useRouter();
  const [value, setValue] = useState("");

  function handleContinue() {
    const target = `/${locale}/kontakt`;
    const query = value.trim() ? `?opis=${encodeURIComponent(value.trim())}` : "";

    router.push(`${target}${query}`);
  }

  return (
    <section className="conversation-panel" aria-label="Početak razgovora">
      <p className="conversation-panel__prompt">{prompt}</p>
      <div className="conversation-panel__input" role="group" aria-label="Opis objekta">
        <textarea rows={3} placeholder={placeholder} value={value} onChange={(event) => setValue(event.target.value)} />
        <button type="button" onClick={handleContinue}>
          Nastavite na kontakt
        </button>
      </div>
    </section>
  );
}
