import { siteConfig } from "@/content/site-config";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.siteName,
  url: siteConfig.siteUrl,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  areaServed: ["Pula", "Istra", "Croatia"],
  serviceType: [
    "Adaptacije kuća i stanova",
    "Adaptacije kupaonica",
    "Fasade",
    "Rekonstrukcije kuća",
    "Hidroizolacija"
  ]
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationJsonLd)
      }}
    />
  );
}
