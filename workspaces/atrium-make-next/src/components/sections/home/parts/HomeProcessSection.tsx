import Image from "next/image";
import { Users } from "lucide-react";

import { ResizableSectionShell } from "@/components/ui/ResizableSectionShell";
import { HomePageContent } from "@/content/types";

type HomeProcessSectionProps = {
  content: HomePageContent["process"];
};

export function HomeProcessSection({ content }: HomeProcessSectionProps) {
  return (
    <ResizableSectionShell defaultHeight="auto" minHeight={400} enable={{ bottom: true, left: false, right: false }}>
      <section className="h-full bg-charcoal py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={content.image}
                  alt={content.imageAlt}
                  width={1080}
                  height={1350}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/95 p-6 shadow-xl backdrop-blur-lg lg:-bottom-8 lg:left-auto lg:right-0 lg:max-w-xs lg:translate-x-8">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warm-orange/10">
                    <Users className="h-6 w-6 text-warm-orange" />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-charcoal">{content.responseStat.value}</div>
                    <div className="text-sm text-charcoal-light">{content.responseStat.label}</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-warm-orange">
                {content.eyebrow}
              </span>
              <h2 className="mb-6 text-4xl font-medium text-white sm:text-5xl">{content.title}</h2>
              <p className="mb-12 text-xl leading-relaxed text-white/72">{content.subtitle}</p>

              <div className="space-y-8">
                {content.steps.map((step) => (
                  <div key={step.number} className="group flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-warm-orange/20 bg-warm-orange/10 text-lg font-semibold text-warm-orange transition-all group-hover:border-warm-orange group-hover:bg-warm-orange group-hover:text-white">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-warm-orange">
                        {step.title}
                      </h3>
                      <p className="leading-relaxed text-white/68">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ResizableSectionShell>
  );
}
