import { HomePageContent } from "@/content/types";

export const hrHomePricingContent: HomePageContent["pricing"] = {
  eyebrow: "",
  title: "Kako nastaje procjena projekta",
  subtitle: "Bez skrivenih troškova, samo jasne i realne procjene.",
  photoOnly: {
    title: "Kada su fotografije dovoljne",
    body:
      "Za standardne zahvate, poput kupaonice, manjeg fasadnog popravka ili lokalnih interijerskih radova, često su dovoljne fotografije prostora i opis postojećeg stanja."
  },
  visitRequired: {
    title: "Kada je potreban obilazak",
    body:
      "Za rekonstrukcije, hidroizolaciju temelja, složenije fasade i projekte kod kojih treba procijeniti skrivene probleme, dolazimo osobno na objekt."
  },
  factorsTitle: "Što utječe na cijenu",
  factors: [
    "Stanje objekta i opseg pripremnih radova",
    "Odabir materijala i opreme",
    "Složenost radova i vrsta zahvata",
    "Pristupačnost objekta i lokacija"
  ]
};
