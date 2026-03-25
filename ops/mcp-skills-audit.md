# MCP and Skills Audit for Atrium Istria

Дата: 2026-03-24

## 1. Available now in this environment

### MCP / tooling available

- `Figma MCP`
- `Playwright MCP`
- local shell / file editing
- web research tool

### Skills available and relevant

- [`figma`](/Users/geocoder/.codex/skills/figma/SKILL.md)
- [`playwright-interactive`](/Users/geocoder/.codex/skills/playwright-interactive/SKILL.md)
- [`screenshot`](/Users/geocoder/.codex/skills/screenshot/SKILL.md)

## 2. What each one is for

### Figma MCP

Use for:

- design concept development
- extracting design context from Figma
- screenshot comparison
- design-to-code workflow
- code connect mapping later if needed

Status:

- available
- authenticated
- suitable for next design phase

### Playwright MCP

Use for:

- mobile-first QA
- interaction testing
- validating hero behavior
- checking consent banner behavior
- checking event-triggering surfaces in browser

Status:

- available
- suitable for implementation and QA phase

### `figma` skill

Use for:

- disciplined Figma MCP workflow
- design context, screenshots and assets
- structured design-to-code handoff

### `playwright-interactive` skill

Use for:

- persistent browser QA during implementation
- repeated checks without relaunching the whole workflow
- mobile and desktop interaction verification

### `screenshot` skill

Use for:

- fallback screenshots
- side-by-side comparisons
- desktop capture when browser-native tools are not enough

## 3. Important gap

There are no dedicated Google MCP clients available in the current environment for:

- Google Analytics 4
- Google Tag Manager
- Google Search Console

Это значит:

- research, PRD и measurement foundation можно подготовить полностью;
- но фактическое создание property/container, verification и account-level setup нужно будет делать через Google interfaces после получения доступов.

## 4. What we should use by phase

### Phase 1: Research and PRD

- web research tool
- local docs in repo

### Phase 2: Design concept

- `Figma MCP`
- `figma` skill

### Phase 3: Frontend build

- local coding tools
- `Playwright MCP`
- `playwright-interactive` skill

### Phase 4: QA and launch

- `Playwright MCP`
- `playwright-interactive` skill
- `screenshot` skill
- manual Google stack setup

## 5. External access still needed

- Google account with access to GA4
- Google account with access to GTM
- Google account with access to GSC
- final domain
- DNS or platform access for Search Console verification

## 6. Recommendation

Для этого проекта оптимальный operational stack такой:

- research and product planning in local docs
- design in Figma with Figma MCP
- implementation with a clean frontend stack
- QA through Playwright
- analytics through GTM + GA4 + GSC configured manually in Google

Это уже достаточно, чтобы перейти к следующему этапу: дизайну главной страницы и технической архитектуре сайта.
