import { sharedContactDetails, toTelHref } from "@/content/site-config";
import { HomePageContent } from "@/content/types";

export const ruHomeFinalCtaContent: HomePageContent["finalCta"] = {
  title: "Готовы к трансформации пространства?",
  description:
    "Будь то ремонт ванной комнаты или реконструкция целого дома, начните проект уже сегодня.",
  primaryLabel: "Позвонить нам",
  secondaryLabel: "Отправить запрос",
  image: "/site/home/final-cta-house.jpg",
  imageAlt: "Современный дом в Истрии",
  contactBlocks: [
    {
      title: "Телефон 1",
      value: sharedContactDetails.primaryPhone,
      href: toTelHref(sharedContactDetails.primaryPhone),
      icon: "phone"
    },
    {
      title: "Телефон 2",
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
      title: "Локация",
      value: sharedContactDetails.location,
      icon: "map-pin"
    }
  ]
};
