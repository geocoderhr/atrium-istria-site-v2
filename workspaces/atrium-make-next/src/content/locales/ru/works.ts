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
    title: "Наши работы | Atrium Istria",
    description: "Реальные кейсы Atrium Istria: реконструкция, ремонт, ванные комнаты, гидроизоляция и отделочные работы по всей Истрии.",
    path: "/radovi"
  },
  hero: {
    title: "Наши работы",
    subtitle: "Реальные кейсы и подборки работ, которые можно открыть и посмотреть в галерее."
  },
  filters: [
    { value: "all", label: "Все проекты" },
    { value: "rekonstrukcija", label: "Реконструкция" },
    { value: "adaptacija", label: "Ремонт" },
    { value: "kupaonica", label: "Ванные" },
    { value: "fasada", label: "Фасады" },
    { value: "hidroizolacija", label: "Гидроизоляция" }
  ],
  projects: [
    toWorkCase(1, "rekonstrukcija", getDomikShowcaseCard("ru")),
    toWorkCase(2, "adaptacija", getMansardaShowcaseCard("ru")),
    toWorkCase(3, "kupaonica", getSanuzlyShowcaseCard("ru")),
    toWorkCase(4, "adaptacija", getPlitkaShowcaseCard("ru")),
    toWorkCase(5, "hidroizolacija", getHidroizolacijaShowcaseCard("ru")),
    toWorkCase(6, "adaptacija", getPoplocenjeShowcaseCard("ru")),
    toWorkCase(7, "adaptacija", getDrvenaBanyaShowcaseCard("ru")),
    toWorkCase(8, "adaptacija", getKnaufShowcaseCard("ru")),
    toWorkCase(9, "adaptacija", getDekorativnaZbukaShowcaseCard("ru"))
  ],
  emptyState: "В этой категории пока нет проектов."
};
