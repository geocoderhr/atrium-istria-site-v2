import Link from "next/link";

import { ServicePageContent } from "@/content/schema";
import { getUiCopy } from "@/content/locales/ui";
import { Locale } from "@/lib/routing/locales";

type HomeServicesSectionProps = {
  title: string;
  intro: string;
  services: ServicePageContent[];
  locale: Locale;
};

function getShortServiceTitle(content: ServicePageContent) {
  return content.hero.eyebrow.split("|").pop()?.trim() ?? content.seo.title;
}

export function HomeServicesSection({ title, intro, services, locale }: HomeServicesSectionProps) {
  const ui = getUiCopy(locale);

  return (
    <section id="services" className="home-section">
      <div className="container stack-lg">
        <div className="section-heading">
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>
        <div className="service-compact-list">
          {services.map((service) => (
            <details key={service.slug} id={service.slug} className="service-compact-card">
              <summary className="service-compact-card__summary">
                <div className="stack-md">
                  <span className="project-card__service">{getShortServiceTitle(service)}</span>
                  <h3>{service.hero.title}</h3>
                  <p>{service.hero.description}</p>
                </div>
              </summary>
              <div className="service-compact-card__details">
                <div className="grid-three">
                  {service.scope.items.slice(0, 3).map((item) => (
                    <article key={item.title} className="info-card">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
                <Link className="section-link section-link--accent" href={`/${locale}#contact`}>
                  {ui.continueToContact}
                </Link>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
