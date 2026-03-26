# Atrium Istria Implementation Order

Дата: 2026-03-25  
Статус: current build roadmap after homepage prototype

## 1. Lock implementation inputs

- use current homepage implementation spec
- treat the built homepage as current UI reference
- keep design and architecture docs aligned with the real implementation

## 2. Completed foundation milestones

- git and GitHub are already connected
- Next.js scaffold already exists
- locale-aware routing already exists
- Search Console verification file and root metadata are already in place
- homepage-first prototype is already implemented
- public UX has been compacted to `one-page per locale`

## 3. Sync docs to the actual homepage

- update README and phase docs to reflect code-first reality
- mark homepage as the current source of truth
- remove outdated references to mandatory Figma-before-code flow

## 4. Compact the public IA

- keep `/{locale}` as the single main public route
- move services, works and contact into homepage sections
- turn old service, `radovi` and `kontakt` routes into redirect surfaces

## 5. Polish the compact homepage

- tighten section rhythm and reduce repeated explanations
- keep the header short and anchor-based
- refine mobile and tablet behavior

## 6. Replace temporary production data

- replace placeholder phone and email
- confirm final contact paths and CTA targets
- confirm hero and works images that stay in production

## 7. Deepen SEO and measurement surfaces

- implement metadata generation
- add canonical and hreflang helpers
- add JSON-LD
- connect analytics-ready hooks and consent-aware integration points
- keep GTM/GA4 integration global, not section-local

## Outcome

After these steps the project should have:

- homepage as the stable visual and structural reference
- compact one-page public browsing model
- clean separation between content, UI, layout, features and SEO
- deeper SEO and analytics ready for production wiring
