# Atrium Istria Technical Architecture Brief

Дата: 2026-03-25  
Статус: implementation planning brief  
Основа: PRD, visual direction brief, homepage blueprint, SEO requirements, measurement foundation

## 1. Core decisions

### Stack

- `Next.js` with `App Router`
- `TypeScript`
- `src/`-based structure
- `CSS Modules + design tokens`
- file-based typed content
- locale-ready routes now

### Why this stack

- strong SEO defaults
- good metadata handling
- native sitemap and robots support
- flexible route architecture
- strong fit for future conversational entry logic
- maintainable separation between page structure, UI and content

## 2. Architectural goals

The codebase must support:

- SEO-first structured pages
- clean separation between layout, sections, content and UI
- locale-ready routing
- reusable service page template
- homepage-first design and build flow
- future GTM/GA4/GSC integration
- future conversational logic growth without redesigning the whole app

## 3. Recommended project structure

```text
src/
  app/
    layout.tsx
    sitemap.ts
    robots.ts
    [locale]/
      layout.tsx
      page.tsx
      adaptacije-kuca-i-stanova/page.tsx
      adaptacije-kupaonica/page.tsx
      fasade/page.tsx
      rekonstrukcije-kuca/page.tsx
      hidroizolacija/page.tsx
      radovi/page.tsx
      kontakt/page.tsx

  components/
    layout/
      SiteHeader/
      SiteFooter/
      PageShell/
      LocaleShell/
    sections/
      home/
      service/
      radovi/
      kontakt/
    ui/
      Button/
      GlassPanel/
      InputPanel/
      SectionHeading/
      ProjectCard/
      FaqItem/
      LanguageSwitch/

  features/
    conversation/
      ConversationPanel/
      ConversationInput/
      conversation-copy.ts
      types.ts

  content/
    schema.ts
    site-config.ts
    locales/
      hr/
        home.ts
        services/
          adaptacije-kuca-i-stanova.ts
          adaptacije-kupaonica.ts
          fasade.ts
          rekonstrukcije-kuca.ts
          hidroizolacija.ts
        radovi.ts
        kontakt.ts
        projects.ts
        faq.ts

  lib/
    routing/
      locales.ts
      paths.ts
    seo/
      build-metadata.ts
      build-canonical.ts
      build-hreflang.ts
      jsonld.ts
    content/
      get-home-content.ts
      get-service-content.ts
      get-projects.ts

  styles/
    globals.css
    tokens.css

public/
  googlef7f14d5470db83ba.html
  site/
    hero/
    projects/
    services/
```

## 4. Responsibility map

### `src/app/`

This layer owns:

- routing
- locale route structure
- root and locale layouts
- page assembly
- root metadata and verification layer
- GTM insertion boundary
- consent-aware global script boundary
- `sitemap.ts`
- `robots.ts`

Page route files should stay thin:

- read content
- build metadata
- compose sections

### `src/components/layout/`

This layer owns:

- global shell
- header
- footer
- page width and spacing system
- locale shell behavior

### `src/components/sections/`

This layer owns:

- page-sized blocks
- homepage sections
- service page sections
- `Radovi` sections
- `Kontakt` sections

These components should render structured content, not own hardcoded copy.

### `src/components/ui/`

This layer owns:

- reusable visual primitives
- buttons
- panels
- glass surfaces
- cards
- FAQ items
- input wrappers
- language switch

These components should stay page-agnostic.

### `src/content/`

This layer owns:

- typed page content
- locale content files
- project and FAQ collections
- site-level configuration

This is the main source of truth for v1 content.

### `src/lib/seo/`

This layer owns:

- metadata creation
- canonical URLs
- hreflang links
- JSON-LD helpers
- SEO-safe page helpers
- Google verification metadata helpers

### `src/features/conversation/`

This layer owns:

- hero conversation panel
- prompt copy
- interaction types
- future lead-entry logic

It should remain visually integrated, but technically separate.

### `src/styles/`

