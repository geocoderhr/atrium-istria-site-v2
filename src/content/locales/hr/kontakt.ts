import { ContactPageContent } from "@/content/schema";
import { siteConfig } from "@/content/site-config";

export const kontaktContentHr: ContactPageContent = {
  seo: {
    title: "Kontakt i početak razgovora o objektu",
    description:
      "Kontaktirajte Atrium Istria za adaptacije, kupaonice, fasade, rekonstrukcije i hidroizolaciju u Puli i Istri kroz jasan, normalan prvi razgovor o objektu.",
    path: "/kontakt"
  },
  hero: {
    eyebrow: "Kontakt | Atrium Istria",
    title: "Početak razgovora treba biti normalan, jasan i bez nepotrebnog kompliciranja.",
    description:
      "Kontakt stranica nije kviz ni call-center forma. Dovoljno je ukratko opisati objekt, lokaciju i što treba riješiti, a nakon toga slijedi konkretan sljedeći korak."
  },
  methods: {
    title: "Kako nas možete kontaktirati",
    intro:
      "Možete krenuti slobodnim opisom zadatka ili se javiti direktno. Najvažnije je da odmah imamo dovoljno jasnu osnovu za normalan razgovor.",
    items: [
      {
        title: "Slobodan opis objekta",
        description: "Najbolji početak je nekoliko rečenica o objektu, lokaciji i radovima koje planirate."
      },
      {
        title: "Telefon za brži dogovor",
        description: "Ako je lakše, možete nazvati i ukratko objasniti o kakvom se objektu radi."
      },
      {
        title: "E-mail za detaljniji upit",
        description: "Ako već imate fotografije, više informacija ili širi opis zahvata, pošaljite ih e-mailom."
      }
    ]
  },
  process: {
    title: "Što je korisno napisati u prvom kontaktu",
    intro:
      "Ne trebamo savršeno pripremljen brief. Dovoljno je nekoliko jasnih informacija koje pomažu da odmah razumijemo opseg i sljedeći korak.",
    items: [
      {
        title: "Lokacija i tip objekta",
        description: "Na primjer: stan u Puli, kuća u okolici, apartman za najam ili manji samostojeći objekt."
      },
      {
        title: "Koji radovi su u pitanju",
        description: "Adaptacija, kupaonica, fasada, rekonstrukcija ili hidroizolacija, uz kratak opis što treba riješiti."
      },
      {
        title: "Što želite postići i u kojem okviru",
        description: "Ako postoji rok, važan prioritet ili posebno pitanje, to je korisno napisati odmah na početku."
      }
    ]
  },
  prompt: {
    title: "Opišite objekt i pošaljite upit e-mailom.",
    description:
      "Upišite nekoliko rečenica, a gumb ispod će otvoriti e-mail s već pripremljenim tekstom. Tako početak ostaje jednostavan i normalan.",
    textareaLabel: "Opis objekta i radova",
    placeholder:
      "Primjer: kuća u Puli, obnova fasade i rekonstrukcija prizemlja. Želimo razumjeti okvir radova i mogući sljedeći korak.",
    ctaLabel: "Pripremite e-mail s opisom",
    phone: siteConfig.phone,
    email: siteConfig.email
  }
};
