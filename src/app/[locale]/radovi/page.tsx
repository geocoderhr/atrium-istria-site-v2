import { Metadata } from "next";
import { notFound } from "next/navigation";

import { RadoviPageTemplate } from "@/components/sections/radovi/RadoviPageTemplate";
import { getRadoviContent } from "@/content/locales/content";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { isSupportedLocale, Locale } from "@/lib/routing/locales";

type RadoviPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: RadoviPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const content = getRadoviContent(locale as Locale);
  return buildPageMetadata(content.seo, locale);
}

export default async function RadoviPage({ params }: RadoviPageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content = getRadoviContent(locale as Locale);
  return <RadoviPageTemplate content={content} locale={locale as Locale} />;
}
