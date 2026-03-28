import { NextResponse } from "next/server";

import { getChatBridgeConfig } from "@/chatBridge/config";
import { getChatBridgeProvider } from "@/chatBridge/provider";

type AssistantPostRequest = {
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as AssistantPostRequest;
  const message = body.message?.trim();

  if (!message) {
    return NextResponse.json(
      {
        error: "Message is required"
      },
      { status: 400 }
    );
  }

  try {
    const config = getChatBridgeConfig();
    if (!config.enabled) {
      return NextResponse.json(
        {
          error: "Chat bridge is disabled"
        },
        { status: 503 }
      );
    }

    const provider = getChatBridgeProvider();
    const payload = await provider.ask({ question: message });

    return NextResponse.json({
      ...payload,
      poll_interval_ms: config.pollIntervalMs,
      poll_max_attempts: config.maxPollAttempts
    });
  } catch {
    return NextResponse.json(
      {
        error: "Assistant bridge request failed"
      },
      { status: 502 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestId = searchParams.get("request_id")?.trim();

  if (!requestId) {
    return NextResponse.json(
      {
        error: "request_id is required"
      },
      { status: 400 }
    );
  }

  try {
    const config = getChatBridgeConfig();
    if (!config.enabled) {
      return NextResponse.json(
        {
          error: "Chat bridge is disabled"
        },
        { status: 503 }
      );
    }

    const provider = getChatBridgeProvider();
    const payload = await provider.getAnswer(requestId);

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "no-store"
      }
    });
  } catch {
    return NextResponse.json(
      {
        error: "Assistant bridge polling failed"
      },
      { status: 502 }
    );
  }
}
