import Link from "next/link";

import { Locale } from "@/lib/routing/locales";
import { getUiCopy } from "@/content/locales/ui";
import { siteConfig } from "@/content/site-config";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const ui = getUiCopy(locale);

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner site-footer__inner--stacked">
        <div className="site-footer__brand">
          <p className="site-footer__name">Atrium Istria</p>
          <p>{ui.footerRegion}</p>
        </div>
        <div className="site-footer__contact">
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>{siteConfig.phone}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
        <div className="site-footer__nav">
          <Link href={`/${locale}#services`}>{ui.navServices}</Link>
          <Link href={`/${locale}#works`}>{ui.navProjects}</Link>
          <Link href={`/${locale}#contact`}>{ui.navContact}</Link>
        </div>
      </div>
    </footer>
  );
}
