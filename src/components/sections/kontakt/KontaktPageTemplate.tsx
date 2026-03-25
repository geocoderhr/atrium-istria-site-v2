import { ContactPromptPanel } from "@/features/conversation/ContactPromptPanel";
import { ContactPageContent } from "@/content/schema";

type KontaktPageTemplateProps = {
  content: ContactPageContent;
};

export function KontaktPageTemplate({ content }: KontaktPageTemplateProps) {
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
            <h2>{content.methods.title}</h2>
            <p>{content.methods.intro}</p>
          </div>
          <div className="grid-three">
            {content.methods.items.map((item) => (
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
            <h2>{content.process.title}</h2>
            <p>{content.process.intro}</p>
          </div>
          <div className="grid-three">
            {content.process.items.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container kontakt-layout">
          <ContactPromptPanel
            title={content.prompt.title}
            description={content.prompt.description}
            textareaLabel={content.prompt.textareaLabel}
            placeholder={content.prompt.placeholder}
            ctaLabel={content.prompt.ctaLabel}
            email={content.prompt.email}
          />
          <aside className="contact-sidecard stack-md">
            <div>
              <p className="eyebrow eyebrow--light">Direktan kontakt</p>
              <h2>Telefon i e-mail ostaju odmah dostupni.</h2>
            </div>
            <p>
              Ako vam je jednostavnije, javite se direktno. Stranica je zamišljena tako da možete birati između slobodnog
              opisa i izravnog kontakta.
            </p>
            <div className="contact-block__links">
              <a href={`tel:${content.prompt.phone.replace(/\s+/g, "")}`}>{content.prompt.phone}</a>
              <a href={`mailto:${content.prompt.email}`}>{content.prompt.email}</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
