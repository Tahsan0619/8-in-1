# Healthcare / Hospital — Design System

> Calming, trust-first aesthetic with soft blues and greens. Accessibility is paramount.

---

## Colour Palette

### Light Mode

| Token | Hex | Role |
|-------|-----|------|
| `--color-primary` | `#0284C7` | Primary actions, links, active states (Sky Blue) |
| `--color-primary-light` | `#E0F2FE` | Primary tinted backgrounds |
| `--color-primary-dark` | `#0369A1` | Hover / pressed states |
| `--color-secondary` | `#059669` | Success, health indicators, positive (Emerald) |
| `--color-secondary-light` | `#D1FAE5` | Secondary tinted backgrounds |
| `--color-accent` | `#7C3AED` | Specialty highlights, premium badges (Violet) |
| `--color-danger` | `#DC2626` | Errors, emergency, cancelled, destructive |
| `--color-danger-light` | `#FEE2E2` | Danger backgrounds |
| `--color-warning` | `#D97706` | Warnings, pending states |
| `--color-warning-light` | `#FEF3C7` | Warning backgrounds |
| `--color-info` | `#2563EB` | Info badges, completed states |
| `--color-info-light` | `#DBEAFE` | Info backgrounds |
| `--color-bg` | `#F8FAFC` | Page background |
| `--color-surface` | `#FFFFFF` | Cards, panels |
| `--color-surface-alt` | `#F1F5F9` | Sidebar, secondary surfaces |
| `--color-border` | `#E2E8F0` | Borders, dividers |
| `--color-text` | `#0F172A` | Primary text |
| `--color-text-secondary` | `#64748B` | Secondary / muted text |
| `--color-text-inverse` | `#FFFFFF` | Text on filled backgrounds |

### Dark Mode

| Token | Hex | Role |
|-------|-----|------|
| `--color-primary` | `#38BDF8` | Primary (lighter sky) |
| `--color-primary-light` | `#0C4A6E` | Primary tinted backgrounds |
| `--color-primary-dark` | `#7DD3FC` | Hover |
| `--color-secondary` | `#34D399` | Success / health (lighter emerald) |
| `--color-secondary-light` | `#064E3B` | Secondary backgrounds |
| `--color-accent` | `#A78BFA` | Specialty highlights |
| `--color-danger` | `#F87171` | Errors, emergency |
| `--color-danger-light` | `#450A0A` | Danger backgrounds |
| `--color-warning` | `#FBBF24` | Warnings |
| `--color-warning-light` | `#451A03` | Warning backgrounds |
| `--color-info` | `#60A5FA` | Info |
| `--color-info-light` | `#1E3A5F` | Info backgrounds |
| `--color-bg` | `#0F172A` | Page background |
| `--color-surface` | `#1E293B` | Cards, panels |
| `--color-surface-alt` | `#334155` | Sidebar, secondary surfaces |
| `--color-border` | `#334155` | Borders |
| `--color-text` | `#F1F5F9` | Primary text |
| `--color-text-secondary` | `#94A3B8` | Muted text |
| `--color-text-inverse` | `#0F172A` | Text on light surfaces |

---

## Typography

| Element | Font | Weight | Size | Line Height |
|---------|------|--------|------|-------------|
| **Display** | Plus Jakarta Sans | 800 | 3rem (48px) | 1.1 |
| **H1** | Plus Jakarta Sans | 700 | 2.25rem (36px) | 1.2 |
| **H2** | Plus Jakarta Sans | 700 | 1.875rem (30px) | 1.25 |
| **H3** | Plus Jakarta Sans | 600 | 1.5rem (24px) | 1.3 |
| **H4** | Plus Jakarta Sans | 600 | 1.25rem (20px) | 1.35 |
| **Body** | Inter | 400 | 1rem (16px) | 1.6 |
| **Body Small** | Inter | 400 | 0.875rem (14px) | 1.5 |
| **Caption** | Inter | 500 | 0.75rem (12px) | 1.4 |
| **Button** | Inter | 600 | 0.875rem (14px) | 1 |
| **Badge** | Inter | 600 | 0.75rem (12px) | 1 |
| **Mono** | JetBrains Mono | 400 | 0.875rem (14px) | 1.5 |

**Font Loading**

