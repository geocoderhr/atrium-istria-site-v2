"use client";

export const GALLERY_OVERLAY_ATTRIBUTE = "data-gallery-overlay-open";

export function setGalleryOverlayOpen(isOpen: boolean) {
  if (typeof document === "undefined") {
    return;
  }

  if (isOpen) {
    document.documentElement.setAttribute(GALLERY_OVERLAY_ATTRIBUTE, "true");
    return;
  }

  document.documentElement.removeAttribute(GALLERY_OVERLAY_ATTRIBUTE);
}

export function isGalleryOverlayOpen() {
  if (typeof document === "undefined") {
    return false;
  }

  return document.documentElement.getAttribute(GALLERY_OVERLAY_ATTRIBUTE) === "true";
}
