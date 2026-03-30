# Business / Corporate — Design System

## Brand Identity
Authoritative yet approachable. The design communicates trust, competence, and forward thinking. Inspired by Stripe's technical elegance, Linear's spatial clarity, and the editorial weight of top consultancy firms.

---

## Color Palette

### Light Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-surface` | `#F8F9FC` | Section backgrounds, cards |
| `--color-surface-alt` | `#F0F2F5` | Alternate sections |
| `--color-text-primary` | `#0F172A` | Headlines |
| `--color-text-body` | `#334155` | Body paragraphs |
| `--color-text-secondary` | `#64748B` | Captions, meta |
| `--color-text-muted` | `#94A3B8` | Placeholders |
| `--color-accent` | `#2563EB` | CTAs, links, active states |
| `--color-accent-hover` | `#1D4ED8` | Accent hover |
| `--color-accent-light` | `#EFF6FF` | Accent backgrounds |
| `--color-secondary` | `#7C3AED` | Gradient endpoint, highlight |
| `--color-success` | `#10B981` | Positive stats |
| `--color-border` | `#E2E8F0` | Card borders, dividers |
| `--color-border-light` | `#F1F5F9` | Subtle separators |

### Dark Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0B1120` | Page background |
| `--color-surface` | `#131B2E` | Cards, sections |
| `--color-surface-alt` | `#1A2340` | Alternate surfaces |
| `--color-text-primary` | `#F1F5F9` | Headlines |
| `--color-text-body` | `#CBD5E1` | Body |
| `--color-accent` | `#60A5FA` | Links, CTAs |
| `--color-border` | `#1E293B` | Borders |

---

## Typography

| Element | Font | Weight | Size | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 (Hero) | `'Plus Jakarta Sans'` | 800 | 56px / 40px mob | 1.1 | -0.02em |
| H2 (Section) | `'Plus Jakarta Sans'` | 700 | 40px / 30px mob | 1.2 | -0.01em |
| H3 (Card) | `'Plus Jakarta Sans'` | 600 | 24px / 20px mob | 1.3 | 0 |
| H4 (Sub) | `'Plus Jakarta Sans'` | 600 | 18px | 1.4 | 0 |
| Body | `'Inter'` | 400 | 16px | 1.7 | 0 |
| Body Large | `'Inter'` | 400 | 18px | 1.7 | 0 |
| Caption | `'Inter'` | 500 | 13px | 1.5 | 0.02em |
| Button | `'Inter'` | 600 | 15px | 1 | 0.01em |
| Nav Link | `'Inter'` | 500 | 15px | 1 | 0 |
| Overline | `'Inter'` | 700 | 12px | 1.4 | 0.08em |

**Font Stack:** `'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

---

## Spacing Scale
```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px
--space-32: 128px
```

Section vertical padding: `--space-24` (96px) desktop, `--space-16` (64px) mobile

---

## Border Radius
```
--radius-sm: 6px      (badges, small elements)
--radius-md: 10px     (buttons, inputs)
--radius-lg: 16px     (cards)
--radius-xl: 24px     (featured cards, CTA sections)
--radius-full: 9999px (avatars, pills)
```

---

## Shadows
```
--shadow-xs: 0 1px 2px rgba(0,0,0,0.03)
--shadow-sm: 0 2px 8px rgba(0,0,0,0.04)
--shadow-md: 0 4px 16px rgba(0,0,0,0.06)
--shadow-lg: 0 8px 30px rgba(0,0,0,0.08)
--shadow-xl: 0 20px 60px rgba(0,0,0,0.10)
--shadow-glow: 0 0 40px rgba(37,99,235,0.15)  (accent glow for CTAs)
```

---

## Grid
- **Container:** 1200px max-width, centered
- **Gutter:** 32px (20px mobile)
- **Sections:** full-width backgrounds, content within container
- **Service cards:** 3 columns → 2 → 1
- **Team grid:** 4 columns → 2 → 1
- **Blog grid:** 3 columns → 2 → 1

---

## Component Tokens

### Buttons
| Variant | Style |
|---|---|
| Primary | Accent bg, white text, rounded-md, hover: darken, subtle shadow on hover |
| Secondary | Transparent bg, accent text, accent border, hover: accent-light bg |
| Ghost | No border, text-secondary, hover: surface bg |
| Large CTA | Primary + larger padding (16px 32px), text 16px |

### Cards
- Background: surface
- Border: 1px solid border
- Radius: radius-lg
- Padding: 32px (24px mobile)
- Hover: shadow-md, translate-y -2px (service/portfolio cards)
- Transition: 250ms ease

### Inputs
- Height: 48px
- Padding: 0 16px
- Border: 1px solid border
- Radius: radius-md
- Focus: accent border, shadow ring (0 0 0 3px accent-light)
- Label: caption style, above input

---

## Motion / Animation

### Scroll Reveals
- **Fade up:** opacity 0 → 1, translateY 30px → 0
- **Stagger:** children animate 100ms apart
- **Threshold:** trigger at 15% visible
- **Duration:** 600ms
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1)
- **Once:** animate only on first scroll into view

### Stats Counter
- Count up animation from 0 to target value
- Duration: 2 seconds
- Easing: ease-out
- Triggered when section enters viewport

### Transitions
```
--transition-fast: 150ms ease
--transition-base: 250ms ease
--transition-slow: 400ms ease
--transition-smooth: 600ms cubic-bezier(0.16, 1, 0.3, 1)
```

### Page Loader
- Thin progress bar at top of viewport (accent color)
- Fade out on complete

---

## Iconography
- **Style:** Solid with subtle rounded edges
- **Library:** Phosphor Icons or custom SVG
- **Sizes:** 20px (inline), 24px (cards), 40px (service icons), 64px (feature icons)
- **Service icons:** Contained in 64px circle with accent-light background

---

## Responsive Breakpoints
```
--bp-sm: 640px
--bp-md: 768px
--bp-lg: 1024px
--bp-xl: 1280px
```

---

## Design References
- **Stripe** — Gradient backgrounds, precise typography, authority
- **Linear** — Clean spatial design, smooth animations
- **Vercel** — Dark mode execution, developer-focused elegance
- **Mailchimp** — Warm brand voice, approachable CTAs
- **McKinsey Digital** — Corporate authority, case study layouts
- **Basecamp** — Honest messaging, clear pricing
- **Notion** — Clean typography, whitespace usage
