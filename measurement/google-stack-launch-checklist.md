# Google Stack Launch Checklist

Дата: 2026-03-24

## 1. Access

- [ ] Google account with admin or editor access is available
- [ ] Decision made who owns GTM, GA4 and GSC long-term
- [ ] Final primary domain is approved
- [ ] DNS access is available for domain verification
- [ ] Existing Search Console verification file is preserved
- [ ] Existing Search Console meta verification token is preserved

## 2. GTM

- [ ] Create production container `ATRIUMISTRIA-WEB-PROD`
- [ ] Create staging container `ATRIUMISTRIA-WEB-STG`
- [ ] Install GTM snippets in website layout
- [ ] Configure consent initialization
- [ ] Add GA4 configuration tag
- [ ] Add GA4 event tags or dataLayer mapping strategy

## 3. GA4

- [ ] Create property `Atrium Istria - Web - Prod`
- [ ] Create property `Atrium Istria - Web - Staging`
- [ ] Add web streams
- [ ] Confirm timezone and currency
- [ ] Mark `lead_form_submit` as key event
- [ ] Mark `phone_click` as key event
- [ ] Mark `email_click` as key event
- [ ] Mark `hero_conversation_start` as key event
- [ ] Register custom dimensions if implementation requires them

## 4. GSC

- [ ] Create domain property for final domain
- [ ] Verify ownership via DNS
- [ ] Copy `googlef7f14d5470db83ba.html` to `public/`
- [ ] Add `google-site-verification` meta to root metadata / layout
- [ ] Submit sitemap
- [ ] Check indexing coverage after launch
- [ ] Review first queries and landing pages after indexation begins

## 5. Consent

- [ ] Banner copy prepared for EU traffic
- [ ] Banner style aligns with Atrium visual system
- [ ] Consent defaults set to denied
- [ ] Accept flow tested
- [ ] Reject flow tested
- [ ] Consent events captured

## 6. Validation

- [ ] Realtime GA4 sees page views
- [ ] Realtime GA4 sees lead flow events
- [ ] GTM Preview shows correct firing order
- [ ] Search Console property verified
- [ ] robots.txt available
- [ ] sitemap.xml available
- [ ] canonical tags checked
- [ ] hreflang checked when multilingual version ships

## 7. Reporting

- [ ] Create Looker Studio dashboard or equivalent combined reporting view
- [ ] Add landing page performance view
- [ ] Add service page performance view
- [ ] Add search queries / CTR view
- [ ] Add device and language split view

## 8. IDs to fill

- Production domain: `TBD`
- GTM production container ID: `TBD`
- GTM staging container ID: `TBD`
- GA4 production measurement ID: `TBD`
- GA4 staging measurement ID: `TBD`
- GSC property: `TBD`
- Search Console verification file: `googlef7f14d5470db83ba.html`
- Search Console verification meta token: `DzhUcTDCmzP2t4HJb054cacHl4oaEOGgCwbc3ezZY4A`
