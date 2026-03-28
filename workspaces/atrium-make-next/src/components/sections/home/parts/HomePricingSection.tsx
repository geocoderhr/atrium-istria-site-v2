import { Icon } from "@/components/ui/Icon";
import { ResizableSectionShell } from "@/components/ui/ResizableSectionShell";
import { HomePageContent } from "@/content/types";

type HomePricingSectionProps = {
  content: HomePageContent["pricing"];
};

export function HomePricingSection({ content }: HomePricingSectionProps) {
  return (
    <ResizableSectionShell defaultHeight="auto" minHeight={400} enable={{ bottom: true, left: false, right: false }}>
      <section className="h-full bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            {content.eyebrow ? (
              <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-warm-orange">
                {content.eyebrow}
              </span>
            ) : null}
            <h2 className="mb-6 text-4xl font-medium text-charcoal sm:text-5xl">{content.title}</h2>
            <p className="mx-auto max-w-2xl text-xl text-charcoal-light">{content.subtitle}</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-charcoal to-charcoal-light p-8 text-white lg:p-10">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-warm-orange">
                  <Icon name="file-text" className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-semibold">{content.photoOnly.title}</h3>
                  <p className="text-lg leading-relaxed text-white/80">{content.photoOnly.body}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-secondary/30 p-8 lg:p-10">
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-warm-orange/10">
                  <Icon name="home" className="h-6 w-6 text-warm-orange" />
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-semibold text-charcoal">{content.visitRequired.title}</h3>
                  <p className="text-lg leading-relaxed text-charcoal-light">{content.visitRequired.body}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-warm-orange/20 bg-warm-orange/5 p-8 lg:p-10">
              <h3 className="mb-6 text-2xl font-semibold text-charcoal">{content.factorsTitle}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {content.factors.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-warm-orange">
                      <Icon name="check-circle" className="h-4 w-4 text-white" />
                    </div>
                    <span className="leading-relaxed text-charcoal-light">{item}</span>
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
