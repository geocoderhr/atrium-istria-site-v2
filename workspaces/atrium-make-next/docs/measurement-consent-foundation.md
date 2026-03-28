# Atrium Istria: Measurement + Consent Foundation

This project uses an env-driven GTM + dataLayer setup with Google Consent Mode v2 defaults.

## Environment Variables

Add these values to your local/production env:

- `NEXT_PUBLIC_GTM_ID` - GTM container id (`GTM-XXXXXXX`).
- `NEXT_PUBLIC_GA4_MEASUREMENT_ID` - optional GA4 measurement id passed into dataLayer context.
- `NEXT_PUBLIC_ANALYTICS_DEBUG` - optional (`true` prints event payloads in browser console).

## Bootstrap Architecture

- `src/components/analytics/AnalyticsInitializer.tsx` initializes:
  - `window.dataLayer`
  - `window.gtag` shim
  - Consent Mode default state (`denied` for analytics/ad signals)
- Consent state is restored from local storage during client bootstrap before event tracking starts.
- GTM script is injected only when `NEXT_PUBLIC_GTM_ID` is defined.
- No direct page-level `gtag('config')` calls are used.

## Consent Storage Contract

Storage key: `atrium-consent-state:v1`

Stored JSON shape:

```json
{
  "version": 1,
  "status": "accepted | rejected | custom",
  "analytics": true,
  "updatedAt": "ISO timestamp"
}
```

Behavior:

- Default: denied consent mode values.
- Banner shown until a decision is saved.
- User can `Accept`, `Reject`, or `Save preferences` (analytics toggle).
- Saved state is restored on next visit and applied to Consent Mode.

## dataLayer Event Contract

All events are pushed with shared context (`pathname`, `locale`, `page_type`, timestamp):

- `atrium_page_view`
- `atrium_service_page_view`
- `atrium_language_switch`
- `atrium_lead_form_open`
- `atrium_lead_form_consent_accept`
- `atrium_lead_form_iframe_open`
- `atrium_contact_click`
- `atrium_assistant_open`
- `atrium_assistant_message_attempt`
- `atrium_radovi_filter_change`
- `atrium_consent_accept`
- `atrium_consent_reject`
- `atrium_consent_update`

## Production Handoff Steps

1. Set `NEXT_PUBLIC_GTM_ID` in production env.
2. Publish GTM container with Consent Mode-aware tags and consent checks.
3. Map dataLayer events to GA4 events in GTM.
4. If needed, use `NEXT_PUBLIC_GA4_MEASUREMENT_ID` in GTM variables/mappings.
5. Validate in GTM Preview + GA4 DebugView:
   - no analytics hit before consent grant
   - consent update events fire correctly
   - key business events arrive with route context

## Follow-up (Legal Copy)

This task does not rewrite legal text. If stricter legal disclosure is required (cookie categories, retention, processors), update privacy/legal copy in a separate legal/content task.
