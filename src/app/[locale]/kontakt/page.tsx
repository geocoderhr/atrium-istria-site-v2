import { Metadata } from "next";
import { notFound } from "next/navigation";

import { KontaktPageTemplate } from "@/components/sections/kontakt/KontaktPageTemplate";
import { getKontaktContent } from "@/content/locales/content";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { isSupportedLocale, Locale } from "@/lib/routing/locales";

type KontaktPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: KontaktPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const content = getKontaktContent(locale as Locale);
  return buildPageMetadata(content.seo, locale);
}

export default async function KontaktPage({ params }: KontaktPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content = getKontaktContent(locale as Locale);
  return <KontaktPageTemplate content={content} locale={locale as Locale} />;
}
