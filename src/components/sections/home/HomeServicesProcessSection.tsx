import Link from "next/link";

import { HomePageContent } from "@/content/schema";
import { getUiCopy } from "@/content/locales/ui";
import { Locale } from "@/lib/routing/locales";

type HomeServicesProcessSectionProps = {
  section: HomePageContent["servicesProcess"];
  locale: Locale;
};

export function HomeServicesProcessSection({ section, locale }: HomeServicesProcessSectionProps) {
  const ui = getUiCopy(locale);

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
              <Link className="section-link" href={`/${locale}${item.href}`}>
                {ui.openService}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
