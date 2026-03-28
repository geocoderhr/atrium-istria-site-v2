import { getDekorativnaZbukaShowcaseCard } from "@/content/cases/dekorativna-zbuka";
import { getDomikShowcaseCard } from "@/content/cases/domik";
import { getDrvenaBanyaShowcaseCard } from "@/content/cases/drvena-banya";
import { getHidroizolacijaShowcaseCard } from "@/content/cases/hidroizolacija";
import { getKnaufShowcaseCard } from "@/content/cases/knauf-suha-gradnja";
import { getMansardaShowcaseCard } from "@/content/cases/mansarda";
import { getPlitkaShowcaseCard } from "@/content/cases/plitka";
import { getPoplocenjeShowcaseCard } from "@/content/cases/poplocenje";
import { getSanuzlyShowcaseCard } from "@/content/cases/sanuzly";
import { ShowcaseCard, WorkCase, WorksPageContent } from "@/content/types";

function toWorkCase(id: number, category: WorkCase["category"], card: ShowcaseCard): WorkCase {
  return {
    id,
    category,
    title: card.title,
    description: card.details,
    image: card.image,
    galleryImages: card.galleryImages,
    hasModal: card.hasModal
  };
}

export const worksPageContent: WorksPageContent = {
  meta: {
    title: "Naši radovi | Atrium Istria",
    description: "Stvarni caseovi Atrium Istria: rekonstrukcije, adaptacije, kupaonice, hidroizolacija i završni radovi diljem Istre.",
    path: "/hr/radovi"
  },
  hero: {
    title: "Naši radovi",
    subtitle: "Stvarni caseovi i galerije radova koje možete otvoriti i pregledati."
  },
  filters: [
    { value: "all", label: "Svi radovi" },
    { value: "rekonstrukcija", label: "Rekonstrukcije" },
    { value: "adaptacija", label: "Adaptacije" },
    { value: "kupaonica", label: "Kupaonice" },
    { value: "fasada", label: "Fasade" },
    { value: "hidroizolacija", label: "Hidroizolacija" }
  ],
  projects: [
    toWorkCase(1, "rekonstrukcija", getDomikShowcaseCard("hr")),
    toWorkCase(2, "adaptacija", getMansardaShowcaseCard("hr")),
    toWorkCase(3, "kupaonica", getSanuzlyShowcaseCard("hr")),
    toWorkCase(4, "adaptacija", getPlitkaShowcaseCard("hr")),
    toWorkCase(5, "hidroizolacija", getHidroizolacijaShowcaseCard("hr")),
    toWorkCase(6, "adaptacija", getPoplocenjeShowcaseCard("hr")),
    toWorkCase(7, "adaptacija", getDrvenaBanyaShowcaseCard("hr")),
    toWorkCase(8, "adaptacija", getKnaufShowcaseCard("hr")),
    toWorkCase(9, "adaptacija", getDekorativnaZbukaShowcaseCard("hr"))
  ],
  emptyState: "U ovoj kategoriji još nema projekata."
};
