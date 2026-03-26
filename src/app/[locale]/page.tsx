import { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomeFaqSection } from "@/components/sections/home/HomeFaqSection";
import { HomeContactSection } from "@/components/sections/home/HomeContactSection";
import { HomeHeroSection } from "@/components/sections/home/HomeHeroSection";
import { HomeHowWeWorkSection } from "@/components/sections/home/HomeHowWeWorkSection";
import { HomeSelectedProjectsSection } from "@/components/sections/home/HomeSelectedProjectsSection";
import { HomeServicesSection } from "@/components/sections/home/HomeServicesSection";
import { getHomeContent, getKontaktContent, getProjectCases, getServicesCollection } from "@/content/locales/content";
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

  const { content } = getHomeContent(locale as Locale);
  const services = getServicesCollection(locale as Locale);
  const projects = getProjectCases(locale as Locale).slice(0, 5);
  const contactContent = getKontaktContent(locale as Locale);

  return (
    <>
      <HomeHeroSection hero={content.hero} locale={locale as Locale} />
      <HomeServicesSection
        title={content.servicesProcess.title}
        intro={content.servicesProcess.intro}
        services={services}
        locale={locale as Locale}
      />
      <HomeHowWeWorkSection
        title={content.pricingLogic.title}
        intro={content.pricingLogic.intro}
        trustItems={content.trust.items}
        pricingFactors={content.pricingLogic.factors}
        locale={locale as Locale}
      />
      <HomeSelectedProjectsSection section={content.selectedProjects} projects={projects} locale={locale as Locale} />
      <HomeFaqSection section={content.faq} />
      <HomeContactSection content={contactContent} locale={locale as Locale} />
    </>
  );
}
