import { homeContentHr } from "@/content/locales/hr/home";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ConversationPanel } from "@/features/conversation/ConversationPanel";

export function HomeHeroSection() {
  const { hero } = homeContentHr;

  return (
    <section className="home-hero">
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
        </div>
      </div>
    </section>
  );
}
