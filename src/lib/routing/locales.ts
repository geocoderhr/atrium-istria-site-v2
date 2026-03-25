export const locales = ["hr", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "hr";

export function isSupportedLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
