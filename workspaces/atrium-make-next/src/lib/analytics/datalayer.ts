import { ANALYTICS_DATA_LAYER_NAME } from "@/lib/analytics/constants";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
  }
}

function canUseWindow() {
  return typeof window !== "undefined";
}

export function ensureDataLayer() {
  if (!canUseWindow()) {
    return null;
  }

  if (!Array.isArray(window[ANALYTICS_DATA_LAYER_NAME])) {
    window[ANALYTICS_DATA_LAYER_NAME] = [];
  }

  return window[ANALYTICS_DATA_LAYER_NAME] as Array<Record<string, unknown> | unknown[]>;
}

export function pushDataLayer(payload: Record<string, unknown>) {
  const dataLayer = ensureDataLayer();

  if (!dataLayer) {
    return;
  }

  dataLayer.push(payload);
}
