import { Locale, ShowcaseCard } from "@/content/types";

const dekorativnaZbukaGalleryImages = [
  "/site/cases/dekorativna-zbuka/main.jpg",
  "/site/cases/dekorativna-zbuka/1.jpg",
  "/site/cases/dekorativna-zbuka/3.jpg",
  "/site/cases/dekorativna-zbuka/4.jpg",
  "/site/cases/dekorativna-zbuka/5.png",
  "/site/cases/dekorativna-zbuka/6.jpeg",
  "/site/cases/dekorativna-zbuka/7.jpeg",
  "/site/cases/dekorativna-zbuka/8.jpeg"
];

const localizedDekorativnaZbukaCase: Record<Locale, ShowcaseCard> = {
  ru: {
    image: dekorativnaZbukaGalleryImages[0],
    title: "Декоративная штукатурка",
    details: "Подборка работ по декоративной штукатурке с фактурой типа «карта мира» для интерьеров.",
    galleryImages: dekorativnaZbukaGalleryImages,
    hasModal: true
  },
  hr: {
    image: dekorativnaZbukaGalleryImages[0],
    title: "Dekorativna zbuka",
    details: "Galerija radova na dekorativnoj žbuci s teksturom tipa «Karta svijeta» za interijere.",
    galleryImages: dekorativnaZbukaGalleryImages,
    hasModal: true
  }
};

export function getDekorativnaZbukaShowcaseCard(locale: Locale) {
  return localizedDekorativnaZbukaCase[locale];
}
