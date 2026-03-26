import { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomeFaqSection } from "@/components/sections/home/HomeFaqSection";
import { HomeFinalContactSection } from "@/components/sections/home/HomeFinalContactSection";
import { HomeHeroSection } from "@/components/sections/home/HomeHeroSection";
import { HomePricingLogicSection } from "@/components/sections/home/HomePricingLogicSection";
import { HomeSelectedProjectsSection } from "@/components/sections/home/HomeSelectedProjectsSection";
import { HomeServicesProcessSection } from "@/components/sections/home/HomeServicesProcessSection";
import { HomeTrustSection } from "@/components/sections/home/HomeTrustSection";
import { getHomeContent } from "@/content/locales/content";
import { siteConfig } from "@/content/site-config";
import { isSupportedLocale, Locale } from "@/lib/routing/locales";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const { content } = getHomeContent(locale);

  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: `/${locale}`
    },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: `${siteConfig.siteUrl}/${locale}`
    }
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const { content, projects } = getHomeContent(locale);

  return (
    <>
      <HomeHeroSection hero={content.hero} locale={locale as Locale} />
      <HomeServicesProcessSection section={content.servicesProcess} locale={locale as Locale} />
      <HomeSelectedProjectsSection section={content.selectedProjects} projects={projects} locale={locale as Locale} />
      <HomeTrustSection section={content.trust} />
      <HomePricingLogicSection section={content.pricingLogic} />
      <HomeFaqSection section={content.faq} />
      <HomeFinalContactSection section={content.finalContact} locale={locale as Locale} />
    </>
  );
}
