# Restaurant & Food Ordering — Design System

> Warm, appetizing aesthetic with rich earth tones and vibrant food-inspired accents.

---

## Colour Palette

### Light Mode

| Token | Hex | Role |
|-------|-----|------|
| `--color-primary` | `#C2410C` | Primary actions, CTAs (Burnt Orange) |
| `--color-primary-light` | `#FFF7ED` | Primary tinted backgrounds |
| `--color-primary-dark` | `#9A3412` | Hover / pressed states |
| `--color-secondary` | `#15803D` | Success, available, vegetarian badges (Green) |
| `--color-secondary-light` | `#DCFCE7` | Secondary backgrounds |
| `--color-accent` | `#B45309` | Warm accent, highlights (Amber) |
| `--color-accent-light` | `#FFFBEB` | Accent backgrounds |
| `--color-danger` | `#DC2626` | Errors, spicy indicator, cancelled |
| `--color-danger-light` | `#FEE2E2` | Danger backgrounds |
| `--color-warning` | `#D97706` | Warnings, pending states |
| `--color-warning-light` | `#FEF3C7` | Warning backgrounds |
| `--color-info` | `#2563EB` | Info badges |
| `--color-info-light` | `#DBEAFE` | Info backgrounds |
| `--color-bg` | `#FFFBF5` | Page background (warm white) |
| `--color-surface` | `#FFFFFF` | Cards, panels |
| `--color-surface-alt` | `#FEF3EB` | Secondary surfaces, sidebar |
| `--color-border` | `#E7D5C4` | Borders (warm gray) |
| `--color-text` | `#1C1210` | Primary text (warm black) |
| `--color-text-secondary` | `#78716C` | Muted text |
| `--color-text-inverse` | `#FFFFFF` | Text on filled backgrounds |

### Dark Mode

| Token | Hex | Role |
|-------|-----|------|
| `--color-primary` | `#FB923C` | Primary (lighter orange) |
| `--color-primary-light` | `#431407` | Primary backgrounds |
| `--color-primary-dark` | `#FDBA74` | Hover |
| `--color-secondary` | `#4ADE80` | Success / available |
| `--color-secondary-light` | `#052E16` | Secondary backgrounds |
| `--color-accent` | `#FCD34D` | Warm accent |
| `--color-accent-light` | `#451A03` | Accent backgrounds |
| `--color-danger` | `#F87171` | Errors, spicy |
| `--color-danger-light` | `#450A0A` | Danger backgrounds |
| `--color-warning` | `#FBBF24` | Warnings |
| `--color-warning-light` | `#451A03` | Warning backgrounds |
| `--color-info` | `#60A5FA` | Info |
| `--color-info-light` | `#1E3A5F` | Info backgrounds |
| `--color-bg` | `#1A1110` | Page background (warm dark) |
| `--color-surface` | `#292220` | Cards |
| `--color-surface-alt` | `#3D3230` | Sidebar, secondary surfaces |
| `--color-border` | `#4A3F3C` | Borders |
| `--color-text` | `#F5F0EB` | Primary text |
| `--color-text-secondary` | `#A8A29E` | Muted text |
| `--color-text-inverse` | `#1A1110` | Text on light surfaces |

---

## Typography

| Element | Font | Weight | Size | Line Height |
|---------|------|--------|------|-------------|
| **Display** | Playfair Display | 700 | 3.5rem (56px) | 1.1 |
| **H1** | Playfair Display | 700 | 2.5rem (40px) | 1.2 |
| **H2** | Playfair Display | 600 | 2rem (32px) | 1.25 |
| **H3** | Inter | 600 | 1.5rem (24px) | 1.3 |
| **H4** | Inter | 600 | 1.25rem (20px) | 1.35 |
| **Body** | Inter | 400 | 1rem (16px) | 1.6 |
| **Body Small** | Inter | 400 | 0.875rem (14px) | 1.5 |
| **Caption** | Inter | 500 | 0.75rem (12px) | 1.4 |
| **Price** | Inter | 700 | 1.125rem (18px) | 1 |
| **Button** | Inter | 600 | 0.875rem (14px) | 1 |
| **Badge** | Inter | 600 | 0.75rem (12px) | 1 |

**Font Loading**

```
Playfair Display: 600, 700       (Google Fonts — headings, display)
Inter: 400, 500, 600, 700        (Google Fonts — body, UI)
```

---

## Spacing Scale

