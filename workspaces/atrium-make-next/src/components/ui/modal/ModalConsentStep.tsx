"use client";

import { ReactNode } from "react";

type ModalConsentStepProps = {
  headerIcon: ReactNode;
  checkboxIndicator: ReactNode;
  title: string;
  description: string;
  checkboxLabel: string;
  isChecked: boolean;
  onCheckedChange: (checked: boolean) => void;
  hint?: string;
  supplemental?: ReactNode;
  actions: ReactNode;
  wrapperClassName?: string;
  cardClassName?: string;
  iconWrapperClassName?: string;
  checkboxRowClassName?: string;
  indicatorBaseClassName?: string;
  indicatorCheckedClassName: string;
  indicatorUncheckedClassName: string;
};

export function ModalConsentStep({
  headerIcon,
  checkboxIndicator,
  title,
  description,
  checkboxLabel,
  isChecked,
  onCheckedChange,
  hint,
  supplemental,
  actions,
  wrapperClassName = "flex h-full min-h-0 overflow-y-auto px-4 py-4 sm:items-center sm:justify-center sm:px-10 sm:py-8",
  cardClassName = "w-full max-w-2xl max-h-full overflow-y-auto rounded-[2rem] border border-border bg-white p-6 shadow-[0_24px_80px_rgba(19,31,45,0.08)] sm:p-10",
  iconWrapperClassName = "mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-warm-orange/10 text-warm-orange",
  checkboxRowClassName = "mt-8 flex cursor-pointer items-start gap-4 rounded-2xl border border-border bg-secondary/35 px-5 py-4 transition-colors hover:border-warm-orange/40",
  indicatorBaseClassName = "mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 shadow-[0_1px_3px_rgba(19,31,45,0.08)] transition-colors",
  indicatorCheckedClassName,
  indicatorUncheckedClassName
}: ModalConsentStepProps) {
  return (
    <div className={wrapperClassName}>
      <div className={cardClassName}>
        <div className={iconWrapperClassName}>{headerIcon}</div>
        <h3 className="text-2xl font-medium text-charcoal sm:text-3xl">{title}</h3>
        <p className="mt-3 text-base leading-relaxed text-charcoal-light">{description}</p>

        <label className={checkboxRowClassName}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(event) => onCheckedChange(event.target.checked)}
            className="sr-only"
          />
          <span
            className={`${indicatorBaseClassName} ${
              isChecked ? indicatorCheckedClassName : indicatorUncheckedClassName
            }`}
            aria-hidden="true"
          >
            {checkboxIndicator}
          </span>
          <span className="text-sm leading-relaxed text-charcoal-light sm:text-base">{checkboxLabel}</span>
        </label>

        {supplemental ? supplemental : null}
        {hint ? <p className="mt-4 text-sm text-muted-foreground">{hint}</p> : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>
      </div>
    </div>
  );
}
