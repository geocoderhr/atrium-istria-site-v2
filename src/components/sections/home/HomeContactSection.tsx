import { ContactPageContent } from "@/content/schema";
import { ContactPromptPanel } from "@/features/conversation/ContactPromptPanel";
import { getUiCopy } from "@/content/locales/ui";
import { Locale } from "@/lib/routing/locales";

type HomeContactSectionProps = {
  content: ContactPageContent;
  locale: Locale;
};

export function HomeContactSection({ content, locale }: HomeContactSectionProps) {
  const ui = getUiCopy(locale);

  return (
    <section id="contact" className="home-section home-section--contact">
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
            <p className="eyebrow eyebrow--light">{ui.directContactEyebrow}</p>
            <h2>{ui.directContactTitle}</h2>
          </div>
          <p>{ui.directContactDescription}</p>
          <div className="contact-block__links">
            <a href={`tel:${content.prompt.phone.replace(/\s+/g, "")}`}>{content.prompt.phone}</a>
            <a href={`mailto:${content.prompt.email}`}>{content.prompt.email}</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
