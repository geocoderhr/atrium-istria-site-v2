import { ServicePageContent } from "@/content/types";

export const kupaonicePageContent: ServicePageContent = {
  slug: "kupaonice",
  meta: {
    title: "Adaptacije kupaonica | Atrium Istria",
    description: "Potpuna obnova kupaonica u Istri s hidroizolacijom, keramikom, sanitarnom opremom i urednom izvedbom.",
    path: "/hr/kupaonice"
  },
  hero: {
    badge: "Kupaonice",
    title: "Adaptacije kupaonica",
    subtitle:
      "Potpuna obnova kupaonica s modernim materijalima, hidroizolacijom i funkcionalnim rješenjima.",
    image: "/site/services/kupaonice-hero.jpg",
    imageAlt: "Moderna kupaonica",
    primaryLabel: "Nazovite nas",
    secondaryLabel: "Kontakt"
  },
  contentSections: [
    {
      title: "Moderna kupaonica bez kompromisa",
      body:
        "Adaptacija kupaonice uključuje cjelovit ciklus: rušenje starih obloga i sanitarija, obnovu instalacija, hidroizolaciju, postavljanje pločica i montažu nove opreme."
    },
    {
      title: "Rok izvođenja",
      body:
        "Standardna kupaonica može se završiti za 10 do 14 dana, ovisno o stanju instalacija i složenosti odabranih rješenja."
    },
    {
      title: "Materijali i oprema",
      body:
        "Radimo s provjerenim dobavljačima i materijalima srednje i više klase te pomažemo u odabiru sanitarija i keramike u skladu s vašim budžetom."
    }
  ],
  bulletSection: {
    title: "Što uključuje adaptacija kupaonice",
    items: [
      "Rušenje starih pločica i sanitarija",
      "Obnova vodovodne i kanalizacijske instalacije",
      "Hidroizolacija poda i zidova",
      "Postavljanje novih pločica",
      "Ugradnja tuš kabine ili kade",
      "Montaža umivaonika i WC-a",
      "Ugradnja grijanja ili podnog grijanja",
      "Postavljanje ogledala i rasvjete"
    ]
  },
  cta: {
    title: "Planirate novu kupaonicu?",
    description:
      "Pošaljite fotografije postojećeg stanja ili nas kontaktirajte za obilazak. Pripremit ćemo ponudu prema vašim potrebama.",
    primaryLabel: "Nazovite",
    secondaryLabel: "Idite na kontakt"
  }
};
