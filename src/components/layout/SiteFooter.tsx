import { Locale } from "@/lib/routing/locales";
import { getUiCopy } from "@/content/locales/ui";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const ui = getUiCopy(locale);

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>Atrium Istria</p>
        <p>{ui.footerRegion}</p>
        <p>
          <a href={`/${locale}/kontakt`}>{ui.navContact}</a>
        </p>
      </div>
    </footer>
  );
}
