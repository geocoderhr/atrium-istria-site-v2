import { HomePageContent, ProjectCase } from "@/content/schema";

export const homeContentHr: HomePageContent = {
  seo: {
    title: "Adaptacije, fasade i rekonstrukcije u Puli i Istri",
    description:
      "Atrium Istria vodi adaptacije kuća i stanova, kupaonice, fasade, rekonstrukcije i hidroizolaciju u Puli i Istri, s jasnim procesom i preglednom komunikacijom od prvog kontakta.",
    path: "/"
  },
  hero: {
    eyebrow: "Atrium Istria | Pula i Istra",
    title: "Adaptacije, fasade i rekonstrukcije vođene kao ozbiljan projekt.",
    description:
      "Za kuće, stanove, apartmane i objekte kojima trebaju jasni koraci, uredna izvedba i normalna komunikacija bez kaosa i bez praznih obećanja.",
    prompt: "Opišite objekt i koje radove planirate.",
    placeholder:
      "Primjer: kuća u Puli, obnova fasade i adaptacija prizemlja, želimo procjenu i prvi razgovor...",
    backgroundImage: "/site/hero/atrium-hero-exterior.jpg",
    proofCues: [
      { label: "Područje rada", value: "Pula i Istra" },
      { label: "Prvi korak", value: "Slobodan opis objekta, bez kviza" },
      { label: "Fokus", value: "Kuće, stanovi, kupaonice i rekonstrukcije" }
    ]
  },
  servicesProcess: {
    title: "Usluge koje možete riješiti na jednoj jasnoj stranici",
    intro:
      "Stranica ne treba djelovati kao veliki i raspršeni site. Ispod su glavni tipovi radova, a detalji se otvaraju unutar iste stranice.",
    items: [
      {
        title: "Adaptacije kuća i stanova",
        description:
          "Od parcijalnih zahvata do cjelovite obnove interijera, s preglednim koracima i jasnim prioritetima.",
        href: "/adaptacije-kuca-i-stanova"
      },
      {
        title: "Adaptacije kupaonica",
        description:
          "Rušenje, instalacije, priprema, keramika i završna oprema u jednoj odgovorno vođenoj cjelini.",
        href: "/adaptacije-kupaonica"
      },
      {
        title: "Fasade, rekonstrukcije i hidroizolacija",
        description:
          "Vanjski i konstruktivni radovi koji traže točnost u procjeni, zaštiti objekta i završnoj izvedbi.",
        href: "/fasade"
      }
    ]
  },
  selectedProjects: {
    title: "Odabrani radovi",
    intro:
      "Ne prikazujemo nasumične fotografije. Svaki projekt ovdje treba pokazati što je bilo, što smo napravili i kakav je rezultat za objekt.",
    ctaLabel: "",
    ctaHref: ""
  },
  trust: {
    title: "Kako radimo i od čega ovisi procjena",
    items: [
      {
        title: "Jasan početak komunikacije",
        description:
          "Korisnik može krenuti kratkim opisom objekta i radova, bez forsiranih scenarija i bez osjećaja da priča s botom."
      },
      {
        title: "Radovi prikazani kao proces",
        description:
          "Primjeri se ne svode na lijepe fotografije, nego pokazuju što je izvedeno i kakva je vrijednost rezultata."
      },
      {
        title: "Ozbiljna procjena zadatka",
        description:
          "Cijena i izvedba ovise o stvarnom stanju objekta, opsegu i tehničkim detaljima, ne o generičnoj formuli."
      }
    ]
  },
  pricingLogic: {
    title: "Kako radimo i od čega ovisi procjena",
    intro:
      "Ispod je kratko i jasno objašnjeno kako posao kreće, kako razumijemo opseg i zašto ozbiljna procjena mora polaziti od stvarnog stanja objekta.",
    factors: [
      {
        title: "Stanje objekta",
        description:
          "Drugačije se vodi uredan prostor za doradu, a drugačije objekt koji prvo traži sanaciju ili pripremne radove."
      },
      {
        title: "Opseg i povezanost radova",
        description:
          "Jedna kupaonica, cijeli stan ili rekonstrukcija manjeg objekta nisu isti zadaci ni po dinamici ni po organizaciji."
      },
      {
        title: "Materijali i završna razina",
        description:
          "Izbor rješenja, detalja i završnih slojeva izravno utječe na budžet, trajanje i razinu kontrole u izvedbi."
      }
    ]
  },
  faq: {
    title: "Najčešća pitanja prije prvog kontakta",
    items: [
      {
        question: "Možemo li krenuti samo s kratkim opisom zadatka?",
        answer:
          "Da. Dovoljan je normalan opis objekta, lokacije i radova koje planirate. Nakon toga slijedi pojašnjenje opsega i idući konkretan korak."
      },
      {
        question: "Radite li samo privatne objekte?",
        answer:
          "Primarni fokus su kuće, stanovi, apartmani i manji objekti u Puli i Istri, ali pristup je dovoljno jasan i za druge tipove projekata."
      },
      {
        question: "Možete li preuzeti i šire rekonstrukcije?",
        answer:
          "Da, kada projekt traži povezane radove i ozbiljno vođenje procesa, ne samo pojedinačnu intervenciju."
      }
    ]
  },
  finalContact: {
    title: "",
    description: "",
    phone: "+385 91 000 0000",
    email: "info@atriumistria.com"
  }
};

