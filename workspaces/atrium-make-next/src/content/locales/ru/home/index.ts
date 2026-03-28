import { HomePageContent } from "@/content/types";

import { ruHomeFinalCtaContent } from "@/content/locales/ru/home/final-cta";
import { ruHomeHeroContent } from "@/content/locales/ru/home/hero";
import { ruHomePricingContent } from "@/content/locales/ru/home/pricing";
import { ruHomeProcessContent } from "@/content/locales/ru/home/process";
import { ruHomeServicesContent } from "@/content/locales/ru/home/services";
import { ruHomeTrustContent } from "@/content/locales/ru/home/trust";

export const homePageContent: HomePageContent = {
  meta: {
    title: "Ремонт домов и квартир в Истрии | Atrium Istria",
    description:
      "Ремонт, реконструкция, фасады и гидроизоляция домов и квартир в Истрии. Расскажите о проекте и получите понятный следующий шаг.",
    path: "/"
  },
  hero: ruHomeHeroContent,
  services: ruHomeServicesContent,
  process: ruHomeProcessContent,
  trust: ruHomeTrustContent,
  pricing: ruHomePricingContent,
  finalCta: ruHomeFinalCtaContent
};
