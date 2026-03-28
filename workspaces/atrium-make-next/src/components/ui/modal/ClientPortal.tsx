"use client";

import { ReactNode, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

type ClientPortalProps = {
  children: ReactNode;
};

export function ClientPortal({ children }: ClientPortalProps) {
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!isMounted) {
    return null;
  }

  return createPortal(children, document.body);
}
