import type {
  AssistantTeaserContent,
  ContactBlock,
  ContentSection,
  CtaContent,
  HeroContent,
  PageMeta,
  ProcessStep,
  ShowcaseCard,
  StatItem,
  TrustPoint
} from "@/content/types/shared";
import type { ServiceCard } from "@/content/types/services";

export type HomePageContent = {
  meta: PageMeta;
  hero: HeroContent & {
    assistant: AssistantTeaserContent;
    showcaseCards: ShowcaseCard[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: ServiceCard[];
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    responseStat: StatItem;
    steps: ProcessStep[];
  };
  trust: {
    eyebrow: string;
    title: string;
    subtitle: string;
    points: TrustPoint[];
    stats: StatItem[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    photoOnly: ContentSection;
    visitRequired: ContentSection;
    factorsTitle: string;
    factors: string[];
  };
  finalCta: CtaContent & {
    contactBlocks: ContactBlock[];
    image: string;
    imageAlt: string;
  };
};
