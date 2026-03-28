import {
  CONSENT_STORAGE_KEY,
  CONSENT_STORAGE_VERSION
} from "@/lib/analytics/constants";
import { pushDataLayer } from "@/lib/analytics/datalayer";

export type ConsentDecisionStatus = "accepted" | "rejected" | "custom";

export type ConsentState = {
  version: number;
  status: ConsentDecisionStatus;
  analytics: boolean;
  updatedAt: string;
};

type ConsentModePayload = {
  ad_storage: "denied" | "granted";
  ad_user_data: "denied" | "granted";
  ad_personalization: "denied" | "granted";
  analytics_storage: "denied" | "granted";
  functionality_storage: "denied" | "granted";
  security_storage: "denied" | "granted";
};

const CONSENT_DEFAULT_STATE: ConsentModePayload = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  functionality_storage: "granted",
  security_storage: "granted"
};

function canUseBrowserStorage() {
  return typeof window !== "undefined";
}

export function toConsentModePayload(state: Pick<ConsentState, "analytics">): ConsentModePayload {
  return {
    ...CONSENT_DEFAULT_STATE,
    analytics_storage: state.analytics ? "granted" : "denied"
  };
}

export function applyConsentModeUpdate(state: Pick<ConsentState, "analytics">) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("consent", "update", toConsentModePayload(state));
}

export function readConsentState() {
  if (!canUseBrowserStorage()) {
    return null;
  }

  const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as ConsentState;

    if (
      parsed &&
      typeof parsed === "object" &&
      parsed.version === CONSENT_STORAGE_VERSION &&
      (parsed.status === "accepted" || parsed.status === "rejected" || parsed.status === "custom") &&
      typeof parsed.analytics === "boolean" &&
      typeof parsed.updatedAt === "string"
    ) {
      return parsed;
    }
  } catch {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  }

  return null;
}

export function persistConsentState(state: ConsentState) {
  if (!canUseBrowserStorage()) {
    return;
  }

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
}

export function createConsentState(status: ConsentDecisionStatus, analytics: boolean): ConsentState {
  return {
    version: CONSENT_STORAGE_VERSION,
    status,
    analytics,
    updatedAt: new Date().toISOString()
  };
}

export function emitConsentEvent(state: ConsentState) {
  if (state.status === "accepted") {
    pushDataLayer({ event: "atrium_consent_accept", analytics: state.analytics, consent_status: state.status });
    return;
  }

  if (state.status === "rejected") {
    pushDataLayer({ event: "atrium_consent_reject", analytics: state.analytics, consent_status: state.status });
    return;
  }

  pushDataLayer({ event: "atrium_consent_update", analytics: state.analytics, consent_status: state.status });
}

export function restoreConsentState() {
  const state = readConsentState();
  if (!state) {
    return null;
  }

  applyConsentModeUpdate(state);
  return state;
}
