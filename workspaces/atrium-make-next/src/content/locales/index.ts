import { ContactPageContent, HomePageContent, Locale, ServicePageContent, ServiceSlug, WorksPageContent } from "@/content/types";
import { contactPageContent as hrContactPageContent } from "@/content/locales/hr/contact";
import { homePageContent as hrHomePageContent } from "@/content/locales/hr/home/index";
import { servicePages as hrServicePages } from "@/content/locales/hr/services/index";
import { worksPageContent as hrWorksPageContent } from "@/content/locales/hr/works";
import { contactPageContent as ruContactPageContent } from "@/content/locales/ru/contact";
import { homePageContent as ruHomePageContent } from "@/content/locales/ru/home/index";
import { servicePages as ruServicePages } from "@/content/locales/ru/services/index";
import { worksPageContent as ruWorksPageContent } from "@/content/locales/ru/works";

const localizedContent = {
  ru: {
    home: ruHomePageContent,
    services: ruServicePages,
    works: ruWorksPageContent,
    contact: ruContactPageContent
  },
  hr: {
    home: hrHomePageContent,
    services: hrServicePages,
    works: hrWorksPageContent,
    contact: hrContactPageContent
  }
} satisfies Record<
  Locale,
  {
    home: HomePageContent;
    services: Record<ServiceSlug, ServicePageContent>;
    works: WorksPageContent;
    contact: ContactPageContent;
  }
>;

export function getHomePageContent(locale: Locale) {
  return localizedContent[locale].home;
}

export function getServicePageContent(locale: Locale, slug: ServiceSlug) {
  return localizedContent[locale].services[slug];
}

export function getServicePages(locale: Locale) {
  return localizedContent[locale].services;
}

export function getWorksPageContent(locale: Locale) {
  return localizedContent[locale].works;
}

export function getContactPageContent(locale: Locale) {
  return localizedContent[locale].contact;
}
