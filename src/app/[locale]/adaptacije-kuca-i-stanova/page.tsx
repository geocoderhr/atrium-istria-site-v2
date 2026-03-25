import { Metadata } from "next";

import { ServicePageTemplate } from "@/components/sections/service/ServicePageTemplate";
import { adaptacijeKucaIStanovaHr } from "@/content/locales/hr/services";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export const metadata: Metadata = buildPageMetadata(adaptacijeKucaIStanovaHr.seo, "hr");

export default function AdaptacijeKucaIStanovaPage() {
  return <ServicePageTemplate content={adaptacijeKucaIStanovaHr} />;
}
