import { Locale, ShowcaseCard } from "@/content/types";

const hidroizolacijaGalleryImages = [
  "/site/cases/hidroizolacija/main.jpg",
  "/site/cases/hidroizolacija/1.jpg",
  "/site/cases/hidroizolacija/2.jpg",
  "/site/cases/hidroizolacija/3.jpg",
  "/site/cases/hidroizolacija/4.jpg",
  "/site/cases/hidroizolacija/5.jpg",
  "/site/cases/hidroizolacija/6.jpg",
  "/site/cases/hidroizolacija/7.jpg"
];

const localizedHidroizolacijaCase: Record<Locale, ShowcaseCard> = {
  ru: {
    image: hidroizolacijaGalleryImages[0],
    title: "Гидроизоляция",
    details: "Кейс по гидроизоляции кровли отдельностоящего объекта с подборкой фотографий выполненных работ.",
    galleryImages: hidroizolacijaGalleryImages,
    hasModal: true
  },
  hr: {
    image: hidroizolacijaGalleryImages[0],
    title: "Hidroizolacija",
    details: "Case hidroizolacije krova samostojećeg objekta s galerijom izvedenih radova.",
    galleryImages: hidroizolacijaGalleryImages,
    hasModal: true
  }
};

export function getHidroizolacijaShowcaseCard(locale: Locale) {
  return localizedHidroizolacijaCase[locale];
}
