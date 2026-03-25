# Atrium Istria Website PRD v1

Дата: 2026-03-24  
Статус: draft for design and implementation  
Язык документа: русский

## 1. Product summary

Atrium Istria нужен не стандартный “строительный лендинг”, а современный mobile-first сайт для генерации более понятных и качественных обращений. Сайт должен создавать впечатление организованной, системной и технологичной строительной компании, которая умеет вести объект, коммуникацию и процесс.

Первая версия запускается как контентно-сильный service website с conversational entry в hero, отдельными service pages, страницей работ и контактов, а также с measurement foundation через GTM, GA4, GSC и Consent Mode v2.

## 2. Business goal

Главная цель v1: получать реальные качественные обращения по объектам в Пуле и Истрии.

Приоритет:

- не максимальное число случайных заявок;
- а более понятные, релевантные обращения;
- и доверие на первом контакте.

## 3. Primary audiences

### Primary

- владельцы домов и квартир;
- люди с объектами под адаптацию, реконструкцию, фасадные работы, гидроизоляцию.

### Secondary

- владельцы апартаментов и вилл под аренду;
- коммерческие клиенты;
- люди, которым нужен подрядчик с более взрослой организацией процесса.

## 4. Scope of v1

### In scope

- Главная страница
- 5 service pages
- Radovi
- Kontakt
- Multilingual-ready architecture
- Conversational hero entry
- SEO-ready page structure
- Measurement foundation

### Out of scope for v1

- Полноценный клиентский кабинет
- Сложный калькулятор стоимости
- Квизовые сценарии
- Портал для подрядчиков
- Публичная коммуникация “AI/agent” как продукта

## 5. Site map

- `/`
- `/adaptacije-kuca-i-stanova`
- `/adaptacije-kupaonica`
- `/fasade`
- `/rekonstrukcije-kuca`
- `/hidroizolacija`
- `/radovi`
- `/kontakt`

## 6. Global product requirements

### Experience principles

- Mobile-first by default
- Строгий, собранный, современный тон
- Ощущение system, order, control
- Живой строительный характер без хаоса
- Ясная коммуникация без рекламной напыщенности
- Без ощущения чат-бота, квиза или SaaS UI

### Visual direction

- База: антрацит
- Акцент: теплый оранжевый
- Светлые полупрозрачные панели
- Современная сетка и panel-based composition
- Встроенные фото объектов, а не случайная галерея

### Header

- Логотип
- Language switch
- Телефон
- `Usluge / Radovi / Kontakt`
- E-mail допустим на desktop, если не разрушает чистоту header

### Language architecture

- `hr` primary
- `en` and `ru` prepared
- separate URLs per locale
- `hreflang`

## 7. Homepage requirements

### Goal

Homepage должна:

- формировать доверие;
- объяснять, какие задачи компания берет;
- показывать, как начинается работа;
- вести к первичному обращению;
- оставаться сильной SEO landing page.

### Required sections

### 1. Hero

Обязательные элементы:

- понятный `H1`
- подзаголовок
- приглушенный architectural / real-project background
- светлое матовое окно поверх фона
- живая первая фраза
- свободный текстовый ввод

Ограничения:

- нельзя делать вид мессенджера;
- нельзя ставить Telegram/WhatsApp как главный визуальный акцент;
- нельзя делать квизовые карточки выбора роли или объекта.

### 2. Combined block: what tasks we take + how work starts

Один связанный блок, а не две несвязанные секции.

Должен отвечать на вопросы:

- с какими задачами сюда можно приходить;
- как начинается взаимодействие;
- как компания понимает запрос;
- какой следующий шаг после первичного контакта.

### 3. Selected projects

Карточки кейсов по логике:

- что было;
- что сделали;
- какой результат.

### 4. Trust block

Должен передавать:

- порядок;
- ответственность;
- реальный опыт;
- ясность коммуникации;
- рабочий подход к объекту.

### 5. Pricing logic block

Не “цена от”, а объяснение:

- как оценивается задача;
- от чего зависит цена;
- почему без осмотра или точных данных нельзя обещать фиктивную цифру.

### 6. FAQ

Нужно для:

- снижения трения;
- SEO-покрытия вопросов;
- нормализации первого контакта.

### 7. Final contact block

Спокойный, ясный, без визуального шума.

Должен включать:

