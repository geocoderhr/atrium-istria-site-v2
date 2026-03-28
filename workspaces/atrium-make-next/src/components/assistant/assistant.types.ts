import { Locale } from "@/content/types";

export type AssistantLaunchOptions = {
  locale: Locale;
  page: string;
  initialMessage?: string;
  initialIntent?: string;
};

export type AssistantMessageRole = "assistant" | "user" | "system";

export type AssistantMessageSnapshot = {
  role: AssistantMessageRole;
  text: string;
};

export type AssistantModalStatus = "idle" | "sending" | "error";

export type AssistantModalStateSeed = {
  isConsentChecked: boolean;
  isChatUnlocked: boolean;
  conversationId: string;
  requestId: string | null;
  messages: AssistantMessageSnapshot[];
  composerValue: string;
  status: AssistantModalStatus;
};
