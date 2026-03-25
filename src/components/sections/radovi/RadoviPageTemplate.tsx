import Image from "next/image";
import Link from "next/link";

import { RadoviPageContent } from "@/content/schema";

type RadoviPageTemplateProps = {
  content: RadoviPageContent;
};

export function RadoviPageTemplate({ content }: RadoviPageTemplateProps) {
  return (
    <>
      <section className="page-hero">
        <div className="container stack-lg page-hero__inner">
          <div className="section-heading">
            <p className="eyebrow eyebrow--light">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p>{content.hero.description}</p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container stack-lg">
          <div className="section-heading">
            <h2>{content.intro.title}</h2>
            <p>{content.intro.description}</p>
          </div>
        </div>
      </section>

      <section className="home-section home-section--soft">
        <div className="container stack-lg">
          <div className="section-heading">
            <h2>{content.cases.title}</h2>
            <p>{content.cases.description}</p>
          </div>
          <div className="radovi-grid">
            {content.cases.items.map((item) => (
              <article key={item.slug} className="radovi-card">
                <div className="radovi-card__image">
                  <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 1100px) 50vw, 100vw" />
                </div>
                <div className="radovi-card__body">
                  <div className="radovi-card__meta">
                    <span className="project-card__service">{item.service}</span>
                    <span className="radovi-card__object">{item.objectType}</span>
                    <span className="project-card__location">{item.location}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <dl className="radovi-card__story">
                    <div>
                      <dt>Što je bilo</dt>
                      <dd>{item.challenge}</dd>
                    </div>
                    <div>
                      <dt>Što smo napravili</dt>
                      <dd>{item.workDone}</dd>
                    </div>
                    <div>
                      <dt>Rezultat</dt>
                      <dd>{item.result}</dd>
                    </div>
                  </dl>
                  <Link className="section-link" href={`/hr${item.serviceHref}`}>
                    Otvorite povezanu uslugu
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--contact">
        <div className="container contact-block">
          <div className="stack-md">
            <h2>{content.finalContact.title}</h2>
            <p>{content.finalContact.description}</p>
          </div>
          <div className="contact-block__links">
            <Link className="section-link section-link--accent" href={content.finalContact.ctaHref}>
              {content.finalContact.ctaLabel}
            </Link>
            <a href={`tel:${content.finalContact.phone.replace(/\s+/g, "")}`}>{content.finalContact.phone}</a>
            <a href={`mailto:${content.finalContact.email}`}>{content.finalContact.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}
