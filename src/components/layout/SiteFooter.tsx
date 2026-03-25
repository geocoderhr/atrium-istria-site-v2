import { Locale } from "@/lib/routing/locales";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>Atrium Istria</p>
        <p>Pula i Istra</p>
        <p>
          <a href={`/${locale}/kontakt`}>Kontakt</a>
        </p>
      </div>
    </footer>
  );
}
