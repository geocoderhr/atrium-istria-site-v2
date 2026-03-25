import { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Locale } from "@/lib/routing/locales";

type PageShellProps = {
  children: ReactNode;
  locale: Locale;
};

export function PageShell({ children, locale }: PageShellProps) {
  return (
    <>
      <SiteHeader locale={locale} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </>
  );
}
