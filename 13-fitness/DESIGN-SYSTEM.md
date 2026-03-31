# Fitness & Gym — Design System

> Energetic, bold aesthetic with high-contrast colours and strong typography that motivates action.

---

## Colour Palette

### Light Mode

| Token | Hex | Role |
|-------|-----|------|
| `--color-primary` | `#7C3AED` | Primary actions, CTAs (Violet) |
| `--color-primary-light` | `#EDE9FE` | Primary tinted backgrounds |
| `--color-primary-dark` | `#6D28D9` | Hover / pressed states |
| `--color-secondary` | `#06B6D4` | Accent, info, active elements (Cyan) |
| `--color-secondary-light` | `#CFFAFE` | Secondary backgrounds |
| `--color-success` | `#16A34A` | Success, completed, low intensity |
| `--color-success-light` | `#DCFCE7` | Success backgrounds |
| `--color-danger` | `#DC2626` | Errors, high intensity, cancel |
| `--color-danger-light` | `#FEE2E2` | Danger backgrounds |
| `--color-warning` | `#EAB308` | Warnings, medium intensity, pending |
| `--color-warning-light` | `#FEF9C3` | Warning backgrounds |
| `--color-info` | `#2563EB` | Info badges |
| `--color-info-light` | `#DBEAFE` | Info backgrounds |
| `--color-streak` | `#F97316` | Streak counter, fire, energy (Orange) |
| `--color-bg` | `#F8FAFC` | Page background |
| `--color-surface` | `#FFFFFF` | Cards, panels |
| `--color-surface-alt` | `#F1F5F9` | Secondary surfaces, sidebar |
| `--color-border` | `#E2E8F0` | Borders |
| `--color-text` | `#0F172A` | Primary text |
| `--color-text-secondary` | `#64748B` | Muted text |
| `--color-text-inverse` | `#FFFFFF` | Text on filled backgrounds |

### Dark Mode

| Token | Hex | Role |
|-------|-----|------|
| `--color-primary` | `#A78BFA` | Primary (lighter violet) |
| `--color-primary-light` | `#2E1065` | Primary backgrounds |
| `--color-primary-dark` | `#C4B5FD` | Hover |
| `--color-secondary` | `#22D3EE` | Active / accent |
| `--color-secondary-light` | `#083344` | Secondary backgrounds |
| `--color-success` | `#4ADE80` | Success |
| `--color-success-light` | `#052E16` | Success backgrounds |
| `--color-danger` | `#F87171` | Errors, high intensity |
| `--color-danger-light` | `#450A0A` | Danger backgrounds |
| `--color-warning` | `#FACC15` | Warnings, medium intensity |
| `--color-warning-light` | `#422006` | Warning backgrounds |
| `--color-streak` | `#FB923C` | Streak |
| `--color-bg` | `#0F172A` | Page background |
| `--color-surface` | `#1E293B` | Cards |
| `--color-surface-alt` | `#334155` | Sidebar |
| `--color-border` | `#334155` | Borders |
| `--color-text` | `#F1F5F9` | Primary text |
| `--color-text-secondary` | `#94A3B8` | Muted text |
| `--color-text-inverse` | `#0F172A` | Text on light surfaces |

---

## Typography

| Element | Font | Weight | Size | Line Height |
|---------|------|--------|------|-------------|
| **Display** | Space Grotesk | 700 | 3.5rem (56px) | 1.1 |
| **H1** | Space Grotesk | 700 | 2.5rem (40px) | 1.15 |
| **H2** | Space Grotesk | 700 | 2rem (32px) | 1.2 |
| **H3** | Space Grotesk | 600 | 1.5rem (24px) | 1.25 |
| **H4** | Inter | 600 | 1.25rem (20px) | 1.3 |
| **Body** | Inter | 400 | 1rem (16px) | 1.6 |
| **Body Small** | Inter | 400 | 0.875rem (14px) | 1.5 |
| **Caption** | Inter | 500 | 0.75rem (12px) | 1.4 |
| **Stat Number** | Space Grotesk | 800 | 2.5rem (40px) | 1 |
| **Button** | Inter | 600 | 0.875rem (14px) | 1 |
| **Badge** | Inter | 700 | 0.6875rem (11px) | 1 |

**Font Loading**

