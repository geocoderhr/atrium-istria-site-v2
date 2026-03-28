import { getMainNavigation, getSiteConfig, languageOptions } from "@/content/site-config";
import { Locale, NavigationItem } from "@/content/types";
import { getCrossLocalePath, getLocaleFromPathname, getLocalizedPath } from "@/lib/routing/locales";

import { HOME_SERVICES_SECTION_ID, SERVICE_PAGE_SLUGS } from "./site-header.constants";
import { ActiveNav, HomeSection, PendingNavTarget } from "./site-header.types";

export type HeaderRouteModel = {
  locale: Locale;
  homePath: string;
  worksPath: string;
  contactPath: string;
  isHomePage: boolean;
  isServicePage: boolean;
  navigation: ReturnType<typeof getMainNavigation>;
  siteConfig: ReturnType<typeof getSiteConfig>;
  activeLanguage: (typeof languageOptions)[number];
  languageLinks: Array<(typeof languageOptions)[number] & { href: string; isActive: boolean }>;
};

export function isPendingNavTarget(value: string | null): value is Exclude<PendingNavTarget, null> {
  return value === "top" || value === "services";
}

export function getHeaderRouteModel(pathname: string): HeaderRouteModel {
  const locale = getLocaleFromPathname(pathname);
  const siteConfig = getSiteConfig(locale);
  const navigation = getMainNavigation(locale);
  const homePath = getLocalizedPath("/", locale);
  const worksPath = getLocalizedPath("/radovi", locale);
  const contactPath = getLocalizedPath("/kontakt", locale);
  const servicePagePaths = SERVICE_PAGE_SLUGS.map((slug) => getLocalizedPath(`/${slug}`, locale));
  const activeLanguage = languageOptions.find((option) => option.code === locale) ?? languageOptions[0];
  const languageLinks = languageOptions.map((language) => ({
    ...language,
    href: getCrossLocalePath(pathname, language.code),
    isActive: language.code === locale
  }));

  return {
    locale,
    homePath,
    worksPath,
    contactPath,
    isHomePage: pathname === homePath,
    isServicePage: servicePagePaths.includes(pathname),
    navigation,
    siteConfig,
    activeLanguage,
    languageLinks
  };
}

export function getNavigationKind(
  item: NavigationItem,
  paths: Pick<HeaderRouteModel, "homePath" | "worksPath">
): ActiveNav {
  if (item.scrollToId === HOME_SERVICES_SECTION_ID) {
    return "services";
  }

  if (item.href === paths.homePath) {
    return "home";
  }

  if (item.href === paths.worksPath) {
    return "works";
  }

  return "contact";
}

export function resolveActiveNav(args: {
  pathname: string;
  homePath: string;
  worksPath: string;
  contactPath: string;
  isServicePage: boolean;
  homeSection: HomeSection;
  pendingNavTarget: PendingNavTarget;
}): ActiveNav {
  const { pathname, homePath, worksPath, contactPath, isServicePage, homeSection, pendingNavTarget } = args;

  if (pathname === worksPath) {
    return "works";
  }

  if (pathname === contactPath) {
    return "contact";
  }

  if (isServicePage) {
    return "services";
  }

  if (pathname === homePath) {
    if (pendingNavTarget === "services") {
      return "services";
    }

    if (pendingNavTarget === "top") {
      return "home";
    }

    return homeSection === "services" ? "services" : "home";
  }

  return "home";
}
