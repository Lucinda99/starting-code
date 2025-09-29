
# WAD621S - Interactive Web Application Styling Lab (Completed)

## What I delivered
- `index.html` (you provided) — left intact, links to the generated files.
- `styles.css` — full CSS implementation meeting the challenge components:
  - Cards with shadows, rounded corners, hover transitions
  - Buttons (primary, success, warning, info), outline variant, disabled state, icons
  - Chips with active and close states
  - Horizontal navigation with active indicators and hover effects
  - Styled forms, labels, inputs, textareas, and focus states
  - Responsive component grid using media queries
  - CSS variables for color system and theme switching
  - Light/dark/blue/green theme options via `data-theme` on `<html>`
- `scripting.js` — small JS file added to enable:
  - Theme switching, color changing, font-size and radius sliders
  - Panel toggle, dropdowns, chips interactions, modals, tabs, toasts
  - Basic UI interactions used by the page

## Design decisions
- Used CSS custom properties in `:root` for a single source of truth. Theme changes are applied by switching `data-theme` attribute on the document element.
- Chose a rounded, soft card style and elevated shadows to provide a modern "material" feel.
- Buttons are bold and slightly elevated; outline variant is inverted on hover to keep affordance.
- Responsive grid switches from 3 → 2 → 1 columns at common breakpoints to remain readable on phones.
- Focus styles use box-shadow + border color to aid accessibility while maintaining visual polish.

## Challenges addressed
- Ensured consistent spacing and radii by centralizing variables like `--radius`.
- Implemented lightweight JS to avoid dependence on external libs while enabling the customization panel.
- Kept CSS modular and named with clear component sections so it's easy to extend.

## How to use
1. Open `index.html` in your browser.
2. Use the "Customize" panel (⚙️) to change theme, primary color, font size and border radius.
3. Test components and interactions (buttons, cards, chips, dropdowns, modal, etc.).


