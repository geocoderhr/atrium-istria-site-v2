import { getAssistantTeaserContent } from "@/content/assistant";
import { getDekorativnaZbukaShowcaseCard } from "@/content/cases/dekorativna-zbuka";
import { getDomikShowcaseCard } from "@/content/cases/domik";
import { getMansardaShowcaseCard } from "@/content/cases/mansarda";
import { getSanuzlyShowcaseCard } from "@/content/cases/sanuzly";
import { HomePageContent } from "@/content/types";

export const hrHomeHeroContent: HomePageContent["hero"] = {
  title: "Adaptacije kuća i stanova u Istri",
  titleHighlight: "kuća i stanova",
  titleSuffix: "u Istri",
  subtitle:
    "Od djelomičnih adaptacija do rekonstrukcija, fasada i drugih građevinskih radova za kuće i stanove diljem Istre.",
  image: "/site/home/hero-main-current.jpg",
  imageAlt: "Obnovljena kuća u staroj istarskoj ulici",
  assistant: getAssistantTeaserContent("hr"),
  showcaseCards: [
    getDomikShowcaseCard("hr"),
    getMansardaShowcaseCard("hr"),
    getSanuzlyShowcaseCard("hr"),
    getDekorativnaZbukaShowcaseCard("hr")
  ]
};
