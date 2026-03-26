import { ServicePageContent } from "@/content/schema";
import { siteConfig } from "@/content/site-config";

const contactBlock = {
  ctaLabel: "Pošaljite opis objekta",
  ctaHref: "/kontakt",
  phone: siteConfig.phone,
  email: siteConfig.email
};

export const adaptacijeKucaIStanovaHr: ServicePageContent = {
  seo: {
    title: "Adaptacije kuća i stanova u Puli i Istri",
    description:
      "Atrium Istria vodi adaptacije kuća i stanova u Puli i Istri, od parcijalnih zahvata do cjelovite obnove prostora s jasnim procesom i urednom komunikacijom.",
    path: "/adaptacije-kuca-i-stanova"
  },
  slug: "adaptacije-kuca-i-stanova",
  hero: {
    eyebrow: "Usluga | Adaptacije kuća i stanova",
    title: "Adaptacije kuća i stanova s jasnim koracima, a ne improvizacijom.",
    description:
      "Za stanove, kuće i apartmane kojima treba obnova prostora, precizniji raspored radova i ozbiljno vođenje izvedbe od prvog pregleda do završne faze.",
    image: "/site/services/adaptacije-kuca-i-stanova.jpg",
    imageAlt: "Završen interijer nakon adaptacije kuće ili stana",
    ctaLabel: "Opišite stan ili kuću",
    ctaHref: "/kontakt",
    proofCues: [
      { label: "Tip projekata", value: "Stanovi, kuće, apartmani" },
      { label: "Pristup", value: "Jasan opseg i uredan redoslijed radova" },
      { label: "Područje", value: "Pula i Istra" }
    ]
  },
  scenarios: {
    title: "S kakvim zadacima ljudi najčešće dolaze",
    intro:
      "Ova usluga nije samo za velike potpune renovacije. Često kreće od jedne zone, lošeg rasporeda ili potrebe da se više povezanih radova vodi kao jedna cjelina.",
    items: [
      {
        title: "Stan za cjelovitu obnovu",
        description: "Kada prostor traži novu logiku, pripremu, završne radove i bolju funkciju u svakodnevnom korištenju."
      },
      {
        title: "Kuća kojoj treba ozbiljna unutarnja adaptacija",
        description: "Kada je potrebno povezati više faza radova bez rasipanja vremena i bez kaotične koordinacije."
      },
      {
        title: "Apartman ili manji objekt za uređenje",
        description: "Kada je cilj dovesti prostor do čistog, pouzdanog i uredno dovršenog stanja za korištenje ili najam."
      }
    ]
  },
  scope: {
    title: "Što najčešće ulazi u opseg radova",
    intro:
      "Točan opseg ovisi o objektu, ali tipično uključuje kombinaciju pripremnih, građevinskih i završnih radova koji moraju biti vođeni kao jedna priča.",
    items: [
      {
        title: "Demontaža, priprema i korekcije prostora",
        description: "Uklanjanje starih slojeva, priprema zidova i podova te tehnička korekcija prostora prije završnih zahvata."
      },
      {
        title: "Zidovi, podovi i završne površine",
        description: "Ravnanje, oblaganje, polaganje i finalna obrada prostora do urednog i upotrebljivog rezultata."
      },
      {
        title: "Povezani radovi po zonama",
        description: "Kada se kuhinja, dnevni dio, kupaonica ili više prostorija moraju uskladiti u jednoj fazi adaptacije."
      }
    ]
  },
  process: {
    title: "Kako rad ide u praksi",
    intro:
      "Prvi cilj nije obećati sve unaprijed, nego jasno razumjeti objekt, odvojiti bitno od sporednog i definirati realan sljedeći korak.",
    items: [
      {
        title: "Prvi opis i pregled zadatka",
        description: "Korisnik šalje kratak opis objekta i onoga što želi postići, a zatim se definira treba li pregled ili dodatno pojašnjenje."
      },
      {
        title: "Jasan opseg i redoslijed radova",
        description: "Prije izvedbe određuje se što se radi, kojim redom i što tehnički utječe na cijenu i trajanje."
      },
      {
        title: "Kontrolirana izvedba i završetak",
        description: "Radovi se vode tako da prostor ide prema funkcionalnom i urednom finalu, a ne prema beskonačnom nizu sitnih improvizacija."
      }
    ]
  },
  pricing: {
    title: "Od čega ovdje najviše ovisi procjena",
    intro:
      "Kod adaptacija kuća i stanova cijena ne ovisi samo o kvadraturi, nego i o stvarnom stanju prostora i povezanosti radova.",
    items: [
      {
        title: "Stanje postojećeg prostora",
        description: "Razlika između urednog prostora za doradu i prostora koji prvo traži ozbiljnu pripremu."
      },
      {
        title: "Broj zona i složenost povezivanja",
        description: "Jedna prostorija i cijeli stan nisu isti zadatak po organizaciji, tempu i koordinaciji."
      },
      {
        title: "Završna razina i detalji",
        description: "Finalni izgled, kvaliteta detalja i vrsta materijala izravno utječu na budžet i trajanje."
      }
    ]
  },
  proof: {
    title: "Primjeri radova",
    intro:
      "Primjeri ispod služe kao dokaz da znamo provesti prostor od radne faze do uredno dovršenog rezultata.",
    projects: [
      {
        slug: "mali-objekt-rekonstrukcija",
        title: "Rekonstrukcija manjeg samostojećeg objekta",
        objectType: "Manji samostojeći objekt",
        location: "Pula i okolica",
        service: "Adaptacije kuća i stanova",
        serviceHref: "/adaptacije-kuca-i-stanova",
        challenge: "Objekt je prolazio kroz potpunu unutarnju obnovu, od grubih zahvata do završne faze.",
        workDone: "Organizirani su unutarnji radovi, podovi, zidovi i završno uređenje prostora.",
        result: "Prostor je preveden iz radne faze u čist, upotrebljiv i pregledno dovršen interijer.",
        image: "/site/projects/pula-stan-adaptacija.jpg",
        imageAlt: "Završen interijer manjeg obnovljenog objekta"
      }
    ]
  },
  faq: {
    title: "Česta pitanja za adaptacije",
    items: [
      {
        question: "Možete li voditi i manju adaptaciju, a ne samo cijeli objekt?",
        answer: "Da, ako zadatak traži jasan opseg i ima smisla voditi ga kao ozbiljnu cjelinu."
      },
      {
        question: "Je li dovoljno poslati nekoliko fotografija i opis?",
        answer: "Za prvi korak da. To je često dovoljno da se procijeni što treba dalje: pregled, dodatna pitanja ili okvirna procjena."
      }
    ]
  },
  finalContact: {
    title: "Pošaljite opis stana ili kuće i krenimo konkretnije.",
    description: "Napišite lokaciju objekta, okvir radova i što želite postići. Nakon toga slijedi jasan sljedeći korak.",
    ...contactBlock
  }
};

