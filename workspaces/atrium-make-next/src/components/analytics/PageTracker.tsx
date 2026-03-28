"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { trackEvent } from "@/lib/analytics/events";
import { getServiceSlugFromPathname } from "@/lib/analytics/route-context";

export function PageTracker() {
  const pathname = usePathname();
  const previousPathRef = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || previousPathRef.current === pathname) {
      return;
    }

    previousPathRef.current = pathname;

    trackEvent("atrium_page_view", {
      pathname,
      navigation_type: "route_change"
    });

    const serviceSlug = getServiceSlugFromPathname(pathname);

    if (serviceSlug) {
      trackEvent("atrium_service_page_view", {
        pathname,
        service_slug: serviceSlug
      });
    }
  }, [pathname]);

  return null;
}
