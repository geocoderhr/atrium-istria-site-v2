import { getLocaleFromPathname, stripLocalePrefix } from "@/lib/routing/locales";
import { SERVICE_SLUGS } from "@/lib/analytics/constants";

export type AtriumPageType = "home" | "service" | "works" | "contact" | "privacy" | "other";

export function getPageTypeFromPathname(pathname: string): AtriumPageType {
  const basePath = stripLocalePrefix(pathname);

  if (basePath === "/") {
    return "home";
  }

  if (basePath === "/radovi") {
    return "works";
  }

  if (basePath === "/kontakt") {
    return "contact";
  }

  if (basePath === "/privacy-policy") {
    return "privacy";
  }

  if (SERVICE_SLUGS.some((slug) => basePath === `/${slug}`)) {
    return "service";
  }

  return "other";
}

export function getServiceSlugFromPathname(pathname: string) {
  const basePath = stripLocalePrefix(pathname);
  const normalized = basePath.startsWith("/") ? basePath.slice(1) : basePath;

  return SERVICE_SLUGS.find((slug) => slug === normalized) ?? null;
}

export function getRouteAnalyticsContext(pathname: string) {
  return {
    locale: getLocaleFromPathname(pathname),
    pageType: getPageTypeFromPathname(pathname),
    serviceSlug: getServiceSlugFromPathname(pathname)
  };
}
