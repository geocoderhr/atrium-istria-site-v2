import { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildPlaceholderMetadata } from "@/lib/seo/placeholder-metadata";

export const metadata: Metadata = buildPlaceholderMetadata(
  "Radovi",
  "Stranica radova još nije dovršena, zato je privremeno izuzeta iz indeksacije."
);

export default function RadoviPage() {
  return (
    <PlaceholderPage
      title="Radovi"
      description="Stranica radova će biti case-based, ne galerijska, s logikom što je bilo, što je napravljeno i kakav je rezultat."
    />
  );
}
