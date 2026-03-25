# Atrium Istria Measurement Foundation

Дата: 2026-03-24  
Статус: implementation-ready foundation

## 1. Purpose

Measurement для Atrium Istria нужен не как формальность, а как рабочий контур управления воронкой:

- понимать, какие страницы и услуги приводят к качественным обращениям;
- видеть, где человек заходит в разговор;
- различать search performance и on-site behavior;
- отслеживать, не ломают ли mobile UX, consent и hero ключевой путь к обращению.

## 2. Recommended stack

- `Google Tag Manager` as tag orchestration layer
- `Google Analytics 4` as behavioral analytics layer
- `Google Search Console` as search visibility layer
- `Consent Mode v2` with a lightweight consent-aware banner for EU traffic

## 3. Recommended implementation stance

### Consent strategy

Рекомендуемая реализация для v1:

- `Advanced Consent Mode` through GTM
- default consent states = denied
- consent updates after banner interaction
- lightweight integrated banner, not a heavy modal wall

Основание:

- Google описывает `advanced consent mode` как вариант, где теги загружаются с denied defaults и отправляют cookieless pings до выбора пользователя, что дает более качественное моделирование, чем basic mode. Источник: [Set up consent mode](https://support.google.com/tagmanager/answer/14009635?hl=en) и [About consent mode](https://support.google.com/tagmanager/answer/10000067?hl=en).

Ограничение:

- юридическая финализация текста баннера и конкретного CMP остается на стороне бизнеса и legal review.

## 4. Architecture

### Data flow

1. User opens page.
2. Consent banner sets default denied state.
3. GTM initializes consent-aware tags.
4. GA4 receives allowed measurement according to consent state.
5. Search Console independently collects search-side data.
6. Post-launch analysis compares:
   - GSC clicks / CTR / queries
   - GA4 sessions / landing pages / key events

### Source of truth

- Search visibility and CTR: `GSC`
- User behavior after landing: `GA4`
- Tag governance: `GTM`

Google Search Central explicitly recommends using Search Console together with Google Analytics to understand both discovery and post-click behavior. Источник: [Using Search Console and Google Analytics data for SEO](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console).

### Existing verification methods to preserve

Current site ownership should be preserved in two ways:

- HTML verification file:
  `googlef7f14d5470db83ba.html`
- meta verification tag:
  `google-site-verification = DzhUcTDCmzP2t4HJb054cacHl4oaEOGgCwbc3ezZY4A`

Implementation target in the new project:

- file goes to `public/googlef7f14d5470db83ba.html`
- meta verification lives in root metadata / root layout layer

## 5. Naming conventions

### GTM

- Production container:
  - `ATRIUMISTRIA-WEB-PROD`
- Staging container:
  - `ATRIUMISTRIA-WEB-STG`

### GA4

- Production property:
  - `Atrium Istria - Web - Prod`
- Staging property:
  - `Atrium Istria - Web - Staging`

### GSC

- Preferred final property type:
  - `Domain property`

Google Search Console recommends domain-level ownership when possible because it covers protocols and subdomains more broadly. Источник: [Domain property](https://support.google.com/webmasters/answer/10431861?hl=en).

## 6. Event taxonomy v1

| Event | When it fires | Recommended type | Key event |
| --- | --- | --- | --- |
| `page_view` | Any page load | automatic / base | No |
| `service_page_view` | Service page viewed | custom | No |
| `project_case_open` | Open or view a project case | custom | No |
| `hero_conversation_start` | User starts interaction in hero entry | custom | Yes |
| `lead_form_submit` | Successful main contact submission | custom | Primary |
| `phone_click` | User clicks tel link | custom | Yes |
| `email_click` | User clicks mailto link | custom | Yes |
| `whatsapp_or_messenger_click` | Only if such channel exists | custom | Optional |
| `language_switch` | Language changed | custom | No |
| `faq_expand` | FAQ item expanded | custom | No |
| `contact_block_interaction` | Contact section CTA click | custom | No |
| `consent_accept` | User accepts consent choices | custom | No |
| `consent_reject` | User rejects consent choices | custom | No |

## 7. Event parameters

Стандартные параметры v1:

- `page_type`
- `service_name`
- `project_slug`
- `language`
- `lead_source_section`
- `contact_method`
- `device_type`
- `consent_state`

Google Analytics allows enriching events with event parameters and recommends reusing predefined dimensions when they already exist. Источники:

- [About events](https://support.google.com/analytics/answer/9322688?hl=en)
- [[GA4] Event parameters](https://support.google.com/analytics/answer/13675006?hl=en)
- [[GA4] Create event-scoped custom dimensions](https://support.google.com/analytics/answer/14239696?hl=en)

## 8. Key events and conversions

### Primary key event

- `lead_form_submit`

### Secondary key events

- `phone_click`
- `email_click`
- `hero_conversation_start`

Google Analytics now distinguishes between `key events` for important business actions and `conversions` for ad-measurement use cases. For the website product layer we design around key events first. Источники:

- [[GA4] Mark events as key events](https://support.google.com/analytics/answer/13128484?hl=en)
- [[GA4] Conversions vs. key events in Google Analytics](https://support.google.com/analytics/answer/13965727?hl=en)

## 9. Trigger guidance

### `hero_conversation_start`

Fire when one of the following occurs:

- user focuses the hero input and enters first meaningful text;
- or user explicitly sends/submits first hero message.

Recommendation:

- avoid firing on mere focus if that overstates intent;
- prefer first non-empty input or explicit submit.

### `lead_form_submit`

Fire only on successful submission state.

Recommendation:

- do not count button clicks as a lead;
- do not count validation failures as leads.

### `service_page_view`

Fire on page load for service-template routes only.

### `project_case_open`

Fire when:

- a user opens a project detail page;
- or opens a project drawer/modal, if such UI exists.

### `faq_expand`

Pass:

- `page_type`
- `service_name` if on service page
- `faq_id` if available in implementation

## 10. Reporting layer

### Minimum dashboards

1. Acquisition and landing pages
   - sessions
   - organic sessions
   - landing pages
   - key events by page
2. Service intent performance
   - service page views
   - hero starts
   - leads
   - phone/email clicks
3. Search performance
   - queries
   - impressions
   - clicks
   - CTR
   - top landing pages
4. Device and language
   - mobile vs desktop
   - language switch behavior
   - key events by locale

### Recommended post-launch view

Use a combined reporting view for GSC + GA4, ideally in Looker Studio, following Google’s guidance for comparing clicks, sessions, CTR, landing pages and engagement. Источник: [Using Search Console and Google Analytics data for SEO](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console).

## 11. SEO instrumentation dependencies

To make GSC and GA4 useful, the website implementation must include:

- Search Console verification file in `public/`
- root-level verification meta
- canonical tags
- locale tags and `hreflang`
- sitemap
- robots
- consistent page titles
- consistent meta descriptions
- crawlable internal links
- stable route structure

## 12. Launch checklist summary

- GTM containers created
- GA4 properties created
- web data streams added
- consent mode configured
- banner implemented
- key events marked
- custom dimensions registered if needed
- Search Console property verified
- sitemap submitted
- robots checked
- real-time / debug validation completed

## 13. Known blockers

These items cannot be completed from the current local workspace alone:

- actual GA4 property creation
- GTM container creation
- Search Console verification
- DNS verification for domain property
- production consent banner publication

They require:

- Google account access
- final domain
- DNS or platform access

## 14. Implementation defaults

- Use GTM for GA4 deployment rather than hardcoding analytics everywhere in app code.
- Keep measurement IDs and container IDs in environment variables or deployment config.
- Keep consent banner visually lightweight and aligned with the brand system.
- Validate events in GA4 Realtime and DebugView before launch.
- Keep Search Console verification in both preserved forms: HTML file and meta verification tag.

## Sources

- [Google Search Central: Using Search Console and Google Analytics data for SEO](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console)
- [Google Search Central: Get started with Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start)
- [Tag Manager Help: Introduction to Tag Manager](https://support.google.com/tagmanager/answer/6102821?hl=en)
- [Tag Manager Help: Set up consent mode](https://support.google.com/tagmanager/answer/14009635?hl=en)
- [Tag Manager Help: About consent mode](https://support.google.com/tagmanager/answer/10000067?hl=en)
- [Tag Manager Help: Tag Manager consent mode support](https://support.google.com/tagmanager/answer/10718549)
- [Search Console Help: Domain property](https://support.google.com/webmasters/answer/10431861?hl=en)
- [Analytics Help: About events](https://support.google.com/analytics/answer/9322688?hl=en)
- [Analytics Help: Event parameters](https://support.google.com/analytics/answer/13675006?hl=en)
- [Analytics Help: Mark events as key events](https://support.google.com/analytics/answer/13128484?hl=en)
- [Analytics Help: Create event-scoped custom dimensions](https://support.google.com/analytics/answer/14239696?hl=en)
- [Analytics Help: Conversions vs. key events in Google Analytics](https://support.google.com/analytics/answer/13965727?hl=en)
- [Analytics Help: How to measure key events with Google Analytics](https://support.google.com/analytics/answer/12946393?hl=en)
