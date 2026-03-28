import { HomePageContent } from "@/content/types";

export const hrHomeTrustContent: HomePageContent["trust"] = {
  eyebrow: "Zašto nas biraju",
  title: "Pristup temeljen na povjerenju",
  subtitle:
    "Dugoročne odnose s klijentima gradimo kroz transparentnost, kvalitetu i poštovanje prema svakom projektu.",
  points: [
    {
      title: "Jasna komunikacija",
      description: "Redovita ažuriranja o projektu i izravan kontakt u svakoj fazi.",
      icon: "check-circle"
    },
    {
      title: "Realni rokovi",
      description: "Dogovaramo ostvarive rokove i držimo se usuglašenog plana.",
      icon: "clock"
    },
    {
      title: "Organiziran proces",
      description: "Strukturiran tijek rada od prvog razgovora do završne primopredaje.",
      icon: "file-text"
    }
  ],
  stats: [
    { value: "100%", label: "Jasnost" },
    { value: "24/7", label: "Podrška" },
    { value: "15+", label: "Stručnjaka" },
    { value: "★", label: "Premium kvaliteta", icon: "star" }
  ]
};
