# Technical Architecture

This document defines the structural architecture of the Astro application.

## Core Stack

- **Astro:** The primary framework and renderer.
- **React:** The interactive UI library (used as Astro Islands).
- **Tailwind CSS:** The styling engine.
- **shadcn/ui:** Unstyled, accessible component primitives.
- **TypeScript:** Type safety across all layers.

## Separation of Concerns (Astro vs React)

Astro is the default. React must only be used when client-side interactivity is strictly required.

**Astro handles:**

- Page routing (`src/pages/`).
- Layout wrapping and SEO metadata (`src/layouts/`).
- Static data fetching and CMS integration.
- Presentation components that don't need hydration (e.g., footers, hero sections, static text blocks).

**React handles:**

- Complex accessible interactive components (e.g., Mobile Navigation Sheet).
- Forms with complex validation states (e.g., the Contact form).
- Interactive filtering or highly dynamic UI components.

_Hydration:_ When a React component is used, it must be hydrated minimally (e.g., `client:load` for critical above-the-fold UI, `client:visible` or `client:idle` for anything else).

## Directory Structure

```text
src/
├── assets/          # Local static assets (images, fonts)
├── components/
│   ├── layout/      # SiteHeader, SiteFooter, etc.
│   ├── sections/    # Large page sections (e.g., Hero, ServicesList)
│   ├── shared/      # Reusable Astro components (e.g., SectionHeading, Container)
│   ├── interactive/ # React components requiring hydration
│   └── ui/          # shadcn/ui primitive components (React)
├── data/            # Mock data, config files, content collections
├── layouts/         # Base layout templates
├── lib/             # Utility functions (e.g., cn for tailwind merge)
├── pages/           # Astro routing (/, /work, /services, etc.)
└── styles/          # globals.css and Tailwind base
```

## Content Strategy

For V1, portfolio and service data will be housed in `src/data/` or using Astro Content Collections (`src/content/`) if markdown authoring is required. Data flows from these static sources into Astro pages and is passed down to components via props.
