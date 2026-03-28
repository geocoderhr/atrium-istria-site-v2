import { Icon } from "@/components/ui/Icon";
import { ResizableSectionShell } from "@/components/ui/ResizableSectionShell";
import { HomePageContent } from "@/content/types";

type HomeTrustSectionProps = {
  content: HomePageContent["trust"];
};

export function HomeTrustSection({ content }: HomeTrustSectionProps) {
  return (
    <ResizableSectionShell defaultHeight="auto" minHeight={400} enable={{ bottom: true, left: false, right: false }}>
      <section className="relative h-full overflow-hidden bg-charcoal py-24 text-white lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "50px 50px" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center lg:mb-20">
            <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-warm-orange">{content.eyebrow}</span>
            <h2 className="mb-6 text-4xl font-medium sm:text-5xl lg:text-6xl">{content.title}</h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/70">{content.subtitle}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            {content.points.map((point) => (
              <div
                key={point.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-warm-orange/50 hover:bg-white/10 lg:p-10"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-warm-orange/10 text-warm-orange transition-all duration-300 group-hover:scale-110 group-hover:bg-warm-orange group-hover:text-white">
                  <Icon name={point.icon} className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold transition-colors group-hover:text-warm-orange">{point.title}</h3>
                <p className="text-lg leading-relaxed text-white/70">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:grid-cols-4 lg:gap-12 lg:p-12">
            {content.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-bold text-warm-orange lg:text-5xl">
                  {stat.icon ? <Icon name={stat.icon} className="inline h-10 w-10 fill-warm-orange" /> : stat.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ResizableSectionShell>
  );
}
