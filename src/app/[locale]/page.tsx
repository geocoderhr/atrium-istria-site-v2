import { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomeFaqSection } from "@/components/sections/home/HomeFaqSection";
import { HomeFinalContactSection } from "@/components/sections/home/HomeFinalContactSection";
import { HomeHeroSection } from "@/components/sections/home/HomeHeroSection";
import { HomePricingLogicSection } from "@/components/sections/home/HomePricingLogicSection";
import { HomeSelectedProjectsSection } from "@/components/sections/home/HomeSelectedProjectsSection";
import { HomeServicesProcessSection } from "@/components/sections/home/HomeServicesProcessSection";
import { HomeTrustSection } from "@/components/sections/home/HomeTrustSection";
import { homeContentHr, homeProjectsHr } from "@/content/locales/hr/home";
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

  return {
    title: homeContentHr.seo.title,
    description: homeContentHr.seo.description,
    alternates: {
      canonical: `/${locale}`
    },
    openGraph: {
      title: homeContentHr.seo.title,
      description: homeContentHr.seo.description,
      url: `${siteConfig.siteUrl}/${locale}`
    }
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return (
    <>
      <HomeHeroSection hero={homeContentHr.hero} />
      <HomeServicesProcessSection section={homeContentHr.servicesProcess} locale={locale as Locale} />
      <HomeSelectedProjectsSection
        section={homeContentHr.selectedProjects}
        projects={homeProjectsHr}
        locale={locale as Locale}
      />
      <HomeTrustSection section={homeContentHr.trust} />
      <HomePricingLogicSection section={homeContentHr.pricingLogic} />
      <HomeFaqSection section={homeContentHr.faq} />
      <HomeFinalContactSection section={homeContentHr.finalContact} locale={locale as Locale} />
    </>
  );
}
