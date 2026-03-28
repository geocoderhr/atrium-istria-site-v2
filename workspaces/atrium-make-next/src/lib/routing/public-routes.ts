import { Locale, ServiceSlug } from "@/content/types";

const SERVICE_PAGE_SLUGS: ServiceSlug[] = [
  "adaptacije-kuca-i-stanova",
  "kupaonice",
  "fasade",
  "rekonstrukcije",
  "hidroizolacija"
];

const HR_PREFIX = "hr";
const STATIC_ROUTE_SEGMENTS: string[][] = [
  [],
  [HR_PREFIX],
  ["kontakt"],
  [HR_PREFIX, "kontakt"],
  ["privacy-policy"],
  [HR_PREFIX, "privacy-policy"],
  ["radovi"],
  [HR_PREFIX, "radovi"],
  ...SERVICE_PAGE_SLUGS.flatMap((slug) => [[slug], [HR_PREFIX, slug]])
];

export type PublicRouteKind = "home" | "service" | "works" | "contact" | "privacy";

export type PublicRouteMatch =
  | {
      locale: Locale;
      routeKind: "home";
    }
  | {
      locale: Locale;
      routeKind: "service";
      slug: ServiceSlug;
    }
  | {
      locale: Locale;
      routeKind: "works" | "contact" | "privacy";
    };

function isServiceSlug(value: string): value is ServiceSlug {
  return SERVICE_PAGE_SLUGS.includes(value as ServiceSlug);
}

export function resolvePublicRouteFromSegments(segments: string[] | undefined) {
  const normalizedSegments = segments ?? [];
  const locale: Locale = normalizedSegments[0] === HR_PREFIX ? "hr" : "ru";
  const routeSegments = locale === "hr" ? normalizedSegments.slice(1) : normalizedSegments;

  if (routeSegments.length === 0) {
    return {
      locale,
      routeKind: "home"
    } satisfies PublicRouteMatch;
  }

  if (routeSegments.length !== 1) {
    return null;
  }

  const [segment] = routeSegments;

  if (segment === "kontakt") {
    return {
      locale,
      routeKind: "contact"
    } satisfies PublicRouteMatch;
  }

  if (segment === "privacy-policy") {
    return {
      locale,
      routeKind: "privacy"
    } satisfies PublicRouteMatch;
  }

  if (segment === "radovi") {
    return {
      locale,
      routeKind: "works"
    } satisfies PublicRouteMatch;
  }

  if (isServiceSlug(segment)) {
    return {
      locale,
      routeKind: "service",
      slug: segment
    } satisfies PublicRouteMatch;
  }

  return null;
}

export function getStaticPublicRouteParams() {
  return STATIC_ROUTE_SEGMENTS.map((segments) => ({ segments }));
}
