"use client";

import { ReactNode } from "react";

import { ResizableSection } from "@/components/ui/ResizableSection";

type ResizableSectionShellProps = {
  children: ReactNode;
  defaultHeight?: string | number;
  minHeight?: string | number;
  enable?: {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    topRight?: boolean;
    bottomRight?: boolean;
    bottomLeft?: boolean;
    topLeft?: boolean;
  };
};

export function ResizableSectionShell({
  children,
  defaultHeight = "auto",
  minHeight,
  enable
}: ResizableSectionShellProps) {
  return (
    <ResizableSection defaultHeight={defaultHeight} minHeight={minHeight} enable={enable}>
      {children}
    </ResizableSection>
  );
}
