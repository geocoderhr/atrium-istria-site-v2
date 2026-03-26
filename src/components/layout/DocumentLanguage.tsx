"use client";

import { useEffect } from "react";

import { Locale } from "@/lib/routing/locales";

type DocumentLanguageProps = {
  locale: Locale;
};

export function DocumentLanguage({ locale }: DocumentLanguageProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