export const adaptacijeKupaonicaHr: ServicePageContent = {
  seo: {
    title: "Adaptacije kupaonica u Puli i Istri",
    description:
      "Atrium Istria vodi adaptacije kupaonica u Puli i Istri: priprema, instalacije, keramika, završna oprema i uredno vođenje cijelog procesa.",
    path: "/adaptacije-kupaonica"
  },
  slug: "adaptacije-kupaonica",
  hero: {
    eyebrow: "Usluga | Adaptacije kupaonica",
    title: "Kupaonica se vodi kao tehnički precizan posao, ne kao niz sitnih improvizacija.",
    description:
      "Od rušenja i pripreme do keramike i završne opreme, kupaonica traži dobar redoslijed radova i odgovornu izvedbu bez slabih prijelaza između faza.",
    image: "/site/services/adaptacije-kupaonica.jpg",
    imageAlt: "Završena moderna kupaonica nakon adaptacije",
    ctaLabel: "Opišite kupaonicu",
    ctaHref: "/kontakt",
    proofCues: [
      { label: "Fokus", value: "Instalacije, keramika, završni detalji" },
      { label: "Tip prostora", value: "Stanovi, kuće, apartmani" },
      { label: "Područje", value: "Pula i Istra" }
    ]
  },
  scenarios: {
    title: "Kada ova usluga najčešće treba",
    intro:
      "Adaptacija kupaonice obično kreće kada prostor više ne odgovara funkcionalno, tehnički ili estetski i kada je potrebno sve uskladiti u jednoj izvedbi.",
    items: [
      {
        title: "Dotrajala kupaonica",
        description: "Prostor traži novu pripremu, zamjenu slojeva i sigurniji završni standard."
      },
      {
        title: "Kupaonica za apartman ili najam",
        description: "Važna je čista izvedba, lakše održavanje i bolji ukupni dojam gotovog prostora."
      },
      {
        title: "Loša prethodna izvedba",
        description: "Kada detalji, spojevi ili raspored više ne ulijevaju povjerenje i treba ih riješiti sustavno."
      }
    ]
  },
  scope: {
    title: "Što tipično ulazi u adaptaciju kupaonice",
    intro:
      "Opseg se definira prema objektu, ali cilj je isti: tehnički uredna i pregledno završena kupaonica bez konflikta između faza.",
    items: [
      {
        title: "Rušenje i priprema podloge",
        description: "Uklanjanje postojećih slojeva i priprema prostora za novu izvedbu."
      },
      {
        title: "Instalacije i tehnički raspored",
        description: "Usklađivanje instalacija, točaka i rasporeda elemenata prije završnih radova."
      },
      {
        title: "Keramika, sanitarije i završni detalji",
        description: "Polaganje, završna obrada i montaža elemenata do čistog i funkcionalnog finala."
      }
    ]
  },
  process: {
    title: "Kako vodimo ovakve radove",
    intro:
      "Kod kupaonice je najvažnije držati redoslijed i ne preskakati tehničke odluke koje kasnije stvaraju probleme.",
    items: [
      {
        title: "Pregled prostora i rasporeda",
        description: "Prvo se razjasni što se mijenja, što ostaje i koji tehnički uvjeti određuju izvedbu."
      },
      {
        title: "Redoslijed faza bez sudaranja radova",
        description: "Priprema, instalacije, podloge, keramika i završni elementi moraju ići logično, bez improvizacije."
      },
      {
        title: "Finalna čistoća i upotrebljivost",
        description: "Konačni rezultat nije samo vizualan, nego i praktičan za svakodnevno korištenje i održavanje."
      }
    ]
  },
  pricing: {
    title: "Što najviše utječe na cijenu kupaonice",
    intro:
      "Kod kupaonica je cijena posebno osjetljiva na tehničke uvjete i razinu završnih detalja.",
    items: [
      {
        title: "Stanje podloge i instalacija",
        description: "Što je lošije postojeće stanje, to je veći pripremni i sanacijski dio posla."
      },
      {
        title: "Složenost rasporeda i elemenata",
        description: "Broj detalja, tuš zona, niša i posebnih prijelaza izravno mijenja složenost izvedbe."
      },
      {
        title: "Vrsta keramike i završna razina",
        description: "Materijali i razina preciznosti detalja mijenjaju i tempo i cijenu radova."
      }
    ]
  },
  proof: {
    title: "Primjeri kupaonica",
    intro:
      "Važno je pokazati ne samo da kupaonica izgleda bolje, nego da je izvedena uredno i kao funkcionalna cjelina.",
    projects: [
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
      }
    ]
  },
  faq: {
    title: "Česta pitanja za kupaonice",
    items: [
      {
        question: "Vodite li cijelu kupaonicu ili samo dio radova?",
        answer: "Prioritet je voditi kupaonicu kao cijelu tehničku cjelinu, jer se tako dobiva pouzdaniji i čišći rezultat."
      },
      {
        question: "Može li se procjena krenuti iz fotografija?",
        answer: "Da, prve fotografije i kratak opis često su dovoljan početak za razumjeti opseg i definirati sljedeći korak."
      }
    ]
  },
  finalContact: {
    title: "Pošaljite opis kupaonice i recite što treba riješiti.",
    description: "Dovoljni su lokacija, nekoliko rečenica i osnovne fotografije prostora. Nakon toga ide konkretan sljedeći korak.",
    ...contactBlock
  }
};

