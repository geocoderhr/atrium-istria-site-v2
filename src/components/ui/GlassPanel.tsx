import { ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

export function GlassPanel({ children, className }: GlassPanelProps) {
  return <div className={["glass-panel", className].filter(Boolean).join(" ")}>{children}</div>;
}
