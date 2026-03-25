import { Metadata } from "next";

import { ServicePageTemplate } from "@/components/sections/service/ServicePageTemplate";
import { rekonstrukcijeKucaHr } from "@/content/locales/hr/services";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export const metadata: Metadata = buildPageMetadata(rekonstrukcijeKucaHr.seo, "hr");

export default function RekonstrukcijeKucaPage() {
  return <ServicePageTemplate content={rekonstrukcijeKucaHr} />;
}
