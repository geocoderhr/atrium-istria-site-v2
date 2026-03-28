import { AtriumEventName } from "@/lib/analytics/constants";
import { pushDataLayer } from "@/lib/analytics/datalayer";
import { getRouteAnalyticsContext } from "@/lib/analytics/route-context";

export type TrackEventParams = {
  pathname?: string;
  locale?: string;
  page_type?: string;
  service_slug?: string | null;
  [key: string]: unknown;
};

function resolvePathname(providedPathname?: string) {
  if (providedPathname) {
    return providedPathname;
  }

  if (typeof window === "undefined") {
    return "/";
  }

  return window.location.pathname;
}

export function trackEvent(event: AtriumEventName, params: TrackEventParams = {}) {
  const pathname = resolvePathname(typeof params.pathname === "string" ? params.pathname : undefined);
  const routeContext = getRouteAnalyticsContext(pathname);

  const payload: Record<string, unknown> = {
    event,
    event_ts: Date.now(),
    pathname,
    locale: params.locale ?? routeContext.locale,
    page_type: params.page_type ?? routeContext.pageType,
    ...params
  };

  if (!payload.service_slug && routeContext.serviceSlug) {
    payload.service_slug = routeContext.serviceSlug;
  }

  pushDataLayer(payload);

  if (process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true") {
    console.info("[atrium-analytics]", payload);
  }
}
