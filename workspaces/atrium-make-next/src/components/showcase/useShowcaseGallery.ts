"use client";

import { useMemo, useState } from "react";

type ShowcaseGalleryItem = {
  galleryImages?: string[];
};

export function useShowcaseGallery<T extends ShowcaseGalleryItem>() {
  const [activeItem, setActiveItem] = useState<T | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImages = useMemo(() => activeItem?.galleryImages ?? [], [activeItem]);

  function openGallery(item: T) {
    setActiveItem(item);
    setActiveIndex(0);
  }

  function closeGallery() {
    setActiveItem(null);
    setActiveIndex(0);
  }

  function showPreviousImage() {
    if (!activeImages.length) {
      return;
    }

    setActiveIndex((index) => (index - 1 + activeImages.length) % activeImages.length);
  }

  function showNextImage() {
    if (!activeImages.length) {
      return;
    }

    setActiveIndex((index) => (index + 1) % activeImages.length);
  }

  return {
    activeItem,
    activeIndex,
    activeImages,
    openGallery,
    closeGallery,
    showPreviousImage,
    showNextImage,
    setActiveIndex
  };
}
