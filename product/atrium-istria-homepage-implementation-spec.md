# Atrium Istria Homepage Implementation Spec

Дата: 2026-03-25  
Статус: implemented and current homepage reference  
Основа: PRD, homepage blueprint, visual direction brief, technical architecture brief, photo mapping plan

## 1. Homepage ownership

Homepage is the first implementation target and the reference page for the whole project.

It must define:

- SEO-first page assembly
- hero architecture
- section order
- content schema
- server/client boundaries
- reusable patterns for future pages

## 2. Route and file ownership

### Main route

- `src/app/[locale]/page.tsx`

### Homepage content source

- `src/content/locales/ru/home.ts`
- `src/content/locales/hr/home.ts`

### Supporting code zones

- `src/components/layout/`
- `src/components/sections/home/`
- `src/components/ui/`
- `src/features/conversation/`
- `src/lib/seo/`

## 3. Homepage render order

Homepage must render sections in this exact order:

1. `SiteHeader`
2. `HomeHeroSection`
3. `HomeServicesSection`
4. `HomeSelectedProjectsSection`
5. `HomeHowWeWorkSection`
6. `HomeFaqSection`
7. `HomeContactSection`
8. `SiteFooter`

## 4. Current homepage content schema

```ts
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

export type ServiceCompactItem = {
  title: string;
  description: string;
  slug: string;
  href?: string;
  bullets: string[];
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
    items: ServiceCompactItem[];
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
```

## 5. Current section props

### `HomeHeroSection`

Props:

- `hero: HomeHeroContent`

Dependencies:

- `GlassPanel`
- `ConversationPanel`
- `SectionHeading` only if needed for supporting cues

### `HomeServicesSection`

Props:

- `section: HomePageContent["servicesProcess"]`
- `services: ServicePageContent[]`
- `locale: Locale`

Dependencies:

- compact service cards
- inline `<details>` disclosure
- CTA to `/{locale}#contact`

### `HomeSelectedProjectsSection`

Props:

- `section: HomePageContent["selectedProjects"]`
- `projects: ProjectCase[]`
- `locale: Locale`

Dependencies:

- `ProjectCard`
- CTA link/button

### `HomeHowWeWorkSection`

Props:

- `trust: HomePageContent["trust"]`
- `pricing: HomePageContent["pricingLogic"]`
- `locale: Locale`

Dependencies:

- merged structured panels for process, estimate logic and trust

### `HomeFaqSection`

Props:

- `section: HomePageContent["faq"]`

Dependencies:

- `FaqItem`

### `HomeContactSection`

Props:

- `section: KontaktPageContent`
- `locale: Locale`

Dependencies:

- `ContactPromptPanel`
- phone link
- email link
- one strong final contact scenario on the homepage itself

## 6. Server vs client boundary

### Current server components

These should stay server-rendered:

- `src/app/[locale]/page.tsx`
- `SiteHeader`
- `PageShell`
- all homepage sections as wrappers
- H1, subhead, hero prompt copy
- service compact content
- selected project content
- merged process/trust/pricing content
- FAQ content
- contact section copy

### Current client-side interactivity

Keep client-side interactivity only where needed:

- `ConversationPanel`
- `ConversationInput`
- optional animated language switch if needed
- optional enhanced FAQ behavior if animation requires it

### Rule

The page must remain understandable, crawlable and high-trust even before interaction.

## 6.1 What hero must render before interactivity

Before any client-side enhancement, the hero must already output:

- eyebrow if used
- final `H1`
- subhead / description
- first human prompt sentence
- visible free-text input shell
- visible proof cues
- crawlable links to key sections or services if present in hero support area

This means the homepage still communicates trust and intent even if JavaScript is delayed.

## 7. Hero implementation rules

### Visual structure

- background image layer
- anthracite overlay / atmosphere
- light glass panel
- headline block
- human prompt
- input area
- optional proof cues

### Content rules

- H1 must be visible in server-rendered HTML
- subhead must carry local/service intent
- prompt must feel human, not robotic
- no quiz cards
- no bot-like shortcuts
- no messenger clone appearance

### Technical rules

- the background image is content-driven through `home.ts`
- the conversation UI lives in `src/features/conversation/`
- hero section owns composition, not the logic implementation details

