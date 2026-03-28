import type {
  BulletSection,
  ContentSection,
  ConversationalPromptBlock,
  CtaContent,
  FaqItem,
  FeatureItem,
  HeroContent,
  IconKey,
  PageMeta,
  ProcessStep,
  TrustPoint
} from "@/content/types/shared";

export type ServiceSlug =
  | "adaptacije-kuca-i-stanova"
  | "kupaonice"
  | "fasade"
  | "rekonstrukcije"
  | "hidroizolacija";

export type ServiceCard = {
  slug: ServiceSlug;
  title: string;
  description: string;
  icon: IconKey;
  image?: string;
  imageAlt?: string;
};

export type ServicePageContent = {
  slug: ServiceSlug;
  meta: PageMeta;
  hero: HeroContent & {
    badge: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  intro?: ContentSection;
  features?: FeatureItem[];
  bulletSection?: BulletSection;
  process?: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: ProcessStep[];
    benefits?: TrustPoint[];
  };
  contentSections?: Array<ContentSection | BulletSection>;
  projects?: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{ title: string; location: string; image: string }>;
    ctaLabel?: string;
  };
  conversationalPrompt?: ConversationalPromptBlock;
  cta: CtaContent & {
    image?: string;
    imageAlt?: string;
  };
  faq?: FaqItem[];
};
