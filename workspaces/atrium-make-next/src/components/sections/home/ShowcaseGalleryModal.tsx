"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { TouchEvent, useEffect, useRef } from "react";

import { ClientPortal } from "@/components/ui/modal/ClientPortal";
import { setGalleryOverlayOpen } from "@/components/ui/modal/gallery-overlay";
import { useModalDismiss } from "@/components/ui/modal/useModalDismiss";
import { ShowcaseCard } from "@/content/types";

type ShowcaseGalleryModalUi = {
  thumbnailsLabel: string;
  closeLabel: string;
  previousImageLabel: string;
  nextImageLabel: string;
};

type ShowcaseGalleryModalProps = {
  card: ShowcaseCard | null;
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  ui: ShowcaseGalleryModalUi;
};

export function ShowcaseGalleryModal({
  card,
  activeIndex,
  onClose,
  onPrev,
  onNext,
  onSelect,
  ui
}: ShowcaseGalleryModalProps) {
  const images = card?.galleryImages ?? [];
  const thumbnailStripRef = useRef<HTMLDivElement | null>(null);
  const thumbnailButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const swipeStartRef = useRef<{ x: number; y: number } | null>(null);
  const isOpen = Boolean(card && images.length);

  useModalDismiss({ isOpen, onClose });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        onPrev();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onNext, onPrev]);

  useEffect(() => {
    setGalleryOverlayOpen(isOpen);

    return () => {
      setGalleryOverlayOpen(false);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const activeThumbnail = thumbnailButtonRefs.current[activeIndex];
    activeThumbnail?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });
  }, [activeIndex, isOpen]);

  if (!card || !images.length) {
    return null;
  }

  const currentImage = images[activeIndex] ?? images[0];

  function scrollThumbnailStrip(direction: "left" | "right") {
    const strip = thumbnailStripRef.current;
    if (!strip) {
      return;
    }

    const scrollAmount = Math.max(strip.clientWidth * 0.6, 220);
    strip.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  }

  function handleGalleryTouchStart(event: TouchEvent<HTMLDivElement>) {
    const touch = event.touches[0];
    swipeStartRef.current = {
      x: touch.clientX,
      y: touch.clientY
    };
  }

  function handleGalleryTouchEnd(event: TouchEvent<HTMLDivElement>) {
    const swipeStart = swipeStartRef.current;
    swipeStartRef.current = null;

    if (!swipeStart) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - swipeStart.x;
    const deltaY = touch.clientY - swipeStart.y;

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) {
      return;
    }

    if (deltaX < 0) {
      onNext();
      return;
    }

    onPrev();
  }

  return (
    <ClientPortal>
      <div className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
        <button
          type="button"
          aria-label={ui.closeLabel}
          className="absolute inset-0 bg-charcoal/85 backdrop-blur-md"
          onClick={onClose}
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-label={card.title}
          className="relative z-10 flex h-[min(92dvh,920px)] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#10161dcc] shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
        >
          <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 text-white sm:px-6">
            <div>
              <h2 className="text-xl font-medium sm:text-2xl">{card.title}</h2>
              <p className="mt-1 text-sm text-white/65">
                {activeIndex + 1} / {images.length}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-white/30 hover:bg-white/10"
              aria-label={ui.closeLabel}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center bg-[#0b1016] px-3 py-3 sm:px-6 sm:py-5">
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:border-white/30 hover:bg-white/18"
              aria-label={ui.previousImageLabel}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div
              className="relative h-full w-full overflow-hidden rounded-[1.5rem] touch-pan-y"
              onTouchStart={handleGalleryTouchStart}
              onTouchEnd={handleGalleryTouchEnd}
              onTouchCancel={() => {
                swipeStartRef.current = null;
              }}
            >
              <Image
                src={currentImage}
                alt={`${card.title} ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <button
              type="button"
              onClick={onNext}
              className="absolute right-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:border-white/30 hover:bg-white/18"
              aria-label={ui.nextImageLabel}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="border-t border-white/10 bg-[#10161d] px-4 py-4 sm:px-6">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-sm text-white/65">{ui.thumbnailsLabel}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollThumbnailStrip("left")}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-white/30 hover:bg-white/10"
                  aria-label={ui.previousImageLabel}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollThumbnailStrip("right")}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-white/30 hover:bg-white/10"
                  aria-label={ui.nextImageLabel}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div
              ref={thumbnailStripRef}
              className="flex gap-3 overflow-x-auto pb-1"
            >
              {images.map((image, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={image}
                    ref={(element) => {
                      thumbnailButtonRefs.current[index] = element;
                    }}
                    type="button"
                    onClick={() => onSelect(index)}
                    className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border transition-all ${
                      isActive
                        ? "border-warm-orange shadow-[0_0_0_1px_rgba(234,91,12,0.45)]"
                        : "border-white/10 opacity-75 hover:border-white/30 hover:opacity-100"
                    }`}
                    aria-label={`Open image ${index + 1}`}
                  >
                    <Image src={image} alt={`${card.title} preview ${index + 1}`} fill className="object-cover" sizes="80px" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ClientPortal>
  );
}
