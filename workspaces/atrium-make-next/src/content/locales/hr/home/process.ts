import { HomePageContent } from "@/content/types";

export const hrHomeProcessContent: HomePageContent["process"] = {
  eyebrow: "Kako radimo",
  title: "Radovi u 4 koraka",
  subtitle: "Jasan proces od prvog razgovora do završetka radova.",
  image: "/site/home/process-planning.jpg",
  imageAlt: "Planiranje projekta",
  responseStat: {
    value: "24h",
    label: "Prosječno vrijeme odgovora"
  },
  steps: [
    {
      number: "01",
      title: "Prvi razgovor",
      description: "Recite nam što želite urediti, obnoviti ili rekonstruirati."
    },
    {
      number: "02",
      title: "Uvid u projekt",
      description: "Pregledavamo objekt, opseg radova i ono što je važno za sljedeći korak."
    },
    {
      number: "03",
      title: "Ponuda i dogovor",
      description: "Dobivate jasan prijedlog radova, rokova i dogovorenih uvjeta."
    },
    {
      number: "04",
      title: "Izvedba radova",
      description: "Radove izvodimo po dogovorenom planu i redovito vas informiramo o tijeku."
    }
  ]
};
