# Premium Web Agency Design System

## Core Aesthetics
This project adopts an Apple-inspired glass and translucent design language, tailored for a premium web development agency. The visual design completely rejects neon/cyberpunk aesthetics in favor of a restrained, editorial style based on neutral colors, spatial hierarchy, and high-fidelity typography.

### Key Characteristics
1. **Neutral Materials**: Extensive use of functional translucent glass overlays to establish spatial hierarchy over neutral backgrounds.
2. **Layered Depth**: Interactions and components exist on a Z-axis, structured by shadow and translucency rather than glowing flat borders.
3. **Editorial Typography**: Native system fonts (`-apple-system`, `SF Pro`) are used for high readability, with dynamic tracking (negative for display, neutral for body) and tight leading.
4. **Contextual Glass**: Glass is only used when there is a meaningful environmental layer behind it.

---

## Token Architecture

### Colors
- **Canvas (`#F5F5F7`)**: The core light environmental background.
- **Primary Ink (`#1D1D1F`)**: High-contrast text and primary dark elements.
- **Secondary Ink (`#424245`)**: Muted elements and borders in dark environments.
- **Muted Gray (`#86868B`)**: Secondary text.
- **Hairline Gray (`#D2D2D7`)**: Subdued borders in light environments.
- **Primary Blue (`#0071E3`)**: Primary actions and active states.
- **Dark Surface (`#1C1C1E`)**: Elevated dark components.

### Material Hierarchy
We define a scale of functional translucency:
- `.glass-thin`: High transparency, modest blur, thin white highlight.
- `.glass-regular`: Moderate translucency, soft blur, subtle light border.
- `.glass-thick`: For elevated control surfaces.
- `.glass-dark`: Neutral-black material with soft white reflections for dark environments.

### Gradients
Gradients are strictly for ambient environmental lighting:
- `.gradient-light-material`: Soft white to canvas transition.
- `.gradient-dark-material`: Dark gray to black transition.
- `.gradient-blue-soft`: Subdued, low-opacity blue environmental lighting.

### Motion & Easing
All motion follows the principles of Emil Kowalski's design engineering philosophy (`emil-design-eng`):
- **Sub-300ms UI**: Standard transitions are fast and interruptible.
- **Custom Easing**: Use `--ease-out-strong` (`cubic-bezier(0.23, 1, 0.32, 1)`) for UI elements entering or reacting to hover.
- **Frequency-appropriate**: No animation on high-frequency actions. Delight is reserved for rare actions.
- **Gating**: Motion is strictly gated behind `prefers-reduced-motion` and `@media (hover: hover) and (pointer: fine)`.
