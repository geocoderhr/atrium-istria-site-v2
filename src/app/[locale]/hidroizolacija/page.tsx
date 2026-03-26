import { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePageTemplate } from "@/components/sections/service/ServicePageTemplate";
import { getServiceContent } from "@/content/locales/content";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { isSupportedLocale, Locale } from "@/lib/routing/locales";

type ServicePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const content = getServiceContent(locale as Locale, "hidroizolacija");
  return buildPageMetadata(content.seo, locale);
}

export default async function HidroizolacijaPage({ params }: ServicePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const content = getServiceContent(locale as Locale, "hidroizolacija");
  return <ServicePageTemplate content={content} locale={locale as Locale} />;
}
