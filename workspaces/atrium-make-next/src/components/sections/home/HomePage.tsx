import { HomeFinalCtaSection } from "@/components/sections/home/parts/HomeFinalCtaSection";
import { HomeHeroSection } from "@/components/sections/home/parts/HomeHeroSection";
import { HomePricingSection } from "@/components/sections/home/parts/HomePricingSection";
import { HomeProcessSection } from "@/components/sections/home/parts/HomeProcessSection";
import { HomeServicesSection } from "@/components/sections/home/parts/HomeServicesSection";
import { HomeTrustSection } from "@/components/sections/home/parts/HomeTrustSection";
import { getSiteConfig, getUiLabels } from "@/content/site-config";
import { HomePageContent, Locale } from "@/content/types";

type HomePageProps = {
  content: HomePageContent;
  locale: Locale;
};

export function HomePage({ content, locale }: HomePageProps) {
  const ui = getUiLabels(locale);
  const siteConfig = getSiteConfig(locale);

  return (
    <div className="min-h-screen bg-charcoal">
      <HomeHeroSection
        content={content.hero}
        locale={locale}
        learnMoreLabel={ui.learnMoreLabel}
        previousSlideLabel={ui.previousSlideLabel}
        nextSlideLabel={ui.nextSlideLabel}
        galleryUi={{
          thumbnailsLabel: ui.galleryThumbnailsLabel,
          closeLabel: ui.closeGalleryLabel,
          previousImageLabel: ui.previousImageLabel,
          nextImageLabel: ui.nextImageLabel
        }}
      />

      <HomeServicesSection content={content.services} locale={locale} learnMoreLabel={ui.learnMoreLabel} />
      <HomeProcessSection content={content.process} />
      <HomePricingSection content={content.pricing} />
      <HomeTrustSection content={content.trust} />
      <HomeFinalCtaSection content={content.finalCta} locale={locale} primaryPhone={siteConfig.primaryPhone} />
    </div>
  );
}