```
Space Grotesk: 600, 700, 800   (Google Fonts — headings, stats)
Inter: 400, 500, 600, 700       (Google Fonts — body, UI)
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
| `--radius-sm` | 0.375rem (6px) | Badges |
| `--radius-md` | 0.5rem (8px) | Inputs, small cards |
| `--radius-lg` | 0.75rem (12px) | Cards, modals |
| `--radius-xl` | 1rem (16px) | Feature cards, pricing |
| `--radius-2xl` | 1.5rem (24px) | Hero content areas |
| `--radius-full` | 9999px | Avatars, pills, badges |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)` | Cards |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04)` | Modals |
| `--shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.06)` | Overlays |
| `--shadow-glow` | `0 0 20px rgba(124, 58, 237, 0.3)` | CTA buttons, achievement unlock |
| `--shadow-streak` | `0 0 15px rgba(249, 115, 22, 0.4)` | Streak counter glow |

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
| `--section-gap` | 5rem (80px) |
| `--hero-height` | 70vh |

---

## Component Tokens

### Buttons

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| Primary | `--color-primary` | white | none | `--color-primary-dark` + glow shadow |
| Secondary | transparent | `--color-primary` | `--color-primary` | primary at 5% bg |
| Accent | `--color-secondary` | white | none | darken 10% |
| Success | `--color-success` | white | none | darken 10% |
| Danger | `--color-danger` | white | none | darken 10% |
| Ghost | transparent | `--color-text` | none | surface-alt bg |

### Cards

| Token | Value |
|-------|-------|
| `--card-padding` | 1.5rem (24px) |
| `--card-radius` | var(--radius-lg) |
| `--card-shadow` | var(--shadow-md) |
| `--card-hover-shadow` | var(--shadow-lg) |
| `--card-hover-translate` | translateY(-4px) |

### Pricing Cards

| Token | Value |
|-------|-------|
| `--pricing-radius` | var(--radius-xl) |
| `--pricing-popular-scale` | 1.05 |
| `--pricing-popular-border` | 2px solid var(--color-primary) |
| `--pricing-popular-shadow` | var(--shadow-glow) |

### Inputs / Forms

| Token | Value |
|-------|-------|
| `--input-height` | 44px |
| `--input-padding` | 0.75rem 1rem |
| `--input-radius` | var(--radius-md) |
| `--input-border` | 1px solid var(--color-border) |
| `--input-focus-ring` | 0 0 0 3px rgba(124, 58, 237, 0.15) |

### Intensity Badge Colors

| Level | Background | Text |
|-------|-----------|------|
| Low | `--color-success-light` | `#166534` |
| Medium | `--color-warning-light` | `#854D0E` |
| High | `--color-danger-light` | `#991B1B` |

---

## Motion & Animation

| Animation | Duration | Easing | Usage |
|-----------|----------|--------|-------|
| Card hover | 250ms | ease | Cards lift + shadow |
| Image zoom | 300ms | ease | Class photos on hover |
| Modal open | 300ms | ease-out | Modals |
| Modal close | 200ms | ease-in | Modal exit |
| Slide drawer | 300ms | cubic-bezier(0.4,0,0.2,1) | Sidebar, mobile menu |
| Toast enter | 300ms | ease-out | Notifications |
| Count-up | 2s | ease-out | Stat counters |
| Streak pulse | 2s | ease-in-out infinite | Streak fire icon |
| Achievement unlock | 600ms | cubic-bezier(0.68,-0.55,0.27,1.55) | Badge scale bounce + glow |
| Progress bar fill | 800ms | ease-out | Goal progress, BMI gauge |
| Timer tick | 1s | linear | Workout rest timer |
| Calendar cell | 150ms | ease | Class calendar hover |
| Skeleton | 1.5s | ease-in-out infinite | Loading shimmer |

---

## Breakpoints

| Name | Width | Layout Changes |
|------|-------|----------------|
| `--bp-sm` | 640px | Single column cards |
| `--bp-md` | 768px | 2-column grid; calendar scrollable |
| `--bp-lg` | 1024px | 3-4 column grid; sidebar shows |
| `--bp-xl` | 1280px | Max container |

---

## Special Design Notes

- **Space Grotesk** for headings gives a modern, energetic feel
- **Streak counter** always uses orange with animated fire effect
- **Achievement badges** have a scale + glow animation on unlock
- **Calendar classes** are color-coded by category for quick scanning
- **Progress charts** use smooth gradients and subtle grid lines
- **Pricing "Popular" card** is visually elevated with scale, border, and shadow
- **Intensity badges** are small rounded pills using semantic colors (green/yellow/red)
