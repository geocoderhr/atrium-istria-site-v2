import { Locale } from "@/content/types";

export const supportedLocales: Locale[] = ["ru", "hr"];
export const defaultLocale: Locale = "ru";

const localePrefixMap: Record<Locale, string> = {
  ru: "",
  hr: "/hr"
};

export function isLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function getLocalePrefix(locale: Locale) {
  return localePrefixMap[locale];
}

export function stripLocalePrefix(pathname: string) {
  if (pathname === "/hr") {
    return "/";
  }

  return pathname.startsWith("/hr/") ? pathname.slice(3) || "/" : pathname || "/";
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/hr" || pathname.startsWith("/hr/") ? "hr" : "ru";
}

export function getLocalizedPath(path: string, locale: Locale) {
  const normalizedPath = path === "" ? "/" : path;
  const cleanPath = stripLocalePrefix(normalizedPath);
  const prefix = getLocalePrefix(locale);

  if (cleanPath === "/") {
    return prefix || "/";
  }

  return `${prefix}${cleanPath}`;
}

export function getCrossLocalePath(pathname: string, locale: Locale) {
  return getLocalizedPath(stripLocalePrefix(pathname), locale);
}
