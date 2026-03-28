import { getAssistantTeaserContent } from "@/content/assistant";
import { getDekorativnaZbukaShowcaseCard } from "@/content/cases/dekorativna-zbuka";
import { getDomikShowcaseCard } from "@/content/cases/domik";
import { getMansardaShowcaseCard } from "@/content/cases/mansarda";
import { getSanuzlyShowcaseCard } from "@/content/cases/sanuzly";
import { HomePageContent } from "@/content/types";

export const ruHomeHeroContent: HomePageContent["hero"] = {
  title: "Ремонт домов и квартир в Истрии",
  titleHighlight: "домов и квартир",
  titleSuffix: "в Истрии",
  subtitle:
    "От частичного ремонта до реконструкции, фасадов и других строительных работ для домов и квартир по всей Истрии.",
  image: "/site/home/hero-main-current.jpg",
  imageAlt: "Отреставрированный дом на старинной улице в Истрии",
  assistant: getAssistantTeaserContent("ru"),
  showcaseCards: [
    getDomikShowcaseCard("ru"),
    getMansardaShowcaseCard("ru"),
    getSanuzlyShowcaseCard("ru"),
    getDekorativnaZbukaShowcaseCard("ru")
  ]
};
