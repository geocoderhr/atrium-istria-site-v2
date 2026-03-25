import { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildPlaceholderMetadata } from "@/lib/seo/placeholder-metadata";

export const metadata: Metadata = buildPlaceholderMetadata(
  "Adaptacije kupaonica",
  "Service template za ovu stranicu još nije dovršen, zato je stranica privremeno izuzeta iz indeksacije."
);

export default function AdaptacijeKupaonicaPage() {
  return (
    <PlaceholderPage
      title="Adaptacije kupaonica"
      description="Ovdje će doći service-page struktura sa scenarijima, opsegom radova, procesom i FAQ blokom."
    />
  );
}
