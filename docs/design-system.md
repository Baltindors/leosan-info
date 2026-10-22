# Design system

Mobile-first portfolio and blog. The visual language mixes Apple’s type and whitespace with Material’s quiet depth: one accent, high-contrast text, and cards that sit just off the page.

## Typography

Use the system sans stack. On Apple devices that is San Francisco (`SF Pro Text` via `-apple-system`). On Windows it falls through to Segoe UI. Do not load a webfont.

- Page titles: medium weight, tight tracking, about 2.25rem on a phone and larger from `md` up.
- Section labels: small, muted, medium weight.
- Body: 1rem to 1.125rem, relaxed line height, generous space between sections.
- Secondary facts (dates, locations, descriptions): muted gray, never the accent.

## Color

Colors follow `prefers-color-scheme`. There is no manual theme toggle.

| Role | Light | Dark |
| --- | --- | --- |
| Surface (`paper`) | `#ffffff` | `#000000` |
| Primary text (`ink`) | `#1d1d1f` | `#f5f5f7` |
| Secondary text (`muted`) | `#6e6e73` | `#a1a1a6` |
| Accent | `#2d4cb1` | `#9aacef` |
| Hairline | `rgb(0 0 0 / 0.08)` | `rgb(255 255 255 / 0.12)` |

The accent is the logo blue, and the only chromatic color. Light mode uses the mark’s own `#2d4cb1`. Dark mode lightens that same blue to `#9aacef` so the mark and links stay readable on black. Use it for the logo, the active nav item, organization names, and text links. Do not introduce a second brand color.

Tokens live in `src/style.css` as CSS variables, then mapped with Tailwind `@theme inline` so utilities such as `bg-paper`, `text-ink`, `text-muted`, `text-accent`, and `ring-line` follow the system theme.

## Components

Cards share `AppCard`:

- Radius `1.25rem` (`rounded-card`), with `corner-shape: squircle` where the browser supports continuous corners.
- Padding of at least `1.5rem`.
- A two-layer shadow (`shadow-card`): a tight 1px lift and a soft 24px falloff.
- A 1px hairline (`ring-line`) so the edge stays visible on pure black, where the shadow disappears.

The top bar is sticky, translucent (`bg-paper/70`), and blurred (`backdrop-blur-xl`). After the page scrolls, it also picks up `shadow-card`. Navigation labels are “Profile” and “Blog”. Below the `md` breakpoint they collapse into a hamburger button with `aria-expanded`.

Blog posts use Tailwind Typography (`prose prose-neutral dark:prose-invert`) so Markdown images stay within the column and fenced code blocks keep a readable mono treatment.

## Motion

Keep motion short and small.

- Route changes use Vue `<Transition name="page">`: fade plus an 8px upward slide, about 350ms, `mode="out-in"`.
- Sections and cards use `@vueuse/motion` `v-motion` with `visibleOnce`: start at opacity 0 and `y: 12`, then settle once they enter the viewport.
- `prefers-reduced-motion: reduce` disables the route transition. `@vueuse/motion` also respects reduced motion.

Do not add bounce, parallax, or looping animation.
