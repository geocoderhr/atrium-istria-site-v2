import { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildPlaceholderMetadata } from "@/lib/seo/placeholder-metadata";

export const metadata: Metadata = buildPlaceholderMetadata(
  "Kontakt",
  "Kontakt stranica još nije dovršena, zato je privremeno izuzeta iz indeksacije."
);

export default function KontaktPage() {
  return (
    <PlaceholderPage
      title="Kontakt"
      description="Kontakt stranica ostaje najčišća i najmirnija, sa slobodnim opisom objekta i jasnim kontakt metodama."
    />
  );
}
