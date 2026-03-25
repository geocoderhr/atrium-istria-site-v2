import Link from "next/link";

import { HomePageContent } from "@/content/schema";
import { Locale } from "@/lib/routing/locales";

type HomeFinalContactSectionProps = {
  section: HomePageContent["finalContact"];
  locale: Locale;
};

export function HomeFinalContactSection({ section, locale }: HomeFinalContactSectionProps) {
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
            Otvorite kontakt stranicu
          </Link>
        </div>
      </div>
    </section>
  );
}
