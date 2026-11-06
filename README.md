# Pradnya Prameswara — Fullstack Web Developer

An Astro-first personal portfolio and web-development landing page based on the public professional information provided through the owner's LinkedIn profile and CV. The existing editorial / Apple-inspired visual system is retained.

## Technology

- **Astro 7** for pages, layout, static rendering and SEO
- **TypeScript** throughout application logic
- **React 19** only for interactive islands (mobile navigation, FAQ and contact)
- **Tailwind CSS 4** for styling and the existing design tokens
- **shadcn/ui** (`base-vega` primitives) for interactive controls; no direct Radix imports outside the internal UI components
- **pnpm 12.14** for reproducible dependency installs

Use Node.js 22.23.4 or later.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Quality checks

```sh
pnpm lint
pnpm typecheck
pnpm check
pnpm build
```

The GitHub Actions workflow runs these checks and captures browser screenshots for review at the repository's seven required viewport widths.

## Profile and work content

Edit `src/data/profile.ts` for public professional information (name, role, employment, education, skills, certifications and links), and `src/data/work.ts` for work and case-study entries. These reflect the owner's previously provided LinkedIn PDF and CV. Do not add invented awards, client outcomes, or employment metrics. Stock illustrations are not real screenshots of private projects.

## Contact

The contact form is intentionally frontend-only. On submit it composes a `mailto:` draft in the visitor's email application, rather than pretending to save or transmit a message. An email application is required; the direct contact email remains visible as fallback. This site does not collect form submissions on a server.

## Project rules

Read `AGENTS.md`, `SKILL.md`, and `docs/design-system.md` before implementation. Astro owns static pages; React should not be hydrated for presentation-only content. Avoid `useEffect`, direct Radix application imports, and unnecessary dependencies.

## Documentation

- `docs/architecture.md` — repository architecture
- `docs/decisions.md` — original agency discovery decisions (historical)
- `docs/profile-sources.md` — verified professional content and edit policy
