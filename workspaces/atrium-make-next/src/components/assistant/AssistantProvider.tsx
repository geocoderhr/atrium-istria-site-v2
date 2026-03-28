"use client";

import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { AssistantModal } from "@/components/assistant/AssistantModal";
import { AssistantLaunchOptions, AssistantModalStateSeed } from "@/components/assistant/assistant.types";
import { consumeModalReturnSnapshot } from "@/components/ui/modal/modal-return";
import { trackEvent } from "@/lib/analytics/events";

type AssistantContextValue = {
  openAssistant: (options: AssistantLaunchOptions) => void;
  closeAssistant: () => void;
};

const AssistantContext = createContext<AssistantContextValue | null>(null);

export function AssistantProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [instanceKey, setInstanceKey] = useState(0);
  const [openPathname, setOpenPathname] = useState("/");
  const [initialState, setInitialState] = useState<AssistantModalStateSeed | null>(null);
  const [launchOptions, setLaunchOptions] = useState<AssistantLaunchOptions>({
    locale: "ru",
    page: "/"
  });

  const openAssistant = useCallback((options: AssistantLaunchOptions) => {
    trackEvent("atrium_assistant_open", {
      pathname: options.page,
      locale: options.locale
    });
    setLaunchOptions(options);
    setOpenPathname(options.page);
    setInitialState(null);
    setInstanceKey((current) => current + 1);
    setIsOpen(true);
  }, []);

  const closeAssistant = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      openAssistant,
      closeAssistant
    }),
    [closeAssistant, openAssistant]
  );

  useEffect(() => {
    const snapshot = consumeModalReturnSnapshot("assistant", pathname);
    if (!snapshot) {
      return;
    }

    let isCancelled = false;

    queueMicrotask(() => {
      if (isCancelled) {
        return;
      }

      setLaunchOptions(snapshot.launchOptions);
      setOpenPathname(snapshot.returnPath);
      setInitialState(snapshot.state);
      setInstanceKey((current) => current + 1);
      setIsOpen(true);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: snapshot.returnScrollY, behavior: "auto" });
        });
      });
    });

    return () => {
      isCancelled = true;
    };
  }, [pathname]);

  return (
    <AssistantContext.Provider value={value}>
      {children}
      <AssistantModal
        key={instanceKey}
        isOpen={isOpen && pathname === openPathname}
        launchOptions={launchOptions}
        initialState={initialState}
        onClose={closeAssistant}
      />
    </AssistantContext.Provider>
  );
}

export function useAssistantModal() {
  const context = useContext(AssistantContext);

  if (!context) {
    throw new Error("useAssistantModal must be used within AssistantProvider");
  }

  return context;
}
