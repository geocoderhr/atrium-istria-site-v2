# Atrium Make Next: Agent Handoff

Last updated: 2026-03-27

This file is the working handoff for the next agent in this project. Read it before making new changes. It summarizes the refactors and bug fixes already completed in this workspace, the files that now own those responsibilities, and the areas that still need careful manual verification.

## Scope and guardrails

- Work only inside this workspace: `atrium-make-next`.
- Keep URL structure, texts, CTA copy, business logic, and external integrations unchanged unless explicitly requested.
- Do not change root locale/SEO architecture in `src/app/layout.tsx` without separate approval.
- Do not touch asset cleanup, public file optimization, or `ResizableSection` behavior without separate approval.
- Heavy new dependencies are out of scope.

## What was completed

## 1. Phase 1 refactor

- Route wrapper duplication in `src/app` was replaced with page factories in `src/lib/page-factories/`.
- Global theme CSS was separated from home-specific hero styling.
- Dead content contracts were cleaned up where they were confirmed unused.

Key files:

- `src/lib/page-factories/create-home-page-module.tsx`
- `src/lib/page-factories/create-service-page-module.tsx`
- `src/lib/page-factories/create-works-page-module.tsx`
- `src/lib/page-factories/create-contact-page-module.tsx`
- `src/lib/page-factories/create-privacy-page-module.tsx`
- `src/styles/theme.css`
- `src/styles/home-hero.css`
- `src/styles/index.css`
- `src/content/types.ts`
- `src/content/locales/ru/home.ts`
- `src/content/locales/hr/home.ts`
- `src/content/assistant.ts`
- `src/content/lead-form.ts`

Notes:

- `portfolio`, `faq`, `leadFormPrivacyUrl`, and the unused assistant webhook-not-ready content were removed from the active content contract where they did not affect runtime behavior.

## 2. Phase 2 refactor

- `HomePage` was decomposed into section parts and shared showcase hooks.
- `SiteHeader` logic was split into model/constants/hooks without changing its visual output.
- Shared modal primitives were extracted for assistant and lead form flows.

Key files:

- `src/components/sections/home/HomePage.tsx`
- `src/components/sections/home/parts/HomeHeroSection.tsx`
- `src/components/sections/home/parts/HomeServicesSection.tsx`
- `src/components/sections/home/parts/HomeProcessSection.tsx`
- `src/components/sections/home/parts/HomePricingSection.tsx`
- `src/components/sections/home/parts/HomeTrustSection.tsx`
- `src/components/sections/home/parts/HomeFinalCtaSection.tsx`
- `src/components/showcase/useShowcaseGallery.ts`
- `src/components/showcase/useShowcaseCarousel.ts`
- `src/components/layout/SiteHeader.tsx`
- `src/components/layout/site-header/site-header.types.ts`
- `src/components/layout/site-header/site-header.constants.ts`
- `src/components/layout/site-header/site-header-model.ts`
- `src/components/layout/site-header/useHomeSectionTracking.ts`
- `src/components/layout/site-header/usePendingNavTarget.ts`
- `src/components/ui/modal/ModalShell.tsx`
- `src/components/ui/modal/ModalConsentStep.tsx`
- `src/components/ui/modal/useModalDismiss.ts`
- `src/components/assistant/AssistantModal.tsx`
- `src/components/lead-form/LeadFormModal.tsx`

Notes:

- `HomePage` became a composition layer.
- `SiteHeader` remained the UI root but now delegates active-nav, pending-nav, and home-section tracking logic.
- Assistant and lead-form modals still have separate product logic, but they now share modal infrastructure.

## 3. Phase 3 refactor

- Non-interactive page sections were moved toward server shells with smaller client islands.
- Content types and locale content were split by domain instead of staying in overly large universal modules.

Key files:

- `src/components/sections/home/HomePage.tsx`
- `src/components/sections/home/HomeHeroShowcaseClient.tsx`
- `src/components/sections/radovi/WorksPage.tsx`
- `src/components/sections/radovi/WorksProjectsClient.tsx`
- `src/components/sections/kontakt/ContactPage.tsx`
- `src/components/sections/legal/PrivacyPolicyPage.tsx`
- `src/components/sections/legal/PrivacyBackButton.tsx`
- `src/content/types/shared.ts`
- `src/content/types/home.ts`
- `src/content/types/services.ts`
- `src/content/types/works.ts`
- `src/content/types/contact.ts`
- `src/content/locales/ru/home/index.ts`
- `src/content/locales/hr/home/index.ts`
- `src/content/locales/ru/services/index.ts`
- `src/content/locales/hr/services/index.ts`

Notes:

- `ServicePageTemplate` was intentionally not reworked further in Phase 3.
- `types.ts` is now a compatibility barrel.
- Home and service locale content now assemble from smaller section or slug-level files.

