import Link from "next/link";
import Image from "next/image";

import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
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
        <div className="site-header__brand">
          <Link href={`/${locale}`} className="site-logo" aria-label="Atrium Istria">
            <Image src="/site/branding/logo-full.png" alt="Atrium Istria" width={264} height={64} priority />
          </Link>
        </div>
        <div className="site-header__center">
          <nav className="site-nav" aria-label="Primary">
            <Link href={`/${locale}#services`}>{ui.navServices}</Link>
            <Link href={`/${locale}#works`}>{ui.navProjects}</Link>
            <Link href={`/${locale}#contact`}>{ui.navContact}</Link>
          </nav>
        </div>
        <div className="site-header__actions">
          <LanguageSwitch locale={locale} />
        </div>
      </div>
    </header>
  );
}
