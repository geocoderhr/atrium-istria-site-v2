import type { ContactBlock, PageMeta } from "@/content/types/shared";

export type ContactPageContent = {
  meta: PageMeta;
  hero: {
    title: string;
    subtitle: string;
  };
  infoTitle: string;
  infoBlocks: ContactBlock[];
  expectationTitle: string;
  expectationItems: string[];
  form: {
    title: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    submitLabel: string;
    consentLabel: string;
  };
};
