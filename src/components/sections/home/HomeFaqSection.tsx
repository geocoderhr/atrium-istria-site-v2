import { HomePageContent } from "@/content/schema";

type HomeFaqSectionProps = {
  section: HomePageContent["faq"];
};

export function HomeFaqSection({ section }: HomeFaqSectionProps) {
  return (
    <section id="faq" className="home-section home-section--soft">
      <div className="container stack-lg">
        <div className="section-heading">
          <h2>{section.title}</h2>
        </div>
        <div className="faq-list">
          {section.items.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
