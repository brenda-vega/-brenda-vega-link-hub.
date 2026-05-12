# Brenda Vega — Portfolio Hub Design System

## 1. Visual Direction

The portfolio hub uses an editorial, minimal and premium visual system. The interface is calm, strategic and restrained, with a strong focus on clarity, hierarchy and product-thinking.

The design should feel refined without becoming decorative. Space, typography, thin borders and subtle interaction states carry the experience.

## 2. Typography

### Font Roles

- **Inter**: UI text, body copy, labels, metadata and utility text.
- **Poppins**: primary headings, section titles and portfolio item titles.
- **Instrument Serif Italic**: editorial accents, used sparingly for expressive emphasis.

### Hierarchy

- Hero heading: large Poppins, approximately `4.8rem` on desktop.
- Mobile hero heading: responsive large scale, approximately `3.25rem` to `5.35rem`.
- Section headings: Poppins, approximately `1.45rem` to `1.86rem`.
- Portfolio titles: Poppins, approximately `1.41rem` on desktop and larger on mobile.
- Body copy: Inter, approximately `1rem`.
- Metadata and labels: Inter, small caps, approximately `0.6rem` to `0.78rem`.

### Behavior

- Headings use tight line heights for editorial impact.
- Body text uses comfortable line height for readability.
- Letter spacing is mostly neutral or slightly tight on large headings.
- Small labels use increased letter spacing to support the refined editorial tone.

## 3. Color System

The color system is semantic and supports both warm light mode and soft dark mode.

### Light Theme

- **Background**: `#e3e5e4`
- **Surface**: `rgba(255, 255, 255, 0.45)`
- **Surface strong**: `rgba(255, 255, 255, 0.72)`
- **Text**: `#151819`
- **Muted**: `#525d69`
- **Accent**: `#f9cccb`
- **Accent strong**: `#c97f7d`
- **Border**: `rgba(45, 45, 45, 0.1)`
- **Border strong**: `rgba(45, 45, 45, 0.18)`

### Dark Theme

- **Background**: `#111212`
- **Surface**: `#171818`
- **Surface strong**: `#202221`
- **Text**: `#f0efec`
- **Muted**: `#9ba1a1`
- **Accent**: `#c97f7d`
- **Accent strong**: `#f9cccb`
- **Border**: `rgba(255, 255, 255, 0.07)`
- **Border strong**: `rgba(255, 255, 255, 0.13)`

## 4. Spacing System

Core spacing scale:

- `4`
- `8`
- `12`
- `16`
- `24`
- `32`
- `48`
- `64`

Spacing is intentionally generous. Desktop layouts should preserve editorial breathing room, clear separation between sections and a calm reading rhythm.

Mobile spacing becomes more compact, but should still feel open and premium. Avoid crowding buttons, headings or list items.

## 5. Components

### Pill Buttons

Buttons use pill shapes, thin borders and clear states. Primary actions are high contrast, while secondary actions stay quieter as ghost buttons.

### Thin Borders

Borders are used as structural dividers. They should remain thin, subtle and semantic, not decorative.

### Clean Cards

Cards are used only where content benefits from containment, especially credential rows on mobile. Surfaces should stay soft and minimal.

### Editorial Links

Text links are simple and restrained. Directional arrows may move subtly on hover, preserving the editorial feel without adding visual noise.

## 6. Interaction

Interactions are calm and tactile.

- Hover states are subtle but visible.
- Motion is short and clean.
- Transitions use approximately `150ms` to `200ms`.
- Avoid aggressive animation, bouncing, large movement or decorative effects.
- The approved feel is premium, minimal and quiet.

## 7. Responsive

The system is mobile-first and optimized for both compact and editorial desktop layouts.

On desktop, the layout uses generous whitespace, strong hierarchy and balanced section rhythm.

On mobile, content stacks clearly, touch targets remain comfortable and the dark mode experience should feel especially polished.

## 8. Accessibility

Accessibility is part of the visual system.

- Maintain readable contrast in both themes.
- Keep touch targets comfortable for mobile use.
- Use semantic HTML for structure and navigation.
- Preserve keyboard focus states.
- External links should communicate their destination with accessible labels.
- Theme controls should include clear `aria-label` and pressed state behavior.
