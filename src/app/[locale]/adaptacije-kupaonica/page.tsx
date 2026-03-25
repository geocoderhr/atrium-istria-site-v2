import { Metadata } from "next";

import { ServicePageTemplate } from "@/components/sections/service/ServicePageTemplate";
import { adaptacijeKupaonicaHr } from "@/content/locales/hr/services";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export const metadata: Metadata = buildPageMetadata(adaptacijeKupaonicaHr.seo, "hr");

export default function AdaptacijeKupaonicaPage() {
  return <ServicePageTemplate content={adaptacijeKupaonicaHr} />;
}
