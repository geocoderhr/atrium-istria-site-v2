import { Metadata } from "next";

import { RadoviPageTemplate } from "@/components/sections/radovi/RadoviPageTemplate";
import { radoviContentHr } from "@/content/locales/hr/radovi";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";

export const metadata: Metadata = buildPageMetadata(radoviContentHr.seo, "hr");

export default function RadoviPage() {
  return <RadoviPageTemplate content={radoviContentHr} />;
}
