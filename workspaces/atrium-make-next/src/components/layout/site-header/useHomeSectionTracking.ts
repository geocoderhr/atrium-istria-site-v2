"use client";

import { useEffect, useState } from "react";

import {
  HEADER_SCROLL_THRESHOLD,
  HOME_SECTION_ACTIVATION_OFFSET,
  HOME_SERVICES_SECTION_ID
} from "./site-header.constants";
import { HomeSection, PendingNavTarget } from "./site-header.types";

type UseHomeSectionTrackingOptions = {
  isHomePage: boolean;
  pendingNavTarget: PendingNavTarget;
  onPendingNavTargetChange: (target: PendingNavTarget) => void;
};

export function useHomeSectionTracking({
  isHomePage,
  pendingNavTarget,
  onPendingNavTargetChange
}: UseHomeSectionTrackingOptions) {
  const [homeSection, setHomeSection] = useState<HomeSection>("hero");

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const updateHomeSection = () => {
      const section = document.getElementById(HOME_SERVICES_SECTION_ID);

      if (!section) {
        setHomeSection("hero");
        if (pendingNavTarget === "services") {
          onPendingNavTargetChange(null);
        }
        return;
      }

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const nextHomeSection =
        window.scrollY >= sectionTop - HOME_SECTION_ACTIVATION_OFFSET ? "services" : "hero";

      setHomeSection(nextHomeSection);

      if (pendingNavTarget === "services" && nextHomeSection === "services") {
        onPendingNavTargetChange(null);
      }

      if (pendingNavTarget === "top" && window.scrollY <= HEADER_SCROLL_THRESHOLD) {
        onPendingNavTargetChange(null);
      }
    };

    updateHomeSection();
    window.addEventListener("scroll", updateHomeSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHomeSection);
    };
  }, [isHomePage, onPendingNavTargetChange, pendingNavTarget]);

  return homeSection;
}