export const fasadeHr: ServicePageContent = {
  seo: {
    title: "Fasade u Puli i Istri",
    description:
      "Atrium Istria vodi fasaderske radove u Puli i Istri s fokusom na zaštitu objekta, uredan rezultat i ozbiljnu vanjsku obnovu.",
    path: "/fasade"
  },
  slug: "fasade",
  hero: {
    eyebrow: "Usluga | Fasade",
    title: "Fasada mora izgledati uvjerljivo, ali još važnije mora biti izvedena odgovorno.",
    description:
      "Vanjska obnova nije samo estetski sloj. To je posao koji mora povezati zaštitu objekta, završni dojam i dugoročnu pouzdanost izvedbe.",
    image: "/site/services/fasade.jpg",
    imageAlt: "Obnovljena fasada obiteljske kuće",
    ctaLabel: "Opišite objekt i fasadu",
    ctaHref: "/kontakt",
    proofCues: [
      { label: "Objekti", value: "Kuće, vile, apartmani" },
      { label: "Rezultat", value: "Zaštita + uredan završni dojam" },
      { label: "Područje", value: "Pula i Istra" }
    ]
  },
  scenarios: {
    title: "Kad ljudi najčešće traže fasadu",
    intro:
      "Fasaderski radovi najčešće kreću kada objekt traži ozbiljniju obnovu vanjske ovojnice ili kad završni izgled više ne odgovara stanju objekta.",
    items: [
      {
        title: "Dotrajalo pročelje",
        description: "Kada objekt djeluje zanemareno ili vanjski sloj više ne ulijeva povjerenje."
      },
      {
        title: "Kuća za obnovu prije korištenja ili najma",
        description: "Kada vanjski izgled mora pratiti ozbiljnost cijelog objekta i ukupnog dojma."
      },
      {
        title: "Radovi koji traže precizniji završni standard",
        description: "Kada nije dovoljno samo 'presvući' objekt, nego ga urediti kao cjelinu."
      }
    ]
  },
  scope: {
    title: "Što tipično uključuje fasaderski posao",
    intro:
      "Točan opseg ovisi o objektu, ali ključ je u tome da se vanjski radovi vode kao ozbiljna obnova, a ne kao kozmetička intervencija.",
    items: [
      {
        title: "Procjena stanja pročelja",
        description: "Prvo se gleda što objekt stvarno traži prije odluke o završnom rješenju."
      },
      {
        title: "Priprema i sanacijski zahvati",
        description: "Vanjski slojevi i prijelazi moraju biti pripremljeni tako da završna obrada ima smisla i dugotrajnije ponašanje."
      },
      {
        title: "Završna fasaderska obrada",
        description: "Cilj je uredan, čitljiv i uvjerljiv rezultat koji objektu vraća ozbiljnost i zaštitu."
      }
    ]
  },
  process: {
    title: "Kako vodimo fasaderski posao",
    intro:
      "Kod vanjskih radova važna je kombinacija tehničke procjene, zaštite objekta i discipliniranog završnog standarda.",
    items: [
      {
        title: "Prvi pregled i razumijevanje objekta",
        description: "Bez toga se ne može realno procijeniti što je kozmetika, a što je stvarni tehnički problem."
      },
      {
        title: "Jasan opseg i logika izvedbe",
        description: "Definira se što se radi, kojim redom i što utječe na rezultat, trajanje i cijenu."
      },
      {
        title: "Dovršetak koji se vidi na objektu",
        description: "Fasada mora na kraju djelovati kao stvarna obnova, a ne kao brzinski površinski zahvat."
      }
    ]
  },
  pricing: {
    title: "Što utječe na cijenu fasade",
    intro:
      "Najveće razlike nastaju između objekata koji traže samo urednu završnu obradu i onih koji traže više pripreme i sanacije.",
    items: [
      {
        title: "Stanje postojeće fasade",
        description: "Razina oštećenja, pripreme i sanacije izravno utječe na opseg radova."
      },
      {
        title: "Veličina i složenost objekta",
        description: "Pristup, visina i detalji pročelja mijenjaju i organizaciju i cijenu posla."
      },
      {
        title: "Završna razina i detalji",
        description: "Kvaliteta finalnog izgleda ovisi o materijalima, preciznosti i razini kontrole u izvedbi."
      }
    ]
  },
  proof: {
    title: "Primjer fasaderskog rezultata",
    intro:
      "Na ovakvim radovima važan je jasan vizualni rezultat koji odmah pokazuje ozbiljnost izvedbe.",
    projects: [
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
      }
    ]
  },
  faq: {
    title: "Česta pitanja za fasade",
    items: [
      {
        question: "Može li se fasada procijeniti samo iz fotografija?",
        answer: "Fotografije su dobar početak, ali za ozbiljniju procjenu često je potreban i pregled objekta ili dodatna pojašnjenja."
      },
      {
        question: "Radite li i manje fasaderske zahvate?",
        answer: "Da, ali prioritet imaju zadaci koji se mogu voditi kao jasna i odgovorna cjelina."
      }
    ]
  },
  finalContact: {
    title: "Pošaljite objekt i recite što treba riješiti na fasadi.",
    description: "Napišite lokaciju, tip objekta i što vas najviše brine. Nakon toga ide konkretan sljedeći korak.",
    ...contactBlock
  }
};

