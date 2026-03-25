# Atrium Istria Figma Service Adaptation Package

Дата: 2026-03-25  
Статус: service-page and Radovi adaptation brief

## 1. Goal

After homepage concept is approved, adapt its visual language to:

- 5 service pages
- `Radovi`
- `Kontakt`

without inventing a second design system.

## 1.1 Input documents

This package must inherit decisions from:

- `atrium-istria-figma-homepage-concept-package.md`
- `atrium-istria-service-page-template-blueprint.md`
- `atrium-istria-radovi-blueprint.md`
- `atrium-istria-photo-mapping-plan.md`

The task here is adaptation, not reinvention.

## 2. Service-page adaptation rules

Each service page must inherit:

- header
- typography hierarchy
- panel language
- glass treatment where appropriate
- CTA behavior
- spacing system

Each service page must adapt:

- hero image
- service-specific H1
- service scenarios
- scope of work
- pricing factors
- proof/projects
- FAQ

Service-page template must map directly to future code structure:

- `ServiceHeroSection`
- `ServiceScenariosSection`
- `ServiceScopeSection`
- `ServiceProcessSection`
- `ServicePricingSection`
- `ServiceProofSection`
- `ServiceFaqSection`
- `ServiceFinalContactSection`

## 3. Service pages to design

- `Adaptacije kuća i stanova`
- `Adaptacije kupaonica`
- `Fasade`
- `Rekonstrukcije kuća`
- `Hidroizolacija`

## 4. `Radovi` adaptation rules

`Radovi` should not look like a generic gallery.

Must visualize:

- intro block
- case grid
- project card logic
- possible expanded case behavior
- final CTA

Visual emphasis:

- proof
- transformation
- control
- clarity

`Radovi` cards should communicate:

- object type or location
- what was
- what was done
- resulting state
- whether the user can open the case for more detail

## 5. `Kontakt` adaptation rules

`Kontakt` should stay the cleanest page in the system.

Must include:

- clear contact entry
- phone
- email if used
- concise guidance for first message

It should also preserve:

- the same header language
- the same panel logic
- the same conversation tone as homepage hero
- strong mobile readability with no clutter

## 6. Figma outputs required

- one desktop service page template
- one mobile service page template
- one desktop `Radovi` concept
- one mobile `Radovi` concept
- one desktop `Kontakt` concept
- one mobile `Kontakt` concept

Optional but recommended:

- one expanded project-case state for `Radovi`
- one service hero state per high-priority service if imagery changes significantly

## 7. Photo usage guidance

Use the photo mapping plan as source of truth:

- `домик`, `Мансарда до:после` for adaptation/reconstruction
- `Санузлы`, `работа с плиткой` for bathrooms
- `гидроизоляция` for waterproofing
- exterior hero candidates for facades

Do not use:

- chaotic process photos in primary hero slots
- unclear low-value images in top sections

## 8. Acceptance criteria

- All service templates visibly belong to the same system as homepage.
- `Radovi` reads as proof/case page, not gallery filler.
- `Kontakt` is the calmest and clearest page in the system.
- Photo choices reinforce trust and control, not chaos.
- Frames map cleanly to the future `service`, `radovi` and `kontakt` code modules.
