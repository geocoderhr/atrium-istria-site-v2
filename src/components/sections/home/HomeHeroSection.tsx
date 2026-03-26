import { CSSProperties } from "react";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { HomeHeroContent } from "@/content/schema";
import { getUiCopy } from "@/content/locales/ui";
import { ConversationPanel } from "@/features/conversation/ConversationPanel";
import { Locale } from "@/lib/routing/locales";

type HomeHeroSectionProps = {
  hero: HomeHeroContent;
  locale: Locale;
};

export function HomeHeroSection({ hero, locale }: HomeHeroSectionProps) {
  const ui = getUiCopy(locale);
  const heroStyle = {
    "--hero-image": `url("${hero.backgroundImage}")`
  } as CSSProperties;

  return (
    <section className="home-hero" style={heroStyle}>
      <div className="home-hero__backdrop" />
      <div className="container home-hero__inner">
        <GlassPanel className="home-hero__panel">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>
          <ConversationPanel prompt={hero.prompt} placeholder={hero.placeholder} locale={locale} />
        </GlassPanel>
        <div className="home-hero__proof">
          {hero.proofCues.map((cue) => (
            <div key={cue.label} className="proof-card">
              <span>{cue.label}</span>
              <strong>{cue.value}</strong>
            </div>
          ))}
          <div className="proof-card proof-card--accent">
            <span>{ui.heroStartLabel}</span>
            <strong>{ui.heroStartValue}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
