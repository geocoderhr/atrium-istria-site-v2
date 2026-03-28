import Image from "next/image";

import { AssistantTeaser } from "@/components/assistant/AssistantTeaser";
import { HomeHeroShowcaseClient } from "@/components/sections/home/HomeHeroShowcaseClient";
import { ResizableSectionShell } from "@/components/ui/ResizableSectionShell";
import { HomePageContent, Locale } from "@/content/types";

type HomeHeroSectionProps = {
  content: HomePageContent["hero"];
  locale: Locale;
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

export function HomeHeroSection({
  content,
  locale,
  learnMoreLabel,
  previousSlideLabel,
  nextSlideLabel,
  galleryUi
}: HomeHeroSectionProps) {
  return (
    <ResizableSectionShell defaultHeight="auto" minHeight={500} enable={{ bottom: true, left: false, right: false }}>
      <section className="home-hero-section relative flex min-h-[100dvh] items-start overflow-hidden">
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            priority
            className="h-full w-full object-cover lg:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/40 via-charcoal/30 to-charcoal/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        </div>

        <div className="home-hero-inner relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-col px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="home-hero-layout flex flex-1 flex-col items-center text-center">
            <div className="home-hero-top w-full">
              <div className="home-hero-teaser w-full max-w-3xl">
                <AssistantTeaser locale={locale} content={content.assistant} />
              </div>

              <div className="home-hero-copy text-white">
                <h1 className="home-hero-title text-center text-[44px] font-medium leading-[1.08] [text-shadow:2px_4px_5px_rgba(0,0,0,0.76)] sm:text-[56px] lg:text-[64px]">
                  {content.titleHighlight && content.titleSuffix ? (
                    <>
                      {content.title.replace(` ${content.titleHighlight} ${content.titleSuffix}`, "")}{" "}
                      <span className="text-warm-orange">{content.titleHighlight}</span>{" "}
                      {content.titleSuffix}
                    </>
                  ) : (
                    content.title
                  )}
                </h1>
                <div className="home-hero-subtitle-shell mx-auto max-w-4xl">
                  <div className="home-hero-subtitle-panel">
                    <p className="home-hero-subtitle text-xl leading-relaxed text-white [text-shadow:2px_4px_5px_rgba(0,0,0,0.76)] sm:text-2xl">
                      {content.subtitle}{" "}
                      {content.subtitleHighlight ? (
                        <span className="font-semibold text-warm-orange">{content.subtitleHighlight}</span>
                      ) : null}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <HomeHeroShowcaseClient
              cards={content.showcaseCards}
              learnMoreLabel={learnMoreLabel}
              previousSlideLabel={previousSlideLabel}
              nextSlideLabel={nextSlideLabel}
              galleryUi={galleryUi}
            />
          </div>
        </div>
      </section>
    </ResizableSectionShell>
  );
}
