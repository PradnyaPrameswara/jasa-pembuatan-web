# Design System

This design system is informed by the agency's premium editorial positioning and deeply refined using principles from the `apple-design` skill (`C:\Users\agung\.agents\skills\apple-design\SKILL.md`).

## Semantic Colors

The palette is light-dominant, using cool-neutral surfaces and high-contrast typography to establish an editorial feel. Dark sections are used strategically for pacing, not as the default background.

**Tokens (Tailwind / CSS Variables):**

- `--background`: Cool, near-white (e.g., `hsl(210, 20%, 98%)`).
- `--foreground`: Deep charcoal (e.g., `hsl(210, 20%, 10%)`).
- `--muted`: Subtle gray for disabled or secondary surfaces (e.g., `hsl(210, 10%, 94%)`).
- `--muted-foreground`: Secondary text (e.g., `hsl(210, 10%, 45%)`).
- `--surface`: Pure white or a slightly elevated cool-white (`hsl(0, 0%, 100%)`).
- `--surface-elevated`: For floating cards (often identical to `--surface` but paired with shadow).
- `--surface-overlay`: For modals and sheets, ensuring sufficient contrast against the background scrim.
- `--border`: Subtle structural lines (`hsl(210, 10%, 90%)`).
- `--glass-border`: Brighter, semi-transparent border (e.g., `rgba(255, 255, 255, 0.4)`) to simulate light catching the material edge.
- `--accent`: Restrained cool-neutral/blue (e.g., `hsl(210, 100%, 50%)`).
- `--accent-foreground`: White text on accent backgrounds.

## Typography

Typography carries the premium character. We rely on optical sizing principles (simulated via CSS):

- **Display & Headings:** Tight leading (line-height `1.05` to `1.1`) and negative tracking (e.g., `letter-spacing: -0.02em` to `-0.04em`).
- **Body Copy:** Comfortable leading (line-height `1.5` to `1.6`) and neutral tracking (`0`).
- **Small UI & Labels:** Slightly positive tracking (e.g., `0.02em`) to maintain legibility.
- **Font Stack:** Standard system font stack (`system-ui`, Inter, or similar clean sans-serif) to ensure excellent rendering without proprietary fonts.

## Glass Materials & Translucency

Glass is used **only** for floating functional layers (headers, sheets, toolbars). Content cards use opaque surfaces.

- **`glass-subtle`**: Minimal blur (`blur(8px)`), highly transparent background.
- **`glass-surface`**: Standard blur (`blur(16px)`), semi-transparent background (e.g., `rgba(255, 255, 255, 0.7)`), subtle top border highlight.
- **`glass-elevated`**: Stronger blur (`blur(24px)`), paired with a drop shadow to indicate higher elevation.
- **`glass-overlay`**: Maximum blur (`blur(40px)`) used for full-screen takeovers or deep sheets, often paired with background dimming.

## Spacing & Radii

- **Radii:** A deliberate, restrained scale.
  - `radius-sm`: `4px` (small inputs, badges)
  - `radius-md`: `8px` (buttons, small cards)
  - `radius-lg`: `16px` (main content cards, dialogs)
  - `radius-xl`: `24px` (large structural containers or sheets)
- **Spacing:** Based on a strict `4px`/`8px` grid. Page sections use massive, breathable whitespace (e.g., `py-24` or `py-32`) to enforce the editorial pacing.

## Shadows & Depth

Shadows are subtle, tight, and realistic. We avoid huge, diffuse, neon-like glows.

- **`shadow-subtle`**: Almost imperceptible, providing edge definition.
- **`shadow-surface`**: A soft, realistic drop shadow for interactive cards.
- **`shadow-overlay`**: A deeper shadow for modals/sheets to separate them from the dimmed background.

## Motion & Interaction Rules

As guided by `apple-design`, motion must be purposeful, interruptible, and restrained.

- **Hierarchy:** Prefer CSS `transform` and `opacity`. Avoid `transition-all`.
- **Speed:** Snappy but smooth. Avoid theatrical delays.
- **Feedback:** Highlight on pointer-down (instant), not just on hover. Buttons should have a tactile scale effect (e.g., `scale-95` on `:active`).
- **Reduced Motion:** Fully respect `@media (prefers-reduced-motion)`. Replace slides and scales with short opacity cross-fades.
