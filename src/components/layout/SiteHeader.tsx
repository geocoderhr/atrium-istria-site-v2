import Link from "next/link";

import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { siteConfig } from "@/content/site-config";
import { getUiCopy } from "@/content/locales/ui";
import { Locale } from "@/lib/routing/locales";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const ui = getUiCopy(locale);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="site-brand">
          <Link href={`/${locale}`} className="site-logo">
            Atrium Istria
          </Link>
          <LanguageSwitch locale={locale} />
        </div>
        <nav className="site-nav" aria-label="Primary">
          <Link href={`/${locale}#services`}>{ui.navServices}</Link>
          <Link href={`/${locale}#works`}>{ui.navProjects}</Link>
          <Link href={`/${locale}#contact`}>{ui.navContact}</Link>
        </nav>
        <a className="site-phone" href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>
          {siteConfig.phone}
        </a>
      </div>
    </header>
  );
}