### Route assembly rule

`src/app/[locale]/page.tsx` should stay an assembler, not a large page implementation file.

Its responsibilities:

- load locale-aware homepage content
- resolve featured projects
- resolve FAQ items
- build page metadata
- compose sections in locked order

Its non-responsibilities:

- hardcoding copy
- implementing visual primitives
- embedding raw analytics scripts
- owning verification logic

## 7.1 Homepage assembly contract

High-level render contract:

```tsx
<PageShell>
  <SiteHeader />
  <HomeHeroSection content={home.hero} />
  <HomeServicesSection content={home.servicesProcess} services={services} />
  <HomeSelectedProjectsSection
    content={home.selectedProjects}
    projects={featuredProjects}
  />
  <HomeHowWeWorkSection trust={home.trust} pricing={home.pricingLogic} />
  <HomeFaqSection content={home.faq} items={faqItems} />
  <HomeContactSection content={kontakt} />
  <SiteFooter />
</PageShell>
```

This contract should remain stable even if the styling or content evolves.

## 8. SEO responsibilities

Homepage route must:

- call metadata builder from `home.ts`
- output canonical path
- output locale-aware metadata
- expose crawlable internal links to homepage sections and compact service anchors
- render FAQ in crawlable HTML

Homepage route must not:

- depend on client-only rendering for critical text
- hide key SEO copy behind accordions that do not render meaningful HTML

Homepage-specific SEO guarantees:

- one primary `H1`
- one canonical path coming from structured content
- visible service-intent copy above and below the fold
- crawlable links to compact service anchors, works section and contact section
- FAQ items present in HTML, not fetched only after interaction
- hero remains meaningful even with scripts blocked

## 8.1 Root-level concerns that must stay outside homepage

The homepage implementation must not take ownership of:

- Search Console HTML verification file
- root `google-site-verification` meta
- GTM bootstrapping
- consent initialization
- site-wide JSON-LD injection strategy

These stay in:

- `public/`
- `src/app/layout.tsx`
- `src/lib/seo/`
- global measurement layer

## 9. Selected project and service sourcing

Homepage should not hardcode project cards.

Implementation rule:

- `home.ts` stores the compact section copy
- `getProjectCases(locale)` resolves curated case objects from locale project content
- `getServicesCollection(locale)` resolves the compact service card collection
- homepage section receives only the curated `ProjectCase[]` and `ServicePageContent[]`

This keeps homepage reusable and content-driven.

## 10. Homepage-specific styling rules

- page shell spacing comes from layout layer
- section spacing uses tokens, not ad-hoc margins
- hero styles live in `HomeHeroSection.module.css`
- reusable glass styles live in `GlassPanel.module.css`
- conversation-specific styles live in `ConversationPanel.module.css`

Additional styling boundaries:

- no page-specific colors hardcoded directly in JSX
- spacing and radius values must come from tokens
- section modules may refine layout, but not redefine the design system
- glass-panel rules should stay reusable for final-contact reuse if needed

## 10.1 Measurement touchpoints to reserve

Analytics should not be implemented here yet, but the homepage spec should reserve these surfaces:

- `hero_conversation_start`
- `project_case_open`
- `faq_expand`
- `contact_block_interaction`
- `phone_click`

These events should be emitted through a dedicated analytics layer later, not inline ad hoc in section markup.

## 11. Minimal implementation checklist

- `src/app/[locale]/page.tsx`
- `src/content/locales/ru/home.ts`
- `src/content/locales/hr/home.ts`
- `src/content/locales/hr/projects.ts`
- `src/content/locales/hr/faq.ts`
- `src/components/sections/home/*`
- `src/features/conversation/*`
- `src/lib/seo/build-metadata.ts`
- `public/site/hero/*`

## 12. Acceptance criteria

- Homepage can be assembled without hardcoded text inside sections.
- Hero is layered, calm and conversational.
- H1, subhead and core text are server-rendered.
- Section order follows the homepage blueprint exactly.
- Selected projects come from structured content, not inline JSX.
- Homepage becomes the reference implementation pattern for the whole site.
- Root verification, GTM and consent remain global concerns and do not leak into homepage section code.
