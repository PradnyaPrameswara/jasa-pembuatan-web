# Repository Governance & Implementation Rules

This document is the authoritative rulebook for this repository. All coding agents must follow these explicit rules. Do not interpret them loosely.

## REQUIRED STACK

These technologies are mandatory project requirements:

- **Astro** — primary application/rendering framework
- **TypeScript** — mandatory programming language
- **React** — interactive islands only
- **shadcn/ui** — reusable interactive UI primitives
- **Tailwind CSS** — primary styling system

## HARD PROHIBITIONS

**DO NOT** introduce or use:

- plain JavaScript application files (`.js` or `.jsx` source modules)
- `useEffect`, `React.useEffect`, or effect-hook workarounds for ordinary lifecycle logic
- direct `@radix-ui/*` imports in application code
- jQuery, Webflow runtime, or Bootstrap
- deprecated or legacy implementations
- unnecessary React hydration or React SPA architecture
- CSS-in-JS frameworks (styled-components, Emotion)
- duplicate UI systems or component frameworks replacing Astro/React

---

## 1. ASTRO IS THE DEFAULT

Astro must remain the primary framework and rendering layer.

**Use Astro for:**
- pages, layouts, and static content
- editorial sections and SEO/meta structure
- static components and content composition
- server/static rendering where appropriate

**Rule:** Do not convert static Astro components into React without a concrete interaction requirement. If it can be implemented in Astro, use Astro. React is not the default rendering layer.

## 2. REACT ISLANDS ONLY

React must be used selectively as an Astro island. Use React only when the component requires genuine client-side state or interaction.

**Valid React Examples:**
- Sheet/mobile navigation
- interactive form state
- complex selectable UI or stateful controls

**Rule:** Do not hydrate entire pages. Do not turn the project into a React SPA. Do not use React merely because a component library exposes React components.

### React Decision Checklist
Before creating a React component, ask:
1. Does this require persistent client-side state?
2. Does this require user interaction that Astro/CSS cannot handle cleanly?
3. Is there an existing shadcn primitive?
4. Can it remain an Astro component?
5. Can interaction be localized to a small island?

If React is not clearly required: **use Astro.**

## 3. TYPESCRIPT IS MANDATORY & NO NEW JAVASCRIPT

All application logic must use TypeScript.

**Allowed:** `.ts`, `.tsx`, `.astro`, `.css`
**Forbidden:** `.js`, `.jsx` (no new JavaScript source code is allowed in application code)

- Existing JavaScript (if any) must be treated as migration debt and migrated to TypeScript where safe and within task scope.
- If Astro requires browser-side scripts, write them in a TypeScript-compatible manner.
- Build tooling/config files may remain JavaScript when the framework conventionally provides them.

## 4. NO `useEffect`

This rule is mandatory. Do not use `React.useEffect`, `useEffect(...)`, or `useLayoutEffect` as a workaround for new implementation unless an explicit project-approved exception exists.

**Preferred Alternatives:**
- Astro server/static rendering
- derived values during render
- event handlers
- controlled component state
- computed values
- CSS or native browser APIs

Do not synchronize derived state through effects, copy props into state, or use effects for data fetching that belongs in Astro.

### `useEffect` Checklist
Before any lifecycle logic, ask:
- Can this be derived during render?
- Can this be handled by an event?
- Can Astro handle it before rendering?
- Can CSS handle it?
- Can a browser API be initialized outside React?
- Can the component architecture avoid synchronization entirely?

If yes: **do not use an effect.**

### Effect Exception Policy
If an effect is absolutely unavoidable, STOP before implementation. Document:
- Why it cannot be solved with Astro, derived during render, event handlers, CSS, native APIs, or another architecture.
- Request explicit approval. Do not silently introduce `useEffect`. Until approved, the implementation must remain effect-free.

## 5. SHADCN/UI & RADIX POLICY

**shadcn/ui is the standard:** Use it as the default source for reusable interactive UI primitives (Button, Sheet, Dialog, etc.). Do not rebuild accessible interactive primitives from scratch. Preserve accessibility behavior and the active style configuration (`base-vega` per `components.json`).

**NO DIRECT RADIX UI:** Direct Radix UI usage by application code is prohibited (e.g., `import * as Dialog from "@radix-ui/react-dialog"`).
- **Allowed:** `import { Button } from "@/components/ui/button"`
- **Allowed:** shadcn/ui internally depending on Radix primitives.

### Radix Checklist
Before importing Radix directly, ask: Does shadcn already expose this primitive?
- If yes: use shadcn.
- If not: do not directly introduce Radix without explicit user approval.

## 6. TAILWIND CSS & CUSTOM CSS

