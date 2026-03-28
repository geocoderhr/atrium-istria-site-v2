const DEFAULT_ASK_PATH = "/webhook/site-question";
const DEFAULT_ANSWER_PATH = "/webhook/site-answer";
const DEFAULT_POLL_INTERVAL_MS = 5000;
const DEFAULT_MAX_POLL_ATTEMPTS = 120;

type ChatBridgeConfig = {
  enabled: boolean;
  apiBaseUrl: string;
  askPath: string;
  answerPath: string;
  pollIntervalMs: number;
  maxPollAttempts: number;
};

function normalizeBoolean(value: string | undefined, fallback: boolean) {
  if (!value) {
    return fallback;
  }

  const normalized = value.trim().toLowerCase();
  if (normalized === "true" || normalized === "1" || normalized === "yes") {
    return true;
  }

  if (normalized === "false" || normalized === "0" || normalized === "no") {
    return false;
  }

  return fallback;
}

function normalizePositiveInteger(value: string | undefined, fallback: number) {
  if (!value) {
    return fallback;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function normalizePath(value: string | undefined, fallback: string) {
  const candidate = (value ?? fallback).trim();
  if (!candidate) {
    return fallback;
  }

  return candidate.startsWith("/") ? candidate : `/${candidate}`;
}

function normalizeBaseUrl(value: string | undefined) {
  const candidate = (value ?? "").trim();
  if (!candidate) {
    return "";
  }

  try {
    const parsed = new URL(candidate);
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return "";
  }
}

let cachedConfig: ChatBridgeConfig | null = null;

export function getChatBridgeConfig(): ChatBridgeConfig {
  if (cachedConfig) {
    return cachedConfig;
  }

  const enabled = normalizeBoolean(process.env.PUBLIC_CHAT_ENABLED, false);
  const apiBaseUrl = normalizeBaseUrl(process.env.PUBLIC_CHAT_API_BASE_URL);

  if (enabled && !apiBaseUrl) {
    throw new Error("PUBLIC_CHAT_API_BASE_URL must be a valid absolute URL when PUBLIC_CHAT_ENABLED=true");
  }

  cachedConfig = {
    enabled,
    apiBaseUrl,
    askPath: normalizePath(process.env.PUBLIC_CHAT_ASK_PATH, DEFAULT_ASK_PATH),
    answerPath: normalizePath(process.env.PUBLIC_CHAT_ANSWER_PATH, DEFAULT_ANSWER_PATH),
    pollIntervalMs: normalizePositiveInteger(process.env.PUBLIC_CHAT_POLL_INTERVAL_MS, DEFAULT_POLL_INTERVAL_MS),
    maxPollAttempts: DEFAULT_MAX_POLL_ATTEMPTS
  };

  return cachedConfig;
}

export type { ChatBridgeConfig };