export const rekonstrukcijeKucaHr: ServicePageContent = {
  seo: {
    title: "Rekonstrukcije kuća u Puli i Istri",
    description:
      "Atrium Istria vodi rekonstrukcije kuća u Puli i Istri s fokusom na pregledan proces, organizirane faze i pouzdan završni rezultat.",
    path: "/rekonstrukcije-kuca"
  },
  slug: "rekonstrukcije-kuca",
  hero: {
    eyebrow: "Usluga | Rekonstrukcije kuća",
    title: "Rekonstrukcija kuće traži vođenje procesa, a ne samo izvođenje pojedinih radova.",
    description:
      "Kada objekt prolazi kroz širi zahvat, najvažnije je održati jasan redoslijed faza, razumjeti stanje kuće i voditi posao tako da se cijelina ne raspadne na nepovezane komade.",
    image: "/site/services/rekonstrukcije-kuca.jpg",
    imageAlt: "Interijer obnovljenog prostora tijekom rekonstrukcije kuće",
    ctaLabel: "Opišite kuću i plan rekonstrukcije",
    ctaHref: "/kontakt",
    proofCues: [
      { label: "Tip zahvata", value: "Šire i povezane rekonstrukcije" },
      { label: "Cilj", value: "Jasan redoslijed i ozbiljan završni rezultat" },
      { label: "Područje", value: "Pula i Istra" }
    ]
  },
  scenarios: {
    title: "Kad rekonstrukcija ima smisla",
    intro:
      "Ova usluga je za objekte koji traže više od jedne intervencije i gdje je važno da radovi budu organizirani kao jedna ozbiljna cjelina.",
    items: [
      {
        title: "Kuća koja traži širi zahvat",
        description: "Kada nije dovoljno riješiti jednu prostoriju, nego više povezanih zona i faza."
      },
      {
        title: "Objekt s kombinacijom grubih i završnih radova",
        description: "Kada je potrebno držati red između tehničkih, građevinskih i finalnih zahvata."
      },
      {
        title: "Manji objekt koji treba dovesti do upotrebljivog finala",
        description: "Kada se prostor mora prevesti iz radne ili zapuštene faze u funkcionalan gotov objekt."
      }
    ]
  },
  scope: {
    title: "Što obično ulazi u rekonstrukciju kuće",
    intro:
      "Rekonstrukcija obično obuhvaća kombinaciju procjene, pripreme, izvedbe po fazama i finalnog usklađivanja prostora.",
    items: [
      {
        title: "Pregled stanja objekta",
        description: "Najprije se mora razumjeti što kuća stvarno traži i koje su prioritetne faze."
      },
      {
        title: "Povezani građevinski i završni radovi",
        description: "Više faza rada treba uskladiti tako da projekt ide naprijed kao cjelina."
      },
      {
        title: "Dovršetak prostora za realnu upotrebu",
        description: "Cilj nije samo radna aktivnost na objektu, nego čist i funkcionalan završni rezultat."
      }
    ]
  },
  process: {
    title: "Kako ovakav projekt držimo pod kontrolom",
    intro:
      "Kod rekonstrukcija najveći rizik nije samo kvaliteta pojedinog rada, nego i raspad logike cijelog projekta. Zato je proces ključan.",
    items: [
      {
        title: "Opis cilja i stanje objekta",
        description: "Prvo se razjašnjava što korisnik želi postići i što objekt realno traži prije početka."
      },
      {
        title: "Faze i redoslijed",
        description: "Projekt se vodi kroz jasne etape, bez skakanja između nepovezanih odluka i radova."
      },
      {
        title: "Završetak s osjećajem da je objekt doveden u red",
        description: "Rezultat mora djelovati kao uredno vođen projekt, a ne kao niz izoliranih zahvata."
      }
    ]
  },
  pricing: {
    title: "Što utječe na procjenu rekonstrukcije",
    intro:
      "Kod rekonstrukcija cijena se određuje prema širini projekta, stanju objekta i broju povezanih faza koje treba uskladiti.",
    items: [
      {
        title: "Realno stanje kuće",
        description: "Što više objekt traži pripremu i sanaciju, to se više mijenja opseg i dinamika."
      },
      {
        title: "Širina rekonstrukcije",
        description: "Jedna zona i cijela kuća nisu isti zadatak ni po koordinaciji ni po resursima."
      },
      {
        title: "Razina završnog standarda",
        description: "Što je ambicija finala veća, to više raste zahtjevnost i razina kontrole u izvedbi."
      }
    ]
  },
  proof: {
    title: "Primjer rekonstrukcije",
    intro:
      "Projekt ispod pokazuje kako objekt prolazi kroz više faza i završava kao upotrebljiva, uredna cjelina.",
    projects: [
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
    ]
  },
  faq: {
    title: "Česta pitanja za rekonstrukcije",
    items: [
      {
        question: "Možete li preuzeti projekt koji uključuje više povezanih faza?",
        answer: "Da, upravo takvi projekti imaju najviše smisla kada ih treba voditi kao jednu organiziranu cjelinu."
      },
      {
        question: "Je li moguće krenuti i bez potpuno razrađenog plana?",
        answer: "Da, ali početni opis treba dovoljno jasno pokazati stanje kuće i okvir cilja kako bi se definirao pravi sljedeći korak."
      }
    ]
  },
  finalContact: {
    title: "Pošaljite opis kuće i opseg rekonstrukcije.",
    description: "Napišite lokaciju, stanje objekta i što želite promijeniti. Nakon toga ide pojašnjenje i realan sljedeći korak.",
    ...contactBlock
  }
};

