# Atrium Istria Research

Дата: 2026-03-24  
Язык документа: русский  
Рынок первой версии: Croatia + Istria  
Фокус: homeowners first, с понятным входом также для владельцев апартаментов, вилл под аренду, коммерческих объектов и реконструкций

## 1. User behavior and reading patterns

### Что подтверждает исследование

- Для сервисного сайта важна не просто красивая первая сцена, а ясный ответ на базовые вопросы: кто вы, что делаете, где работаете, как начать разговор.
- Google Search Central рекомендует делать people-first контент: у сайта должна быть понятная аудитория, первичный фокус и ощущение, что человек после чтения действительно понял, что ему дальше делать. Источник: [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
- Google прямо связывает поисковый успех не с одним отдельным фактором, а с общей page experience и хорошей работой сайта на многих уровнях. Источник: [Understanding page experience](https://developers.google.com/search/docs/appearance/page-experience).
- web.dev подчеркивает, что отзывчивость после загрузки критична: INP измеряет, насколько быстро сайт реагирует на действия, а данные Chrome показывают, что большая часть времени на странице проходит уже после ее загрузки. Это особенно важно для hero-ввода, языкового переключателя, раскрывающихся FAQ и контактных действий. Источник: [Interaction to Next Paint](https://web.dev/articles/inp).
- В материалах NNGroup о corporate/company information повторяется одна и та же мысль: пользователи быстро судят о качестве компании по тому, насколько сайт собран, понятен и как легко на нем найти, чем компания занимается и как с ней связаться. Источник: [Presenting Company Information on Corporate Websites](https://media.nngroup.com/media/reports/free/Presenting_Company_Information_on_Corporate_Websites_3rd_Edition.pdf).
- Страницы компаний читают не линейно, а по опорным точкам: заголовок, подзаголовок, структура секций, списки, карточки, подписи, кейсы, контактные элементы.

### Выводы для Atrium Istria

- Главная должна одновременно решать две задачи:
  - эмоционально показывать порядок, контроль и взрослый подход;
  - быстро объяснять, с какими задачами можно прийти и как начинается работа.
- Hero не может быть пустым или слишком абстрактным.
- На первом экране должны быть:
  - ясный `H1`;
  - короткий подзаголовок;
  - спокойный, живой conversational entry;
  - ощущение доверия, а не рекламы.
- Mobile-first обязателен не только визуально, но и по логике чтения:
  - короткие смысловые блоки;
  - сильная вертикальная композиция;
  - быстрый путь к вводу обращения;
  - без перегруженного header.

## 2. SEO and information architecture

### Базовые принципы

- Главная должна быть полноценной индексируемой страницей с реальным содержательным каркасом, а не оболочкой вокруг красивого hero.
- Каждая услуга должна иметь собственную landing page, потому что service-intent запросы в поиске обычно приходят не на универсальную главную, а на страницы под конкретный сценарий.
- Google рекомендует использовать понятные URL, разделять слова дефисами и избегать лишней сложности. Источник: [URL structure best practices](https://developers.google.com/search/docs/crawling-indexing/url-structure).
- Для мультиязычного сайта нужно использовать отдельные локализованные URL и `hreflang`, а не надеяться на locale-adaptive поведение. Источник: [Tell Google about localized versions of your page](https://developers.google.com/search/docs/specialty/international/localized-versions).
- Сразу нужно закладывать:
  - `sitemap.xml`;
  - `robots.txt`;
  - `canonical`;
  - `hreflang`;
  - title/meta per page;
  - структурированные данные `LocalBusiness`, `Organization`, `BreadcrumbList`.

### Информационная архитектура v1

- `/`
- `/adaptacije-kuca-i-stanova`
- `/adaptacije-kupaonica`
- `/fasade`
- `/rekonstrukcije-kuca`
- `/hidroizolacija`
- `/radovi`
- `/kontakt`

### Языковая стратегия

- Первая версия проектируется под `hr` как primary market language.
- Архитектура должна быть готова к `en` и `ru`.
- Рекомендуемая схема:
  - `/hr/...`
  - `/en/...`
  - `/ru/...`
- Если на старте сайт выйдет в одном языке, структура все равно должна быть готова к добавлению локалей без переделки URL и метаданных.

### Выводы для SEO-каркаса

- На главной нужны отдельные секции под:
  - what we do;
  - how work starts;
  - selected projects;
  - trust and process;
  - price logic;
  - FAQ;
  - contact block.
- На service pages нужен шаблон с:
  - локальным `H1`;
  - описанием проблемы;
  - scope of work;
  - как идет оценка;
  - от чего зависит цена;
  - кейсами или proof;
  - FAQ;
  - CTA в разговор и контакт.
- Google отдельно рекомендует связку Search Console и Analytics для оценки SEO не только по кликам и CTR, но и по качеству трафика после посадки. Источник: [Using Search Console and Google Analytics data for SEO](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console).

## 3. Conversational lead capture

### Что важно не делать

- Не использовать квизовый вход с карточками ролей.
- Не превращать hero в чат-виджет, мессенджер или “AI product”.
- Не перегружать первый экран мессенджерами, кнопками, channel clutter.
- Не заставлять пользователя сначала выбрать тип объекта, если это можно выяснить по тексту сообщения.

### Что работает лучше

- Спокойный текстовый старт разговора.
- Один свободный ввод вместо сценарных ответов.
- Ясная первая фраза, которая звучит как человек.
- Нормальный fallback:
  - телефон в header;
  - e-mail на desktop;
  - контактный блок ниже по странице.
- Ввод должен быть оформлен как дизайнерская панель, а не message composer из мессенджера.

### Практические выводы

- Hero-input должен принимать свободное описание задачи:
  - тип объекта;
  - что нужно сделать;
  - где находится объект;
  - если есть, сроки и фото.
- Поле можно усилить подсказкой, но без жесткого сценария.
- Примеры стартовых фраз на хорватском для будущего интерфейса:
  - `Recite nam ukratko o objektu i što trebate napraviti.`
  - `Opišite prostor, radove i lokaciju objekta.`
  - `Napišite što želite riješiti i javit ćemo se s jasnim sljedećim korakom.`
- web.dev рекомендует использовать подходящие input controls, ясные подсказки и минимизировать лишнее трение в формах. Источник: [Sign-up form best practices](https://web.dev/articles/sign-up-form-best-practices).  
  Для Atrium Istria это означает: на первом экране только один понятный свободный вход, а уточнения уже после первого сообщения.

## 4. Local competitive audit

### Наблюдаемые паттерны на рынке Пулы и Истрии

| Сайт | Что работает | Где теряет | Что это значит для Atrium Istria |
| --- | --- | --- | --- |
| [Lekoplast](https://lekoplast.hr/) | Есть локальные маркеры, список услуг, проекты, телефоны на виду | Перегруженный и повторяющийся интерфейс, много промо-риторики, gallery-heavy подача, мало ощущения системности | Atrium должен быть спокойнее, чище и убедительнее через структуру и процесс |
| [Špigolo](https://www.spigolo.eu/) | Прямой оффер, быстрый путь к заявке, локальность | Шаблонный сервисный паттерн, слабая визуальная система, почти нет “productized process” подачи | Atrium может отстроиться через технологичность, структуру кейсов и более взрослый tone of voice |
| Local directory / small contractor pages | Локальные ключевые слова и телефоны | Слабый бренд, нет кейсов по логике problem -> work -> result, нет внятной process layer | У Atrium есть шанс занять более премиальную и системную позицию без ощущения luxury theater |

### Подтвержденные наблюдения

- У Lekoplast уже на первом экране есть локальность, перечень работ, цифры, проекты и CTA, но страница перегружена повторяющимися блоками и визуально не создает ощущение аккуратной системы. Источник: [Lekoplast](https://lekoplast.hr/).
- У Špigolo старт проще и чище, но подача остается типовой: телефон, онлайн-оценка, короткий список работ, галерея. Источник: [Špigolo](https://www.spigolo.eu/).

### Рыночная возможность

Почти никто не показывает строительную услугу как управляемый сервис с ясной логикой входа, оценки, реализации и контроля. Именно здесь у Atrium Istria окно возможностей:

- показать, что компания управляет процессом, а не просто “принимает звонки”;
- дать живой вход в разговор без ощущения давления;
- собрать доверие через порядок, структуру, реальные кейсы и ясную коммуникацию;
- совместить локальную строительную реальность с интерфейсной зрелостью.

## 5. Design signals for Atrium Istria

### Позиционирование через визуальный язык

- Не “тяжелый строительный сайт”.
- Не SaaS-дашборд.
- Не luxury-глянец.
- А гибрид:
  - строгая интерфейсная логика;
  - живой материал и реальные объекты;
  - спокойный премиальный ритм;
  - ощущение технической собранности.

### Визуальная система

- База: антрацит, не черный.
- Акцент: теплый оранжевый.
- Светлые нейтральные панели для воздуха и контраста.
- Фон hero:
  - архитектурный или реальный объект;
  - сильно приглушенный;
  - встроенный в общую композицию;
  - не “обычная фотообложка”.

### Hero direction

- Темный антрацитовый фон.
- Светлое полупрозрачное окно поверх:
  - матовое;
  - мягкое;
  - с деликатным blur;
  - без сходства с мессенджером.
- Контент внутри:
  - H1;
  - подзаголовок;
  - первая человеческая фраза;
  - спокойный текстовый ввод.

### Header direction

- Header должен ощущаться как control panel.
- Состав:
  - логотип;
  - language switch;
  - телефон;
  - `Usluge / Radovi / Kontakt`;
  - e-mail только там, где он не ломает чистоту.

### Карточки и окна

- Карточки проектов:
  - обложка;
  - что было;
  - что сделали;
  - какой результат.
- Сервисные карточки:
  - краткая формулировка сценария;
  - не рекламная поэзия, а ясная utility.
- Окна и панели:
  - светлые, мягкие, аккуратные;
  - без тяжелых теней;
  - без “черных плавающих виджетов”.

## 6. Implementation implications

### Что это означает для сайта

- Нужна не просто дизайн-концепция, а система:
  - content model;
  - page templates;
  - analytics layer;
  - multilingual readiness;
  - component library.

### Шаблоны страниц

- Home:
  - hero;
  - combined block `koje zadatke preuzimamo + kako rad počinje`;
  - selected projects;
  - trust block;
  - price logic;
  - FAQ;
  - final contact.
- Service pages:
  - problem-aware hero;
  - scope;
  - process;
  - pricing factors;
  - projects/proof;
  - FAQ;
  - contact CTA.
- Radovi:
  - фильтрация или группировка без перегруза;
  - кейсы по логике “before / work / result”.
- Kontakt:
  - короткий, ясный, без визуального шума.

### Контентная модель

- `service_page`
  - slug
  - locale
  - seo_title
  - seo_description
  - h1
  - intro
  - problem_scenarios
  - work_scope
  - process_steps
  - price_factors
  - faq_items
  - related_projects
- `project_case`
  - slug
  - locale
  - title
  - location
  - object_type
  - initial_state
  - works_done
  - result
  - gallery
  - related_services

### Performance implications

- Hero должен быть визуально богатым, но технически легким.
- Изображения проектов должны быть оптимизированы и грузиться как часть продуманной media strategy.
- INP, LCP и layout stability должны учитываться уже на уровне компонентов hero, header, form input и image blocks.

## 7. Measurement and launch analytics

### Рекомендуемый стек

- `GTM` как слой управления тегами.
- `GA4` как основная behavioral analytics.
- `GSC` как search performance source of truth.
- `Consent Mode v2` + consent-aware banner для ЕС.

### Почему это нужно с самого начала

- Search Console показывает:
  - queries;
  - impressions;
  - clicks;
  - CTR;
  - landing pages from Search.
- Google Analytics показывает:
  - путь после посадки;
  - engagement;
  - key events;
  - service page quality;
  - качество входящих обращений по страницам и источникам.
- Google прямо рекомендует использовать Search Console и Analytics вместе, потому что одно показывает путь до клика, а второе — поведение после landing. Источник: [Using Search Console and Google Analytics data for SEO](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console).

### Базовый event model v1

- `page_view`
- `service_page_view`
- `project_case_open`
- `hero_conversation_start`
- `lead_form_submit`
- `phone_click`
- `email_click`
- `whatsapp_or_messenger_click` только если такой канал реально появится
- `language_switch`
- `faq_expand`
- `contact_block_interaction`
- `consent_accept`
- `consent_reject`

### Event parameters

- `page_type`
- `service_name`
- `project_slug`
- `language`
- `lead_source_section`
- `contact_method`
- `device_type`
- `consent_state`

### Прямой вывод для проекта

Measurement нельзя считать “добавкой после запуска”. Для Atrium Istria это часть архитектуры сайта:

- чтобы понять, какие услуги реально дают качественные обращения;
- какие landing pages работают;
- где теряется человек по пути к контакту;
- какие языки и устройства требуют улучшения;
- как связать CTR и real lead quality.

## Recommended next step

На базе этого research можно без больших догадок делать:

1. PRD первой версии.
2. Информационную архитектуру и content model.
3. Дизайн-концепцию homepage и service-page template.
4. Техническую архитектуру сайта.

## Sources

- [Google Search Central: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google Search Central: Understanding page experience](https://developers.google.com/search/docs/appearance/page-experience)
- [Google Search Central: Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Google Search Central: LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google Search Central: Localized versions / hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google Search Central: URL structure best practices](https://developers.google.com/search/docs/crawling-indexing/url-structure)
- [Google Search Central: Title links](https://developers.google.com/search/docs/appearance/title-link)
- [Google Search Central: Meta descriptions / snippets](https://developers.google.com/search/docs/appearance/snippet)
- [Google Search Central: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google Search Central: Using Search Console and Google Analytics data for SEO](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console)
- [Google Search Central: Get started with Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start)
- [web.dev: Interaction to Next Paint](https://web.dev/articles/inp)
- [web.dev: Sign-up form best practices](https://web.dev/articles/sign-up-form-best-practices)
- [NNGroup: Presenting Company Information on Corporate Websites](https://media.nngroup.com/media/reports/free/Presenting_Company_Information_on_Corporate_Websites_3rd_Edition.pdf)
- [NNGroup: PR on Websites](https://media.nngroup.com/media/reports/free/PR_on_Websites_3rd_Edition.pdf)
- [Statcounter: Desktop vs Mobile Worldwide](https://gs.statcounter.com/platform-market-share/desktop-mobile/worldwide/)
- [Statcounter: Browser Market Share Croatia](https://gs.statcounter.com/browser-market-share/all/croatia)
- [Lekoplast](https://lekoplast.hr/)
- [Špigolo](https://www.spigolo.eu/)
