"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

type UseShowcaseCarouselOptions = {
  itemCount: number;
  maxVisibleCount: number;
  idealItemWidth: number;
  gap: number;
  phoneBreakpoint?: number;
  touchLayoutBreakpoint?: number;
};

export function useShowcaseCarousel({
  itemCount,
  maxVisibleCount,
  idealItemWidth,
  gap,
  phoneBreakpoint = 480,
  touchLayoutBreakpoint = 768
}: UseShowcaseCarouselOptions) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [supportsHover, setSupportsHover] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(itemCount > 1);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const updateViewportWidth = () => {
      setViewportWidth(viewport.clientWidth);
    };

    updateViewportWidth();

    const observer = new ResizeObserver(updateViewportWidth);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateSupportsHover = () => {
      setSupportsHover(mediaQuery.matches);
    };

    updateSupportsHover();

    mediaQuery.addEventListener("change", updateSupportsHover);

    return () => {
      mediaQuery.removeEventListener("change", updateSupportsHover);
    };
  }, []);

  const cardsPerView = useMemo(() => {
    if (!viewportWidth) {
      return 1;
    }

    if (viewportWidth < phoneBreakpoint) {
      return 1;
    }

    for (let visibleCount = maxVisibleCount; visibleCount > 1; visibleCount -= 1) {
      const requiredWidth = visibleCount * idealItemWidth + (visibleCount - 1) * gap;
      if (viewportWidth >= requiredWidth) {
        return visibleCount;
      }
    }

    return 1;
  }, [gap, idealItemWidth, maxVisibleCount, phoneBreakpoint, viewportWidth]);

  const cardWidth = useMemo(() => {
    if (!viewportWidth) {
      return idealItemWidth;
    }

    return Math.max((viewportWidth - gap * (cardsPerView - 1)) / cardsPerView, 0);
  }, [cardsPerView, gap, idealItemWidth, viewportWidth]);

  const isTouchLayout = viewportWidth < touchLayoutBreakpoint || !supportsHover;

  const syncScrollState = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const maxScrollLeft = Math.max(viewport.scrollWidth - viewport.clientWidth, 0);
    setCanScrollPrev(viewport.scrollLeft > 4);
    setCanScrollNext(viewport.scrollLeft < maxScrollLeft - 4);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    syncScrollState();

    const handleScroll = () => {
      syncScrollState();
    };

    viewport.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      viewport.removeEventListener("scroll", handleScroll);
    };
  }, [syncScrollState]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    viewport.scrollTo({ left: 0, behavior: "auto" });
    syncScrollState();
  }, [cardsPerView, itemCount, syncScrollState]);

  function scrollByCard(direction: "previous" | "next") {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const scrollAmount = cardWidth + gap;
    viewport.scrollBy({
      left: direction === "previous" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  }

  return {
    viewportRef,
    cardsPerView,
    cardWidth,
    isTouchLayout,
    showControls: supportsHover && !isTouchLayout && itemCount > cardsPerView,
    canScrollPrev,
    canScrollNext,
    scrollByCard
  };
}
