# Real Estate Platform — Design System

## Brand Identity
Trustworthy, aspirational, premium — inspired by **Compass** and **Zillow** with a clean, photography-forward aesthetic. Feels like a high-end agency with the accessibility of a tech platform.

---

## Color Palette

### Light Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#FAFBFC` | Page background |
| `--color-surface` | `#FFFFFF` | Cards, modals, panels |
| `--color-surface-alt` | `#F3F5F7` | Section backgrounds |
| `--color-text-primary` | `#1A202C` | Headlines, property titles |
| `--color-text-secondary` | `#64748B` | Descriptions, meta |
| `--color-text-muted` | `#94A3B8` | Placeholders |
| `--color-accent` | `#0F766E` | CTAs, links, highlights (teal) |
| `--color-accent-hover` | `#0D6560` | Accent hover |
| `--color-accent-muted` | `rgba(15,118,110,0.1)` | Accent tint backgrounds |
| `--color-price` | `#1E40AF` | Price display (blue) |
| `--color-success` | `#16A34A` | Available, verified |
| `--color-warning` | `#D97706` | Reduced, price drop |
| `--color-error` | `#DC2626` | Unavailable, errors |
| `--color-border` | `#E2E8F0` | Card borders |
| `--color-border-strong` | `#CBD5E1` | Input borders |

### Dark Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0F172A` | Page background |
| `--color-surface` | `#1E293B` | Cards, panels |
| `--color-surface-alt` | `#334155` | Elevated surfaces |
| `--color-text-primary` | `#F1F5F9` | Headings |
| `--color-text-secondary` | `#94A3B8` | Meta |
| `--color-border` | `#334155` | Borders |

---

## Typography

| Element | Font | Weight | Size | Line Height |
|---|---|---|---|---|
| Logo | `'Plus Jakarta Sans', sans-serif` | 800 | 22px | 1.2 |
| H1 (Hero) | `'Plus Jakarta Sans', sans-serif` | 700 | 44px / 32px mobile | 1.15 |
| H2 (Section) | `'Plus Jakarta Sans', sans-serif` | 700 | 28px / 24px mobile | 1.25 |
| H3 (Property title) | `'Plus Jakarta Sans', sans-serif` | 600 | 18px | 1.3 |
| Body | `'Inter', sans-serif` | 400 | 15px | 1.6 |
| Caption | `'Inter', sans-serif` | 400 | 13px | 1.4 |
| Price (large) | `'Plus Jakarta Sans', sans-serif` | 700 | 24px | 1.2 |
| Price (card) | `'Plus Jakarta Sans', sans-serif` | 700 | 18px | 1.2 |
| Button | `'Inter', sans-serif` | 600 | 14px | 1 |
| Badge | `'Inter', sans-serif` | 600 | 11px | 1 |

**Font Stack:** `'Plus Jakarta Sans', 'Inter', -apple-system, system-ui, sans-serif`

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
```

---

## Border Radius
```
--radius-sm: 6px     (badges, tags)
--radius-md: 8px     (buttons, inputs)
--radius-lg: 12px    (cards, panels)
--radius-xl: 16px    (hero search, featured cards)
--radius-2xl: 20px   (modals)
--radius-full: 9999px (avatars, pills)
```

---

## Shadows
```
--shadow-sm: 0 1px 3px rgba(0,0,0,0.05)
--shadow-md: 0 4px 12px rgba(0,0,0,0.07)
--shadow-lg: 0 8px 24px rgba(0,0,0,0.10)
--shadow-xl: 0 16px 40px rgba(0,0,0,0.12)
--shadow-map: 0 2px 8px rgba(0,0,0,0.15)
```

---

## Layout System
- **Container max-width:** 1320px
- **Gutter:** 24px (16px mobile)
- **Property grid:** 3 columns desktop → 2 tablet → 1 mobile
- **Search page split:** 55% list / 45% map (desktop), full width toggle on mobile
- **Map height:** calc(100vh - header) on search page

---

## Component Tokens

### Buttons
| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `--color-accent` | white | none | accent-hover |
| Secondary | white | `--color-accent` | `--color-accent` | accent-muted bg |
| Ghost | transparent | `--color-text-secondary` | none | surface-alt bg |
| CTA | `--color-accent` | white | none | darken, shadow-lg |

**Sizing:** Sm: 32px, Md: 40px, Lg: 48px, XL: 52px (hero search)

### Inputs
- Height: 44px (48px hero search)
- Padding: 0 14px
- Border: 1px solid `--color-border-strong`
- Radius: `--radius-md`
- Focus: accent border + outline ring
- Background: white (dark: surface)

### Property Cards
- Background: `--color-surface`
- Border: 1px solid `--color-border`
- Radius: `--radius-lg`
- Image radius: `--radius-lg` top only
- Hover: shadow-lg, translate-y -4px
- Transition: 250ms ease

### Map Markers
- Background: white
- Text: `--color-text-primary` (price)
- Border: 2px solid `--color-accent`
- Active: `--color-accent` bg, white text
- Radius: --radius-full
- Shadow: --shadow-map

---

## Motion / Animation
```
--transition-fast: 150ms ease
--transition-base: 200ms ease
--transition-slow: 300ms ease
--transition-map: 250ms ease-in-out
```

- **Card hover:** translateY(-4px) + shadow 250ms
- **Gallery lightbox:** fade-in 200ms + scale 0.95→1
- **Virtual tour rotate:** transform based on drag delta
- **Map markers:** fade-in 150ms on load
- **Filter panel:** slideIn from right 250ms
- **Price counter:** countUp animation 600ms
- **Skeleton pulse:** 1.5s infinite ease-in-out
