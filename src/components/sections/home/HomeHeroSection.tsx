import { CSSProperties } from "react";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { HomeHeroContent } from "@/content/schema";
import { ConversationPanel } from "@/features/conversation/ConversationPanel";

type HomeHeroSectionProps = {
  hero: HomeHeroContent;
};

export function HomeHeroSection({ hero }: HomeHeroSectionProps) {
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
          <ConversationPanel prompt={hero.prompt} placeholder={hero.placeholder} />
        </GlassPanel>
        <div className="home-hero__proof">
          {hero.proofCues.map((cue) => (
            <div key={cue.label} className="proof-card">
              <span>{cue.label}</span>
              <strong>{cue.value}</strong>
            </div>
          ))}
          <div className="proof-card proof-card--accent">
            <span>Početak suradnje</span>
            <strong>Opis objekta, pregled opsega i konkretan sljedeći korak.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
