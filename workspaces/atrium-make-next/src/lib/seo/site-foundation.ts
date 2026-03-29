const LOCAL_DEVELOPMENT_SITE_URL = "http://localhost:3000";
const DEFAULT_PRODUCTION_SITE_URL = "https://atrium.uslugeplus.com";

export const GOOGLE_VERIFICATION_TOKEN = "DzhUcTDCmzP2t4HJb054cacHl4oaEOGgCwbc3ezZY4A";
export const GOOGLE_VERIFICATION_FILE_NAME = "googlef7f14d5470db83ba.html";
export const DEFAULT_SOCIAL_IMAGE_PATH = "/site/home/hero-main-current.jpg";

function normalizeSiteUrl(value: string | undefined) {
  if (!value) {
    return null;
  }

  try {
    const normalized = new URL(value);

    return normalized.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}

function isLocalhostSiteUrl(value: string) {
  try {
    const parsed = new URL(value);
    const hostname = parsed.hostname.toLowerCase();

    return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
  } catch {
    return false;
  }
}

export function resolveSiteUrl() {
  const isDevelopment = process.env.NODE_ENV === "development";
  const envSiteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

  if (envSiteUrl) {
    if (!isDevelopment && isLocalhostSiteUrl(envSiteUrl)) {
      return DEFAULT_PRODUCTION_SITE_URL;
    }

    return envSiteUrl;
  }

  if (isDevelopment) {
    return LOCAL_DEVELOPMENT_SITE_URL;
  }

  return DEFAULT_PRODUCTION_SITE_URL;
}
