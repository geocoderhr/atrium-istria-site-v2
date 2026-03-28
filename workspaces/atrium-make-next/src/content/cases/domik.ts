import { Locale, ShowcaseCard } from "@/content/types";

const domikGalleryImages = [
  "/site/cases/domik/main.jpg",
  "/site/cases/domik/1.jpg",
  "/site/cases/domik/2.jpg",
  "/site/cases/domik/3.jpg",
  "/site/cases/domik/4.jpg",
  "/site/cases/domik/5.jpg",
  "/site/cases/domik/7.jpg",
  "/site/cases/domik/8.jpg",
  "/site/cases/domik/9.jpg",
  "/site/cases/domik/10.jpg",
  "/site/cases/domik/11.jpg",
  "/site/cases/domik/12.jpg",
  "/site/cases/domik/13.jpg",
  "/site/cases/domik/14.jpg",
  "/site/cases/domik/15.jpg",
  "/site/cases/domik/16.jpg",
  "/site/cases/domik/17.jpg",
  "/site/cases/domik/18.jpg",
  "/site/cases/domik/19.jpg",
  "/site/cases/domik/20.jpg",
  "/site/cases/domik/21.jpg",
  "/site/cases/domik/22.jpg",
  "/site/cases/domik/23.jpg",
  "/site/cases/domik/24.jpg",
  "/site/cases/domik/25.0.jpg",
  "/site/cases/domik/25.1.jpg",
  "/site/cases/domik/26.jpg",
  "/site/cases/domik/27.jpg",
  "/site/cases/domik/28.jpg",
  "/site/cases/domik/29.jpg",
  "/site/cases/domik/30.jpg",
  "/site/cases/domik/31.jpg",
  "/site/cases/domik/32.jpg",
  "/site/cases/domik/33.jpg",
  "/site/cases/domik/34.jpg",
  "/site/cases/domik/36.jpg",
  "/site/cases/domik/37.jpg"
];

const localizedDomikCase: Record<Locale, ShowcaseCard> = {
  ru: {
    image: domikGalleryImages[0],
    title: "Реставрация объекта",
    details: "Кейс реставрации небольшого отдельностоящего здания: от демонтажа внутренних элементов до почти финального состояния.",
    galleryImages: domikGalleryImages,
    hasModal: true
  },
  hr: {
    image: domikGalleryImages[0],
    title: "Obnova objekta",
    details: "Case obnove manjeg samostojećeg objekta, od unutarnjeg demontažnog stanja do gotovo završene faze radova.",
    galleryImages: domikGalleryImages,
    hasModal: true
  }
};

export function getDomikShowcaseCard(locale: Locale) {
  return localizedDomikCase[locale];
}
