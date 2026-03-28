import { ServicePageContent, ServiceSlug } from "@/content/types";

import { adaptacijeKucaIStanovaPageContent } from "@/content/locales/ru/services/adaptacije-kuca-i-stanova";
import { fasadePageContent } from "@/content/locales/ru/services/fasade";
import { hidroizolacijaPageContent } from "@/content/locales/ru/services/hidroizolacija";
import { kupaonicePageContent } from "@/content/locales/ru/services/kupaonice";
import { rekonstrukcijePageContent } from "@/content/locales/ru/services/rekonstrukcije";

export const servicePages: Record<ServiceSlug, ServicePageContent> = {
  "adaptacije-kuca-i-stanova": adaptacijeKucaIStanovaPageContent,
  kupaonice: kupaonicePageContent,
  fasade: fasadePageContent,
  rekonstrukcije: rekonstrukcijePageContent,
  hidroizolacija: hidroizolacijaPageContent
};
