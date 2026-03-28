import { Locale, ShowcaseCard } from "@/content/types";

const plitkaGalleryImages = [
  "/site/cases/plitka/main.jpg",
  "/site/cases/plitka/01.jpg",
  "/site/cases/plitka/02.jpg",
  "/site/cases/plitka/04.jpg",
  "/site/cases/plitka/05.jpg",
  "/site/cases/plitka/06.jpg",
  "/site/cases/plitka/06-alt.jpeg",
  "/site/cases/plitka/07.jpg",
  "/site/cases/plitka/08.jpg",
  "/site/cases/plitka/09.jpg"
];

const localizedPlitkaCase: Record<Locale, ShowcaseCard> = {
  ru: {
    image: plitkaGalleryImages[0],
    title: "Плиточные работы",
    details: "Небольшая подборка работ по укладке плитки и керамики для жилых интерьеров.",
    galleryImages: plitkaGalleryImages,
    hasModal: true
  },
  hr: {
    image: plitkaGalleryImages[0],
    title: "Keramičarski radovi",
    details: "Manja galerija radova na polaganju pločica i keramike u stambenim interijerima.",
    galleryImages: plitkaGalleryImages,
    hasModal: true
  }
};

export function getPlitkaShowcaseCard(locale: Locale) {
  return localizedPlitkaCase[locale];
}
