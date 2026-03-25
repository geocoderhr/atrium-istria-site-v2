import { homeContentHr, homeProjectsHr } from "@/content/locales/hr/home";

export function HomeSelectedProjectsSection() {
  return (
    <section className="home-section">
      <div className="container stack-lg">
        <div className="section-heading">
          <h2>{homeContentHr.selectedProjects.title}</h2>
          <p>{homeContentHr.selectedProjects.intro}</p>
        </div>
        <div className="grid-three">
          {homeProjectsHr.map((project) => (
            <article key={project.slug} className="project-card">
              <div className="project-card__image" />
              <p className="project-card__location">{project.location}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <p className="project-card__result">{project.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
