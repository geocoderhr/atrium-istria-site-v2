import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { LeadFormTrigger } from "@/components/lead-form/LeadFormTrigger";
import { Icon } from "@/components/ui/Icon";
import { getLeadFormUi } from "@/content/lead-form";
import { getPrivacyPolicyPath } from "@/content/privacy-policy";
import { ContactPageContent, Locale } from "@/content/types";

type ContactPageProps = {
  content: ContactPageContent;
  locale: Locale;
};

export function ContactPage({ content, locale }: ContactPageProps) {
  const leadFormUi = getLeadFormUi(locale);
  const privacyHref = getPrivacyPolicyPath(locale);

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-charcoal pb-12 pt-28 text-white sm:pb-16 sm:pt-32 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-medium sm:text-5xl lg:text-6xl">{content.hero.title}</h1>
          <p className="text-xl leading-relaxed text-white/80">{content.hero.subtitle}</p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-8 text-3xl font-medium text-charcoal">{content.infoTitle}</h2>

              <div className="mb-12 space-y-6">
                {content.infoBlocks.map((block) => (
                  <div key={block.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-warm-orange/10 text-warm-orange">
                      <Icon name={block.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-medium text-charcoal">{block.title}</h3>
                      {block.href ? (
                        <a
                          href={block.href}
                          target={block.href.startsWith("http") ? "_blank" : undefined}
                          rel={block.href.startsWith("http") ? "noreferrer" : undefined}
                          className="break-all text-charcoal-light transition-colors hover:text-warm-orange"
                        >
                          {block.value}
                        </a>
                      ) : (
                        <p className="text-charcoal-light">{block.value}</p>
                      )}
                      {block.note ? <p className="mt-1 text-sm text-muted-foreground">{block.note}</p> : null}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-secondary/50 p-6 lg:p-8">
                <h3 className="mb-3 font-medium text-charcoal">{content.expectationTitle}</h3>
                <ul className="space-y-2 text-sm text-charcoal-light">
                  {content.expectationItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 text-warm-orange">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-lg lg:p-8">
                <h2 className="mb-6 text-2xl font-medium text-charcoal">{content.form.title}</h2>
                <p className="mb-6 leading-relaxed text-charcoal-light">{leadFormUi.contactCardDescription}</p>

                <div className="mb-8 space-y-3">
                  {leadFormUi.contactCardItems.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl bg-secondary/50 px-4 py-4 text-sm text-charcoal-light">
                      <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-warm-orange" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <LeadFormTrigger
                  locale={locale}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-warm-orange px-6 py-3 text-white transition-all hover:bg-warm-orange-dark hover:shadow-lg"
                >
                  {leadFormUi.launchLabel}
                  <ArrowRight className="h-4 w-4" />
                </LeadFormTrigger>

                <div className="mt-5 rounded-2xl bg-secondary/40 px-4 py-4 text-sm text-charcoal-light">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
                    <p>
                      {leadFormUi.consentPrefix}{" "}
                      <Link
                        href={privacyHref}
                        className="font-medium text-charcoal underline decoration-warm-orange/50 underline-offset-4 transition-colors hover:text-warm-orange"
                      >
                        {leadFormUi.privacyLabel}
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
