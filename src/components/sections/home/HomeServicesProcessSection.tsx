import { homeContentHr } from "@/content/locales/hr/home";

export function HomeServicesProcessSection() {
  const section = homeContentHr.servicesProcess;

  return (
    <section className="home-section">
      <div className="container stack-lg">
        <div className="section-heading">
          <h2>{section.title}</h2>
          <p>{section.intro}</p>
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
