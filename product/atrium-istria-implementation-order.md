# Atrium Istria Implementation Order

Дата: 2026-03-25  
Статус: build roadmap

## 1. Lock implementation inputs

- confirm `homepage implementation spec`
- confirm homepage Figma concept package
- confirm service-page and `Radovi` adaptation package
- keep all design and architecture docs as source of truth

## 2. Initialize git and connect GitHub

- initialize local git repository
- create GitHub repository
- commit documentation foundation first
- only then begin real code scaffold

## 3. Initialize project shell

- create Next.js App Router project
- enable TypeScript
- use `src/` structure
- create base root layout
- reserve root metadata ownership in `src/app/layout.tsx`
- create `public/site/` asset structure
- prepare `public/` for Search Console verification file

## 4. Create routing and locale architecture

- add `[locale]` route segment
- add locale-aware layouts
- create page routes for all v1 pages
- define locale config and path helpers

## 5. Create tokens and global styling system

- create `styles/tokens.css`
- create `styles/globals.css`
- define color tokens
- define spacing tokens
- define typography scale
- define glass-panel surface rules

## 6. Create layout and shared UI

- build header
- build footer
- build page shell
- build buttons, panels, cards, FAQ item, input panel, language switch
- keep all shared UI reusable and page-agnostic
- reserve GTM insertion point in root layout
- reserve consent-aware global script boundary

## 7. Create homepage sections and hero

- build homepage route
- wire homepage content file
- implement hero as a dedicated layered system
- implement conversation panel as separate feature area
- complete all homepage sections in final block order

## 8. Create service template, Radovi and Kontakt

- build reusable service-page sections
- connect 5 service content files
- build `Radovi` case-based page
- build `Kontakt` page with clear conversation entry

## 9. Connect SEO and measurement surfaces

- implement metadata generation
- add root `google-site-verification` meta
- add canonical and hreflang helpers
- add sitemap and robots
- add JSON-LD
- copy `googlef7f14d5470db83ba.html` into `public/`
- connect analytics-ready hooks and consent-aware integration points
- keep GTM/GA4 integration global, not section-local

## Outcome

After these 9 steps the project should have:

- complete SEO-ready route structure
- homepage-first implementation
- reusable service architecture
- case-based `Radovi`
- clean separation between content, UI, layout, features and SEO
