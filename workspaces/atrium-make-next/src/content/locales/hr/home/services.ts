import { HomePageContent } from "@/content/types";

export const hrHomeServicesContent: HomePageContent["services"] = {
  eyebrow: "Naše usluge",
  title: "Biramo najbolje rješenje za svaki prostor",
  subtitle:
    "Izvodimo puni raspon građevinskih i adaptacijskih radova diljem Istre, od lokalnih zahvata do cjelovitih projekata.",
  cards: [
    {
      slug: "adaptacije-kuca-i-stanova",
      title: "Adaptacije kuća i stanova",
      description: "Cjelovito osvježavanje stambenih prostora prema vašim potrebama i načinu života.",
      icon: "home",
      image: "/site/services/adaptacije-cta.jpg",
      imageAlt: "Adaptirani stambeni interijer"
    },
    {
      slug: "kupaonice",
      title: "Adaptacije kupaonica",
      description: "Moderne kupaonice s kvalitetnim materijalima i urednom izvedbom.",
      icon: "bath"
    },
    {
      slug: "fasade",
      title: "Fasade",
      description: "Obnova i toplinska zaštita fasada kuća i stambenih objekata.",
      icon: "building"
    },
    {
      slug: "rekonstrukcije",
      title: "Rekonstrukcije",
      description: "Kompletna rekonstrukcija kuća, od konstrukcije do završne obrade.",
      icon: "hammer"
    },
    {
      slug: "hidroizolacija",
      title: "Hidroizolacija",
      description: "Zaštita od vlage za temelje, krovove, zidove i mokre zone.",
      icon: "droplet"
    }
  ]
};
