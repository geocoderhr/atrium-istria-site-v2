"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics/events";

type ContactMethod = "phone" | "email" | "whatsapp" | "telegram" | "facebook" | "messenger";

function resolveContactMethod(href: string): ContactMethod | null {
  const normalizedHref = href.trim().toLowerCase();

  if (normalizedHref.startsWith("tel:")) {
    return "phone";
  }

  if (normalizedHref.startsWith("mailto:")) {
    return "email";
  }

  if (normalizedHref.includes("wa.me") || normalizedHref.includes("whatsapp")) {
    return "whatsapp";
  }

  if (normalizedHref.includes("t.me") || normalizedHref.includes("telegram")) {
    return "telegram";
  }

  if (normalizedHref.includes("m.me") || normalizedHref.includes("messenger.com")) {
    return "messenger";
  }

  if (normalizedHref.includes("facebook.com")) {
    return "facebook";
  }

  return null;
}

export function ContactLinkTracker() {
  useEffect(() => {
    const onClickCapture = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      const method = resolveContactMethod(anchor.href);
      if (!method) {
        return;
      }

      trackEvent("atrium_contact_click", {
        contact_method: method,
        contact_href: anchor.href,
        link_text: anchor.textContent?.trim() || undefined
      });
    };

    document.addEventListener("click", onClickCapture, { capture: true });

    return () => {
      document.removeEventListener("click", onClickCapture, { capture: true });
    };
  }, []);

  return null;
}
