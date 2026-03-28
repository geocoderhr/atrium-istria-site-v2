import { WorksProjectsClient } from "@/components/sections/radovi/WorksProjectsClient";
import { getUiLabels } from "@/content/site-config";
import { Locale, WorkCategory, WorksPageContent } from "@/content/types";

type WorksPageProps = {
  content: WorksPageContent;
  locale: Locale;
  initialFilter?: WorkCategory | null;
};

export function WorksPage({ content, locale, initialFilter }: WorksPageProps) {
  const ui = getUiLabels(locale);

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-charcoal pb-12 pt-28 text-white sm:pb-16 sm:pt-32 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-medium sm:text-5xl lg:text-6xl">{content.hero.title}</h1>
          <p className="text-xl leading-relaxed text-white/80">{content.hero.subtitle}</p>
        </div>
      </section>
      <WorksProjectsClient
        key={`${locale}:${initialFilter ?? "all"}`}
        content={content}
        initialFilter={initialFilter}
        ui={{
          openGalleryLabel: ui.openGalleryLabel,
          thumbnailsLabel: ui.galleryThumbnailsLabel,
          closeLabel: ui.closeGalleryLabel,
          previousImageLabel: ui.previousImageLabel,
          nextImageLabel: ui.nextImageLabel
        }}
      />
    </div>
  );
}
