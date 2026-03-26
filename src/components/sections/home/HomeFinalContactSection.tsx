import Link from "next/link";

import { HomePageContent } from "@/content/schema";
import { getUiCopy } from "@/content/locales/ui";
import { Locale } from "@/lib/routing/locales";

type HomeFinalContactSectionProps = {
  section: HomePageContent["finalContact"];
  locale: Locale;
};

export function HomeFinalContactSection({ section, locale }: HomeFinalContactSectionProps) {
  const ui = getUiCopy(locale);

  return (
    <section className="home-section home-section--contact">
      <div className="container contact-block">
        <div className="stack-md">
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>
        <div className="contact-block__links">
          <a href={`tel:${section.phone.replace(/\s+/g, "")}`}>{section.phone}</a>
          <a href={`mailto:${section.email}`}>{section.email}</a>
          <Link className="section-link" href={`/${locale}/kontakt`}>
            {ui.openContactPage}
          </Link>
        </div>
      </div>
    </section>
  );
}
