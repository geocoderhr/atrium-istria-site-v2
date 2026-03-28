"use client";

import { useCallback, useEffect, useState } from "react";

import { HOME_SERVICES_SECTION_ID, PENDING_NAV_TARGET_KEY } from "./site-header.constants";
import { isPendingNavTarget } from "./site-header-model";
import { PendingNavTarget } from "./site-header.types";

export function usePendingNavTarget(isHomePage: boolean) {
  const [pendingNavTarget, setPendingNavTargetState] = useState<PendingNavTarget>(null);

  const setPendingNavTarget = useCallback((target: PendingNavTarget) => {
    setPendingNavTargetState(target);
  }, []);

  const persistPendingNavTarget = useCallback((target: Exclude<PendingNavTarget, null>) => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(PENDING_NAV_TARGET_KEY, target);
    }

    setPendingNavTargetState(target);
  }, []);

  const clearPendingNavTarget = useCallback(() => {
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(PENDING_NAV_TARGET_KEY);
    }

    setPendingNavTargetState(null);
  }, []);

  useEffect(() => {
    if (!isHomePage || typeof window === "undefined") {
      return;
    }

    const storedTarget = window.sessionStorage.getItem(PENDING_NAV_TARGET_KEY);
    if (!isPendingNavTarget(storedTarget)) {
      return;
    }

    window.sessionStorage.removeItem(PENDING_NAV_TARGET_KEY);

    const performScroll = () => {
      setPendingNavTargetState(storedTarget);

      if (storedTarget === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const section = document.getElementById(HOME_SERVICES_SECTION_ID);
      if (!section) {
        setPendingNavTargetState(null);
        return;
      }

      section.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(performScroll);
    });
  }, [isHomePage]);

  return {
    pendingNavTarget,
    setPendingNavTarget,
    persistPendingNavTarget,
    clearPendingNavTarget
  };
}
