import { HomePageContent } from "@/content/types";

import { hrHomeFinalCtaContent } from "@/content/locales/hr/home/final-cta";
import { hrHomeHeroContent } from "@/content/locales/hr/home/hero";
import { hrHomePricingContent } from "@/content/locales/hr/home/pricing";
import { hrHomeProcessContent } from "@/content/locales/hr/home/process";
import { hrHomeServicesContent } from "@/content/locales/hr/home/services";
import { hrHomeTrustContent } from "@/content/locales/hr/home/trust";

export const homePageContent: HomePageContent = {
  meta: {
    title: "Adaptacije kuća i stanova u Istri | Atrium Istria",
    description:
      "Adaptacije, rekonstrukcije, fasade i hidroizolacija kuća i stanova u Istri. Opišite projekt i dobit ćete jasan sljedeći korak.",
    path: "/hr"
  },
  hero: hrHomeHeroContent,
  services: hrHomeServicesContent,
  process: hrHomeProcessContent,
  trust: hrHomeTrustContent,
  pricing: hrHomePricingContent,
  finalCta: hrHomeFinalCtaContent
};
