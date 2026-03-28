import { Locale, ShowcaseCard } from "@/content/types";

const knaufGalleryImages = [
  "/site/cases/knauf-suha-gradnja/main.jpg",
  "/site/cases/knauf-suha-gradnja/1.jpg",
  "/site/cases/knauf-suha-gradnja/2.jpg",
  "/site/cases/knauf-suha-gradnja/3.jpg",
  "/site/cases/knauf-suha-gradnja/4.jpg",
  "/site/cases/knauf-suha-gradnja/5.jpg",
  "/site/cases/knauf-suha-gradnja/6.jpg",
  "/site/cases/knauf-suha-gradnja/7.jpg",
  "/site/cases/knauf-suha-gradnja/8.jpg",
  "/site/cases/knauf-suha-gradnja/9.jpg",
  "/site/cases/knauf-suha-gradnja/10.jpg",
  "/site/cases/knauf-suha-gradnja/11.jpg",
  "/site/cases/knauf-suha-gradnja/13.jpg",
  "/site/cases/knauf-suha-gradnja/14.jpg",
  "/site/cases/knauf-suha-gradnja/16.jpg",
  "/site/cases/knauf-suha-gradnja/17.jpg",
  "/site/cases/knauf-suha-gradnja/18.jpg"
];

const localizedKnaufCase: Record<Locale, ShowcaseCard> = {
  ru: {
    image: knaufGalleryImages[0],
    title: "Knauf и сухое строительство",
    details:
      "Работы по гипсокартонным стенам и потолкам с подготовкой мокрых зон, гидроизоляцией и базовыми сантехническими узлами.",
    galleryImages: knaufGalleryImages,
    hasModal: true
  },
  hr: {
    image: knaufGalleryImages[0],
    title: "Knauf i suha gradnja",
    details:
      "Radovi na Knauf zidovima i stropovima uz pripremu mokrih zona, hidroizolaciju i osnovne sanitarne izvedbe.",
    galleryImages: knaufGalleryImages,
    hasModal: true
  }
};

export function getKnaufShowcaseCard(locale: Locale) {
  return localizedKnaufCase[locale];
}
