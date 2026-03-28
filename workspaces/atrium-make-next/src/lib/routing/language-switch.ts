import { Locale, ServiceSlug, WorkCategory } from "@/content/types";

import { getLocalizedPath, stripLocalePrefix } from "./locales";

const WORKS_FILTER_QUERY_KEY = "filter";
const MIN_SCROLL_RESTORE_Y = 24;
let pendingLanguageSwitchSnapshot: LanguageSwitchSnapshot | null = null;

const SERVICE_PAGE_SLUGS: ServiceSlug[] = [
  "adaptacije-kuca-i-stanova",
  "kupaonice",
  "fasade",
  "rekonstrukcije",
  "hidroizolacija"
];

const SUPPORTED_BASE_PATHS = new Set<string>([
  "/",
  "/radovi",
  "/kontakt",
  "/privacy-policy",
  ...SERVICE_PAGE_SLUGS.map((slug) => `/${slug}`)
]);

const WORK_CATEGORY_VALUES: WorkCategory[] = [
  "all",
  "rekonstrukcija",
  "adaptacija",
  "kupaonica",
  "fasada",
  "hidroizolacija"
];

export type LanguageSwitchRouteKind = "home" | "service" | "works" | "contact" | "privacy" | "unknown";

export type LanguageSwitchSnapshot = {
  targetPathname: string;
  targetLocale: Locale;
  scrollY: number | null;
  hash: string | null;
  routeKind: LanguageSwitchRouteKind;
  restoreTargetId: string | null;
};

function isSupportedBasePath(path: string) {
  return SUPPORTED_BASE_PATHS.has(path);
}

function isWorkCategory(value: unknown): value is WorkCategory {
  return typeof value === "string" && WORK_CATEGORY_VALUES.includes(value as WorkCategory);
}

export function normalizeLanguageSwitchHash(hash: string | null | undefined) {
  if (typeof hash !== "string") {
    return null;
  }

  const normalizedHash = hash.trim();

  if (!normalizedHash.startsWith("#") || normalizedHash.length < 2 || /\s/.test(normalizedHash)) {
    return null;
  }

  return normalizedHash;
}

export function resolveWorksFilterFromSearchParamValue(value: string | string[] | null | undefined) {
  const candidate = Array.isArray(value) ? value[0] : value;
  return isWorkCategory(candidate) ? candidate : null;
}

export function readWorksFilterFromSearch(search: string | null | undefined) {
  if (!search) {
    return null;
  }

  const normalizedSearch = search.startsWith("?") ? search.slice(1) : search;
  if (!normalizedSearch) {
    return null;
  }

  const searchParams = new URLSearchParams(normalizedSearch);
  return resolveWorksFilterFromSearchParamValue(searchParams.get(WORKS_FILTER_QUERY_KEY));
}

export function createWorksFilterSearch(filter: WorkCategory | null | undefined) {
  if (!filter || filter === "all") {
    return "";
  }

  const searchParams = new URLSearchParams();
  searchParams.set(WORKS_FILTER_QUERY_KEY, filter);

  return `?${searchParams.toString()}`;
}

export function shouldRestoreLanguageSwitchScroll(scrollY: number) {
  return Number.isFinite(scrollY) && scrollY > MIN_SCROLL_RESTORE_Y;
}

export function getLanguageSwitchRouteKind(pathname: string): LanguageSwitchRouteKind {
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

  return SERVICE_PAGE_SLUGS.some((slug) => basePath === `/${slug}`) ? "service" : "unknown";
}

export function resolveLanguageSwitchTarget(args: {
  pathname: string;
  targetLocale: Locale;
  hash?: string | null;
  search?: string | null;
}) {
  const normalizedPath = stripLocalePrefix(args.pathname);
  const routeKind = getLanguageSwitchRouteKind(args.pathname);
  const nextBasePath = isSupportedBasePath(normalizedPath) ? normalizedPath : "/";
  const targetPathname = getLocalizedPath(nextBasePath, args.targetLocale);
  const safeHash = normalizeLanguageSwitchHash(args.hash);
  const worksFilter = routeKind === "works" ? readWorksFilterFromSearch(args.search) : null;
  const targetSearch = routeKind === "works" ? createWorksFilterSearch(worksFilter) : "";

  return {
    routeKind,
    targetPathname,
    targetHref: `${targetPathname}${targetSearch}${safeHash ?? ""}`,
    targetSearch,
    usedFallback: nextBasePath !== normalizedPath
  };
}

export function readLanguageSwitchSnapshot() {
  return pendingLanguageSwitchSnapshot ? { ...pendingLanguageSwitchSnapshot } : null;
}

export function writeLanguageSwitchSnapshot(snapshot: LanguageSwitchSnapshot) {
  pendingLanguageSwitchSnapshot = { ...snapshot };
}

export function clearLanguageSwitchSnapshot() {
  pendingLanguageSwitchSnapshot = null;
}
