import { Locale } from "@/lib/routing/locales";

import { homeContentHr, homeProjectsHr } from "@/content/locales/hr/home";
import { kontaktContentHr } from "@/content/locales/hr/kontakt";
import { projectCasesHr } from "@/content/locales/hr/projects";
import { radoviContentHr } from "@/content/locales/hr/radovi";
import { servicesHr } from "@/content/locales/hr/services";
import { homeContentRu, homeProjectsRu } from "@/content/locales/ru/home";
import { kontaktContentRu } from "@/content/locales/ru/kontakt";
import { projectCasesRu } from "@/content/locales/ru/projects";
import { radoviContentRu } from "@/content/locales/ru/radovi";
import { servicesRu } from "@/content/locales/ru/services";

export type ServiceSlug = keyof typeof servicesHr;

export function getHomeContent(locale: Locale) {
  if (locale === "ru") {
    return {
      content: homeContentRu,
      projects: homeProjectsRu
    };
  }

  return {
    content: homeContentHr,
    projects: homeProjectsHr
  };
}

export function getServiceContent(locale: Locale, slug: ServiceSlug) {
  return locale === "ru" ? servicesRu[slug] : servicesHr[slug];
}

export function getRadoviContent(locale: Locale) {
  return locale === "ru" ? radoviContentRu : radoviContentHr;
}

export function getKontaktContent(locale: Locale) {
  return locale === "ru" ? kontaktContentRu : kontaktContentHr;
}

export function getProjectCases(locale: Locale) {
  return locale === "ru" ? projectCasesRu : projectCasesHr;
}
