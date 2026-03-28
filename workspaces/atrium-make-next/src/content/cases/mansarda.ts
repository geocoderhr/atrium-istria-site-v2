import { Locale, ShowcaseCard } from "@/content/types";

const mansardaGalleryImages = [
  "/site/cases/mansarda/main.jpg",
  "/site/cases/mansarda/before-1.jpg",
  "/site/cases/mansarda/before-2.jpg",
  "/site/cases/mansarda/after-2.jpg",
  "/site/cases/mansarda/after-3.jpg",
  "/site/cases/mansarda/after-4.jpg",
  "/site/cases/mansarda/after-5.jpg",
  "/site/cases/mansarda/after-6.jpg"
];

const localizedMansardaCase: Record<Locale, ShowcaseCard> = {
  ru: {
    image: mansardaGalleryImages[0],
    title: "Мансарда",
    details: "Кейс переустройства мансарды: от тёмного чердачного пространства до готового светлого интерьера.",
    galleryImages: mansardaGalleryImages,
    hasModal: true
  },
  hr: {
    image: mansardaGalleryImages[0],
    title: "Potkrovlje",
    details: "Case uređenja potkrovlja: od tamnog tavanskog prostora do gotovog svijetlog interijera.",
    galleryImages: mansardaGalleryImages,
    hasModal: true
  }
};

export function getMansardaShowcaseCard(locale: Locale) {
  return localizedMansardaCase[locale];
}
