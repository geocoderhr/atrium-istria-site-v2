import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { LeadFormTrigger } from "@/components/lead-form/LeadFormTrigger";
import { Icon } from "@/components/ui/Icon";
import { ResizableSectionShell } from "@/components/ui/ResizableSectionShell";
import { HomePageContent, Locale } from "@/content/types";
import { toTelHref } from "@/content/site-config";

type HomeFinalCtaSectionProps = {
  content: HomePageContent["finalCta"];
  locale: Locale;
  primaryPhone: string;
};

export function HomeFinalCtaSection({ content, locale, primaryPhone }: HomeFinalCtaSectionProps) {
  return (
    <ResizableSectionShell defaultHeight="auto" minHeight={400} enable={{ bottom: true, left: false, right: false }}>
      <section className="relative h-full overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image src={content.image} alt={content.imageAlt} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-warm-orange/95 via-warm-orange/90 to-warm-orange-dark/95" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-medium sm:text-5xl lg:text-6xl">{content.title}</h2>
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/90 sm:text-2xl">{content.description}</p>

          <div className="flex flex-col justify-center gap-5 sm:flex-row">
            <a
              href={toTelHref(primaryPhone)}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-semibold text-warm-orange shadow-xl transition-all hover:scale-105 hover:bg-white/95 hover:shadow-2xl"
            >
              <Icon name="phone" className="h-5 w-5" />
              {content.primaryLabel}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <LeadFormTrigger
              locale={locale}
              className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/30 bg-charcoal/20 px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-charcoal/30"
            >
              <Icon name="mail" className="h-5 w-5" />
              {content.secondaryLabel}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </LeadFormTrigger>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.contactBlocks.map((block) => (
              <div key={block.title} className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                <div className="mb-3 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                    <Icon name={block.icon} className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="text-sm uppercase tracking-wider text-white/70">{block.title}</div>
                {block.href ? (
                  <a href={block.href} className="mt-1 block text-lg font-medium text-white transition-colors hover:text-white/85">
                    {block.value}
                  </a>
                ) : (
                  <div className="mt-1 text-lg font-medium text-white">{block.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </ResizableSectionShell>
  );
}
