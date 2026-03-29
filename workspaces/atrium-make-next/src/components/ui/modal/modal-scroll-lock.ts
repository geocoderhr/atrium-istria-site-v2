"use client";

const SCROLL_LOCK_COUNT_ATTRIBUTE = "data-atrium-scroll-lock-count";
const PREVIOUS_OVERFLOW_ATTRIBUTE = "data-atrium-previous-overflow";
const PREVIOUS_HTML_OVERFLOW_ATTRIBUTE = "data-atrium-previous-html-overflow";

function getLockCount() {
  return Number(document.body.getAttribute(SCROLL_LOCK_COUNT_ATTRIBUTE) ?? "0");
}

export function lockBodyScroll() {
  if (typeof document === "undefined") {
    return () => {};
  }

  const lockCount = getLockCount();

  if (lockCount === 0) {
    document.body.setAttribute(PREVIOUS_OVERFLOW_ATTRIBUTE, document.body.style.overflow);
    document.documentElement.setAttribute(PREVIOUS_HTML_OVERFLOW_ATTRIBUTE, document.documentElement.style.overflow);
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  document.body.setAttribute(SCROLL_LOCK_COUNT_ATTRIBUTE, String(lockCount + 1));

  let released = false;

  return () => {
    if (released) {
      return;
    }

    released = true;
    releaseBodyScrollLock();
  };
}

export function releaseBodyScrollLock() {
  if (typeof document === "undefined") {
    return;
  }

  const lockCount = getLockCount();

  if (lockCount <= 1) {
    const previousOverflow = document.body.getAttribute(PREVIOUS_OVERFLOW_ATTRIBUTE) ?? "";
    const previousHtmlOverflow = document.documentElement.getAttribute(PREVIOUS_HTML_OVERFLOW_ATTRIBUTE) ?? "";

    document.body.style.overflow = previousOverflow;
    document.documentElement.style.overflow = previousHtmlOverflow;
    document.body.removeAttribute(SCROLL_LOCK_COUNT_ATTRIBUTE);
    document.body.removeAttribute(PREVIOUS_OVERFLOW_ATTRIBUTE);
    document.documentElement.removeAttribute(PREVIOUS_HTML_OVERFLOW_ATTRIBUTE);
    return;
  }

  document.body.setAttribute(SCROLL_LOCK_COUNT_ATTRIBUTE, String(lockCount - 1));
}
