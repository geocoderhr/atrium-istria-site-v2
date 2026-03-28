"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { getUiCopy } from "@/content/locales/ui";
import { Locale, locales } from "@/lib/routing/locales";

type LanguageSwitchProps = {
  locale: Locale;
};

export function LanguageSwitch({ locale }: LanguageSwitchProps) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const ui = getUiCopy(locale);

  useEffect(() => {
    setHash(window.location.hash || "");
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function buildLocaleHref(targetLocale: Locale) {
    const segments = pathname.split("/").filter(Boolean);

    if (!segments.length) {
      return `/${targetLocale}`;
    }

    if (locales.includes(segments[0] as Locale)) {
      segments[0] = targetLocale;
      return `/${segments.join("/")}${hash}`;
    }

    return `/${targetLocale}/${segments.join("/")}${hash}`;
  }

  const localeLabelByCode: Record<Locale, string> = {
    ru: ui.languageRussian,
    hr: ui.languageCroatian
  };

  return (
    <div ref={rootRef} className="language-switch" aria-label={ui.languageLabel}>
      <button
        type="button"
        className={open ? "language-switch__trigger is-open" : "language-switch__trigger"}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="language-switch__label">{ui.languageLabel}</span>
        <span className="language-switch__caret" aria-hidden="true" />
      </button>
      {open ? (
        <div className="language-switch__menu" role="menu">
          {locales.map((item) => (
            <Link
              key={item}
              href={buildLocaleHref(item)}
              className={item === locale ? "language-switch__option is-active" : "language-switch__option"}
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <span>{localeLabelByCode[item]}</span>
              {item === locale ? <span className="language-switch__current">{item.toUpperCase()}</span> : null}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
