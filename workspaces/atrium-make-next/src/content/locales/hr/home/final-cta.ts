import { sharedContactDetails, toTelHref } from "@/content/site-config";
import { HomePageContent } from "@/content/types";

export const hrHomeFinalCtaContent: HomePageContent["finalCta"] = {
  title: "Spremni za transformaciju prostora?",
  description:
    "Bilo da planirate adaptaciju kupaonice ili rekonstrukciju cijele kuće, projekt možete pokrenuti već danas.",
  primaryLabel: "Nazovite nas",
  secondaryLabel: "Pošaljite upit",
  image: "/site/home/final-cta-house.jpg",
  imageAlt: "Moderna kuća u Istri",
  contactBlocks: [
    {
      title: "Telefon 1",
      value: sharedContactDetails.primaryPhone,
      href: toTelHref(sharedContactDetails.primaryPhone),
      icon: "phone"
    },
    {
      title: "Telefon 2",
      value: sharedContactDetails.secondaryPhone,
      href: toTelHref(sharedContactDetails.secondaryPhone),
      icon: "phone"
    },
    {
      title: "Email",
      value: sharedContactDetails.email,
      href: `mailto:${sharedContactDetails.email}`,
      icon: "mail"
    },
    {
      title: "Lokacija",
      value: sharedContactDetails.location,
      icon: "map-pin"
    }
  ]
};
