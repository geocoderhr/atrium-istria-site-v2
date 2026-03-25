import { Metadata } from "next";

import { ServicePageTemplate } from "@/components/sections/service/ServicePageTemplate";
import { hidroizolacijaHr } from "@/content/locales/hr/services";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export const metadata: Metadata = buildPageMetadata(hidroizolacijaHr.seo, "hr");

export default function HidroizolacijaPage() {
  return <ServicePageTemplate content={hidroizolacijaHr} />;
}
