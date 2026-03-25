import { Metadata } from "next";

import { PlaceholderPage } from "@/components/layout/PlaceholderPage";
import { buildPlaceholderMetadata } from "@/lib/seo/placeholder-metadata";

export const metadata: Metadata = buildPlaceholderMetadata(
  "Adaptacije kuća i stanova",
  "Service template za ovu stranicu još nije dovršen, zato je stranica privremeno izuzeta iz indeksacije."
);

export default function AdaptacijeKucaIStanovaPage() {
  return (
    <PlaceholderPage
      title="Adaptacije kuća i stanova"
      description="Stranica usluge bit će izgrađena na shared service template sustavu iz naše dokumentacije."
    />
  );
}
