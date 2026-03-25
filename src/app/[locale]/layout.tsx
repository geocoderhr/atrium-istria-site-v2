import { notFound } from "next/navigation";

import { PageShell } from "@/components/layout/PageShell";
import { isSupportedLocale, Locale, locales } from "@/lib/routing/locales";

export const dynamicParams = false;

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <PageShell locale={locale as Locale}>{children}</PageShell>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