- основной conversational CTA;
- телефон;
- контактные данные;
- понятное ожидание следующего шага.

## 8. Service page template requirements

Каждая service page должна быть самостоятельной SEO и conversion entry page.

### Required structure

- localized `H1`
- intro for the scenario
- какие задачи решаем
- как проходит работа
- от чего зависит цена
- proof / selected projects
- FAQ
- CTA to contact flow

### Service pages in v1

- Adaptacije kuća i stanova
- Adaptacije kupaonica
- Fasade
- Rekonstrukcije kuća
- Hidroizolacija

## 9. Radovi page requirements

Цель страницы — не просто показать галерею, а подтвердить реальность компании.

### Required structure

- вводный блок о типах работ
- список или сетка кейсов
- каждая карточка кейса должна содержать:
  - тип объекта;
  - локацию, если уместно;
  - что было;
  - какие работы выполнены;
  - какой результат;
  - визуальные материалы

### UX requirements

- без хаотичной галереи;
- без ощущения “фото просто ради фото”;
- акцент на ясность и контроль.

## 10. Kontakt page requirements

Страница контактов должна быть простой и полезной.

Обязательные элементы:

- основной CTA в разговор;
- телефон;
- e-mail;
- зона обслуживания;
- краткое пояснение, какую информацию лучше отправить в первом сообщении.

## 11. Conversational entry requirements

### Product requirement

Главный вход в обращение должен быть построен на свободном вводе.

### Must have

- одна основная точка свободного ввода на hero
- понятная первая фраза
- ощущение, что пишет человек в компанию
- чистая спокойная input panel

### Must not have

- role cards
- branching quiz
- “house / apartment / other”
- вид мессенджера
- навязчивое AI positioning

### Functional expectation

Система в будущем сможет сама распознавать:

- тип объекта;
- тип услуги;
- срочность;
- географию;
- вероятный intent.

В v1 UI уже должен быть подготовлен к этому сценарию, даже если внутренняя агентная логика будет развиваться постепенно.

## 12. SEO requirements

- crawlable links
- meaningful page titles
- meaningful meta descriptions
- one primary `H1` per page
- locale-ready URLs
- `hreflang`
- `canonical`
- `sitemap.xml`
- `robots.txt`
- `LocalBusiness` / `Organization` / `BreadcrumbList`
- internal linking between home, services, projects and contact
- image optimization and alt strategy

## 13. Measurement requirements

### Stack

- Google Tag Manager
- Google Analytics 4
- Google Search Console
- Consent Mode v2

### Required events

- `page_view`
- `service_page_view`
- `project_case_open`
- `hero_conversation_start`
- `lead_form_submit`
- `phone_click`
- `email_click`
- `whatsapp_or_messenger_click` if applicable
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

### Primary key event

- `lead_form_submit`

### Secondary key events

- `phone_click`
- `email_click`
- `hero_conversation_start`

## 14. Content and data model

### Page types

- `home_page`
- `service_page`
- `projects_index`
- `project_case`
- `contact_page`
- `faq_item`

### Required content fields

For `service_page`:

- slug
- locale
- seo_title
- seo_description
- h1
- intro
- scenario_items
- process_steps
- price_factors
- faq_items
- proof_cases

For `project_case`:

- slug
- locale
- title
- object_type
- location
- before_summary
- work_summary
- result_summary
- gallery
- linked_services

## 15. Acceptance criteria

- Homepage clearly explains what Atrium Istria does and how to start.
- Hero feels human and premium, but not like a bot or SaaS widget.
- Site is mobile-first and readable on small screens.
- Every service has its own page and SEO intent.
- Radovi is structured around case logic, not random images.
- Contact path is clear from every page.
- Measurement spec is sufficient to connect GA4, GTM, GSC and consent mode.
- PRD leaves no major structural ambiguity for design.

## 16. Dependencies

- Final domain or at least domain decision
- Brand assets / logo
- Real project photos and project descriptions
- Google account access for GA4 / GTM / GSC
- Decision on CMS or frontend stack in the next phase

## 17. Default assumptions

- Research and product docs remain in Russian.
- Primary market is Croatia + Istria.
- Main tone is calm, practical, confident.
- Consent banner should be lightweight and integrated, not visually invasive.
- AI capability exists behind the experience, but is not communicated as product messaging.
