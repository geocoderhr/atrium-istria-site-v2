import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Icon } from "@/components/ui/Icon";
import { ResizableSectionShell } from "@/components/ui/ResizableSectionShell";
import { HomePageContent, Locale } from "@/content/types";
import { getLocalizedPath } from "@/lib/routing/locales";

type HomeServicesSectionProps = {
  content: HomePageContent["services"];
  locale: Locale;
  learnMoreLabel: string;
};

export function HomeServicesSection({ content, locale, learnMoreLabel }: HomeServicesSectionProps) {
  return (
    <ResizableSectionShell defaultHeight="auto" minHeight={500} enable={{ bottom: true, left: false, right: false }}>
      <section id="usluge" className="h-full scroll-mt-24 bg-white pt-16 pb-24 sm:pt-[4.5rem] lg:pt-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center lg:mb-20">
            <h2 className="mb-6 text-4xl font-medium text-charcoal sm:text-5xl lg:text-6xl">
              {content.title}
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-charcoal-light">{content.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-6 lg:grid-cols-12 lg:gap-8">
            {content.cards[0] ? (
              <Link
                href={getLocalizedPath(`/${content.cards[0].slug}`, locale)}
                className="group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal to-charcoal-light p-8 transition-all duration-500 hover:shadow-2xl md:col-span-6 lg:col-span-7 lg:p-12"
              >
                {content.cards[0].image ? (
                  <>
                    <Image
                      src={content.cards[0].image}
                      alt={content.cards[0].imageAlt ?? content.cards[0].title}
                      fill
                      className="object-cover opacity-42 transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal/46 via-charcoal/41 to-charcoal-light/44" />
                  </>
                ) : null}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:bg-warm-orange/5 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-warm-orange/20 text-warm-orange transition-all duration-300 group-hover:scale-110 group-hover:bg-warm-orange group-hover:text-white">
                    <Icon name={content.cards[0].icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 text-3xl font-medium text-white transition-colors group-hover:text-warm-orange lg:text-4xl">
                    {content.cards[0].title}
                  </h3>
                  <p className="mb-6 text-lg leading-relaxed text-white/70">{content.cards[0].description}</p>
                </div>
                <div className="relative z-10 flex items-center gap-2 font-medium text-warm-orange transition-all group-hover:gap-3">
                  {learnMoreLabel}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </div>
              </Link>
            ) : null}

            <div className="grid grid-cols-1 gap-6 md:col-span-6 lg:col-span-5 lg:grid-cols-1 lg:gap-8 sm:grid-cols-2">
              {content.cards.slice(1, 3).map((service) => (
                <Link
                  key={service.slug}
                  href={getLocalizedPath(`/${service.slug}`, locale)}
                  className="group flex min-h-[190px] flex-col justify-between rounded-3xl border border-border bg-white p-8 transition-all duration-300 hover:border-warm-orange hover:shadow-xl"
                >
                  <div>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-warm-orange/10 text-warm-orange transition-all group-hover:bg-warm-orange group-hover:text-white">
                      <Icon name={service.icon} className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-medium text-charcoal transition-colors group-hover:text-warm-orange lg:text-2xl">
                      {service.title}
                    </h3>
                    <p className="leading-relaxed text-charcoal-light">{service.description}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-warm-orange transition-all group-hover:gap-2">
                    {learnMoreLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>

            {content.cards.slice(3).map((service) => (
              <Link
                key={service.slug}
                href={getLocalizedPath(`/${service.slug}`, locale)}
                className="group flex min-h-[280px] flex-col justify-between rounded-3xl border border-border bg-white p-8 transition-all duration-300 hover:border-warm-orange hover:shadow-xl md:col-span-3 lg:col-span-6"
              >
                <div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-warm-orange/10 text-warm-orange transition-all group-hover:bg-warm-orange group-hover:text-white">
                    <Icon name={service.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-medium text-charcoal transition-colors group-hover:text-warm-orange lg:text-2xl">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-charcoal-light">{service.description}</p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-warm-orange transition-all group-hover:gap-2">
                  {learnMoreLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ResizableSectionShell>
  );
}