**Tailwind CSS:** Use as the primary styling system (semantic tokens, utilities).
**Custom CSS:** Allowed when Tailwind alone would be awkward or inappropriate (e.g., design tokens, complex gradients, Apple-inspired material surfaces, global typography).
- Do not create giant page-specific CSS files when Tailwind/composition would be clearer.

## 7. NO LEGACY CODE & MIGRATION RULE

The project must not introduce or expand legacy implementation patterns (jQuery, Webflow JS, Bootstrap, deprecated APIs, etc.).

### Legacy Checklist
When a task touches legacy code, ask:
- Is it still required?
- Is it part of the current architecture?
- Does a modern implementation already replace it?
- Would keeping it create two sources of truth?

**Rule:** Remove legacy code when safe and within scope. Migrate to the current project architecture. Do not retain dead fallback paths "just in case."

## 8. COMPONENT ARCHITECTURE & OVERCOMPONENTIZATION

**Architecture:**
- Astro for static/presentational composition.
- React only for interactive islands.
- shadcn/ui for reusable interactive primitives.
- Tailwind/design tokens for presentation.

**Rule:** Do not overcomponentize. Extract components only for meaningful reuse, behavior, semantic responsibility, or design-system consistency. Do not wrap every static section in a shadcn `Card`; use semantic Astro markup and Tailwind for editorial/page layout.

## 9. ACCESSIBILITY & RESPONSIVE RULE

**Accessibility:** Preserve semantic HTML, keyboard navigation, visible focus states, correct labels, and contrast. Support `prefers-reduced-motion`.
**Responsive Rule:** Check changes at supported widths at minimum: `1440, 1280, 1024, 768, 430, 390, 375`. Do not treat mobile as merely a scaled-down desktop layout.

## 10. ANIMATION RULES

- Prefer CSS for simple micro-interactions.
- Use GSAP only for justified coordinated choreography (using actual installed GSAP skill).
- Do not use React effects to initialize animation. GSAP architecture must follow the effect-free and Astro-first rules.

## 11. DATA FETCHING & STATE MANAGEMENT

- Prefer Astro/server-side/static fetching when data is known at render time.
- Do not fetch data in `useEffect`.
- Use local React state only where genuine interaction requires it.
- Do not create state for derived values or mirror props into state.

## 12. DEPENDENCY POLICY & TYPE SAFETY

- Verify existing stack cannot solve the problem before adding a package. Use the smallest appropriate dependency.
- **Forbidden Dependencies:** Direct Radix application dependencies, jQuery, Bootstrap, styled-components, Emotion, legacy polyfills.
- **Type Safety:** Do not bypass TypeScript unnecessarily. Avoid `any`, `@ts-ignore`, `@ts-nocheck`. Fix root causes; do not use false fixes.

## 13. PROJECT DESIGN SYSTEM

Reuse existing color tokens, spacing, typography, radii, shadows, motion principles, and Apple-inspired material rules. Use `docs/design-system.md` and project-level `SKILL.md` where relevant.

## 14. AGENT SKILLS

Before implementing a task, inspect project instructions and use relevant installed Agent Skills (e.g., `apple-design`, `emil-design-eng`, `animate`, `GSAP`). Project-specific rules in `AGENTS.md` take precedence over generic habits.

## 15. GIT WORKFLOW & SAFETY

**MANDATORY RULE:** Every new user-requested change set MUST begin on a new short-lived branch.
- One coherent user request = one branch (e.g., `feat/<description>`, `fix/<description>`).
- Do not implement directly on `main`.
- Preserve existing uncommitted work.
- Do not force push.
- Do not automatically commit, push, or merge unless explicitly requested.

## 16. VALIDATION & BROWSER QA

**Validation is mandatory** before declaring implementation complete. Run the project's actual checks:
- `pnpm lint` (or `npm run lint`)
- `pnpm typecheck` (or `npm run typecheck`)
- `pnpm check` (or `npm run check`)
- `pnpm build` (or `npm run build`)
- `git diff --check`

**Browser QA:** Visual/UI tasks require browser verification at the responsive widths listed above. Do not declare a visual task complete based only on build success.

## 17. NO UNRELATED REFACTORING

Stay within task scope. Do not redesign unrelated pages, upgrade dependencies unnecessarily, or rewrite architecture during a small fix. Report unrelated technical debt separately.

## 18. RULE PRIORITY

1. Current user request.
2. Project-level `AGENTS.md`.
3. Project-specific `SKILL.md` / architecture/design docs.
4. Relevant installed Agent Skills.
5. Existing implementation conventions.
6. Generic framework habits.

*No lower-priority instruction may override explicit technology prohibitions in `AGENTS.md` without user approval.*

## 19. DEVELOPMENT & DOCUMENTATION

When starting the dev server, use background mode:
```bash
astro dev --background
```
Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

**Full Astro documentation:** https://docs.astro.build
- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling](https://docs.astro.build/en/guides/styling/)
