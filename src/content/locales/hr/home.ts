import { HomePageContent, ProjectCase } from "@/content/schema";

export const homeContentHr: HomePageContent = {
  seo: {
    title: "Adaptacije, fasade i rekonstrukcije u Puli i Istri",
    description:
      "Atrium Istria vodi adaptacije kuća i stanova, kupaonice, fasade, rekonstrukcije i hidroizolaciju s jasnim procesom, preglednom komunikacijom i fokusom na kvalitetan rezultat.",
    path: "/"
  },
  hero: {
    eyebrow: "Atrium Istria",
    title: "Građevinski radovi u Puli i Istri, vođeni kao ozbiljan projekt.",
    description:
      "Za kuće, stanove, apartmane i objekte koji traže jasan proces, odgovornu izvedbu i normalnu komunikaciju od prvog razgovora.",
    prompt: "Recite ukratko o objektu i koje radove trebate.",
    placeholder: "Na primjer: kuća u Puli, rekonstrukcija prizemlja i nova fasada...",
    backgroundImage: "/site/hero/atrium-hero-exterior.jpg",
    proofCues: [
      { label: "Lokacija", value: "Pula i Istra" },
      { label: "Fokus", value: "Adaptacije i rekonstrukcije" },
      { label: "Pristup", value: "Jasan proces i pregled rada" }
    ]
  },
  servicesProcess: {
    title: "S kojim zadacima možete doći i kako rad počinje",
    intro:
      "Stranica odmah mora objasniti ne samo koje radove radimo, nego i kako izgleda prvi korak suradnje: pregled objekta, razumijevanje opsega i realna procjena.",
    items: [
      {
        title: "Adaptacije kuća i stanova",
        description: "Od parcijalnih zahvata do cjelovitog uređenja interijera."
      },
      {
        title: "Adaptacije kupaonica",
        description: "Rušenje, nove instalacije, keramika i završna oprema."
      },
      {
        title: "Fasade, rekonstrukcije i hidroizolacija",
        description: "Vanjski radovi koji traže kontrolu detalja i odgovornu izvedbu."
      }
    ]
  },
  selectedProjects: {
    title: "Odabrani radovi",
    intro:
      "Ne pokazujemo slučajne fotografije. Svaki primjer treba objasniti što je bilo, što je napravljeno i kakav je rezultat."
  },
  trust: {
    title: "Zašto ova stranica mora ulijevati povjerenje",
    items: [
      {
        title: "Jasna komunikacija",
        description: "Bez kvizova, bez kaosa, bez forsiranja kanala prije nego što korisnik razumije pristup."
      },
      {
        title: "Stvarni objekti",
        description: "Fotografije i slučajevi trebaju podupirati osjećaj realnog rada i kontrole nad projektom."
      },
      {
        title: "Praktična procjena",
        description: "Cijena ovisi o opsegu, stanju objekta, materijalima i pristupu izvedbi."
      }
    ]
  },
  pricingLogic: {
    title: "Od čega ovisi procjena i cijena",
    intro:
      "Na glavnoj stranici mora postojati pošten blok koji objašnjava kako se zadatak procjenjuje prije ponude.",
    factors: [
      {
        title: "Stanje objekta",
        description: "Koliko pripremnih i sanacijskih radova objekt stvarno traži."
      },
      {
        title: "Opseg zahvata",
        description: "Je li riječ o jednoj zoni ili o povezanom paketu radova."
      },
      {
        title: "Materijali i detalji izvedbe",
        description: "Različita tehnička rješenja i završne obrade mijenjaju dinamiku i budžet."
      }
    ]
  },
  faq: {
    title: "Najčešća pitanja",
    items: [
      {
        question: "Možemo li krenuti samo s opisom zadatka?",
        answer: "Da. Prvi kontakt može biti kratak opis objekta i radova, a zatim se definira sljedeći korak."
      },
      {
        question: "Radite li samo Pulu?",
        answer: "Primarni fokus su Pula i Istra, ovisno o tipu projekta i opsegu radova."
      },
      {
        question: "Možete li preuzeti rekonstrukciju cijelog objekta?",
        answer: "Da, ako projekt traži cjelovitu organizaciju i jasno vođenje procesa."
      }
    ]
  },
  finalContact: {
    title: "Pošaljite objekt i krenimo normalno, bez nepotrebnog kompliciranja.",
    description:
      "Napišite što imate, gdje se objekt nalazi i koje radove planirate. Nakon toga ide pregled, pojašnjenje opsega i realan sljedeći korak.",
    phone: "+385 91 000 0000",
    email: "info@atriumistria.com"
  }
};

export const homeProjectsHr: ProjectCase[] = [
  {
    slug: "pula-stan-adaptacija",
    title: "Adaptacija stana u Puli",
    location: "Pula",
    summary: "Reorganizacija interijera i obnova ključnih zona stana.",
    result: "Čistiji raspored, bolja funkcija i suvremeniji završni dojam.",
    image: "/site/projects/pula-stan-adaptacija.jpg"
  },
  {
    slug: "istra-kupaonica-rekonstrukcija",
    title: "Rekonstrukcija kupaonice",
    location: "Istra",
    summary: "Zamjena instalacija, nova keramika i uredniji detalji izvedbe.",
    result: "Pouzdanija funkcija i jasniji završni standard prostora.",
    image: "/site/projects/kupaonica-rekonstrukcija.jpg"
  },
  {
    slug: "pula-kuca-fasada",
    title: "Fasada i vanjska sanacija kuće",
    location: "Pula",
    summary: "Obnova vanjske ovojnice s fokusom na zaštitu i uredan rezultat.",
    result: "Mirniji, precizniji i dugoročno održiv izgled objekta.",
    image: "/site/projects/pula-kuca-fasada.jpg"
  }
];
