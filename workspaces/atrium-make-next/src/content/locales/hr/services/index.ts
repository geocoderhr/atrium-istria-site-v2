import { ServicePageContent, ServiceSlug } from "@/content/types";

import { adaptacijeKucaIStanovaPageContent } from "@/content/locales/hr/services/adaptacije-kuca-i-stanova";
import { fasadePageContent } from "@/content/locales/hr/services/fasade";
import { hidroizolacijaPageContent } from "@/content/locales/hr/services/hidroizolacija";
import { kupaonicePageContent } from "@/content/locales/hr/services/kupaonice";
import { rekonstrukcijePageContent } from "@/content/locales/hr/services/rekonstrukcije";

export const servicePages: Record<ServiceSlug, ServicePageContent> = {
  "adaptacije-kuca-i-stanova": adaptacijeKucaIStanovaPageContent,
  kupaonice: kupaonicePageContent,
  fasade: fasadePageContent,
  rekonstrukcije: rekonstrukcijePageContent,
  hidroizolacija: hidroizolacijaPageContent
};
