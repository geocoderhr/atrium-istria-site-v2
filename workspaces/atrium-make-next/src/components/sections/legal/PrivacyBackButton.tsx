"use client";

import { useRouter } from "next/navigation";

import { readModalReturnSnapshot } from "@/components/ui/modal/modal-return";

type PrivacyBackButtonProps = {
  homeHref: string;
  label: string;
};

export function PrivacyBackButton({ homeHref, label }: PrivacyBackButtonProps) {
  const router = useRouter();

  function handleBackClick() {
    const snapshot = readModalReturnSnapshot();

    if (snapshot) {
      router.replace(snapshot.returnPath, { scroll: false });
      return;
    }

    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(homeHref);
  }

  return (
    <button
      type="button"
      onClick={handleBackClick}
      className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 font-medium text-charcoal transition-colors hover:border-warm-orange hover:text-warm-orange"
    >
      {label}
    </button>
  );
}
