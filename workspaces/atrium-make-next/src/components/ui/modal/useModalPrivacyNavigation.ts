"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

import {
  ModalReturnSnapshot,
  clearModalReturnSnapshot,
  writeModalReturnSnapshot
} from "@/components/ui/modal/modal-return";

type NavigateToPrivacyOptions = {
  href: string;
  snapshot?: ModalReturnSnapshot | null;
};

export function useModalPrivacyNavigation() {
  const router = useRouter();

  return useCallback(
    ({ href, snapshot }: NavigateToPrivacyOptions) => {
      if (snapshot) {
        writeModalReturnSnapshot(snapshot);
      } else {
        clearModalReturnSnapshot();
      }

      router.push(href, { scroll: false });
    },
    [router]
  );
}
