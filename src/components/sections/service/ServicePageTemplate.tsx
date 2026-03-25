import Image from "next/image";
import Link from "next/link";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { ServicePageContent } from "@/content/schema";

type ServicePageTemplateProps = {
  content: ServicePageContent;
};

export function ServicePageTemplate({ content }: ServicePageTemplateProps) {
  return (
    <>
      <section className="service-hero">
        <div className="service-hero__backdrop">
          <Image
            src={content.hero.image}
            alt={content.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="service-hero__image"
          />
        </div>
        <div className="container service-hero__inner">
          <GlassPanel className="service-hero__panel">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className="hero-description">{content.hero.description}</p>
            <Link className="section-link section-link--accent" href={content.hero.ctaHref}>
              {content.hero.ctaLabel}
            </Link>
          </GlassPanel>
          <div className="service-hero__proof">
            {content.hero.proofCues.map((cue) => (
              <div key={cue.label} className="proof-card">
                <span>{cue.label}</span>
                <strong>{cue.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container stack-lg">
          <div className="section-heading">
            <h2>{content.scenarios.title}</h2>
            <p>{content.scenarios.intro}</p>
          </div>
          <div className="grid-three">
            {content.scenarios.items.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--soft">
        <div className="container stack-lg">
          <div className="section-heading">
            <h2>{content.scope.title}</h2>
            <p>{content.scope.intro}</p>
          </div>
          <div className="grid-three">
            {content.scope.items.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container stack-lg">
          <div className="section-heading">
            <h2>{content.process.title}</h2>
            <p>{content.process.intro}</p>
          </div>
          <div className="service-process-list">
            {content.process.items.map((item, index) => (
              <article key={item.title} className="process-card">
                <span className="process-card__index">{String(index + 1).padStart(2, "0")}</span>
                <div className="stack-md">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--soft">
        <div className="container stack-lg">
          <div className="section-heading">
            <h2>{content.pricing.title}</h2>
            <p>{content.pricing.intro}</p>
          </div>
          <div className="grid-three">
            {content.pricing.items.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container stack-lg">
          <div className="section-heading">
            <h2>{content.proof.title}</h2>
            <p>{content.proof.intro}</p>
          </div>
          <div className="grid-three">
            {content.proof.projects.map((project) => (
              <article key={project.slug} className="project-card">
                <div className="project-card__image">
                  <Image src={project.image} alt={project.imageAlt} fill sizes="(min-width: 900px) 33vw, 100vw" />
                </div>
                <p className="project-card__service">{project.service}</p>
                <p className="project-card__location">{project.location}</p>
                <h3>{project.title}</h3>
                <p>{project.challenge}</p>
                <p>{project.workDone}</p>
                <p className="project-card__result">{project.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--soft">
        <div className="container stack-lg">
          <div className="section-heading">
            <h2>{content.faq.title}</h2>
          </div>
          <div className="faq-list">
            {content.faq.items.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
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
