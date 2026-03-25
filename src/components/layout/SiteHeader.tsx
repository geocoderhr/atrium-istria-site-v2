import Link from "next/link";

import { siteConfig } from "@/content/site-config";
import { Locale } from "@/lib/routing/locales";
import { locales } from "@/lib/routing/locales";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="site-brand">
          <Link href={`/${locale}`} className="site-logo">
            Atrium Istria
          </Link>
          {locales.length > 1 ? (
            <div className="language-switch" aria-label="Language switch">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={`/${item}`}
                  className={item === locale ? "language-switch__item is-active" : "language-switch__item"}
                >
                  {item.toUpperCase()}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <nav className="site-nav" aria-label="Primary">
          <Link href={`/${locale}/adaptacije-kuca-i-stanova`}>Usluge</Link>
          <Link href={`/${locale}/radovi`}>Radovi</Link>
          <Link href={`/${locale}/kontakt`}>Kontakt</Link>
        </nav>
        <a className="site-phone" href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>
          {siteConfig.phone}
        </a>
      </div>
    </header>
  );
}
