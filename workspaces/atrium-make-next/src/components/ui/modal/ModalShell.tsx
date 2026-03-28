"use client";

import { HTMLAttributes, ReactNode } from "react";

type ModalShellProps = {
  closeLabel: string;
  onClose: () => void;
  children: ReactNode;
  containerClassName: string;
  backdropClassName: string;
  panelClassName: string;
  panelProps?: HTMLAttributes<HTMLDivElement>;
};

export function ModalShell({
  closeLabel,
  onClose,
  children,
  containerClassName,
  backdropClassName,
  panelClassName,
  panelProps
}: ModalShellProps) {
  const { className: panelPropsClassName, ...restPanelProps } = panelProps ?? {};

  return (
    <div className={containerClassName}>
      <button
        type="button"
        aria-label={closeLabel}
        className={backdropClassName}
        onClick={onClose}
      />

      <div {...restPanelProps} className={`${panelClassName}${panelPropsClassName ? ` ${panelPropsClassName}` : ""}`}>
        {children}
      </div>
    </div>
  );
}
