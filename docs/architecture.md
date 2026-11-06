# Current application architecture

This repository is an Astro-first personal portfolio with selected interactive islands.

- `src/pages/` holds static Astro pages and the three `/work/[slug]` routes.
- `src/layouts/Layout.astro` owns document structure, canonical links, Open Graph and structured data. Individual pages own the single visible `<main>`.
- `src/data/profile.ts` holds verified LinkedIn/CV facts shared across pages, SEO and interactive components.
- `src/data/work.ts` holds project and experience entries for both the listing and case-study routes.
- `src/components/layout/` contains static header/footer markup and minimal browser behavior.
- `src/components/interactive/` contains the mobile navigation, FAQ and contact-form React islands.
- `src/components/ui/` provides shadcn/ui primitives (base-vega design style, Radix used only internally as required by existing primitives).
- `src/styles/global.css` and Tailwind CSS v4 provide theme and visual materials.

The static site has **no contact backend**. The contact form creates an email draft through `mailto:` and does not claim to send messages. No React effect hooks or page-level React hydration are required.

Check `AGENTS.md`, `SKILL.md` and `docs/design-system.md` for binding constraints.
