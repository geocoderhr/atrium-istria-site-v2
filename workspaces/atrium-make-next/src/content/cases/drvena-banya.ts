import { Locale, ShowcaseCard } from "@/content/types";

const drvenaBanyaGalleryImages = [
  "/site/cases/drvena-banya/main.jpg",
  "/site/cases/drvena-banya/1.jpg",
  "/site/cases/drvena-banya/2.jpg",
  "/site/cases/drvena-banya/3.jpg",
  "/site/cases/drvena-banya/4.jpg",
  "/site/cases/drvena-banya/5.jpg",
  "/site/cases/drvena-banya/6.jpg",
  "/site/cases/drvena-banya/6-0.jpg",
  "/site/cases/drvena-banya/7.jpg",
  "/site/cases/drvena-banya/8.jpg",
  "/site/cases/drvena-banya/9.jpg",
  "/site/cases/drvena-banya/10.jpg",
  "/site/cases/drvena-banya/11.jpg",
  "/site/cases/drvena-banya/12.jpg",
  "/site/cases/drvena-banya/12-0.jpg",
  "/site/cases/drvena-banya/13.jpg",
  "/site/cases/drvena-banya/14.jpg",
  "/site/cases/drvena-banya/14-2.jpg",
  "/site/cases/drvena-banya/15.jpg",
  "/site/cases/drvena-banya/16.jpg",
  "/site/cases/drvena-banya/17.jpg",
  "/site/cases/drvena-banya/18.jpg",
  "/site/cases/drvena-banya/19.jpg",
  "/site/cases/drvena-banya/20.jpg",
  "/site/cases/drvena-banya/22.jpg",
  "/site/cases/drvena-banya/23.jpg",
  "/site/cases/drvena-banya/24.jpg",
  "/site/cases/drvena-banya/25.jpg",
  "/site/cases/drvena-banya/26.jpg",
  "/site/cases/drvena-banya/27.jpg",
  "/site/cases/drvena-banya/28.jpg",
  "/site/cases/drvena-banya/29.jpg"
];

const localizedDrvenaBanyaCase: Record<Locale, ShowcaseCard> = {
  ru: {
    image: drvenaBanyaGalleryImages[0],
    title: "Деревянная баня",
    details: "Кейс по строительству и отделке деревянной бани: от сборки конструкции до готового тёплого интерьера.",
    galleryImages: drvenaBanyaGalleryImages,
    hasModal: true
  },
  hr: {
    image: drvenaBanyaGalleryImages[0],
    title: "Drvena sauna",
    details: "Case izgradnje i završne obrade drvene saune, od konstrukcije do gotovog toplog interijera.",
    galleryImages: drvenaBanyaGalleryImages,
    hasModal: true
  }
};

export function getDrvenaBanyaShowcaseCard(locale: Locale) {
  return localizedDrvenaBanyaCase[locale];
}
