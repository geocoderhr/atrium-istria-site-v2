import { Metadata } from "next";

import { ServicePageTemplate } from "@/components/sections/service/ServicePageTemplate";
import { fasadeHr } from "@/content/locales/hr/services";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export const metadata: Metadata = buildPageMetadata(fasadeHr.seo, "hr");

export default function FasadePage() {
  return <ServicePageTemplate content={fasadeHr} />;
}