```
Plus Jakarta Sans: 600, 700, 800  (Google Fonts)
Inter: 400, 500, 600              (Google Fonts)
JetBrains Mono: 400               (Google Fonts — code/data only)
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
| `--radius-sm` | 0.375rem (6px) | Badges, small buttons |
| `--radius-md` | 0.5rem (8px) | Inputs, cards |
| `--radius-lg` | 0.75rem (12px) | Modals, panels |
| `--radius-xl` | 1rem (16px) | Dialogs, feature cards |
| `--radius-full` | 9999px | Avatars, pills |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)` | Cards |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.06)` | Overlays |
| `--shadow-sticky` | `0 2px 8px rgba(0,0,0,0.08)` | Sticky header |

---

## Layout Tokens

| Token | Value |
|-------|-------|
| `--container-max` | 1280px |
| `--container-padding` | 1.5rem (24px) |
| `--header-height` | 64px |
| `--sidebar-width` | 240px |
| `--sidebar-collapsed` | 64px |
| `--grid-gap` | 1.5rem (24px) |
| `--section-gap` | 4rem (64px) |

---

## Component Tokens

### Buttons

| Token | Value |
|-------|-------|
| `--btn-height` | 40px |
| `--btn-height-sm` | 32px |
| `--btn-height-lg` | 48px |
| `--btn-padding-x` | 1.25rem (20px) |
| `--btn-radius` | var(--radius-md) |
| `--btn-font` | 600 0.875rem Inter |

**Button Variants**

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| Primary | `--color-primary` | white | none | `--color-primary-dark` |
| Secondary | transparent | `--color-primary` | `--color-primary` | primary at 5% opacity |
| Danger | `--color-danger` | white | none | darken 10% |
| Emergency | `#DC2626` | white | none | `#B91C1C` — always visible, pulsing dot |
| Ghost | transparent | `--color-text` | none | surface-alt bg |
| Success | `--color-secondary` | white | none | darken 10% |

### Cards

| Token | Value |
|-------|-------|
| `--card-padding` | 1.5rem (24px) |
| `--card-radius` | var(--radius-lg) |
| `--card-shadow` | var(--shadow-md) |
| `--card-hover-shadow` | var(--shadow-lg) |
| `--card-hover-translate` | translateY(-2px) |
| `--card-border` | 1px solid var(--color-border) |

### Inputs / Forms

| Token | Value |
|-------|-------|
| `--input-height` | 44px |
| `--input-padding` | 0.75rem 1rem |
| `--input-radius` | var(--radius-md) |
| `--input-border` | 1px solid var(--color-border) |
| `--input-focus-ring` | 0 0 0 3px rgba(2, 132, 199, 0.15) |
| `--input-error-ring` | 0 0 0 3px rgba(220, 38, 38, 0.15) |

### Status Colors

| Status | Background | Text | Dot |
|--------|-----------|------|-----|
| Confirmed | `#D1FAE5` | `#065F46` | `#10B981` |
| Pending | `#FEF3C7` | `#92400E` | `#F59E0B` |
| Cancelled | `#FEE2E2` | `#991B1B` | `#EF4444` |
| Completed | `#DBEAFE` | `#1E40AF` | `#3B82F6` |
| Active | `#D1FAE5` | `#065F46` | `#10B981` |
| Critical | `#FEE2E2` | `#991B1B` | `#EF4444` |
| Review | `#FEF3C7` | `#92400E` | `#F59E0B` |

---

## Motion & Animation

| Animation | Duration | Easing | Usage |
|-----------|----------|--------|-------|
| Hover lift | 200ms | ease | Cards, buttons |
| Modal open | 300ms | ease-out | Modal entry |
| Modal close | 200ms | ease-in | Modal exit |
| Slide drawer | 300ms | cubic-bezier(0.4,0,0.2,1) | Sidebar, cart |
| Toast enter | 300ms | ease-out | Slide in from top-right |
| Toast exit | 200ms | ease-in | Fade + slide out |
| Tab switch | 200ms | ease | Tab content transition |
| Skeleton pulse | 1.5s | ease-in-out infinite | Loading skeleton |
| Count-up | 2s | ease-out | StatCounter numbers |
| Progress bar | 500ms | ease | Wizard step indicator |
| Page transition | 150ms | ease | Content fade |
| Pulse dot | 2s | ease-in-out infinite | Emergency button, status dots |

---

## Breakpoints

| Name | Width | Layout Changes |
|------|-------|----------------|
| `--bp-sm` | 640px | Stack cards single column |
| `--bp-md` | 768px | Sidebar collapses; 2-col grid |
| `--bp-lg` | 1024px | Sidebar auto-shows; 3-col grid |
| `--bp-xl` | 1280px | Max container width reached |

---

## Accessibility Requirements

| Requirement | Standard |
|------------|----------|
| Contrast ratio | WCAG AA (4.5:1 text, 3:1 large text) |
| Focus indicators | 3px ring, `--color-primary` at 25% opacity |
| Keyboard nav | Full tab navigation, arrow keys in grids |
| ARIA labels | All interactive elements, status badges, icons |
| Reduced motion | `prefers-reduced-motion` disables all animations |
| Screen reader | Semantic HTML, landmark roles, live regions for toasts |
| Color-blind safe | Status uses icons + text, not color alone |
