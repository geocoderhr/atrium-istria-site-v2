import { ServicePageContent } from "@/content/types";

export const fasadePageContent: ServicePageContent = {
  slug: "fasade",
  meta: {
    title: "Fasadni radovi | Atrium Istria",
    description: "Obnova fasada, toplinska izolacija i zaštitni sustavi za kuće i stambene objekte u Istri.",
    path: "/hr/fasade"
  },
  hero: {
    badge: "Fasade",
    title: "Fasadni radovi",
    subtitle: "Obnova i izolacija fasada kuća i stambenih objekata.",
    image: "/site/services/fasade-hero.jpg",
    imageAlt: "Fasada zgrade",
    primaryLabel: "Nazovite nas",
    secondaryLabel: "Kontakt"
  },
  contentSections: [
    {
      title: "Fasada koja štiti i dobro izgleda",
      body:
        "Fasada je istovremeno zaštita kuće i prvi dojam objekta. Obnovom fasade moguće je povećati energetsku učinkovitost, zaštititi zidove od vlage i osvježiti vanjski izgled objekta."
    },
    {
      title: "Vrste fasadnih rješenja",
      body:
        "Radimo s tradicionalnim demit sustavima, kontaktnim fasadama ETICS i dekorativnim obnovama postojeće fasade, ovisno o stanju objekta i cilju projekta."
    },
    {
      title: "Rok izvođenja",
      body:
        "Trajanje ovisi o kvadraturi fasade, stanju podloge i vremenskim uvjetima. Rokove uvijek definiramo unaprijed."
    }
  ],
  bulletSection: {
    title: "Koje fasadne radove izvodimo",
    items: [
      "Priprema površine i sanacija pukotina",
      "Postavljanje toplinske izolacije",
      "Armiranje i izravnavanje",
      "Završni dekorativni premazi",
      "Izrada sokla",
      "Obrada prozorskih otvora",
      "Ugradnja dekorativnih elemenata",
      "Bojanje i zaštita fasade"
    ]
  },
  cta: {
    title: "Planirate fasadne radove?",
    description:
      "Pošaljite fotografije objekta ili dogovorite obilazak. Procijenit ćemo stanje i predložiti odgovarajući fasadni pristup.",
    primaryLabel: "Nazovite",
    secondaryLabel: "Idite na kontakt"
  }
};