This layer owns:

- global reset/base rules
- tokens
- color variables
- spacing scale
- typography scale

### `public/`

This layer owns:

- Search Console verification HTML file
- selected web-ready site assets

Required verification file:

- `public/googlef7f14d5470db83ba.html`

## 5. Homepage file responsibility

Homepage should be assembled from the following layers:

- route file:
  `src/app/[locale]/page.tsx`
- content file:
  `src/content/locales/hr/home.ts`
- SEO helper:
  `src/lib/seo/build-metadata.ts`
- layout wrapper:
  `src/components/layout/PageShell`
- sections:
  `src/components/sections/home/*`
- hero conversation feature:
  `src/features/conversation/*`

Global verification and measurement should remain outside homepage code:

- HTML verification file in `public/`
- meta verification in root metadata
- GTM entry in root layout
- consent-aware script logic in root/global shell

### Homepage sections

Recommended module set:

- `HomeHeroSection`
- `HomeServicesProcessSection`
- `HomeSelectedProjectsSection`
- `HomeTrustSection`
- `HomePricingLogicSection`
- `HomeFaqSection`
- `HomeFinalContactSection`

## 6. Hero architecture

Hero is a special page zone and should not be treated like a generic section.

### Hero composition

- background image layer
- anthracite atmosphere layer
- glass content panel
- headline and subhead
- conversation panel
- supporting proof cues

### Technical rules

- main textual content must be server-rendered
- H1 must live in HTML, not only inside client interaction
- conversation UI can be interactive, but the page must remain understandable without JS-heavy dependency
- the conversation panel should live in `features/conversation`, not inside a random section component

## 7. Content structure

### `home.ts`

Should contain:

- SEO fields
- hero copy
- hero prompt
- proof cues
- services/process block content
- selected projects references
- trust block content
- pricing logic content
- FAQ references
- final CTA copy

### service content files

Each service file should contain:

- SEO fields
- H1
- intro
- typical scenarios
- work scope
- process steps
- pricing factors
- proof case references
- FAQ references
- CTA copy

### `projects.ts`

Should contain typed case objects:

- slug
- title
- object type
- location
- before summary
- work summary
- result summary
- image references
- linked services

## 8. SEO-first implementation rules

The architecture must directly support:

- one clear H1 per page
- page-level metadata
- locale-aware canonical logic
- hreflang output
- sitemap generation
- robots generation
- crawlable internal links
- structured JSON-LD
- real textual content in HTML

### Search Console verification rules

The project must preserve both existing verification methods:

- HTML file verification:
  `public/googlef7f14d5470db83ba.html`
- meta tag verification:
  `google-site-verification = DzhUcTDCmzP2t4HJb054cacHl4oaEOGgCwbc3ezZY4A`

For Next.js, meta verification should be owned by root metadata, not by a page-level section component.

### Required JSON-LD targets

- `Organization`
- `LocalBusiness`
- `BreadcrumbList`

## 9. Image strategy

- raw archive remains in `assets/photos`
- selected production assets go to `public/site`
- code should never reference the raw archive directly
- page content files reference curated web-ready image paths only

## 10. Global measurement and verification placement

### Root layout responsibilities

`src/app/layout.tsx` must own:

- root HTML shell
- global metadata defaults
- Google verification meta
- GTM insertion point
- consent-aware global script boundary

### Public responsibilities

`public/` must own:

- Search Console HTML verification file
- static site assets referenced by routes and metadata

### Measurement placement rules

- GTM loads from the root shell
- GA4 is delivered through GTM
- consent state is initialized globally
- page sections emit interaction surfaces, but do not embed raw third-party script logic

## 11. Measurement integration surfaces

Measurement should be connected later, but the architecture must leave clean places for:

- page-level tracking
- hero conversation start
- service page views
- project card interactions
- FAQ expansion
- contact interactions
- consent state changes

These should be added through a dedicated analytics layer, not embedded ad-hoc into section markup.