export const hidroizolacijaHr: ServicePageContent = {
  seo: {
    title: "Hidroizolacija u Puli i Istri",
    description:
      "Atrium Istria vodi hidroizolacijske radove u Puli i Istri s fokusom na tehnički smislen pristup, zaštitu objekta i jasnu procjenu zahvata.",
    path: "/hidroizolacija"
  },
  slug: "hidroizolacija",
  hero: {
    eyebrow: "Usluga | Hidroizolacija",
    title: "Hidroizolacija nije dekoracija, nego tehnički zahvat koji mora imati smisla na objektu.",
    description:
      "Kada krov ili kritična površina traži zaštitu, najvažnije je razumjeti stanje objekta i voditi zahvat kao tehnički ozbiljan posao, a ne kao brzi površinski popravak.",
    image: "/site/services/hidroizolacija.jpg",
    imageAlt: "Površina krova pripremljena za hidroizolaciju",
    ctaLabel: "Opišite problem s hidroizolacijom",
    ctaHref: "/kontakt",
    proofCues: [
      { label: "Fokus", value: "Krovovi i kritične izložene površine" },
      { label: "Pristup", value: "Procjena stanja prije zahvata" },
      { label: "Područje", value: "Pula i Istra" }
    ]
  },
  scenarios: {
    title: "Kad hidroizolacija postaje prioritet",
    intro:
      "Ovu uslugu ljudi najčešće traže kada postoji konkretan rizik na objektu ili kada površinu treba zaštititi prije većih posljedica.",
    items: [
      {
        title: "Problematična krovna površina",
        description: "Kada objekt traži zaštitu zbog stanja krova ili otvorene izložene zone."
      },
      {
        title: "Sanacija prije šire obnove",
        description: "Kada je hidroizolacija preduvjet da drugi radovi imaju smisla i trajan učinak."
      },
      {
        title: "Preventivni zahvat na osjetljivoj površini",
        description: "Kada treba reagirati prije nego što problem preraste u veći i skuplji zahvat."
      }
    ]
  },
  scope: {
    title: "Što tipično uključuje ovakav zahvat",
    intro:
      "Kod hidroizolacije najvažnije je ne preskočiti početnu procjenu i ne svesti posao na kozmetički sloj bez tehničkog smisla.",
    items: [
      {
        title: "Procjena kritične površine",
        description: "Najprije se gleda stanje i stvarni opseg rizika na objektu."
      },
      {
        title: "Priprema i tehnička izvedba",
        description: "Površina mora biti pripremljena tako da zaštitni zahvat ima smisla i ne ostane samo površinski."
      },
      {
        title: "Završna zaštita i pregled rezultata",
        description: "Cilj je da objekt ostane tehnički sigurniji i da se problem ne vraća odmah nakon zahvata."
      }
    ]
  },
  process: {
    title: "Kako vodimo hidroizolacijske radove",
    intro:
      "Prvo razumijemo problem, zatim definiramo opseg i tek nakon toga idemo u izvedbu. Takav redoslijed je ključan da zahvat bude opravdan.",
    items: [
      {
        title: "Opis problema i pregled površine",
        description: "Bez toga nije moguće razlikovati pravi tehnički problem od površinskog dojma."
      },
      {
        title: "Jasan opseg i pristup zahvatu",
        description: "Određuje se što se radi, koji je cilj i što objekt traži prije zaštitnog sloja."
      },
      {
        title: "Zahvat koji ima smisla dugoročno",
        description: "Fokus je na rješenju koje štiti objekt, a ne samo na kratkotrajnom dojmu da je nešto 'premazano'."
      }
    ]
  },
  pricing: {
    title: "Što najviše utječe na cijenu hidroizolacije",
    intro:
      "Najveći utjecaj imaju stanje podloge, složenost površine i koliko pripreme zahtijeva stvarna zaštita objekta.",
    items: [
      {
        title: "Stanje i priprema podloge",
        description: "Što je podloga zahtjevnija, više raste pripremni dio rada i tehnička složenost zahvata."
      },
      {
        title: "Veličina i pristup površini",
        description: "Razlika je radi li se o jednostavnoj dostupnoj zoni ili osjetljivijem i kompliciranijem pristupu."
      },
      {
        title: "Vrsta potrebnog rješenja",
        description: "Točan tehnički pristup definira koliko je zahvat opsežan i što traži da bi bio opravdan."
      }
    ]
  },
  proof: {
    title: "Primjer hidroizolacijskog zahvata",
    intro:
      "Važno je pokazati stvarnu radnu površinu i rezultat zahvata, a ne samo generičnu tehničku priču.",
    projects: [
      {
        slug: "hidroizolacija-krova",
        title: "Hidroizolacija krova manjeg objekta",
        objectType: "Krov manjeg objekta",
        location: "Pula i okolica",
        service: "Hidroizolacija",
        serviceHref: "/hidroizolacija",
        challenge: "Krovna površina tražila je zaštitni zahvat koji mora imati tehnički smisao na objektu.",
        workDone: "Površina je pripremljena i izveden je hidroizolacijski zahvat kao dio ozbiljnije sanacije objekta.",
        result: "Objekt je dobio uredniju i sigurniju zaštićenu površinu za daljnje korištenje.",
        image: "/site/services/hidroizolacija.jpg",
        imageAlt: "Površina krova tijekom hidroizolacijskih radova"
      }
    ]
  },
  faq: {
    title: "Česta pitanja za hidroizolaciju",
    items: [
      {
        question: "Može li se problem procijeniti iz fotografija?",
        answer: "Fotografije pomažu kao prvi korak, ali kod tehničkih problema često su potrebna dodatna pitanja ili pregled površine."
      },
      {
        question: "Radite li hidroizolaciju kao samostalan zahvat?",
        answer: "Da, kada problem ima smisla rješavati kao jasan zaseban zahvat ili kao dio šire sanacije objekta."
      }
    ]
  },
  finalContact: {
    title: "Pošaljite opis problema i fotografije površine.",
    description: "Napišite o kakvoj se površini radi i što vas brine. Nakon toga ide pojašnjenje i realan sljedeći korak.",
    ...contactBlock
  }
};

export const servicesHr = {
  "adaptacije-kuca-i-stanova": adaptacijeKucaIStanovaHr,
  "adaptacije-kupaonica": adaptacijeKupaonicaHr,
  fasade: fasadeHr,
  "rekonstrukcije-kuca": rekonstrukcijeKucaHr,
  hidroizolacija: hidroizolacijaHr
} as const;

export type ServiceSlugHr = keyof typeof servicesHr;
