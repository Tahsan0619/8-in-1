# E-Commerce — Design System

## Brand Identity
Modern, clean, trustworthy — a blend of luxury editorial (Mr Porter) and accessible commerce (Everlane). The store should feel premium without being pretentious.

---

## Color Palette

### Light Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#FAFAFA` | Page background |
| `--color-surface` | `#FFFFFF` | Cards, modals, drawers |
| `--color-surface-alt` | `#F5F5F5` | Section backgrounds, hover states |
| `--color-text-primary` | `#1A1A1A` | Headlines, body text |
| `--color-text-secondary` | `#6B7280` | Captions, meta info |
| `--color-text-muted` | `#9CA3AF` | Placeholders, disabled |
| `--color-accent` | `#E63946` | Sale badges, CTA buttons, price highlights |
| `--color-accent-hover` | `#C1121F` | Accent button hover |
| `--color-primary` | `#111827` | Primary buttons (Add to cart, Buy now) |
| `--color-primary-hover` | `#1F2937` | Primary hover |
| `--color-success` | `#059669` | In stock, order confirmed |
| `--color-warning` | `#D97706` | Low stock, pending |
| `--color-error` | `#DC2626` | Out of stock, form errors |
| `--color-border` | `#E5E7EB` | Card borders, dividers |
| `--color-border-strong` | `#D1D5DB` | Input borders |

### Dark Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0F0F0F` | Page background |
| `--color-surface` | `#1A1A1A` | Cards, modals |
| `--color-surface-alt` | `#252525` | Section backgrounds |
| `--color-text-primary` | `#F9FAFB` | Headlines, body |
| `--color-text-secondary` | `#9CA3AF` | Meta info |
| `--color-border` | `#2D2D2D` | Borders |
| `--color-border-strong` | `#404040` | Input borders |

---

## Typography

| Element | Font | Weight | Size | Line Height |
|---|---|---|---|---|
| Logo / Brand | `'Instrument Sans', sans-serif` | 700 | 24px | 1.2 |
| H1 (Hero) | `'Inter', sans-serif` | 700 | 48px / 36px mobile | 1.15 |
| H2 (Section) | `'Inter', sans-serif` | 600 | 32px / 26px mobile | 1.25 |
| H3 (Card Title) | `'Inter', sans-serif` | 600 | 18px | 1.3 |
| Body | `'Inter', sans-serif` | 400 | 15px | 1.6 |
| Caption | `'Inter', sans-serif` | 400 | 13px | 1.4 |
| Price | `'Inter', sans-serif` | 700 | 20px | 1.2 |
| Price (old) | `'Inter', sans-serif` | 400 | 14px | 1.2 |
| Button | `'Inter', sans-serif` | 600 | 14px | 1 |
| Badge | `'Inter', sans-serif` | 600 | 11px | 1 |

**Font Stack:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

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
```

---

## Border Radius
```
--radius-sm: 4px     (badges, tags)
--radius-md: 8px     (buttons, inputs)
--radius-lg: 12px    (cards, modals)
--radius-xl: 16px    (featured cards)
--radius-full: 9999px (avatars, pills)
```

---

## Shadows
```
--shadow-sm: 0 1px 2px rgba(0,0,0,0.04)
--shadow-md: 0 4px 12px rgba(0,0,0,0.06)
--shadow-lg: 0 8px 24px rgba(0,0,0,0.08)
--shadow-xl: 0 16px 48px rgba(0,0,0,0.10)
--shadow-inner: inset 0 1px 3px rgba(0,0,0,0.06)
```

---

## Grid System
- **Container max-width:** 1280px
- **Gutter:** 24px (mobile 16px)
- **Product grid:** 4 columns desktop → 3 tablet → 2 mobile
- **Admin grid:** 12-column CSS Grid

---

## Component Tokens

### Buttons
| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `--color-primary` | white | none | darken 10% |
| Secondary | transparent | `--color-primary` | `--color-border-strong` | surface-alt bg |
| Accent | `--color-accent` | white | none | accent-hover |
| Ghost | transparent | `--color-text-secondary` | none | surface-alt bg |

**Button sizing:**
- Small: 32px height, 12px padding-x
- Medium: 40px height, 20px padding-x
- Large: 48px height, 28px padding-x

### Inputs
- Height: 44px
- Padding: 0 14px
- Border: 1px solid `--color-border-strong`
- Focus: 2px solid `--color-primary`, shadow ring
- Error: border `--color-error`, subtle red bg tint

### Cards
- Background: `--color-surface`
- Border: 1px solid `--color-border`
- Radius: `--radius-lg`
- Hover: shadow-md, translate-y -2px (products only)
- Transition: 200ms ease

---

## Motion / Animation
```
--transition-fast: 150ms ease
--transition-base: 200ms ease
--transition-slow: 300ms ease
--transition-spring: 400ms cubic-bezier(0.34, 1.56, 0.64, 1)
```

- **Page transitions:** fade + slide-up (200ms)
- **Cart drawer:** slide-in from right (300ms ease-out)
- **Skeleton pulse:** 1.5s infinite ease-in-out
- **Toast:** slide-in from top-right, auto-dismiss 3s
- **Hover lift on product cards:** translateY(-4px) + shadow-lg
- **Image zoom on product page:** CSS transform scale on hover container

---

## Iconography
- **Style:** Outlined, 1.5px stroke
- **Library:** Lucide Icons (or custom SVG matching that style)
- **Sizes:** 16px (inline), 20px (buttons), 24px (nav), 32px (empty states)
- **Color:** inherits text color via `currentColor`

---

## Responsive Breakpoints
```
--bp-sm: 640px
--bp-md: 768px
--bp-lg: 1024px
--bp-xl: 1280px
--bp-2xl: 1536px
```

---

## Design References (Mood Board)
- **Everlane** — Clean product cards, whitespace, minimalist nav
- **Glossier** — Playful accents, approachable luxury
- **Apple Store** — Product hero sections, large imagery
- **Mr Porter** — Editorial product layouts, typography
- **Shopify Dawn theme** — Modern e-commerce patterns
- **Vercel** — Dark mode execution, subtle gradients
- **Linear** — Toast notifications, skeleton loading patterns
