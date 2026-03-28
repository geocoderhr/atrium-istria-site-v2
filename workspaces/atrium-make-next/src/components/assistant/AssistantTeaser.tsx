"use client";

import Link from "next/link";
import { ArrowUp, MessageCircleMore } from "lucide-react";
import { KeyboardEvent, useState } from "react";
import { usePathname } from "next/navigation";

import { useAssistantModal } from "@/components/assistant/AssistantProvider";
import { useModalPrivacyNavigation } from "@/components/ui/modal/useModalPrivacyNavigation";
import { getAssistantPrivacyPath } from "@/content/privacy-policy";
import { AssistantTeaserContent, Locale } from "@/content/types";

type AssistantTeaserProps = {
  locale: Locale;
  content: AssistantTeaserContent;
};

export function AssistantTeaser({ locale, content }: AssistantTeaserProps) {
  const pathname = usePathname();
  const { openAssistant } = useAssistantModal();
  const navigateToPrivacy = useModalPrivacyNavigation();
  const [draft, setDraft] = useState("");
  const privacyHref = getAssistantPrivacyPath(locale);
  const submitLabel = locale === "hr" ? "Posalji poruku" : "Отправить сообщение";

  const launchAssistant = (initialMessage?: string, initialIntent?: string) => {
    openAssistant({
      locale,
      page: pathname,
      initialMessage,
      initialIntent
    });
  };

  function handleDraftSubmit() {
    if (!draft.trim()) {
      return;
    }

    launchAssistant(draft);
  }

  function handleDraftKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Enter" || event.shiftKey || event.nativeEvent.isComposing) {
      return;
    }

    event.preventDefault();
    handleDraftSubmit();
  }

  return (
    <div className="hero-assistant-teaser w-full max-w-3xl border border-white/10 bg-[#ffffff78] shadow-[0_24px_60px_rgba(19,31,45,0.18)] backdrop-blur-[10px]">
      <div className="hero-assistant-head">
        <div className="hero-assistant-topline">
          <div className="hero-assistant-icon flex flex-shrink-0 items-center justify-center bg-warm-orange text-white shadow-lg shadow-warm-orange/25">
            <MessageCircleMore className="hero-assistant-icon-mark" />
          </div>

          <div className="hero-assistant-label">{content.label}</div>
        </div>

        <p className="hero-assistant-greeting">{content.greeting}</p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleDraftSubmit();
          }}
          className="hero-assistant-form"
        >
          <div className="hero-assistant-form-row">
            <textarea
              rows={1}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={handleDraftKeyDown}
              placeholder={content.placeholder}
              className="hero-assistant-input flex-1 resize-none bg-transparent text-white placeholder:text-white/55 focus:outline-none"
            />
            <button
              type="submit"
              aria-label={submitLabel}
              disabled={!draft.trim()}
              className="hero-assistant-submit inline-flex flex-shrink-0 items-center justify-center rounded-full bg-white text-charcoal shadow-[0_10px_26px_rgba(19,31,45,0.18)] transition-all hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-45"
            >
              <ArrowUp className="hero-assistant-submit-mark" />
            </button>
          </div>
        </form>

        <div className="hero-assistant-privacy text-left text-white/70">
          {content.privacyNote}{" "}
          <Link
            href={privacyHref}
            onClick={(event) => {
              event.preventDefault();
              navigateToPrivacy({ href: privacyHref });
            }}
            className="font-medium text-white underline decoration-warm-orange/45 underline-offset-4 transition-colors hover:text-white/90"
          >
            {content.privacyLinkLabel}
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
