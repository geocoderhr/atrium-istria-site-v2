import { HomePageContent } from "@/content/schema";

type HomePricingLogicSectionProps = {
  section: HomePageContent["pricingLogic"];
};

export function HomePricingLogicSection({ section }: HomePricingLogicSectionProps) {
  return (
    <section className="home-section">
      <div className="container stack-lg">
        <div className="section-heading">
          <h2>{section.title}</h2>
          <p>{section.intro}</p>
        </div>
        <div className="grid-three">
          {section.factors.map((item) => (
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