## 4. Post-refactor modal and navigation fixes

After the refactor phases, a series of modal/navigation bugs were fixed. These are important because they cross assistant, lead-form, privacy, gallery, and header behavior.

### Privacy return restore

Problem:

- Opening privacy policy from assistant or lead-form lost the original modal context.
- Returning from privacy could leave the page in a broken scroll-lock state.

Fix:

- Added a shared modal return snapshot flow using `sessionStorage`.
- Assistant and lead-form now store return metadata before privacy navigation and restore modal state on the way back.
- Privacy back-button is now aware of modal-origin routes.
- Scroll position is also restored so closing the restored modal returns the user to the same place on the page.

Key files:

- `src/components/ui/modal/modal-return.ts`
- `src/components/ui/modal/useModalPrivacyNavigation.ts`
- `src/components/ui/modal/modal-scroll-lock.ts`
- `src/components/ui/modal/useModalDismiss.ts`
- `src/components/sections/legal/PrivacyBackButton.tsx`
- `src/components/assistant/AssistantProvider.tsx`
- `src/components/assistant/AssistantModal.tsx`
- `src/components/lead-form/LeadFormProvider.tsx`
- `src/components/lead-form/LeadFormModal.tsx`
- `src/components/assistant/assistant.types.ts`
- `src/components/lead-form/lead-form.types.ts`

Important behavior:

- Assistant restore includes consent state, unlocked state, composer draft, messages, conversation id, and stable status.
- If privacy is opened while assistant status is `sending`, restore intentionally returns to the last stable transcript with `idle` status.
- Lead-form restore keeps the local unlocked stage. External iframe field state depends on the external provider and is not guaranteed by our code.

### Home `Usluge` / `Услуги` click bug

Problem:

- After privacy roundtrip from a modal, the home services button could stop reacting until another nav item was clicked.

Fix:

- The root cause was treated as leaked modal scroll-lock and inconsistent cleanup during route changes.
- Cleanup was centralized through the modal scroll-lock helper and `pagehide` release logic.

Key files:

- `src/components/ui/modal/modal-scroll-lock.ts`
- `src/components/ui/modal/useModalDismiss.ts`
- `src/components/ui/modal/useModalPrivacyNavigation.ts`

Note:

- Header logic was intentionally not rewritten again for this. The expectation is that services scrolling works once scroll-lock is fully released.

### Gallery versus header stacking bug

Problem:

- The gallery modal opened under or in conflict with the header, making the close control hard or impossible to click.

Fix:

- Gallery modal was moved to a portal mounted under `document.body`.
- A gallery-only overlay flag now hides the header while the fullscreen gallery is open.

Key files:

- `src/components/sections/home/ShowcaseGalleryModal.tsx`
- `src/components/ui/modal/ClientPortal.tsx`
- `src/components/ui/modal/gallery-overlay.ts`
- `src/components/layout/SiteHeader.tsx`

Important behavior:

- Header should disappear only for the fullscreen gallery overlay.
- Assistant and lead-form modals do not use the same header-hide behavior.

### Privacy navigation flicker

Problem:

- Clicking privacy from a modal briefly flashed the underlying home page before the privacy page loaded.

Fix:

- Privacy navigation no longer closes the modal first and then navigates.
- Route transition now starts immediately and the modal disappears with the navigation instead of exposing the base page for a frame.

Key files:

- `src/components/ui/modal/useModalPrivacyNavigation.ts`
- `src/components/assistant/AssistantModal.tsx`
- `src/components/lead-form/LeadFormModal.tsx`

### Consent checkbox visibility

Problem:

- Consent checkbox state could be hard to read against the white background.

Fix:

- Checkbox indicator contrast was strengthened with thicker borders, shadow, and stronger checked/unchecked visual states.

Key files:

- `src/components/ui/modal/ModalConsentStep.tsx`
- `src/components/assistant/AssistantModal.tsx`
- `src/components/lead-form/LeadFormModal.tsx`

### Assistant input behavior changes

Problem:

- Assistant text fields only submitted from the send button.
- The send button was visually redundant in the assistant flows the user was using.
- A post-consent privacy footer line inside the active assistant chat was considered unnecessary noise.

Fix:

- Assistant teaser and assistant modal now submit on `Enter`.
- `Shift+Enter` keeps newline behavior.
- Send buttons were removed from the hero teaser and the assistant modal composer.
- The bottom privacy note inside the active assistant chat window was removed.
- The privacy link remains on the consent screen, where it is still required.

Key files:

- `src/components/assistant/AssistantTeaser.tsx`
- `src/components/assistant/AssistantModal.tsx`

## Current ownership map

Use this section when you need to find the right file quickly.

### Assistant flow

