"use client";

import { useEffect, useMemo, useState } from "react";

type ContactPromptPanelProps = {
  title: string;
  description: string;
  textareaLabel: string;
  placeholder: string;
  ctaLabel: string;
  email: string;
};

export function ContactPromptPanel({
  title,
  description,
  textareaLabel,
  placeholder,
  ctaLabel,
  email
}: ContactPromptPanelProps) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const initialValue = new URLSearchParams(window.location.search).get("opis") ?? "";

    if (initialValue) {
      setValue(initialValue);
    }
  }, []);

  const mailtoHref = useMemo(() => {
    const subject = "Upit s web stranice Atrium Istria";
    const body = value.trim() || placeholder;

    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [email, placeholder, value]);

  return (
    <section className="contact-prompt-panel">
      <div className="stack-md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <label className="contact-prompt-panel__label">
        <span>{textareaLabel}</span>
        <textarea rows={8} value={value} placeholder={placeholder} onChange={(event) => setValue(event.target.value)} />
      </label>
      <a className="section-link section-link--accent" href={mailtoHref}>
        {ctaLabel}
      </a>
    </section>
  );
}
