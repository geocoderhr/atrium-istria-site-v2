import { Metadata } from "next";

import { KontaktPageTemplate } from "@/components/sections/kontakt/KontaktPageTemplate";
import { kontaktContentHr } from "@/content/locales/hr/kontakt";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export const metadata: Metadata = buildPageMetadata(kontaktContentHr.seo, "hr");

export default function KontaktPage() {
  return <KontaktPageTemplate content={kontaktContentHr} />;
}
