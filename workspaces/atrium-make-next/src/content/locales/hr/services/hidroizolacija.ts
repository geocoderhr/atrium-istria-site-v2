import { ServicePageContent } from "@/content/types";

export const hidroizolacijaPageContent: ServicePageContent = {
  slug: "hidroizolacija",
  meta: {
    title: "Hidroizolacija | Atrium Istria",
    description: "Zaštita od vlage za temelje, krovove, zidove i mokre zone u stambenim objektima diljem Istre.",
    path: "/hr/hidroizolacija"
  },
  hero: {
    badge: "Hidroizolacija",
    title: "Hidroizolacija",
    subtitle: "Zaštita od vlage za temelje, krov, zidove i druge osjetljive površine.",
    image: "/site/services/hidroizolacija-hero.jpg",
    imageAlt: "Hidroizolacijski radovi",
    primaryLabel: "Nazovite nas",
    secondaryLabel: "Kontakt"
  },
  contentSections: [
    {
      title: "Pouzdana zaštita od vlage",
      body:
        "Hidroizolacija je ključna za dugovječnost objekta. Vlaga koja prodire kroz temelje, zidove ili krov oštećuje konstrukciju, uzrokuje plijesan i povećava troškove korištenja objekta."
    },
    {
      title: "Vrste hidroizolacije",
      body:
        "Radimo hidroizolaciju temelja, krovova, kupaonica i mokrih zona, kao i sanaciju vlažnih zidova kod starijih objekata."
    }
  ],
  bulletSection: {
    title: "Koje radove izvodimo",
    items: [
      "Iskop uz temelje",
      "Čišćenje i priprema podloge",
      "Nanošenje bitumenskih premaza",
      "Postavljanje folija i membrana",
      "Zaštitni slojevi hidroizolacije",
      "Drenažni sustavi",
      "Sanacija oštećenih dijelova",
      "Završna obrada"
    ]
  },
  cta: {
    title: "Imate problem s vlagom?",
    description:
      "Pošaljite fotografije ili dogovorite obilazak. Pomoći ćemo otkriti uzrok problema i odabrati odgovarajuću zaštitu.",
    primaryLabel: "Nazovite",
    secondaryLabel: "Idite na kontakt"
  }
};
