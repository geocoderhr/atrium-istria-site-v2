import { homeContentHr } from "@/content/locales/hr/home";

export function HomeTrustSection() {
  const section = homeContentHr.trust;

  return (
    <section className="home-section home-section--soft">
      <div className="container stack-lg">
        <div className="section-heading">
          <h2>{section.title}</h2>
        </div>
        <div className="grid-three">
          {section.items.map((item) => (
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
