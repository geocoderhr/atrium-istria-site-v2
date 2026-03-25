# Atrium Istria Figma Homepage Concept Package

Дата: 2026-03-25  
Статус: design handoff brief

## 1. Goal

Figma package for homepage should translate the existing docs into a concrete visual concept without changing product logic.

It must visualize:

- hero mood
- glass panel treatment
- layout rhythm
- header
- homepage sections
- mobile-first behavior

## 1.1 Input documents

This package must be based on:

- `atrium-istria-visual-direction-brief.md`
- `atrium-istria-homepage-blueprint.md`
- `atrium-istria-homepage-implementation-spec.md`
- `atrium-istria-photo-mapping-plan.md`

Figma is not allowed to redefine block order, route logic or content architecture.

## 2. Required Figma pages / frames

### Page 1. Foundations

Must include:

- color direction preview
- typography direction preview
- glass panel behavior
- spacing rhythm
- container logic

### Page 2. Homepage Desktop

Must include:

- full homepage desktop flow
- all homepage sections in final order
- hero with final layered composition

### Page 3. Homepage Mobile

Must include:

- mobile hero
- mobile homepage flow
- container stacking behavior
- mobile header behavior

### Page 4. Key Components

Must include:

- header state
- glass panel state
- conversation panel state
- project card state
- FAQ item state
- CTA/button states

### Page 5. Tokens Preview

Must include:

- anthracite base tokens
- warm orange accent direction
- light glass-surface behavior
- neutral text scale
- border, blur and shadow rules
- spacing rhythm preview

## 3. Hero frames required

Must design at least:

- desktop hero default
- desktop hero with focused conversation input
- mobile hero default
- mobile hero with visible prompt and input

Each hero frame must show:

- background image treatment
- atmosphere overlay
- glass panel bounds
- H1 and subhead hierarchy
- prompt and input relationship
- small proof cues
- header interaction with hero on top edge

## 4. Hero visual requirements

- exterior-first background
- dark anthracite atmosphere
- light glass panel
- clear H1 + subhead
- human conversational prompt
- layered calm composition

Must avoid:

- SaaS-dashboard look
- chatbot widget look
- empty banner feeling
- over-minimal sterile presentation

## 4.1 Header requirements

Header in Figma must show:

- logo placement
- language switch behavior
- phone placement
- minimal menu
- clean mobile compression

It must feel like a controlled interface bar, not a decorative nav strip.

## 5. Homepage section mapping

Figma homepage must preserve this order:

1. Header
2. Hero
3. Services + how work starts
4. Selected projects
5. Trust/process
6. Pricing logic
7. FAQ
8. Final contact

Each section frame should note which future code module it maps to:

- `HomeHeroSection`
- `HomeServicesProcessSection`
- `HomeSelectedProjectsSection`
- `HomeTrustSection`
- `HomePricingLogicSection`
- `HomeFaqSection`
- `HomeFinalContactSection`

## 6. Deliverables

The package should answer:

- what homepage looks like on desktop
- what homepage looks like on mobile
- how hero panel behaves visually
- how panels and containers work
- how project cards look
- how typography hierarchy feels

The package should also export a clear engineering handoff:

- which image is intended for hero
- which panel is reusable
- which components need mobile variants
- which surfaces are purely decorative vs semantic
- which states require client interaction later

## 7. What must stay fixed from docs

- `Exterior first`
- `Layered calm`
- glass-panel direction
- human conversational entry
- strong SEO-aware hero, not abstract art direction

## 8. Acceptance criteria

- Desktop and mobile homepage are both present.
- Hero clearly feels like Atrium Istria, not a SaaS landing page.
- Glass surfaces are light and adult, not dark chat widgets.
- The section rhythm supports reading and SEO content below hero.
- The package is specific enough for engineering to map frames to real modules.
