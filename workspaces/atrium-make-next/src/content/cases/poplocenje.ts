import { Locale, ShowcaseCard } from "@/content/types";

const poplocenjeGalleryImages = [
  "/site/cases/poplocenje/main.jpeg",
  "/site/cases/poplocenje/1.jpeg",
  "/site/cases/poplocenje/2.jpeg",
  "/site/cases/poplocenje/3.jpeg",
  "/site/cases/poplocenje/4.jpeg",
  "/site/cases/poplocenje/5.jpeg",
  "/site/cases/poplocenje/6.jpeg",
  "/site/cases/poplocenje/8.jpeg",
  "/site/cases/poplocenje/9.jpeg"
];

const localizedPoplocenjeCase: Record<Locale, ShowcaseCard> = {
  ru: {
    image: poplocenjeGalleryImages[0],
    title: "Брусчатка и бордюры",
    details: "Кейс по укладке каменной брусчатки и бордюров: от подготовки основания до готового наружного покрытия.",
    galleryImages: poplocenjeGalleryImages,
    hasModal: true
  },
  hr: {
    image: poplocenjeGalleryImages[0],
    title: "Popločenje i rubnjaci",
    details: "Case polaganja kamene opločnice i rubnjaka, od pripreme podloge do gotove vanjske površine.",
    galleryImages: poplocenjeGalleryImages,
    hasModal: true
  }
};

export function getPoplocenjeShowcaseCard(locale: Locale) {
  return localizedPoplocenjeCase[locale];
}
