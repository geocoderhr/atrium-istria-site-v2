import { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildPlaceholderMetadata } from "@/lib/seo/placeholder-metadata";

export const metadata: Metadata = buildPlaceholderMetadata(
  "Hidroizolacija",
  "Service template za ovu stranicu još nije dovršen, zato je stranica privremeno izuzeta iz indeksacije."
);

export default function HidroizolacijaPage() {
  return (
    <PlaceholderPage
      title="Hidroizolacija"
      description="Kasnije ovdje ide specifičan sadržaj usluge, dok sada držimo ispravnu kodnu i SEO strukturu."
    />
  );
}
