"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

import {
  clearLanguageSwitchSnapshot,
  readLanguageSwitchSnapshot
} from "@/lib/routing/language-switch";

function getHeaderOffset() {
  if (typeof window === "undefined") {
    return 0;
  }

  return window.matchMedia("(min-width: 1024px)").matches ? 96 : 80;
}

function withInstantScroll(callback: () => void) {
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;

  document.documentElement.style.scrollBehavior = "auto";

  try {
    callback();
  } finally {
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  }
}

function scrollToElement(element: HTMLElement) {
  const top = Math.max(element.getBoundingClientRect().top + window.scrollY - getHeaderOffset(), 0);

  withInstantScroll(() => {
    window.scrollTo({ top, behavior: "auto" });
  });
}

function scrollToPosition(scrollY: number) {
  withInstantScroll(() => {
    window.scrollTo({
      top: Math.max(scrollY, 0),
      behavior: "auto"
    });
  });
}

function getHashTarget(hash: string | null) {
  if (!hash || hash.length < 2) {
    return null;
  }

  const rawId = hash.slice(1);
  if (!rawId) {
    return null;
  }

  try {
    return document.getElementById(decodeURIComponent(rawId)) ?? document.getElementById(rawId);
  } catch {
    return document.getElementById(rawId);
  }
}

function syncHashInUrl(hash: string | null) {
  const nextHref = `${window.location.pathname}${window.location.search}${hash ?? ""}`;
  const currentHref = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (nextHref !== currentHref) {
    window.history.replaceState(window.history.state, "", nextHref);
  }
}

export function LanguageSwitchRestore() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const snapshot = readLanguageSwitchSnapshot();
    if (!snapshot) {
      return;
    }

    if (snapshot.targetPathname !== pathname) {
      clearLanguageSwitchSnapshot();
      return;
    }

    const restoreContext = () => {
      const activeSnapshot = readLanguageSwitchSnapshot();
      if (!activeSnapshot || activeSnapshot.targetPathname !== pathname) {
        return true;
      }

      const hashTarget = getHashTarget(activeSnapshot.hash);
      if (hashTarget instanceof HTMLElement) {
        scrollToElement(hashTarget);
        syncHashInUrl(activeSnapshot.hash);
        clearLanguageSwitchSnapshot();
        return true;
      }

      if (activeSnapshot.restoreTargetId) {
        const restoreTarget = document.getElementById(activeSnapshot.restoreTargetId);

        if (restoreTarget instanceof HTMLElement) {
          scrollToElement(restoreTarget);
          syncHashInUrl(activeSnapshot.hash);
          clearLanguageSwitchSnapshot();
          return true;
        }
      }

      if (typeof activeSnapshot.scrollY === "number") {
        scrollToPosition(activeSnapshot.scrollY);
        syncHashInUrl(activeSnapshot.hash);
        clearLanguageSwitchSnapshot();
        return true;
      }

      return false;
    };

    if (restoreContext()) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      if (!restoreContext()) {
        clearLanguageSwitchSnapshot();
      }
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  return null;
}
