import { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildPlaceholderMetadata } from "@/lib/seo/placeholder-metadata";

export const metadata: Metadata = buildPlaceholderMetadata(
  "Fasade",
  "Service template za ovu stranicu još nije dovršen, zato je stranica privremeno izuzeta iz indeksacije."
);

export default function FasadePage() {
  return (
    <PlaceholderPage
      title="Fasade"
      description="Servisna stranica za fasade bit će povezana s istom vizualnom i sadržajnom logikom kao glavna."
    />
  );
}
