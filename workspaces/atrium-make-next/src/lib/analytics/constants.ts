export const ANALYTICS_DATA_LAYER_NAME = "dataLayer";
export const CONSENT_STORAGE_KEY = "atrium-consent-state:v1";
export const CONSENT_STORAGE_VERSION = 1;

export type AtriumEventName =
  | "atrium_page_view"
  | "atrium_service_page_view"
  | "atrium_language_switch"
  | "atrium_lead_form_open"
  | "atrium_lead_form_consent_accept"
  | "atrium_lead_form_iframe_open"
  | "atrium_contact_click"
  | "atrium_assistant_open"
  | "atrium_assistant_message_attempt"
  | "atrium_radovi_filter_change"
  | "atrium_consent_accept"
  | "atrium_consent_reject"
  | "atrium_consent_update";

export const SERVICE_SLUGS = [
  "adaptacije-kuca-i-stanova",
  "kupaonice",
  "fasade",
  "rekonstrukcije",
  "hidroizolacija"
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];
