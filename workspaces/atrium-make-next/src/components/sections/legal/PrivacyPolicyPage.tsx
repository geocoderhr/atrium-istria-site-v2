import { PrivacyBackButton } from "@/components/sections/legal/PrivacyBackButton";
import { getPrivacyPolicyContacts, getPrivacyPolicyContent } from "@/content/privacy-policy";
import { Locale } from "@/content/types";

type PrivacyPolicyPageProps = {
  locale: Locale;
};

export function PrivacyPolicyPage({ locale }: PrivacyPolicyPageProps) {
  const content = getPrivacyPolicyContent(locale);
  const contacts = getPrivacyPolicyContacts(locale);
  const homeHref = locale === "hr" ? "/hr" : "/";

  return (
    <section className="bg-[linear-gradient(180deg,#f5f6f8_0%,#ffffff_16%,#ffffff_100%)] pb-20 pt-36 sm:pb-24 sm:pt-40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-white px-6 py-8 shadow-[0_24px_80px_rgba(19,31,45,0.08)] sm:px-10 sm:py-12">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-charcoal-light">
              {content.eyebrow}
            </div>
            <h1
              className={`font-medium tracking-tight text-charcoal break-words [overflow-wrap:anywhere] ${
                locale === "ru"
                  ? "max-w-[13ch] text-[2rem] leading-[1.08] sm:max-w-none sm:text-5xl sm:leading-tight"
                  : "text-3xl sm:text-5xl"
              }`}
            >
              {content.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-charcoal-light sm:text-lg">{content.intro}</p>
          </div>

          <div className="mt-10 space-y-8">
            {content.sections.map((section) => (
              <article key={section.title} className="rounded-[1.5rem] border border-border bg-secondary/25 px-5 py-5 sm:px-6 sm:py-6">
                <h2 className="text-xl font-medium text-charcoal sm:text-2xl">{section.title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-charcoal-light sm:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {section.bullets?.length ? (
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-charcoal-light sm:text-base">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-warm-orange" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[1.75rem] bg-charcoal px-6 py-6 text-white sm:px-8">
            <h2 className="text-xl font-medium sm:text-2xl">{content.contactTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/72 sm:text-base">{content.contactNote}</p>
            <div className="mt-5 flex flex-col gap-3 text-sm sm:text-base">
              <a href={`mailto:${contacts.email}`} className="transition-colors hover:text-warm-orange">
                {contacts.email}
              </a>
              <a href={`tel:${contacts.phone.replace(/\s+/g, "")}`} className="transition-colors hover:text-warm-orange">
                {contacts.phone}
              </a>
              <div className="text-white/72">{contacts.location}</div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 text-sm text-charcoal-light sm:flex-row sm:items-center sm:justify-between">
            <div>
              {content.lastUpdatedLabel}: {content.lastUpdatedValue}
            </div>
            <PrivacyBackButton homeHref={homeHref} label={locale === "hr" ? "Povratak natrag" : "Вернуться назад"} />
          </div>
        </div>
      </div>
    </section>
  );
}
