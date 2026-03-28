"use client";

import Link from "next/link";
import { ArrowUp, Check, LoaderCircle, ShieldCheck, Sparkles, X } from "lucide-react";
import { KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  AssistantLaunchOptions,
  AssistantMessageSnapshot,
  AssistantModalStateSeed,
  AssistantModalStatus
} from "@/components/assistant/assistant.types";
import { ModalConsentStep } from "@/components/ui/modal/ModalConsentStep";
import { ModalShell } from "@/components/ui/modal/ModalShell";
import { AssistantModalReturnSnapshot } from "@/components/ui/modal/modal-return";
import { useModalDismiss } from "@/components/ui/modal/useModalDismiss";
import { useModalPrivacyNavigation } from "@/components/ui/modal/useModalPrivacyNavigation";
import { assistantApiPath, getAssistantModalContent, getAssistantTeaserContent } from "@/content/assistant";
import { getAssistantPrivacyPath } from "@/content/privacy-policy";
import { getSiteConfig } from "@/content/site-config";
import { trackEvent } from "@/lib/analytics/events";

type AssistantMessage = {
  id: string;
  role: "assistant" | "user" | "system";
  text: string;
};

type AssistantAskApiResponse = {
  ok?: boolean;
  request_id?: string;
  status?: "pending" | "answered";
  poll_interval_ms?: number;
  poll_max_attempts?: number;
  error?: string;
};

type AssistantAnswerApiResponse = {
  request_id?: string;
  question?: string;
  answer?: string;
  status?: "pending" | "answered";
  error?: string;
};

type AssistantModalProps = {
  isOpen: boolean;
  launchOptions: AssistantLaunchOptions;
  initialState?: AssistantModalStateSeed | null;
  onClose: () => void;
};

function createMessage(role: AssistantMessage["role"], text: string): AssistantMessage {
  return {
    id: `${role}-${crypto.randomUUID()}`,
    role,
    text
  };
}

function createRuntimeMessages(messages: AssistantMessageSnapshot[]) {
  return messages.map((message) => createMessage(message.role, message.text));
}

const DEFAULT_POLL_INTERVAL_MS = 5000;
const DEFAULT_MAX_POLL_ATTEMPTS = 120;

function normalizePositiveNumber(value: number | undefined, fallback: number) {
  if (!value || !Number.isFinite(value) || value <= 0) {
    return fallback;
  }

  return Math.floor(value);
}

function waitForPollDelay(delayMs: number, signal: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException("Aborted", "AbortError"));
      return;
    }

    const timeoutId = window.setTimeout(() => {
      signal.removeEventListener("abort", handleAbort);
      resolve();
    }, delayMs);

    function handleAbort() {
      window.clearTimeout(timeoutId);
      signal.removeEventListener("abort", handleAbort);
      reject(new DOMException("Aborted", "AbortError"));
    }

    signal.addEventListener("abort", handleAbort);
  });
}

