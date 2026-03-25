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

## 3. Sync docs to the actual homepage

- update README and phase docs to reflect code-first reality
- mark homepage as the current source of truth
- remove outdated references to mandatory Figma-before-code flow

## 4. Create service template

- build reusable service-page sections
- define service content shape
- reuse header, section rhythm, CTA logic and visual language from homepage

## 5. Build the 5 service pages

- connect 5 service content files
- keep one shared service skeleton
- preserve SEO-first structure on every service route

## 6. Build `Radovi` and `Kontakt`

- build `Radovi` as a case-based page, not a gallery
- build `Kontakt` as the cleanest conversation-entry page
- keep CTA behavior aligned with homepage

## 7. Deepen SEO and measurement surfaces

- implement metadata generation
- add canonical and hreflang helpers
- add JSON-LD
- connect analytics-ready hooks and consent-aware integration points
- keep GTM/GA4 integration global, not section-local

## Outcome

After these steps the project should have:

- homepage as the stable visual and structural reference
- reusable service architecture
- case-based `Radovi`
- clean separation between content, UI, layout, features and SEO
