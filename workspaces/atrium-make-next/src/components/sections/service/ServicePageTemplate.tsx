import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AssistantTrigger } from "@/components/assistant/AssistantTrigger";
import { LeadFormTrigger } from "@/components/lead-form/LeadFormTrigger";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { Icon } from "@/components/ui/Icon";
import { getSiteConfig, toTelHref } from "@/content/site-config";
import { BulletSection, ContentSection, Locale, ServicePageContent } from "@/content/types";
import { getLocalizedPath } from "@/lib/routing/locales";

type ServicePageTemplateProps = {
  content: ServicePageContent;
  locale: Locale;
};

function isBulletSection(value: ContentSection | BulletSection): value is BulletSection {
  return "items" in value;
}

function isContactCta(label: string) {
  const normalizedLabel = label.trim().toLowerCase();

  return normalizedLabel.includes("контакт") || normalizedLabel.includes("kontakt");
}

export function ServicePageTemplate({ content, locale }: ServicePageTemplateProps) {
  const isDetailedPage = content.slug === "adaptacije-kuca-i-stanova";
  const siteConfig = getSiteConfig(locale);
  const worksPath = getLocalizedPath("/radovi", locale);
  const contactPath = getLocalizedPath("/kontakt", locale);

  if (!isDetailedPage) {
    return (
      <div className="min-h-screen">
        <section className="relative overflow-hidden bg-charcoal pb-12 pt-28 text-white sm:pb-16 sm:pt-32 lg:pb-24 lg:pt-40">
          <div className="absolute inset-0">
            <Image
              src={content.hero.image}
              alt={content.hero.imageAlt}
              fill
              priority
              className="object-cover opacity-24"
              sizes="100vw"
            />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-6 text-4xl font-medium sm:text-5xl lg:text-6xl">{content.hero.title}</h1>
            <p className="text-xl leading-relaxed text-white/80">{content.hero.subtitle}</p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-none">
              {content.contentSections?.map((section) =>
                isBulletSection(section) ? (
                  <div key={section.title} className="mb-12">
                    <h2 className="mb-4 mt-12 text-2xl font-medium text-charcoal first:mt-0">{section.title}</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {section.items.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <Icon name="check-circle" className="mt-0.5 h-5 w-5 flex-shrink-0 text-warm-orange" />
                          <span className="text-charcoal-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div key={section.title} className="mb-8">
                    <h2 className="mb-6 mt-12 text-3xl font-medium text-charcoal first:mt-0">{section.title}</h2>
                    <p className="leading-relaxed text-charcoal-light">{section.body}</p>
                  </div>
                )
              )}

              {content.bulletSection ? (
                <div className="mb-12">
                  <h3 className="mb-4 mt-12 text-2xl font-medium text-charcoal">{content.bulletSection.title}</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {content.bulletSection.items.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <Icon name="check-circle" className="mt-0.5 h-5 w-5 flex-shrink-0 text-warm-orange" />
                        <span className="text-charcoal-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-12 rounded-2xl bg-secondary/50 p-8 lg:p-10">
              <h3 className="mb-4 text-2xl font-medium text-charcoal">{content.cta.title}</h3>
              <p className="mb-6 leading-relaxed text-charcoal-light">{content.cta.description}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={toTelHref(siteConfig.primaryPhone)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-warm-orange px-6 py-3 text-white transition-all hover:bg-warm-orange-dark"
                >
                  <Icon name="phone" className="h-5 w-5" />
                  {content.cta.primaryLabel}
                </a>
                {content.cta.secondaryLabel ? (
                  isContactCta(content.cta.secondaryLabel) ? (
                    <Link
                      href={contactPath}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-charcoal px-6 py-3 text-white transition-all hover:bg-charcoal-light"
                    >
                      {content.cta.secondaryLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <LeadFormTrigger
                      locale={locale}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-charcoal px-6 py-3 text-white transition-all hover:bg-charcoal-light"
                    >
                      {content.cta.secondaryLabel}
                      <ArrowRight className="h-4 w-4" />
                    </LeadFormTrigger>
                  )
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-charcoal pb-12 pt-28 text-white sm:pb-16 sm:pt-32 lg:pb-24 lg:pt-40">
        <div className="absolute inset-0">
          <Image
            src={content.hero.image}
            alt={content.hero.imageAlt}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/75 to-charcoal/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-warm-orange">{content.hero.badge}</p>
            <h1 className="mb-6 text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">{content.hero.title}</h1>
            <p className="max-w-3xl text-xl leading-relaxed text-white/75">{content.hero.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={toTelHref(siteConfig.primaryPhone)}
                className="inline-flex items-center justify-center rounded-full bg-warm-orange px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-warm-orange-dark"
              >
                {content.hero.primaryLabel}
              </a>
              <LeadFormTrigger
                locale={locale}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/15"
              >
                {content.hero.secondaryLabel}
              </LeadFormTrigger>
            </div>
          </div>
        </div>
      </section>

      {content.features?.length ? (
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {content.features.map((feature) => (
              <article key={feature.title} className="rounded-[1.75rem] border border-border bg-white p-6 shadow-[0_18px_40px_rgba(26,29,35,0.05)]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-warm-orange/10 text-warm-orange">
                  <Icon name={feature.icon} className="h-7 w-7" />
                </div>
                <h2 className="mb-3 text-xl font-medium text-charcoal">{feature.title}</h2>
                <p className="leading-relaxed text-charcoal-light">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {(content.contentSections?.length || content.bulletSection) ? (
        <section className="bg-secondary/50 py-16 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            {content.contentSections?.map((section) =>
              isBulletSection(section) ? (
                <article key={section.title} className="rounded-[1.75rem] border border-border bg-white p-8">
                  <h2 className="mb-6 text-2xl font-medium text-charcoal">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-charcoal-light">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-warm-orange" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ) : (
                <article key={section.title} className="rounded-[1.75rem] border border-border bg-white p-8">
                  <h2 className="mb-4 text-2xl font-medium text-charcoal">{section.title}</h2>
                  <p className="leading-relaxed text-charcoal-light">{section.body}</p>
                </article>
              )
            )}

            {content.bulletSection ? (
              <article className="rounded-[1.75rem] border border-border bg-white p-8">
                <h2 className="mb-6 text-2xl font-medium text-charcoal">{content.bulletSection.title}</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {content.bulletSection.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-charcoal-light">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-warm-orange" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ) : null}
          </div>
        </section>
      ) : null}

      {content.process ? (
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-warm-orange">{content.process.eyebrow}</p>
              <h2 className="mb-4 text-4xl font-medium text-charcoal sm:text-5xl">{content.process.title}</h2>
              <p className="text-lg leading-relaxed text-charcoal-light">{content.process.subtitle}</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6">
                {content.process.steps.map((step) => (
                  <article key={step.number} className="grid gap-4 rounded-[1.75rem] border border-border bg-white p-6 shadow-[0_18px_40px_rgba(26,29,35,0.05)] sm:grid-cols-[72px_1fr]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-charcoal text-lg font-medium text-white">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-charcoal">{step.title}</h3>
                      <p className="leading-relaxed text-charcoal-light">{step.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              {content.process.benefits?.length ? (
                <div className="grid gap-6">
                  {content.process.benefits.map((benefit) => (
                    <article key={benefit.title} className="rounded-[1.75rem] border border-border bg-secondary/50 p-8">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-warm-orange/10 text-warm-orange">
                        <Icon name={benefit.icon} className="h-7 w-7" />
                      </div>
                      <h3 className="mb-3 text-2xl font-medium text-charcoal">{benefit.title}</h3>
                      <p className="leading-relaxed text-charcoal-light">{benefit.description}</p>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {content.conversationalPrompt ? (
        <section className="bg-secondary/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-border bg-white p-8 shadow-[0_18px_40px_rgba(26,29,35,0.05)] lg:p-10">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm uppercase tracking-[0.28em] text-warm-orange">{content.conversationalPrompt.eyebrow}</p>
                <h2 className="mb-4 text-4xl font-medium text-charcoal sm:text-5xl">{content.conversationalPrompt.title}</h2>
                <p className="text-lg leading-relaxed text-charcoal-light">{content.conversationalPrompt.subtitle}</p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {content.conversationalPrompt.items.map((item) => (
                  <article key={item.title} className="rounded-[1.75rem] border border-border bg-secondary/35 p-6">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-warm-orange/10 text-warm-orange">
                      <Icon name={item.icon} className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-medium text-charcoal">{item.title}</h3>
                    <p className="leading-relaxed text-charcoal-light">{item.description}</p>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <AssistantTrigger
                  locale={locale}
                  initialIntent={content.conversationalPrompt.initialIntent}
                  className="inline-flex items-center justify-center rounded-full bg-warm-orange px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-warm-orange-dark"
                >
                  {content.conversationalPrompt.primaryLabel}
                </AssistantTrigger>
                <Link
                  href={contactPath}
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-warm-orange hover:text-warm-orange"
                >
                  {content.conversationalPrompt.secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {content.projects ? (
        <section className="bg-secondary/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm uppercase tracking-[0.28em] text-warm-orange">{content.projects.eyebrow}</p>
                <h2 className="mb-4 text-4xl font-medium text-charcoal sm:text-5xl">{content.projects.title}</h2>
                <p className="text-lg leading-relaxed text-charcoal-light">{content.projects.subtitle}</p>
              </div>

              {content.projects.ctaLabel ? (
                <Link href={worksPath} className="inline-flex items-center gap-2 text-sm font-medium text-warm-orange">
                  {content.projects.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {content.projects.items.map((project) => (
                <article key={project.title} className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[0_18px_40px_rgba(26,29,35,0.05)]">
                  <div className="relative aspect-[4/3]">
                    <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1280px) 50vw, 33vw" />
                  </div>
                  <div className="p-6">
                    <p className="mb-2 text-sm uppercase tracking-[0.22em] text-warm-orange">{project.location}</p>
                    <h3 className="text-2xl font-medium text-charcoal">{project.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {content.faq?.length ? (
        <section className="bg-background py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-border bg-white px-6 py-4 shadow-[0_20px_45px_rgba(26,29,35,0.06)] sm:px-8">
              <Accordion type="single" collapsible>
                {content.faq.map((item, index) => (
                  <AccordionItem key={item.question} value={`faq-${index}`}>
                    <AccordionTrigger className="py-6 text-lg text-charcoal hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-base leading-relaxed text-charcoal-light">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      ) : null}

      <section className="relative overflow-hidden bg-charcoal py-16 text-white lg:py-24">
        {content.cta.image ? (
          <div className="absolute inset-0">
            <Image src={content.cta.image} alt={content.cta.imageAlt ?? content.cta.title} fill className="object-cover opacity-25" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/70 to-charcoal/80" />
          </div>
        ) : null}

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-4xl font-medium sm:text-5xl">{content.cta.title}</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/75">{content.cta.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={toTelHref(siteConfig.primaryPhone)}
              className="inline-flex items-center justify-center rounded-full bg-warm-orange px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-warm-orange-dark"
            >
              {content.cta.primaryLabel}
            </a>
            {content.cta.secondaryLabel ? (
              isContactCta(content.cta.secondaryLabel) ? (
                <Link
                  href={contactPath}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/15"
                >
                  {content.cta.secondaryLabel}
                </Link>
              ) : (
                <LeadFormTrigger
                  locale={locale}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/15"
                >
                  {content.cta.secondaryLabel}
                </LeadFormTrigger>
              )
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
