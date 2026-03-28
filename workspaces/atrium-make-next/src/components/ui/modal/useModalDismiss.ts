"use client";

import { useEffect } from "react";

import { lockBodyScroll } from "@/components/ui/modal/modal-scroll-lock";

type UseModalDismissOptions = {
  isOpen: boolean;
  onClose: () => void;
};

export function useModalDismiss({ isOpen, onClose }: UseModalDismissOptions) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const releaseBodyScrollLock = lockBodyScroll();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handlePageHide = () => {
      releaseBodyScrollLock();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pagehide", handlePageHide);

    return () => {
      releaseBodyScrollLock();
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, [isOpen, onClose]);
}
