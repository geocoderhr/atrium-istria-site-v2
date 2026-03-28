"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

import { getLocaleFromPathname } from "@/lib/routing/locales";

export function DocumentLanguage() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const nextLocale = getLocaleFromPathname(pathname);

    if (document.documentElement.lang !== nextLocale) {
      document.documentElement.lang = nextLocale;
    }
  }, [pathname]);

  return null;
}
