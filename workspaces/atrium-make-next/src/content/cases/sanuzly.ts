import { Locale, ShowcaseCard } from "@/content/types";

const sanuzlyGalleryImages = [
  "/site/cases/sanuzly/main.jpeg",
  "/site/cases/sanuzly/02.jpg",
  "/site/cases/sanuzly/03.jpeg",
  "/site/cases/sanuzly/05.png",
  "/site/cases/sanuzly/06.jpeg",
  "/site/cases/sanuzly/07.jpeg",
  "/site/cases/sanuzly/08.jpeg",
  "/site/cases/sanuzly/09.jpeg",
  "/site/cases/sanuzly/10.jpg",
  "/site/cases/sanuzly/11.jpeg",
  "/site/cases/sanuzly/12.jpeg",
  "/site/cases/sanuzly/13.jpeg",
  "/site/cases/sanuzly/14.jpeg",
  "/site/cases/sanuzly/15.jpeg",
  "/site/cases/sanuzly/16.jpeg",
  "/site/cases/sanuzly/17.jpeg",
  "/site/cases/sanuzly/18.jpeg",
  "/site/cases/sanuzly/19.jpeg"
];

const localizedSanuzlyCase: Record<Locale, ShowcaseCard> = {
  ru: {
    image: sanuzlyGalleryImages[0],
    title: "Санузлы",
    details: "Подборка работ по ремонту и оборудованию санузлов, включая плитку, душевые зоны, мебель и чистовую отделку.",
    galleryImages: sanuzlyGalleryImages,
    hasModal: true
  },
  hr: {
    image: sanuzlyGalleryImages[0],
    title: "Kupaonice",
    details: "Galerija radova na uređenju kupaonica, uključujući keramiku, tuš zone, namještaj i završnu obradu.",
    galleryImages: sanuzlyGalleryImages,
    hasModal: true
  }
};

export function getSanuzlyShowcaseCard(locale: Locale) {
  return localizedSanuzlyCase[locale];
}
