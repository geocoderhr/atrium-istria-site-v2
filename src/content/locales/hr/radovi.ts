import { RadoviPageContent } from "@/content/schema";
import { siteConfig } from "@/content/site-config";

import { projectCasesHr } from "./projects";

export const radoviContentHr: RadoviPageContent = {
  seo: {
    title: "Radovi i primjeri projekata u Puli i Istri",
    description:
      "Atrium Istria prikazuje stvarne radove u Puli i Istri kroz jasne case primjere: što je bilo, što je izvedeno i kakav je rezultat za objekt.",
    path: "/radovi"
  },
  hero: {
    eyebrow: "Radovi | Atrium Istria",
    title: "Radovi prikazani kao jasni slučajevi, a ne kao nasumična galerija.",
    description:
      "Ovdje pokazujemo stvarne projekte kroz logiku objekta, opsega radova i rezultata, kako bi se odmah vidjelo da iza stranice stoji stvarna izvedba."
  },
  intro: {
    title: "Što ovdje gledate",
    description:
      "Svaki prikazani slučaj mora objasniti polazno stanje, što je izvedeno i kakav je konkretan rezultat za objekt. To je važnije od pukog dojma lijepe fotografije."
  },
  cases: {
    title: "Odabrani slučajevi",
    description:
      "Primjeri ispod pokrivaju unutarnje adaptacije, kupaonice, fasade, rekonstrukcije i tehničke zaštitne zahvate.",
    items: projectCasesHr
  },
  finalContact: {
    title: "Ako i vaš objekt traži jasan plan radova, pošaljite opis i krenimo konkretno.",
    description:
      "Napišite lokaciju, tip objekta i što želite riješiti. Nakon toga slijedi realan sljedeći korak, bez praznih obećanja.",
    ctaLabel: "Otvorite kontakt",
    ctaHref: "/hr/kontakt",
    phone: siteConfig.phone,
    email: siteConfig.email
  }
};
