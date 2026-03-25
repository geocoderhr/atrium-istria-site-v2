import { notFound } from "next/navigation";

import { PageShell } from "@/components/layout/PageShell";
import { isSupportedLocale, Locale } from "@/lib/routing/locales";

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
