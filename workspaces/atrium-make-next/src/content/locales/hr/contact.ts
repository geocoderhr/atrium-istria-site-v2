import { sharedContactDetails, toTelHref } from "@/content/site-config";
import { ContactPageContent } from "@/content/types";

export const contactPageContent: ContactPageContent = {
  meta: {
    title: "Kontakt | Atrium Istria",
    description: "Kontaktirajte Atrium Istria telefonom ili pošaljite upit kroz formu. Radimo diljem Istre.",
    path: "/hr/kontakt"
  },
  hero: {
    title: "Kontakt",
    subtitle: "Pošaljite upit ili nas nazovite izravno."
  },
  infoTitle: "Kontakt informacije",
  infoBlocks: [
    {
      title: "Telefon 1",
      value: sharedContactDetails.primaryPhone,
      href: toTelHref(sharedContactDetails.primaryPhone),
      note: "Pon - Pet: 8:00 - 17:00",
      icon: "phone"
    },
    {
      title: "Telefon 2",
      value: sharedContactDetails.secondaryPhone,
      href: toTelHref(sharedContactDetails.secondaryPhone),
      note: "Dodatni broj za pozive i povratni kontakt",
      icon: "phone"
    },
    {
      title: "Email",
      value: sharedContactDetails.email,
      href: `mailto:${sharedContactDetails.email}`,
      note: "Odgovaramo unutar 24 sata",
      icon: "mail"
    },
    {
      title: "Lokacija",
      value: sharedContactDetails.location,
      note: "Radimo na području cijele Istre",
      icon: "map-pin"
    },
    {
      title: "WhatsApp",
      value: sharedContactDetails.primaryPhone,
      href: sharedContactDetails.whatsAppUrl,
      note: "Brz odgovor u radno vrijeme",
      icon: "message-circle"
    },
    {
      title: "Telegram",
      value: "@istriahr",
      href: sharedContactDetails.telegramUrl,
      note: "Pošaljite poruku ili fotografije objekta",
      icon: "send"
    },
    {
      title: "Facebook",
      value: "renoviranje.istra",
      href: sharedContactDetails.facebookUrl,
      note: "Pogledajte novosti ili nam pišite preko Facebooka",
      icon: "facebook"
    },
    {
      title: "Radno vrijeme",
      value: "Ponedjeljak - Petak: 8:00 - 17:00",
      note: "Subota: 9:00 - 13:00, Nedjelja: zatvoreno",
      icon: "clock"
    }
  ],
  expectationTitle: "Što možete očekivati",
  expectationItems: [
    "Odgovor na upit unutar 24 sata radnim danom",
    "Dogovor oko razgovora ili obilaska objekta",
    "Ponudu za manje radove u roku 2 do 3 dana",
    "Jasne rokove i okvirnu procjenu cijene"
  ],
  form: {
    title: "Pošaljite upit",
    fields: {
      name: "Ime i prezime",
      email: "Email",
      phone: "Telefon",
      message: "Poruka"
    },
    placeholders: {
      name: "Vaše ime",
      email: "vas.email@primjer.hr",
      phone: "+385 XX XXX XXXX",
      message: "Opišite objekt, lokaciju i radove koje planirate..."
    },
    submitLabel: "Pošaljite upit",
    consentLabel: "Slanjem upita prihvaćate uvjete korištenja i politiku privatnosti."
  }
};
