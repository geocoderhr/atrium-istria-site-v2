import { getChatBridgeConfig } from "@/chatBridge/config";
import { createN8nTelegramChatBridgeProvider } from "@/chatBridge/providers/n8nTelegram";
import { ChatBridgeAnswerResponse, ChatBridgeAskPayload, ChatBridgeAskResponse } from "@/chatBridge/types";

export type ChatBridgeProvider = {
  ask: (payload: ChatBridgeAskPayload) => Promise<ChatBridgeAskResponse>;
  getAnswer: (requestId: string) => Promise<ChatBridgeAnswerResponse>;
};

let cachedProvider: ChatBridgeProvider | null = null;

export function getChatBridgeProvider(): ChatBridgeProvider {
  if (cachedProvider) {
    return cachedProvider;
  }

  const config = getChatBridgeConfig();
  cachedProvider = createN8nTelegramChatBridgeProvider(config);
  return cachedProvider;
}

