import { homeContentHr } from "@/content/locales/hr/home";

export function HomeFinalContactSection() {
  const section = homeContentHr.finalContact;

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
        </div>
      </div>
    </section>
  );
}
