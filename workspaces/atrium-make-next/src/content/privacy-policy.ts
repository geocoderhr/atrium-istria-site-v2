import { getSiteConfig } from "@/content/site-config";
import { Locale, PageMeta } from "@/content/types";

type PrivacyPolicySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type PrivacyPolicyContent = {
  meta: PageMeta;
  eyebrow: string;
  title: string;
  intro: string;
  sections: PrivacyPolicySection[];
  contactTitle: string;
  contactNote: string;
  lastUpdatedLabel: string;
  lastUpdatedValue: string;
};

const localizedPrivacyPolicy: Record<Locale, PrivacyPolicyContent> = {
  ru: {
    meta: {
      title: "Политика конфиденциальности",
      description: "Правила обработки персональных данных для сайта, формы заявки и общения с помощником Atrium Istria.",
      path: "/privacy-policy"
    },
    eyebrow: "Legal",
    title: "Политика конфиденциальности",
    intro:
      "Эта политика объясняет, как Atrium Istria обрабатывает персональные данные при использовании сайта, формы заявки и общения с помощником на сайте.",
    sections: [
      {
        title: "1. Кто обрабатывает данные",
        paragraphs: [
          "Оператором персональных данных является Atrium Istria. Мы используем данные только в объёме, необходимом для ответа на запрос, подготовки предложения и организации дальнейшей коммуникации."
        ]
      },
      {
        title: "2. Какие данные мы можем получать",
        paragraphs: ["В зависимости от способа обращения мы можем получать следующие данные:"],
        bullets: [
          "имя и фамилию",
          "номер телефона",
          "адрес электронной почты",
          "город, адрес объекта и описание работ",
          "фотографии объекта и дополнительные материалы",
          "сообщения, оставленные через помощника на сайте"
        ]
      },
      {
        title: "3. Для чего используются данные",
        paragraphs: ["Мы обрабатываем данные, чтобы:"],
        bullets: [
          "ответить на запрос и связаться с вами",
          "понять тип объекта и объём работ",
          "подготовить предварительную оценку или следующий шаг",
          "вести деловую переписку по вашему обращению",
          "улучшать сценарии общения помощника и качество сервиса"
        ]
      },
      {
        title: "4. Каналы получения данных",
        paragraphs: [
          "Данные могут поступать через форму заявки на сайте, через помощника в модальном окне, а также через WhatsApp, Telegram, e-mail или телефон, если вы сами используете эти каналы для связи."
        ]
      },
      {
        title: "5. Срок хранения и доступ",
        paragraphs: [
          "Мы храним данные только столько, сколько это необходимо для обработки запроса, дальнейшей коммуникации и выполнения законных обязательств. Доступ к данным имеют только лица и сервисы, которые действительно участвуют в обработке запроса."
        ]
      },
      {
        title: "6. Передача третьим лицам",
        paragraphs: [
          "Мы не продаём персональные данные. В отдельных случаях данные могут обрабатываться через технические сервисы, необходимые для работы сайта, формы заявки, webhook-сценариев или деловой коммуникации, если это требуется для ответа на ваш запрос."
        ]
      },
      {
        title: "7. Ваши права",
        paragraphs: ["Вы имеете право запросить:"],
        bullets: [
          "доступ к вашим данным",
          "исправление неточных данных",
          "удаление данных, когда для этого есть основания",
          "ограничение обработки, когда это применимо",
          "возражение против обработки, если это предусмотрено законом"
        ]
      },
      {
        title: "8. Общение с помощником на сайте",
        paragraphs: [
          "Сообщения, отправленные через помощника на сайте, используются для подготовки ответа, квалификации запроса и направления вас к следующему шагу. На этапе интеграции такие сообщения могут технически передаваться через внешние automation/webhook-сервисы, используемые Atrium Istria для обработки обращений."
        ]
      }
    ],
    contactTitle: "Контакты по вопросам приватности",
    contactNote: "Если у вас есть вопросы по обработке данных, напишите нам на e-mail или свяжитесь по телефону.",
    lastUpdatedLabel: "Последнее обновление",
    lastUpdatedValue: "27.03.2026"
  },
  hr: {
    meta: {
      title: "Politika privatnosti",
      description: "Pravila obrade osobnih podataka za web stranicu, obrazac upita i komunikaciju s Atrium pomoćnikom.",
      path: "/hr/privacy-policy"
    },
    eyebrow: "Legal",
    title: "Politika privatnosti",
    intro:
      "Ova politika objašnjava kako Atrium Istria obrađuje osobne podatke pri korištenju web stranice, obrasca za upit i komunikacije s pomoćnikom na stranici.",
    sections: [
      {
        title: "1. Tko obrađuje podatke",
        paragraphs: [
          "Voditelj obrade osobnih podataka je Atrium Istria. Podatke koristimo isključivo u mjeri potrebnoj za odgovor na upit, pripremu ponude i organizaciju daljnje komunikacije."
        ]
      },
      {
        title: "2. Koje podatke možemo prikupljati",
        paragraphs: ["Ovisno o načinu javljanja, možemo prikupljati sljedeće podatke:"],
        bullets: [
          "ime i prezime",
          "broj telefona",
          "adresu e-pošte",
          "grad, adresu objekta i opis radova",
          "fotografije objekta i dodatne materijale",
          "poruke ostavljene kroz pomoćnika na web stranici"
        ]
      },
      {
        title: "3. U koju svrhu koristimo podatke",
        paragraphs: ["Podatke obrađujemo kako bismo:"],
        bullets: [
          "odgovorili na upit i stupili s vama u kontakt",
          "razumjeli vrstu objekta i opseg radova",
          "pripremili početnu procjenu ili sljedeći korak",
          "vodili poslovnu komunikaciju vezanu uz vaš upit",
          "unaprijedili scenarije rada pomoćnika i kvalitetu usluge"
        ]
      },
      {
        title: "4. Kanali putem kojih podaci dolaze",
        paragraphs: [
          "Podaci mogu doći kroz obrazac za upit na stranici, kroz pomoćnika u modalnom prozoru, kao i putem WhatsAppa, Telegrama, e-maila ili telefona ako sami koristite te kanale za kontakt."
        ]
      },
      {
        title: "5. Rok čuvanja i pristup podacima",
        paragraphs: [
          "Podatke čuvamo samo onoliko dugo koliko je potrebno za obradu upita, daljnju komunikaciju i izvršenje zakonskih obveza. Pristup podacima imaju samo osobe i servisi koji stvarno sudjeluju u obradi vašeg upita."
        ]
      },
      {
        title: "6. Dijeljenje s trećim stranama",
        paragraphs: [
          "Ne prodajemo osobne podatke. U pojedinim slučajevima podaci se mogu obrađivati kroz tehničke servise potrebne za rad web stranice, obrasca, webhook scenarija ili poslovne komunikacije, ako je to nužno za odgovor na vaš upit."
        ]
      },
      {
        title: "7. Vaša prava",
        paragraphs: ["Možete zatražiti:"],
        bullets: [
          "pristup svojim podacima",
          "ispravak netočnih podataka",
          "brisanje podataka kada za to postoje uvjeti",
          "ograničenje obrade kada je to primjenjivo",
          "prigovor na obradu kada je to predviđeno propisima"
        ]
      },
      {
        title: "8. Komunikacija s pomoćnikom na stranici",
        paragraphs: [
          "Poruke poslane kroz pomoćnika na stranici koriste se za pripremu odgovora, kvalifikaciju upita i usmjeravanje prema sljedećem koraku. U fazi integracije takve se poruke tehnički mogu prosljeđivati kroz vanjske automation/webhook servise koje Atrium Istria koristi za obradu upita."
        ]
      }
    ],
    contactTitle: "Kontakt za pitanja privatnosti",
    contactNote: "Ako imate pitanja o obradi podataka, javite nam se e-mailom ili telefonom.",
    lastUpdatedLabel: "Zadnje ažuriranje",
    lastUpdatedValue: "27.03.2026"
  }
};

export function getPrivacyPolicyPath(locale: Locale) {
  return locale === "hr" ? "/hr/privacy-policy" : "/privacy-policy";
}

export function getAssistantPrivacyPath(locale: Locale) {
  return getPrivacyPolicyPath(locale);
}

export function getPrivacyPolicyContent(locale: Locale) {
  return localizedPrivacyPolicy[locale];
}

export function getPrivacyPolicyContacts(locale: Locale) {
  const siteConfig = getSiteConfig(locale);

  return {
    phone: siteConfig.primaryPhone,
    email: siteConfig.email,
    location: siteConfig.location
  };
}
