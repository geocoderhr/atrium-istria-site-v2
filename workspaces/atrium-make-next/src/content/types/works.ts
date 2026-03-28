import type { PageMeta } from "@/content/types/shared";

export type WorkCategory =
  | "all"
  | "rekonstrukcija"
  | "adaptacija"
  | "kupaonica"
  | "fasada"
  | "hidroizolacija";

export type WorkCase = {
  id: number;
  title: string;
  category: WorkCategory;
  description: string;
  image: string;
  location?: string;
  year?: string;
  galleryImages?: string[];
  hasModal?: boolean;
};

export type WorksPageContent = {
  meta: PageMeta;
  hero: {
    title: string;
    subtitle: string;
  };
  filters: Array<{ value: WorkCategory; label: string }>;
  projects: WorkCase[];
  emptyState: string;
};
