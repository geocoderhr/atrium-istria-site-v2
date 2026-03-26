import Image from "next/image";
import Link from "next/link";

import { HomePageContent, ProjectCase } from "@/content/schema";
import { Locale } from "@/lib/routing/locales";

type HomeSelectedProjectsSectionProps = {
  section: HomePageContent["selectedProjects"];
  projects: ProjectCase[];
  locale: Locale;
};

export function HomeSelectedProjectsSection({
  section,
  projects,
  locale
}: HomeSelectedProjectsSectionProps) {
  return (
    <section id="works" className="home-section">
      <div className="container stack-lg">
        <div className="section-heading">
          <h2>{section.title}</h2>
          <p>{section.intro}</p>
        </div>
        <div className="grid-three">
          {projects.map((project) => (
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
        {section.ctaHref ? (
          <Link className="section-link section-link--light" href={`/${locale}${section.ctaHref}`}>
            {section.ctaLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