| Token | Value |
|-------|-------|
| `--space-1` | 0.25rem (4px) |
| `--space-2` | 0.5rem (8px) |
| `--space-3` | 0.75rem (12px) |
| `--space-4` | 1rem (16px) |
| `--space-5` | 1.25rem (20px) |
| `--space-6` | 1.5rem (24px) |
| `--space-8` | 2rem (32px) |
| `--space-10` | 2.5rem (40px) |
| `--space-12` | 3rem (48px) |
| `--space-16` | 4rem (64px) |
| `--space-20` | 5rem (80px) |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 0.375rem (6px) | Badges, small elements |
| `--radius-md` | 0.5rem (8px) | Inputs, buttons |
| `--radius-lg` | 0.75rem (12px) | Cards |
| `--radius-xl` | 1rem (16px) | Modals, feature cards |
| `--radius-2xl` | 1.5rem (24px) | Hero sections, image containers |
| `--radius-full` | 9999px | Avatars, pills, quantity buttons |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(28,18,16,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px -1px rgba(28,18,16,0.07), 0 2px 4px -2px rgba(28,18,16,0.05)` | Cards |
| `--shadow-lg` | `0 10px 15px -3px rgba(28,18,16,0.08), 0 4px 6px -4px rgba(28,18,16,0.04)` | Modals |
| `--shadow-xl` | `0 20px 25px -5px rgba(28,18,16,0.1), 0 8px 10px -6px rgba(28,18,16,0.06)` | Lightbox |
| `--shadow-warm` | `0 4px 12px rgba(194,65,12,0.15)` | CTA buttons hover |
| `--shadow-sticky` | `0 2px 8px rgba(28,18,16,0.08)` | Sticky header |

---

## Layout Tokens

| Token | Value |
|-------|-------|
| `--container-max` | 1280px |
| `--container-padding` | 1.5rem (24px) |
| `--header-height` | 72px |
| `--sidebar-width` | 240px |
| `--sidebar-collapsed` | 64px |
| `--grid-gap` | 1.5rem (24px) |
| `--section-gap` | 5rem (80px) |
| `--hero-height` | 65vh |

---

## Component Tokens

### Buttons

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| Primary | `--color-primary` | white | none | `--color-primary-dark` + warm shadow |
| Secondary | transparent | `--color-primary` | `--color-primary` | primary at 5% bg |
| Success | `--color-secondary` | white | none | darken 10% |
| Danger | `--color-danger` | white | none | darken 10% |
| Ghost | transparent | `--color-text` | none | surface-alt bg |

### Cards

| Token | Value |
|-------|-------|
| `--card-padding` | 0 (image flush) / 1.25rem (content area) |
| `--card-radius` | var(--radius-lg) |
| `--card-shadow` | var(--shadow-md) |
| `--card-hover-shadow` | var(--shadow-lg) |
| `--card-hover-translate` | translateY(-4px) |
| `--card-image-ratio` | 3 / 2 |

### Inputs / Forms

| Token | Value |
|-------|-------|
| `--input-height` | 44px |
| `--input-padding` | 0.75rem 1rem |
| `--input-radius` | var(--radius-md) |
| `--input-border` | 1px solid var(--color-border) |
| `--input-focus-ring` | 0 0 0 3px rgba(194, 65, 12, 0.15) |

### Status Colors

| Status | Background | Text | Usage |
|--------|-----------|------|-------|
| Preparing | `#FEF3C7` | `#92400E` | Order in kitchen |
| Ready | `#DBEAFE` | `#1E40AF` | Ready for pickup |
| Delivered | `#DCFCE7` | `#166534` | Order delivered |
| Cancelled | `#FEE2E2` | `#991B1B` | Cancelled orders |
| Available | `#DCFCE7` | `#166534` | Tables |
| Booked | `#FEE2E2` | `#991B1B` | Tables |
| Selected | `#FEF3C7` | `#92400E` | Tables |

---

## Motion & Animation

| Animation | Duration | Easing | Usage |
|-----------|----------|--------|-------|
| Card hover | 250ms | ease | DishCards lift + shadow |
| Image zoom | 300ms | ease | Food photo hover |
| Modal open | 300ms | ease-out | Modals, lightbox |
| Modal close | 200ms | ease-in | Modal exit |
| Slide drawer | 300ms | cubic-bezier(0.4,0,0.2,1) | Sidebar, mobile menu |
| Toast enter | 300ms | ease-out | Notifications |
| Cart badge | 300ms | cubic-bezier(0.68,-0.55,0.27,1.55) | Bounce on add |
| Timeline fill | 500ms | ease | Order status progress |
| Pulse | 2s | ease-in-out infinite | Current order step |
| Count-up | 2s | ease-out | Stat counters |
| Skeleton | 1.5s | ease-in-out infinite | Loading shimmer |

---

## Breakpoints

| Name | Width | Layout Changes |
|------|-------|----------------|
| `--bp-sm` | 640px | Single column cards |
| `--bp-md` | 768px | 2-column grid; sticky categories |
| `--bp-lg` | 1024px | 3-4 column grid; sidebar shows |
| `--bp-xl` | 1280px | Max container; dish detail 2-col |

---

## Special Design Notes

- **Food photography** is the star — images should be large, high-quality, and warm-toned
- **Warm colour temperature** throughout — avoid cold grays; use warm neutrals
- **Playfair Display** for headings gives an upscale restaurant feel
- **Price typography** is always bold, slightly larger, in primary color
- **Spice indicators** use 🌶 emoji with count (🌶 mild, 🌶🌶 medium, 🌶🌶🌶 hot)
