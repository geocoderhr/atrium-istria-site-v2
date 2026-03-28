import { sharedContactDetails } from "@/content/site-config";
import { ServicePageContent } from "@/content/types";

export const adaptacijeKucaIStanovaPageContent: ServicePageContent = {
  slug: "adaptacije-kuca-i-stanova",
  meta: {
    title: "Adaptacije kuća i stanova u Istri | Atrium Istria",
    description:
      "Kompletne adaptacije kuća i stanova u Istri: raspored prostora, instalacije, završna obrada i obnova stambenih interijera.",
    path: "/hr/adaptacije-kuca-i-stanova"
  },
  hero: {
    badge: "Adaptacije",
    title: "Adaptacije kuća i stanova",
    subtitle:
      "Modernizacija i prilagodba postojećih stambenih prostora vašim potrebama, navikama i načinu života.",
    image: "/site/services/adaptacije-hero.jpg",
    imageAlt: "Adaptacija kuće u Istri",
    primaryLabel: "Nazovite nas",
    secondaryLabel: "Pošaljite upit"
  },
  features: [
    {
      title: "Rušenje i novi raspored",
      description: "Mijenjamo konfiguraciju prostora prema vašem svakodnevnom načinu života.",
      icon: "hammer"
    },
    {
      title: "Nove instalacije",
      description: "Obnavljamo električne, vodovodne i odvodne instalacije.",
      icon: "lightbulb"
    },
    {
      title: "Podovi i stolarija",
      description: "Mijenjamo obloge, unutarnja vrata i osnovne završne elemente.",
      icon: "home"
    },
    {
      title: "Mokri čvorovi",
      description: "Izvodimo cjelovite adaptacije kupaonica i tehničkih zona.",
      icon: "droplet"
    }
  ],
  bulletSection: {
    title: "Što može uključivati adaptacija",
    items: [
      "Rušenje i postavljanje pregradnih zidova",
      "Obnova električne instalacije",
      "Obnova vodovodne instalacije",
      "Obnova kanalizacije",
      "Zamjena podnih obloga",
      "Zamjena unutarnjih vrata",
      "Gletanje i bojanje zidova",
      "Postavljanje keramike",
      "Adaptacija kupaonica",
      "Ugradnja nove kuhinje",
      "Ugradnja novih prozora",
      "Integracija grijanja i hlađenja"
    ]
  },
  process: {
    eyebrow: "Proces rada",
    title: "Kako izgleda adaptacija",
    subtitle:
      "Postupan i predvidljiv proces koji pomaže držati rokove, budžet i kvalitetu pod kontrolom.",
    steps: [
      {
        number: "01",
        title: "Razgovor i obilazak",
        description: "Razgovaramo o vašim potrebama, dolazimo na objekt i procjenjujemo postojeće stanje."
      },
      {
        number: "02",
        title: "Plan i ponuda",
        description: "Pripremamo jasan plan radova s transparentnom procjenom troškova i rokovima."
      },
      {
        number: "03",
        title: "Izvođenje radova",
        description: "Radimo prema dogovorenom scenariju i redovito dijelimo informacije o napretku."
      },
      {
        number: "04",
        title: "Završna kontrola",
        description: "Zajedno provjeravamo kvalitetu rezultata i obavljamo primopredaju."
      }
    ],
    benefits: [
      {
        title: "Realni rokovi",
        description: "Postavljamo ostvarive rokove i ne stvaramo lažna očekivanja.",
        icon: "clock"
      },
      {
        title: "Transparentna cijena",
        description: "Detaljna ponuda bez skrivenih troškova.",
        icon: "euro"
      },
      {
        title: "Premium izvedba",
        description: "Kvalitetni materijali i pažljivo izvedeni detalji.",
        icon: "sparkles"
      }
    ]
  },
  conversationalPrompt: {
    eyebrow: "Brzi odgovor",
    title: "Dobijte brz odgovor za svoj projekt",
    subtitle:
      "Opišite objekt, postavite pitanje ili pošaljite osnovne informacije. Atrium manager će vam brzo pomoći razumjeti opseg radova i sljedeći korak.",
    items: [
      {
        title: "Postavite pitanje odmah",
        description:
          "Ako se želite brzo orijentirati oko adaptacije, napišite pitanje svojim riječima i dobit ćete prvi odgovor bez suvišnog čekanja.",
        icon: "message-circle"
      },
      {
        title: "Dobijte početni smjer",
        description:
          "Pomoći ćemo vam razumjeti koje su informacije važne za procjenu, što treba znati o objektu i od čega je najbolje krenuti.",
        icon: "file-text"
      },
      {
        title: "Razumijte sljedeći korak",
        description:
          "Nakon prvog razgovora bit će jasno jesu li dovoljne fotografije, treba li obilazak i kako je najbolje nastaviti dalje.",
        icon: "clock"
      }
    ],
    primaryLabel: "Otvorite razgovor s managerom",
    secondaryLabel: "Idite na kontakt",
    initialIntent: "Planiram adaptaciju kuće ili stana. Pomozite mi razumjeti sljedeći korak."
  },
  faq: [
    {
      question: "Koliko traje adaptacija stana?",
      answer:
        "Ovisno o opsegu radova, adaptacija stana obično traje između 3 i 8 tjedana. Kod potpune obnove instalacija rok može biti i duži."
    },
    {
      question: "Može li se živjeti u stanu tijekom radova?",
      answer:
        "To ovisi o opsegu zahvata. Kod manjih radova često je moguće ostati u prostoru, ali kod potpune adaptacije preporučujemo privremeni smještaj."
    },
    {
      question: "Jesu li potrebne dozvole?",
      answer:
        "Za većinu unutarnjih radova posebna dozvola nije potrebna, ali za zahvate na nosivoj konstrukciji potrebna je odgovarajuća dokumentacija."
    },
    {
      question: "Kako se formira cijena?",
      answer:
        "Cijena ovisi o kvadraturi, opsegu radova, stanju objekta i odabiru materijala. Točnu procjenu pripremamo nakon razgovora i obilaska."
    }
  ],
  cta: {
    title: "Spremni ste za promjenu prostora?",
    description:
      "Recite nam što želite promijeniti u kući ili stanu. Dolazimo na konzultaciju i predlažemo jasan sljedeći korak.",
    primaryLabel: sharedContactDetails.primaryPhone,
    secondaryLabel: "Kontakt forma",
    image: "/site/services/adaptacije-cta.jpg",
    imageAlt: "Moderna kuća nakon adaptacije"
  }
};
