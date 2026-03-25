import { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildPlaceholderMetadata } from "@/lib/seo/placeholder-metadata";

export const metadata: Metadata = buildPlaceholderMetadata(
  "Rekonstrukcije kuća",
  "Service template za ovu stranicu još nije dovršen, zato je stranica privremeno izuzeta iz indeksacije."
);

export default function RekonstrukcijeKucaPage() {
  return (
    <PlaceholderPage
      title="Rekonstrukcije kuća"
      description="Ova ruta je spremna za kasniju razradu prema service template blueprint dokumentu."
    />
  );
}
