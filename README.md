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

## shadcn/ui component workflow

This site uses the official shadcn/ui registry with the existing `base-vega`
style preset. The shadcn CLI is installed as a **development dependency**
(`shadcn@4.23.0`), while generated components live in
`src/components/ui/`. No premium template source code is included.

```sh
pnpm install --frozen-lockfile
pnpm ui:info
pnpm ui:add badge
```

The `Alert` component is installed from the official registry and used in
the contact form to explain the mail-app handoff. Existing shadcn UI primitives
are preserved (Button, Sheet, Accordion, Select, Input, Label, Textarea).

The `Field` components were adapted from the official registry without overwriting the customized `Label`. The unused `FieldSeparator` is excluded to avoid a dependency. Maintain `htmlFor`/`id` associations and do not use `--overwrite` without review.

Keep static presentation in Astro and use React islands only where state or
interaction requires it. The visual identity and responsive rules remain
governed by `AGENTS.md` and `docs/design-system.md`.

## Browser interaction regression tests

`pnpm exec playwright test` validates required fields, email format, Select, mailto handoff, FAQ and mobile navigation in Chromium. Run `pnpm build` first if you are not using a locally running preview. CI installs Chromium and executes these tests after the normal build and screenshots. This does not send email or alter real contact data.

## Publishing checklist

The canonical portfolio domain is `https://www.pradnyaprameswara.web.id/` (see `astro.config.ts`). Before publishing a merge, follow `docs/release-checklist.md` for image review, browser checks, 404 mapping, SEO and contact behavior. Source code and CI checks do not by themselves establish that the live domain has been deployed.
