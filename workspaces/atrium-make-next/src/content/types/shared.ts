export type Locale = "ru" | "hr";

export type IconKey =
  | "home"
  | "bath"
  | "building"
  | "hammer"
  | "droplet"
  | "check-circle"
  | "clock"
  | "file-text"
  | "users"
  | "star"
  | "sparkles"
  | "lightbulb"
  | "mail"
  | "phone"
  | "message-circle"
  | "send"
  | "facebook"
  | "euro"
  | "map-pin";

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  locale: Locale;
  siteUrl: string;
  primaryPhone: string;
  secondaryPhone: string;
  email: string;
  whatsAppUrl: string;
  telegramUrl: string;
  facebookUrl: string;
  location: string;
  city: string;
  region: string;
  workHours: string[];
};

export type HeroContent = {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  titleSuffix?: string;
  subtitle: string;
  subtitleHighlight?: string;
  image: string;
  imageAlt: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContactBlock = {
  title: string;
  value: string;
  href?: string;
  note?: string;
  icon: IconKey;
};

export type ShowcaseCard = {
  title: string;
  details: string;
  image: string;
  galleryImages?: string[];
  hasModal?: boolean;
};

export type TrustPoint = {
  title: string;
  description: string;
  icon: IconKey;
};

export type StatItem = {
  value: string;
  label: string;
  icon?: IconKey;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: IconKey;
};

export type ContentSection = {
  title: string;
  body: string;
};

export type BulletSection = {
  title: string;
  items: string[];
};

export type CtaContent = {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel?: string;
};

export type ConversationalPromptBlock = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: TrustPoint[];
  primaryLabel: string;
  secondaryLabel: string;
  initialIntent?: string;
};

export type NavigationItem = {
  label: string;
  href: string;
  scrollToId?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "whatsapp" | "telegram" | "facebook";
};

export type AssistantSuggestion = {
  id: string;
  label: string;
  message: string;
};

export type AssistantTeaserContent = {
  label: string;
  greeting: string;
  placeholder: string;
  suggestions: AssistantSuggestion[];
  privacyNote: string;
  privacyLinkLabel: string;
  launchLabel: string;
};
