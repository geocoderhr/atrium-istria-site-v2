export type SeoFields = {
  title: string;
  description: string;
  path: string;
};

export type HeroProofCue = {
  label: string;
  value: string;
};

export type HomeHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  prompt: string;
  placeholder: string;
  backgroundImage: string;
  proofCues: HeroProofCue[];
};

export type ServicesProcessItem = {
  title: string;
  description: string;
  href: string;
};

export type ProjectCase = {
  slug: string;
  title: string;
  location: string;
  service: string;
  challenge: string;
  workDone: string;
  result: string;
  image: string;
  imageAlt: string;
};

export type TrustSignal = {
  title: string;
  description: string;
};

export type PricingFactor = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type HomePageContent = {
  seo: SeoFields;
  hero: HomeHeroContent;
  servicesProcess: {
    title: string;
    intro: string;
    items: ServicesProcessItem[];
  };
  selectedProjects: {
    title: string;
    intro: string;
    ctaLabel: string;
    ctaHref: string;
  };
  trust: {
    title: string;
    items: TrustSignal[];
  };
  pricingLogic: {
    title: string;
    intro: string;
    factors: PricingFactor[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  finalContact: {
    title: string;
    description: string;
    phone: string;
    email: string;
  };
};

export type SiteConfig = {
  siteName: string;
  siteUrl: string;
  defaultLocale: string;
  phone: string;
  email: string;
};
