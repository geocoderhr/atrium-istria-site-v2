# Atrium Istria Website Foundation

Текущий рабочий репозиторий для новой версии сайта Atrium Istria.

## Current state

- `research`, `product`, `measurement` и `ops` документы уже собраны.
- `git` и `GitHub` уже подключены.
- `Next.js` scaffold уже поднят.
- Homepage уже собрана как первый `code-first prototype`.
- Публичная IA переведена в компактный `one-page per locale` режим.
- `Search Console` verification уже встроен двумя способами:
  - `public/googlef7f14d5470db83ba.html`
  - `google-site-verification` в root metadata

## Main documents

- `research/atrium-istria-research-2026-03.md` — UX, SEO, competitor and conversational-entry research.
- `product/atrium-istria-prd-v1.md` — v1 PRD.
- `product/atrium-istria-visual-direction-brief.md` — visual direction and reference synthesis.
- `product/atrium-istria-homepage-blueprint.md` — homepage block logic.
- `product/atrium-istria-homepage-implementation-spec.md` — homepage implementation source of truth.
- `product/atrium-istria-service-page-template-blueprint.md` — reusable service-page logic.
- `product/atrium-istria-radovi-blueprint.md` — `Radovi` page logic.
- `measurement/atrium-istria-measurement-foundation.md` — GTM/GA4/GSC/Consent foundation.
- `measurement/google-stack-launch-checklist.md` — launch checklist for Google stack.

## Current code baseline

- Homepage route:
  - `src/app/[locale]/page.tsx`
- Homepage content:
  - `src/content/locales/ru/home.ts`
  - `src/content/locales/hr/home.ts`
- Homepage sections:
  - `src/components/sections/home/`
- Root metadata and verification:
  - `src/app/layout.tsx`
- Search Console HTML verification file:
  - `public/googlef7f14d5470db83ba.html`
- Redirect routes:
  - service routes, `radovi` и `kontakt` ведут на homepage anchors

## Locked project direction

- Primary market: `Croatia + Istria`
- Working editing locale: `ru`
- Synced market locale: `hr`
- Working method: `code-first`
- Homepage is the current reference page for:
  - visual language
  - section rhythm
  - conversational hero
  - content structure
- Public UX is intentionally compact:
  - `/{locale}`
  - `#services`
  - `#works`
  - `#faq`
  - `#contact`

## What comes next

1. Review and polish the compact homepage.
2. Tighten mobile and tablet behavior.
3. Replace temporary contact details with real production data.
4. Run deeper SEO / analytics / consent pass.
5. Add `en` later after compact structure and copy are approved.
