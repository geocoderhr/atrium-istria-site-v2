import { PricingFactor, TrustSignal } from "@/content/schema";
import { Locale } from "@/lib/routing/locales";

type HomeHowWeWorkSectionProps = {
  title: string;
  intro: string;
  trustItems: TrustSignal[];
  pricingFactors: PricingFactor[];
  locale: Locale;
};

export function HomeHowWeWorkSection({ title, intro, trustItems, pricingFactors }: HomeHowWeWorkSectionProps) {
  const compactItems = [
    ...trustItems.slice(0, 2).map((item) => ({
      title: item.title,
      description: item.description
    })),
    ...pricingFactors.slice(0, 2).map((item) => ({
      title: item.title,
      description: item.description
    }))
  ];

  return (
    <section id="process" className="home-section home-section--soft">
      <div className="container stack-lg">
        <div className="section-heading">
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>
        <div className="grid-three">
          {compactItems.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
