export type ChatBridgeRequestStatus = "pending" | "answered";

export type ChatBridgeAskPayload = {
  question: string;
};

export type ChatBridgeAskResponse = {
  ok: boolean;
  request_id: string;
  status: "pending";
};

export type ChatBridgeAnswerResponse = {
  request_id: string;
  question?: string;
  answer?: string;
  status: ChatBridgeRequestStatus;
};

