"use client";

import { CSSProperties } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { ShowcaseGalleryModal } from "@/components/sections/home/ShowcaseGalleryModal";
import { useShowcaseCarousel } from "@/components/showcase/useShowcaseCarousel";
import { useShowcaseGallery } from "@/components/showcase/useShowcaseGallery";
import { ShowcaseCard } from "@/content/types";

type HomeHeroShowcaseClientProps = {
  cards: ShowcaseCard[];
  learnMoreLabel: string;
  previousSlideLabel: string;
  nextSlideLabel: string;
  galleryUi: {
    thumbnailsLabel: string;
    closeLabel: string;
    previousImageLabel: string;
    nextImageLabel: string;
  };
};

export function HomeHeroShowcaseClient({
  cards,
  learnMoreLabel,
  previousSlideLabel,
  nextSlideLabel,
  galleryUi
}: HomeHeroShowcaseClientProps) {
  const {
    viewportRef,
    cardWidth,
    isTouchLayout,
    showControls,
    canScrollPrev,
    canScrollNext,
    scrollByCard
  } = useShowcaseCarousel({
    itemCount: cards.length,
    maxVisibleCount: 4,
    idealItemWidth: 280,
    gap: 24
  });
  const showcaseGallery = useShowcaseGallery<ShowcaseCard>();
  const resolvedCardWidth = cardWidth || 280;

  function openShowcaseGallery(card: ShowcaseCard) {
    if (!card.hasModal || !card.galleryImages?.length) {
      return;
    }

    showcaseGallery.openGallery(card);
  }

  function renderTouchCard(card: ShowcaseCard) {
    const cardStyle = { width: `${resolvedCardWidth}px` } as CSSProperties;
    const overlay = (
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex min-h-[76px] items-center justify-between gap-3 rounded-2xl border border-white/30 bg-white/16 px-4 py-3 backdrop-blur-md">
          <div className="min-w-0">
            <h3 className="text-left text-base leading-tight font-semibold text-white">{card.title}</h3>
          </div>
          {card.hasModal ? (
            <div className="inline-flex flex-shrink-0 items-center gap-2 text-xs font-medium text-white/90">
              <span>{learnMoreLabel}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          ) : null}
        </div>
      </div>
    );

    if (card.hasModal) {
      return (
        <button
          key={card.title}
          type="button"
          onClick={() => openShowcaseGallery(card)}
          className="home-hero-showcase-card home-hero-showcase-card-touch relative flex-shrink-0 snap-start overflow-hidden rounded-3xl text-left"
          style={cardStyle}
        >
          <Image src={card.image} alt={card.title} fill className="object-cover" sizes={`${Math.round(resolvedCardWidth)}px`} />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/82 via-charcoal/26 to-transparent" />
          {overlay}
        </button>
      );
    }

    return (
      <article
        key={card.title}
        className="home-hero-showcase-card relative flex-shrink-0 snap-start overflow-hidden rounded-3xl"
        style={cardStyle}
      >
        <Image src={card.image} alt={card.title} fill className="object-cover" sizes={`${Math.round(resolvedCardWidth)}px`} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/82 via-charcoal/26 to-transparent" />
        {overlay}
      </article>
    );
  }

  function renderDesktopCard(card: ShowcaseCard) {
    const cardStyle = { width: `${resolvedCardWidth}px` } as CSSProperties;

    return (
      <article
        key={card.title}
        className="home-hero-showcase-card group relative flex-shrink-0 snap-start cursor-pointer overflow-hidden rounded-3xl"
        style={cardStyle}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes={`${Math.round(resolvedCardWidth)}px`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
          <div className="flex min-h-[60px] items-center justify-center rounded-2xl border border-white/30 bg-white/20 px-4 py-3 backdrop-blur-md">
            <h3 className="text-center text-sm leading-tight font-semibold text-white sm:text-base">{card.title}</h3>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
            <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">{card.title}</h3>
            <p className="text-xs leading-relaxed text-white/80">{card.details}</p>
            {card.hasModal ? (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  openShowcaseGallery(card);
                }}
                className="mt-3 -ml-1 inline-flex min-h-10 items-center gap-2 rounded-full px-1 py-2 text-xs font-medium text-warm-orange transition-all hover:gap-2.5"
              >
                <span>{learnMoreLabel}</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </button>
            ) : (
              <div className="mt-3 flex items-center gap-2 text-xs font-medium text-warm-orange">
                <span>{learnMoreLabel}</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <>
      <div className="home-hero-showcase w-full">
        <div className="relative">
          <div ref={viewportRef} className="home-hero-showcase-window home-hero-showcase-viewport pb-6">
            <div className="home-hero-showcase-track">
              {cards.map((card) => (isTouchLayout ? renderTouchCard(card) : renderDesktopCard(card)))}
            </div>
          </div>

          {showControls ? (
            <>
              <button
                type="button"
                onClick={() => scrollByCard("previous")}
                disabled={!canScrollPrev}
                className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-xl transition-all hover:scale-110 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                aria-label={previousSlideLabel}
              >
                <ChevronLeft className="h-6 w-6 text-charcoal" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard("next")}
                disabled={!canScrollNext}
                className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-xl transition-all hover:scale-110 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                aria-label={nextSlideLabel}
              >
                <ChevronRight className="h-6 w-6 text-charcoal" />
              </button>
            </>
          ) : null}
        </div>
      </div>

      <ShowcaseGalleryModal
        card={showcaseGallery.activeItem}
        activeIndex={showcaseGallery.activeIndex}
        onClose={showcaseGallery.closeGallery}
        onPrev={showcaseGallery.showPreviousImage}
        onNext={showcaseGallery.showNextImage}
        onSelect={showcaseGallery.setActiveIndex}
        ui={galleryUi}
      />
    </>
  );
}