export const homeProjectsHr: ProjectCase[] = [
  {
    slug: "pula-fasada-obnova",
    title: "Obnova fasade obiteljske kuće",
    objectType: "Obiteljska kuća",
    location: "Pula",
    service: "Fasade",
    serviceHref: "/fasade",
    challenge: "Objekt je trebao obnovu vanjskog izgleda i jasniji završni standard.",
    workDone: "Sanacija i obnova pročelja s pažljivijim tretmanom detalja i čitljivijim rezultatom.",
    result: "Kuća sada djeluje uredno, dovršeno i puno uvjerljivije kao stvaran gotov objekt.",
    image: "/site/projects/pula-fasada-obnova.jpg",
    imageAlt: "Obnovljena fasada kuće u Puli"
  },
  {
    slug: "kupaonica-rekonstrukcija",
    title: "Rekonstrukcija kupaonice",
    objectType: "Kupaonica u stanu ili apartmanu",
    location: "Istra",
    service: "Adaptacije kupaonica",
    serviceHref: "/adaptacije-kupaonica",
    challenge: "Zastarjeli sanitarni prostor tražio je novu organizaciju i moderniju završnu obradu.",
    workDone: "Instalacije, priprema, keramika, tuš zona i završni elementi izvedeni kao jedna cjelina.",
    result: "Dobivena je čišća, funkcionalnija i vizualno uvjerljivija kupaonica za svakodnevno korištenje.",
    image: "/site/projects/kupaonica-rekonstrukcija.jpg",
    imageAlt: "Završena kupaonica s tuš kabinom i keramikom"
  },
  {
    slug: "mali-objekt-rekonstrukcija",
    title: "Rekonstrukcija manjeg samostojećeg objekta",
    objectType: "Manji samostojeći objekt",
    location: "Pula i okolica",
    service: "Rekonstrukcije kuća",
    serviceHref: "/rekonstrukcije-kuca",
    challenge: "Objekt je prolazio kroz potpunu unutarnju obnovu, od grubih zahvata do završne faze.",
    workDone: "Organizirani su unutarnji radovi, podovi, zidovi i završno uređenje prostora.",
    result: "Prostor je preveden iz radne faze u čist, upotrebljiv i pregledno dovršen interijer.",
    image: "/site/projects/pula-stan-adaptacija.jpg",
    imageAlt: "Završen interijer manjeg obnovljenog objekta"
  }
];
