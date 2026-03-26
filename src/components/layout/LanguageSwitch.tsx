"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Locale, locales } from "@/lib/routing/locales";

type LanguageSwitchProps = {
  locale: Locale;
};

export function LanguageSwitch({ locale }: LanguageSwitchProps) {
  const pathname = usePathname();

  function buildLocaleHref(targetLocale: Locale) {
    const segments = pathname.split("/").filter(Boolean);

    if (!segments.length) {
      return `/${targetLocale}`;
    }

    if (locales.includes(segments[0] as Locale)) {
      segments[0] = targetLocale;
      return `/${segments.join("/")}`;
    }

    return `/${targetLocale}/${segments.join("/")}`;
  }

  return (
    <div className="language-switch" aria-label="Language switch">
      {locales.map((item) => (
        <Link
          key={item}
          href={buildLocaleHref(item)}
          className={item === locale ? "language-switch__item is-active" : "language-switch__item"}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
