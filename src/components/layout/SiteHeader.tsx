import Link from "next/link";

import { Locale } from "@/lib/routing/locales";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href={`/${locale}`} className="site-logo">
          Atrium Istria
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <Link href={`/${locale}/adaptacije-kuca-i-stanova`}>Usluge</Link>
          <Link href={`/${locale}/radovi`}>Radovi</Link>
          <Link href={`/${locale}/kontakt`}>Kontakt</Link>
        </nav>
        <a className="site-phone" href="tel:+385910000000">
          +385 91 000 0000
        </a>
      </div>
    </header>
  );
}