- Modal provider and restore behavior: `src/components/assistant/AssistantProvider.tsx`
- Assistant modal UI and runtime logic: `src/components/assistant/AssistantModal.tsx`
- Hero teaser input and launch behavior: `src/components/assistant/AssistantTeaser.tsx`
- Shared assistant state types: `src/components/assistant/assistant.types.ts`

### Lead form flow

- Modal provider and restore behavior: `src/components/lead-form/LeadFormProvider.tsx`
- Lead form modal and consent gate: `src/components/lead-form/LeadFormModal.tsx`
- Trigger component: `src/components/lead-form/LeadFormTrigger.tsx`
- Shared lead-form state types: `src/components/lead-form/lead-form.types.ts`

### Privacy flow

- Shared modal return snapshot model: `src/components/ui/modal/modal-return.ts`
- Navigation into privacy from modals: `src/components/ui/modal/useModalPrivacyNavigation.ts`
- Privacy page back-button logic: `src/components/sections/legal/PrivacyBackButton.tsx`

### Modal infrastructure

- Shared shell: `src/components/ui/modal/ModalShell.tsx`
- Shared consent step: `src/components/ui/modal/ModalConsentStep.tsx`
- Shared dismiss behavior: `src/components/ui/modal/useModalDismiss.ts`
- Shared scroll lock helpers: `src/components/ui/modal/modal-scroll-lock.ts`
- Client portal for top-layer overlays: `src/components/ui/modal/ClientPortal.tsx`
- Gallery header-hide flag: `src/components/ui/modal/gallery-overlay.ts`

### Header and home services navigation

- Header UI root: `src/components/layout/SiteHeader.tsx`
- Header active-nav and locale-aware link model: `src/components/layout/site-header/site-header-model.ts`
- Pending nav restore: `src/components/layout/site-header/usePendingNavTarget.ts`
- Home section tracking: `src/components/layout/site-header/useHomeSectionTracking.ts`

### Gallery and works

- Home gallery client island: `src/components/sections/home/HomeHeroShowcaseClient.tsx`
- Fullscreen gallery modal: `src/components/sections/home/ShowcaseGalleryModal.tsx`
- Works page server shell: `src/components/sections/radovi/WorksPage.tsx`
- Works client island with filter and gallery state: `src/components/sections/radovi/WorksProjectsClient.tsx`

## Manual smoke checklist

Always run these manually after touching modal, header, privacy, assistant, lead-form, gallery, or works code.

- `/`
- `/hr`
- one RU service page
- one HR service page
- `/radovi`
- `/hr/radovi`
- `/kontakt`
- `/hr/kontakt`
- `/privacy-policy`
- `/hr/privacy-policy`

What to verify:

- Header logic works on home and inner pages.
- Language switch still routes to the correct locale path.
- `Usluge` or `Услуги` scrolls to the services section on the first click.
- Gallery opens above the page, header hides during gallery, and gallery close works.
- Assistant consent gate still works.
- Assistant privacy navigation and return restore modal state correctly.
- Assistant input submits on `Enter` and uses `Shift+Enter` for newline.
- Lead-form consent gate still works.
- Lead-form privacy navigation and return restore local modal state correctly.
- Privacy page back-button behaves correctly when opened directly and when opened from a modal.

## Build and verification baseline

At the end of the latest session, the repeated baseline check was:

- `npm run lint` passed
- `npm run build` passed

## Known constraints and non-goals

- Root locale/SEO architecture is still intentionally untouched.
- `SiteFooter` locale/root behavior was not converted to a server-shell pattern.
- External lead-form iframe state is outside our full control.
- Asset cleanup and public image optimization were intentionally not started.
- `ResizableSection` behavior was intentionally left alone.

## Recommended starting point for the next agent

If a new task touches assistant, lead-form, privacy, gallery, or header behavior, read these files first:

- `src/components/assistant/AssistantModal.tsx`
- `src/components/assistant/AssistantProvider.tsx`
- `src/components/lead-form/LeadFormModal.tsx`
- `src/components/lead-form/LeadFormProvider.tsx`
- `src/components/ui/modal/useModalPrivacyNavigation.ts`
- `src/components/ui/modal/modal-return.ts`
- `src/components/ui/modal/useModalDismiss.ts`
- `src/components/sections/legal/PrivacyBackButton.tsx`
- `src/components/sections/home/ShowcaseGalleryModal.tsx`
- `src/components/layout/SiteHeader.tsx`

If a new task touches content or page structure, read these first:

- `src/lib/page-factories/`
- `src/content/types/`
- `src/content/locales/index.ts`
- `src/content/locales/ru/home/index.ts`
- `src/content/locales/hr/home/index.ts`
- `src/content/locales/ru/services/index.ts`
- `src/content/locales/hr/services/index.ts`
