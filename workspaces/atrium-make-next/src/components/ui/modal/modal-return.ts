"use client";

import { AssistantLaunchOptions, AssistantModalStateSeed } from "@/components/assistant/assistant.types";
import { LeadFormModalStateSeed } from "@/components/lead-form/lead-form.types";
import { Locale } from "@/content/types";

const MODAL_RETURN_STORAGE_KEY = "atrium-modal-return";

export type AssistantModalReturnSnapshot = {
  type: "assistant";
  returnPath: string;
  returnScrollY: number;
  launchOptions: AssistantLaunchOptions;
  state: AssistantModalStateSeed;
};

export type LeadFormModalReturnSnapshot = {
  type: "lead-form";
  returnPath: string;
  returnScrollY: number;
  locale: Locale;
  state: LeadFormModalStateSeed;
};

export type ModalReturnSnapshot = AssistantModalReturnSnapshot | LeadFormModalReturnSnapshot;

function isAssistantModalReturnSnapshot(value: unknown): value is AssistantModalReturnSnapshot {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<AssistantModalReturnSnapshot>;
  const requestId = candidate.state?.requestId;
  const isRequestIdValid =
    requestId === undefined || requestId === null || typeof requestId === "string";

  return (
    candidate.type === "assistant" &&
    typeof candidate.returnPath === "string" &&
    typeof candidate.returnScrollY === "number" &&
    !!candidate.launchOptions &&
    typeof candidate.launchOptions.page === "string" &&
    !!candidate.state &&
    Array.isArray(candidate.state.messages) &&
    isRequestIdValid
  );
}

function isLeadFormModalReturnSnapshot(value: unknown): value is LeadFormModalReturnSnapshot {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<LeadFormModalReturnSnapshot>;

  return (
    candidate.type === "lead-form" &&
    typeof candidate.returnPath === "string" &&
    typeof candidate.returnScrollY === "number" &&
    (candidate.locale === "ru" || candidate.locale === "hr") &&
    !!candidate.state
  );
}

export function readModalReturnSnapshot() {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.sessionStorage.getItem(MODAL_RETURN_STORAGE_KEY);
  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue) as unknown;

    if (isAssistantModalReturnSnapshot(parsed) || isLeadFormModalReturnSnapshot(parsed)) {
      return parsed;
    }
  } catch {
    window.sessionStorage.removeItem(MODAL_RETURN_STORAGE_KEY);
  }

  return null;
}

export function writeModalReturnSnapshot(snapshot: ModalReturnSnapshot) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(MODAL_RETURN_STORAGE_KEY, JSON.stringify(snapshot));
}

export function clearModalReturnSnapshot() {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.removeItem(MODAL_RETURN_STORAGE_KEY);
}

export function consumeModalReturnSnapshot<TType extends ModalReturnSnapshot["type"]>(
  type: TType,
  pathname: string
) {
  const snapshot = readModalReturnSnapshot();

  if (!snapshot || snapshot.type !== type || snapshot.returnPath !== pathname) {
    return null;
  }

  clearModalReturnSnapshot();
  return snapshot as Extract<ModalReturnSnapshot, { type: TType }>;
}
