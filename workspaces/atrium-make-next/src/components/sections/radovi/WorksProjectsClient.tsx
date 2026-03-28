"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { ShowcaseGalleryModal } from "@/components/sections/home/ShowcaseGalleryModal";
import { WORKS_PROJECTS_SECTION_ID } from "@/components/sections/radovi/works-context";
import { useShowcaseGallery } from "@/components/showcase/useShowcaseGallery";
import { ShowcaseCard, WorkCategory, WorksPageContent } from "@/content/types";
import { trackEvent } from "@/lib/analytics/events";
import { createWorksFilterSearch } from "@/lib/routing/language-switch";

type WorksProjectsClientProps = {
  content: WorksPageContent;
  initialFilter?: WorkCategory | null;
  ui: {
    openGalleryLabel: string;
    thumbnailsLabel: string;
    closeLabel: string;
    previousImageLabel: string;
    nextImageLabel: string;
  };
};

export function WorksProjectsClient({ content, initialFilter, ui }: WorksProjectsClientProps) {
  const pathname = usePathname();
  const [filter, setFilter] = useState<WorksPageContent["filters"][number]["value"]>(initialFilter ?? "all");
  const showcaseGallery = useShowcaseGallery<ShowcaseCard>();

  const filteredProjects = useMemo(
    () => (filter === "all" ? content.projects : content.projects.filter((project) => project.category === filter)),
    [content.projects, filter]
  );
  const categoryLabels = useMemo(
    () => new Map(content.filters.map((item) => [item.value, item.label])),
    [content.filters]
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const nextSearch = createWorksFilterSearch(filter);
    const nextUrl = `${pathname}${nextSearch}${window.location.hash}`;
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (currentUrl !== nextUrl) {
      window.history.replaceState(window.history.state, "", nextUrl);
    }
  }, [filter, pathname]);

  const handleFilterChange = (nextFilter: WorkCategory) => {
    if (nextFilter === filter) {
      return;
    }

    trackEvent("atrium_radovi_filter_change", {
      pathname,
      previous_filter: filter,
      next_filter: nextFilter
    });
    setFilter(nextFilter);

    if (typeof window === "undefined") {
      return;
    }

    const nextSearch = createWorksFilterSearch(nextFilter);
    const nextUrl = `${pathname}${nextSearch}${window.location.hash}`;
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (currentUrl !== nextUrl) {
      window.history.replaceState(window.history.state, "", nextUrl);
    }
  };

  function openProjectGallery(project: WorksPageContent["projects"][number]) {
    if (!project.hasModal || !project.galleryImages?.length) {
      return;
    }

    showcaseGallery.openGallery({
      title: project.title,
      details: project.description,
      image: project.image,
      galleryImages: project.galleryImages,
      hasModal: true
    });
  }

  return (
    <>
      <section id={WORKS_PROJECTS_SECTION_ID} className="sticky top-16 z-40 border-b border-border bg-white py-8 lg:top-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {content.filters.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => handleFilterChange(category.value)}
                className={`inline-flex min-h-10 items-center justify-center rounded-full px-4 py-2 transition-all ${
                  filter === category.value
                    ? "bg-warm-orange text-white"
                    : "bg-secondary text-charcoal-light hover:bg-secondary/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-2xl border border-border bg-white transition-all hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium capitalize text-warm-orange">
                      {categoryLabels.get(project.category) ?? project.category}
                    </span>
                    {project.location || project.year ? (
                      <span className="text-sm text-muted-foreground">
                        {[project.location, project.year].filter(Boolean).join(" • ")}
                      </span>
                    ) : null}
                  </div>
                  <h2 className="mb-2 text-xl font-medium text-charcoal">{project.title}</h2>
                  <p className="text-sm leading-relaxed text-charcoal-light">{project.description}</p>
                  {project.hasModal ? (
                    <button
                      type="button"
                      onClick={() => openProjectGallery(project)}
                      className="mt-5 -ml-1 inline-flex min-h-10 items-center gap-2 rounded-full px-1 py-2 text-sm font-medium text-warm-orange transition-all hover:gap-2.5"
                    >
                      <span>{ui.openGalleryLabel}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">{content.emptyState}</p>
            </div>
          ) : null}
        </div>
      </section>

      <ShowcaseGalleryModal
        card={showcaseGallery.activeItem}
        activeIndex={showcaseGallery.activeIndex}
        onClose={showcaseGallery.closeGallery}
        onPrev={showcaseGallery.showPreviousImage}
        onNext={showcaseGallery.showNextImage}
        onSelect={showcaseGallery.setActiveIndex}
        ui={ui}
      />
    </>
  );
}
