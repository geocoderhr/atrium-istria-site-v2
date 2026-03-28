import { ChatBridgeConfig } from "@/chatBridge/config";
import { ChatBridgeAnswerResponse, ChatBridgeAskPayload, ChatBridgeAskResponse } from "@/chatBridge/types";

type N8nAskResponse = {
  ok?: boolean;
  request_id?: unknown;
  status?: unknown;
};

type N8nAnswerResponse = {
  request_id?: unknown;
  question?: unknown;
  answer?: unknown;
  status?: unknown;
};

function buildUrl(baseUrl: string, path: string, searchParams?: Record<string, string>) {
  const url = new URL(path, `${baseUrl}/`);
  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      url.searchParams.set(key, value);
    }
  }
  return url;
}

function normalizePendingStatus(status: unknown): "pending" {
  return status === "pending" ? "pending" : "pending";
}

function normalizeAnswerStatus(status: unknown): "pending" | "answered" {
  if (status === "answered") {
    return "answered";
  }

  return "pending";
}

function ensureRequestId(value: unknown, source: string) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${source}: missing request_id`);
  }

  return value;
}

export function createN8nTelegramChatBridgeProvider(config: ChatBridgeConfig) {
  return {
    async ask(payload: ChatBridgeAskPayload): Promise<ChatBridgeAskResponse> {
      const response = await fetch(buildUrl(config.apiBaseUrl, config.askPath), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: payload.question })
      });

      const rawPayload = (await response.json().catch(() => null)) as N8nAskResponse | null;
      if (!response.ok || !rawPayload) {
        throw new Error("chat bridge ask request failed");
      }

      return {
        ok: rawPayload.ok !== false,
        request_id: ensureRequestId(rawPayload.request_id, "chat bridge ask response"),
        status: normalizePendingStatus(rawPayload.status)
      };
    },

    async getAnswer(requestId: string): Promise<ChatBridgeAnswerResponse> {
      const response = await fetch(
        buildUrl(config.apiBaseUrl, config.answerPath, {
          request_id: requestId
        }),
        {
          method: "GET"
        }
      );

      const rawPayload = (await response.json().catch(() => null)) as N8nAnswerResponse | null;
      if (!response.ok || !rawPayload) {
        throw new Error("chat bridge answer request failed");
      }

      return {
        request_id: ensureRequestId(rawPayload.request_id, "chat bridge answer response"),
        question: typeof rawPayload.question === "string" ? rawPayload.question : undefined,
        answer: typeof rawPayload.answer === "string" ? rawPayload.answer : undefined,
        status: normalizeAnswerStatus(rawPayload.status)
      };
    }
  };
}

