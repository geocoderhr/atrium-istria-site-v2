# Git and GitHub Readiness

Дата: 2026-03-25  
Статус: pre-implementation checklist

## When to do it

Connect git and GitHub before the first real code scaffold starts.

This step sits:

- after the homepage Figma concept is approved
- after the service and `Radovi` adaptation package is reviewed
- before the first `Next.js` scaffold files are created

## Required sequence

1. Initialize local git repository
2. Create GitHub repository
3. First commit: docs foundation
4. Second commit: project scaffold

## What should already exist before this step

- PRD and research docs
- visual direction brief
- homepage blueprint
- homepage implementation spec
- Figma homepage concept package
- service-page and `Radovi` adaptation package
- technical architecture brief
- implementation order

## Recommended first commit groups

Commit 1:

- `research/`
- `product/`
- `measurement/`
- `ops/`

Commit 2:

- `package.json` and project shell
- `src/app/`
- `src/styles/`
- `src/content/schema.ts`
- initial `public/` structure

## Why this timing is correct

- design logic is already stable enough
- engineering can start from a clean baseline
- Search Console and measurement setup can be tracked from the beginning
- later SEO or layout changes stay attributable to a specific milestone

## Why not later

- avoids local drift
- preserves architecture history
- keeps documentation and scaffold milestones traceable
- makes rollback possible from the start

## First milestone groups

- research + PRD + blueprints
- technical architecture
- homepage implementation spec
- Figma package approval
- scaffold start

## Rule

Do not start the real scaffold before git and GitHub are connected.
