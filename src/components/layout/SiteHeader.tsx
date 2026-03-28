import Link from "next/link";
import Image from "next/image";

import { HeaderNav } from "@/components/layout/HeaderNav";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { Locale } from "@/lib/routing/locales";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="site-header__brand">
          <Link href={`/${locale}`} className="site-logo" aria-label="Atrium Istria">
            <Image src="/site/branding/logo-full.png" alt="Atrium Istria" width={220} height={52} priority />
          </Link>
        </div>
        <div className="site-header__center">
          <HeaderNav locale={locale} />
        </div>
        <div className="site-header__actions">
          <LanguageSwitch locale={locale} />
        </div>
      </div>
    </header>
  );
}
