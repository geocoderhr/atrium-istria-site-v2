import { ServicePageContent } from "@/content/types";

export const rekonstrukcijePageContent: ServicePageContent = {
  slug: "rekonstrukcije",
  meta: {
    title: "Rekonstrukcije kuća | Atrium Istria",
    description: "Cjelovite rekonstrukcije kuća u Istri: konstrukcija, instalacije, fasade i potpuna modernizacija objekata.",
    path: "/hr/rekonstrukcije"
  },
  hero: {
    badge: "Rekonstrukcije",
    title: "Rekonstrukcije kuća",
    subtitle: "Potpuna obnova i modernizacija postojećih objekata.",
    image: "/site/services/rekonstrukcije-hero.jpg",
    imageAlt: "Rekonstrukcija kuće",
    primaryLabel: "Nazovite nas",
    secondaryLabel: "Kontakt"
  },
  contentSections: [
    {
      title: "Od temelja do krova",
      body:
        "Rekonstrukcija kuće može uključivati sanaciju temelja, obnovu krova, instalacija, prozora, fasade, izmjenu unutarnjeg rasporeda i potpunu završnu obradu. Pristup je uvijek individualan i ovisi o stvarnom stanju objekta."
    },
    {
      title: "Planiranje i izvođenje",
      body:
        "Prije početka radova obilazimo objekt, razgovaramo o ciljevima i pripremamo fazni plan radova, troškovnik i okvirne rokove. Izvođenje se odvija po etapama uz stalnu komunikaciju."
    },
    {
      title: "Dokumentacija i dozvole",
      body:
        "Ovisno o opsegu zahvata, mogu biti potrebne prijave ili dozvole. Možemo pomoći u tom procesu ili koordinirati rad s vašim projektantom."
    },
    {
      title: "Trajanje projekta",
      body:
        "Potpuna rekonstrukcija prosječne obiteljske kuće obično traje od 3 do 6 mjeseci, ovisno o opsegu i tehničkom stanju objekta."
    }
  ],
  bulletSection: {
    title: "Što može uključivati rekonstrukcija",
    items: [
      "Sanacija temelja i hidroizolacija",
      "Obnova ili zamjena krova",
      "Izmjena nosivih i pregradnih zidova",
      "Nova električna mreža",
      "Novi vodovod i kanalizacija",
      "Ugradnja grijanja",
      "Zamjena prozora i vanjskih vrata",
      "Unutarnja i vanjska izolacija",
      "Fasada i vanjske površine",
      "Adaptacija kupaonica i kuhinje",
      "Podne obloge i završna obrada zidova",
      "Cjelovito uređenje interijera"
    ]
  },
  cta: {
    title: "Planirate rekonstrukciju kuće?",
    description:
      "Kontaktirajte nas za obilazak i razgovor o mogućem scenariju rekonstrukcije. Pomoći ćemo procijeniti opseg radova i jasan sljedeći korak.",
    primaryLabel: "Nazovite",
    secondaryLabel: "Idite na kontakt"
  }
};
