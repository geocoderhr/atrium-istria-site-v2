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
  objectType: string;
  location: string;
  service: string;
  serviceHref: string;
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

export type ServiceTextItem = {
  title: string;
  description: string;
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

export type ServiceHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  proofCues: HeroProofCue[];
};

export type ServicePageContent = {
  seo: SeoFields;
  slug: string;
  hero: ServiceHeroContent;
  scenarios: {
    title: string;
    intro: string;
    items: ServiceTextItem[];
  };
  scope: {
    title: string;
    intro: string;
    items: ServiceTextItem[];
  };
  process: {
    title: string;
    intro: string;
    items: ServiceTextItem[];
  };
  pricing: {
    title: string;
    intro: string;
    items: PricingFactor[];
  };
  proof: {
    title: string;
    intro: string;
    projects: ProjectCase[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  finalContact: {
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
    phone: string;
    email: string;
  };
};

export type RadoviPageContent = {
  seo: SeoFields;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  intro: {
    title: string;
    description: string;
  };
  cases: {
    title: string;
    description: string;
    items: ProjectCase[];
  };
  finalContact: {
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
    phone: string;
    email: string;
  };
};

export type ContactPageContent = {
  seo: SeoFields;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  methods: {
    title: string;
    intro: string;
    items: ServiceTextItem[];
  };
  process: {
    title: string;
    intro: string;
    items: ServiceTextItem[];
  };
  prompt: {
    title: string;
    description: string;
    textareaLabel: string;
    placeholder: string;
    ctaLabel: string;
    phone: string;
    email: string;
  };
};