export function AssistantModal({ isOpen, launchOptions, initialState, onClose }: AssistantModalProps) {
  const { locale, page, initialIntent, initialMessage } = launchOptions;
  const content = getAssistantModalContent(locale);
  const siteConfig = getSiteConfig(locale);
  const contactPath = locale === "hr" ? "/hr/kontakt" : "/kontakt";
  const privacyHref = getAssistantPrivacyPath(locale);
  const navigateToPrivacy = useModalPrivacyNavigation();
  const [isConsentChecked, setIsConsentChecked] = useState(initialState?.isConsentChecked ?? false);
  const [isChatUnlocked, setIsChatUnlocked] = useState(initialState?.isChatUnlocked ?? false);
  const [conversationId] = useState(initialState?.conversationId ?? crypto.randomUUID());
  const [requestId, setRequestId] = useState(initialState?.requestId ?? null);
  const [composerValue, setComposerValue] = useState(initialState?.composerValue ?? initialMessage ?? "");
  const [messages, setMessages] = useState<AssistantMessage[]>(
    initialState?.messages?.length
      ? createRuntimeMessages(initialState.messages)
      : [createMessage("assistant", content.greeting)]
  );
  const [status, setStatus] = useState<AssistantModalStatus>(
    initialState?.status === "sending" ? "idle" : initialState?.status ?? "idle"
  );
  const submitLabel = locale === "hr" ? "Posalji poruku" : "Отправить сообщение";
  const transcriptRef = useRef<HTMLDivElement | null>(null);
  const activeRequestControllerRef = useRef<AbortController | null>(null);
  const hasMessagesBeyondGreeting = messages.length > 1;

  useModalDismiss({ isOpen, onClose });

  const stopActiveRequest = useCallback(() => {
    activeRequestControllerRef.current?.abort();
    activeRequestControllerRef.current = null;
    setRequestId(null);
  }, []);

  useEffect(() => {
    if (!isChatUnlocked) {
      return;
    }

    transcriptRef.current?.scrollTo({
      top: transcriptRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [isChatUnlocked, messages, status]);

  useEffect(() => {
    if (isOpen) {
      return;
    }

    stopActiveRequest();
  }, [isOpen, stopActiveRequest]);

  useEffect(() => {
    return () => {
      stopActiveRequest();
    };
  }, [stopActiveRequest]);

  const handoffActions = useMemo(
    () => ({
      contactHref: contactPath,
      whatsAppHref: siteConfig.whatsAppUrl
    }),
    [contactPath, siteConfig.whatsAppUrl]
  );

  if (!isOpen) {
    return null;
  }

  function createPrivacyReturnSnapshot(): AssistantModalReturnSnapshot {
    return {
      type: "assistant",
      returnPath: page,
      returnScrollY: window.scrollY,
      launchOptions,
      state: {
        isConsentChecked,
        isChatUnlocked,
        conversationId,
        requestId,
        messages: messages.map((message) => ({
          role: message.role,
          text: message.text
        })),
        composerValue,
        status: status === "sending" ? "idle" : status
      }
    };
  }

  function handlePrivacyClick() {
    navigateToPrivacy({
      href: privacyHref,
      snapshot: createPrivacyReturnSnapshot()
    });
  }

  async function pollForAnswer(
    currentRequestId: string,
    pollIntervalMs: number,
    maxAttempts: number,
    signal: AbortSignal
  ) {
    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      if (attempt > 1) {
        await waitForPollDelay(pollIntervalMs, signal);
      }

      const response = await fetch(`${assistantApiPath}?request_id=${encodeURIComponent(currentRequestId)}`, {
        method: "GET",
        cache: "no-store",
        signal
      });

      const payload = (await response.json()) as AssistantAnswerApiResponse;
      if (!response.ok) {
        throw new Error(payload.error ?? "Assistant bridge poll failed");
      }

      if (payload.status === "answered") {
        return payload;
      }
    }

    throw new Error("Assistant bridge poll timeout");
  }

  async function sendMessage(messageText: string, intent?: string) {
    const trimmed = messageText.trim();
    if (!trimmed || status === "sending") {
      return;
    }

    stopActiveRequest();

    trackEvent("atrium_assistant_message_attempt", {
      pathname: page,
      locale,
      message_length: trimmed.length,
      intent: intent ?? null
    });

    const userMessage = createMessage("user", trimmed);
    setMessages((current) => [...current, userMessage]);
    setComposerValue("");
    setStatus("sending");

    const requestController = new AbortController();
    activeRequestControllerRef.current = requestController;

    try {
      const response = await fetch(assistantApiPath, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          locale,
          page,
          message: trimmed,
          intent,
          conversationId,
          source: "site-assistant"
        }),
        signal: requestController.signal
      });

      const payload = (await response.json()) as AssistantAskApiResponse;
      if (!response.ok || !payload.ok || !payload.request_id) {
        throw new Error(payload.error ?? "Assistant bridge ask failed");
      }

      setRequestId(payload.request_id);

      const pollIntervalMs = normalizePositiveNumber(payload.poll_interval_ms, DEFAULT_POLL_INTERVAL_MS);
      const maxPollAttempts = normalizePositiveNumber(payload.poll_max_attempts, DEFAULT_MAX_POLL_ATTEMPTS);
      const answerPayload = await pollForAnswer(payload.request_id, pollIntervalMs, maxPollAttempts, requestController.signal);
      const answer = answerPayload.answer?.trim();

      if (!answer) {
        throw new Error("Assistant bridge returned empty answer");
      }

      setMessages((current) => [...current, createMessage("assistant", answer)]);
      setStatus("idle");
      setRequestId(null);
    } catch (error) {
      if (requestController.signal.aborted || (error instanceof DOMException && error.name === "AbortError")) {
        return;
      }

      setMessages((current) => [...current, createMessage("system", content.errorReply)]);
      setStatus("error");
      setRequestId(null);
    } finally {
      if (activeRequestControllerRef.current === requestController) {
        activeRequestControllerRef.current = null;
      }
    }
  }

  async function handleConsentContinue() {
    setIsChatUnlocked(true);

    if (initialMessage?.trim()) {
      await sendMessage(initialMessage, initialIntent);
      return;
    }

    if (initialIntent) {
      await sendMessage(initialIntent, initialIntent);
    }
  }

  function handleComposerSubmit() {
    void sendMessage(composerValue);
  }

  function handleComposerKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Enter" || event.shiftKey || event.nativeEvent.isComposing) {
      return;
    }

    event.preventDefault();
    handleComposerSubmit();
  }

  function renderMessage(message: AssistantMessage) {
    if (message.role === "user") {
      return (
        <div key={message.id} className="flex justify-end">
          <div className="max-w-[80%] rounded-[1.5rem] rounded-br-md bg-warm-orange px-4 py-3 text-sm leading-relaxed text-white shadow-lg shadow-warm-orange/20">
            {message.text}
          </div>
        </div>
      );
    }

    const tone =
      message.role === "assistant"
        ? "bg-secondary/55 text-charcoal border-border"
        : "bg-[#fff4ef] text-charcoal border-warm-orange/20";

    return (
      <div key={message.id} className="flex justify-start">
        <div className={`max-w-[85%] rounded-[1.5rem] rounded-bl-md border px-4 py-3 text-sm leading-relaxed ${tone}`}>
          {message.text}
        </div>
      </div>
    );
  }

  return (
    <ModalShell
      closeLabel={content.closeLabel}
      onClose={onClose}
      containerClassName="fixed inset-0 z-[95] flex items-end justify-center overflow-y-auto px-0 pb-0 pt-3 sm:items-center sm:px-6 sm:py-6 lg:px-8"
      backdropClassName="absolute inset-0 bg-charcoal/72 backdrop-blur-md"
      panelClassName="relative z-10 flex h-[min(calc(100dvh-0.75rem),920px)] w-full max-w-5xl flex-col overflow-hidden rounded-t-[2rem] rounded-b-none border border-white/10 bg-white/92 shadow-[0_40px_120px_rgba(14,22,32,0.38)] backdrop-blur-xl sm:h-[min(92dvh,920px)] sm:rounded-[2rem]"
    >
      <div className="border-b border-border bg-white/90 px-5 py-5 sm:px-7">
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-warm-orange/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-warm-orange">
              <Sparkles className="h-3.5 w-3.5" />
              {content.badge}
            </div>
            <h2 className="text-2xl font-medium text-charcoal sm:text-3xl">{content.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-light sm:text-base">{content.description}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-charcoal transition-colors hover:border-warm-orange hover:text-warm-orange"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {!isChatUnlocked ? (
        <ModalConsentStep
          headerIcon={<ShieldCheck className="h-7 w-7" />}
          checkboxIndicator={<Check className="h-4 w-4" />}
          title={content.consentTitle}
          description={content.consentDescription}
          checkboxLabel={content.consentCheckboxLabel}
          isChecked={isConsentChecked}
          onCheckedChange={setIsConsentChecked}
          supplemental={
            <div className="mt-5 rounded-2xl bg-secondary/40 px-4 py-4 text-sm text-charcoal-light">
              {content.privacyPrefix}{" "}
              <button
                type="button"
                onClick={handlePrivacyClick}
                className="font-medium text-charcoal underline decoration-warm-orange/50 underline-offset-4 transition-colors hover:text-warm-orange"
              >
                {content.privacyLabel}
              </button>
              .
            </div>
          }
          hint={content.consentHint}
          actions={
            <button
              type="button"
              onClick={handleConsentContinue}
              disabled={!isConsentChecked}
              className="inline-flex items-center justify-center rounded-full bg-warm-orange px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-warm-orange-dark disabled:cursor-not-allowed disabled:bg-warm-orange/40"
            >
              {content.continueLabel}
            </button>
          }
          wrapperClassName="flex h-full min-h-0 overflow-y-auto bg-secondary/30 px-4 py-4 sm:items-center sm:justify-center sm:px-10 sm:py-8"
          cardClassName="w-full max-w-2xl max-h-full overflow-y-auto rounded-[2rem] border border-border bg-white p-6 shadow-[0_24px_80px_rgba(19,31,45,0.08)] sm:p-10"
          indicatorBaseClassName="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border-2 shadow-[0_1px_3px_rgba(19,31,45,0.08)] transition-colors"
          indicatorCheckedClassName="border-warm-orange bg-warm-orange text-white shadow-[0_0_0_3px_rgba(234,91,12,0.14)]"
          indicatorUncheckedClassName="border-warm-orange/55 bg-[#fff4ef] text-transparent"
        />
      ) : (
        <>
          <div className="flex min-h-0 flex-1 flex-col bg-secondary/20 px-4 py-4 sm:px-6 sm:py-6">
            <div className="mb-4 rounded-[1.75rem] border border-white/70 bg-white/80 px-5 py-4 backdrop-blur-sm">
              <div className="mb-1 text-sm font-medium text-charcoal">{content.badge}</div>
              <div className="text-sm leading-relaxed text-charcoal-light">{content.emptyStateLabel}</div>
            </div>

            <div ref={transcriptRef} className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
              {messages.map(renderMessage)}

              {!hasMessagesBeyondGreeting ? (
                <div className="flex flex-wrap gap-2">
                  {getAssistantTeaserContent(locale).suggestions.map((suggestion) => (
                    <button
                      key={suggestion.id}
                      type="button"
                      onClick={() => void sendMessage(suggestion.message, suggestion.label)}
                      className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-warm-orange hover:text-warm-orange"
                    >
                      {suggestion.label}
                    </button>
                  ))}
                </div>
              ) : null}

              {status === "sending" ? (
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-2 rounded-[1.5rem] rounded-bl-md border border-border bg-secondary/55 px-4 py-3 text-sm text-charcoal-light">
                    <LoaderCircle className="h-4 w-4 animate-spin text-warm-orange" />
                    {content.loadingLabel}
                  </div>
                </div>
              ) : null}

              {status === "error" ? (
                <div className="rounded-[1.75rem] border border-warm-orange/20 bg-[#fff4ef] p-5">
                  <h3 className="mb-2 text-base font-medium text-charcoal">{content.fallbackTitle}</h3>
                  <p className="text-sm leading-relaxed text-charcoal-light">{content.fallbackDescription}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href={handoffActions.contactHref}
                      onClick={onClose}
                      className="inline-flex items-center justify-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-charcoal-light"
                    >
                      {content.contactCtaLabel}
                    </Link>
                    <a
                      href={handoffActions.whatsAppHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:border-warm-orange hover:text-warm-orange"
                    >
                      {content.whatsAppCtaLabel}
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="border-t border-border bg-white/92 px-4 py-4 sm:px-6">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleComposerSubmit();
              }}
              className="rounded-[1.75rem] border border-border bg-secondary/35 p-3"
            >
              <div className="flex items-end gap-3">
                <textarea
                  value={composerValue}
                  onChange={(event) => setComposerValue(event.target.value)}
                  onKeyDown={handleComposerKeyDown}
                  rows={1}
                  placeholder={content.composerPlaceholder}
                  className="min-h-[52px] flex-1 resize-none bg-transparent px-3 py-2 text-sm text-charcoal placeholder:text-charcoal-light/70 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label={submitLabel}
                  disabled={!composerValue.trim() || status === "sending"}
                  className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-charcoal text-white transition-colors hover:bg-charcoal-light disabled:cursor-not-allowed disabled:bg-charcoal/35"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </ModalShell>
  );
}
