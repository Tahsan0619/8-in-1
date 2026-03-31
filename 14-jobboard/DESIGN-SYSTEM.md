# Job Board & Career Platform — Design System

> Professional, clean, trust-building aesthetic with strong hierarchy and excellent readability.

---

## Colour Palette

### Light Mode

| Token | Hex | Role |
|-------|-----|------|
| `--color-primary` | `#2563EB` | Primary actions, links, active (Blue) |
| `--color-primary-light` | `#DBEAFE` | Primary tinted backgrounds |
| `--color-primary-dark` | `#1D4ED8` | Hover / pressed |
| `--color-secondary` | `#7C3AED` | Accent, highlights (Violet) |
| `--color-secondary-light` | `#EDE9FE` | Secondary backgrounds |
| `--color-success` | `#16A34A` | Success, hired, offer |
| `--color-success-light` | `#DCFCE7` | Success backgrounds |
| `--color-danger` | `#DC2626` | Errors, rejected |
| `--color-danger-light` | `#FEE2E2` | Danger backgrounds |
| `--color-warning` | `#D97706` | Warnings, interview, pending |
| `--color-warning-light` | `#FEF3C7` | Warning backgrounds |
| `--color-info` | `#0891B2` | Info, screening (Cyan) |
| `--color-info-light` | `#CFFAFE` | Info backgrounds |
| `--color-bg` | `#F8FAFC` | Page background |
| `--color-surface` | `#FFFFFF` | Cards, panels |
| `--color-surface-alt` | `#F1F5F9` | Sidebar, secondary surfaces |
| `--color-border` | `#E2E8F0` | Borders, dividers |
| `--color-text` | `#0F172A` | Primary text |
| `--color-text-secondary` | `#64748B` | Muted text |
| `--color-text-inverse` | `#FFFFFF` | Text on filled backgrounds |

### Dark Mode

| Token | Hex | Role |
|-------|-----|------|
| `--color-primary` | `#60A5FA` | Primary (lighter blue) |
| `--color-primary-light` | `#1E3A5F` | Primary backgrounds |
| `--color-primary-dark` | `#93C5FD` | Hover |
| `--color-secondary` | `#A78BFA` | Accent |
| `--color-secondary-light` | `#2E1065` | Secondary backgrounds |
| `--color-success` | `#4ADE80` | Success |
| `--color-success-light` | `#052E16` | Success backgrounds |
| `--color-danger` | `#F87171` | Errors |
| `--color-danger-light` | `#450A0A` | Danger backgrounds |
| `--color-warning` | `#FBBF24` | Warnings |
| `--color-warning-light` | `#451A03` | Warning backgrounds |
| `--color-info` | `#22D3EE` | Info |
| `--color-info-light` | `#083344` | Info backgrounds |
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
| **Display** | Inter | 800 | 3rem (48px) | 1.1 |
| **H1** | Inter | 700 | 2.25rem (36px) | 1.2 |
| **H2** | Inter | 700 | 1.875rem (30px) | 1.25 |
| **H3** | Inter | 600 | 1.5rem (24px) | 1.3 |
| **H4** | Inter | 600 | 1.25rem (20px) | 1.35 |
| **Body** | Inter | 400 | 1rem (16px) | 1.6 |
| **Body Small** | Inter | 400 | 0.875rem (14px) | 1.5 |
| **Caption** | Inter | 500 | 0.75rem (12px) | 1.4 |
| **Salary** | Inter | 700 | 1.125rem (18px) | 1 |
| **Button** | Inter | 600 | 0.875rem (14px) | 1 |
| **Badge** | Inter | 600 | 0.75rem (12px) | 1 |
| **Tag** | Inter | 500 | 0.75rem (12px) | 1 |

**Font Loading**

```
Inter: 400, 500, 600, 700, 800   (Google Fonts — all text)
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
| `--radius-sm` | 0.375rem (6px) | Tags, badges |
| `--radius-md` | 0.5rem (8px) | Inputs, buttons, small cards |
| `--radius-lg` | 0.75rem (12px) | Cards, panels |
| `--radius-xl` | 1rem (16px) | Modals, feature cards |
| `--radius-full` | 9999px | Avatars, pills |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)` | Cards |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.06)` | Overlays |
| `--shadow-sticky` | `0 2px 8px rgba(0,0,0,0.08)` | Sticky header, sidebar |

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
| `--job-detail-sidebar` | 320px |

---

## Component Tokens

### Buttons

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| Primary | `--color-primary` | white | none | `--color-primary-dark` |
| Secondary | transparent | `--color-primary` | `--color-primary` | primary at 5% bg |
| Accent | `--color-secondary` | white | none | darken 10% |
| Success | `--color-success` | white | none | darken 10% |
| Danger | `--color-danger` | white | none | darken 10% |
| Ghost | transparent | `--color-text` | none | surface-alt bg |
| Save (heart) | transparent | `--color-text-secondary` | none | `--color-danger` (filled) |

### Cards

| Token | Value |
|-------|-------|
| `--card-padding` | 1.5rem (24px) |
| `--card-radius` | var(--radius-lg) |
| `--card-shadow` | var(--shadow-sm) |
| `--card-border` | 1px solid var(--color-border) |
| `--card-hover-border` | var(--color-primary) |
| `--card-hover-bg` | var(--color-primary-light) at 30% opacity |

### Job Cards (List Style)

| Token | Value |
|-------|-------|
| `--job-card-padding` | 1.25rem (20px) |
| `--job-card-hover-border-left` | 3px solid var(--color-primary) |

### Inputs / Forms

| Token | Value |
|-------|-------|
| `--input-height` | 44px |
| `--input-padding` | 0.75rem 1rem |
| `--input-radius` | var(--radius-md) |
| `--input-border` | 1px solid var(--color-border) |
| `--input-focus-ring` | 0 0 0 3px rgba(37, 99, 235, 0.15) |

### Skill Tags

| Token | Value |
|-------|-------|
| `--tag-padding` | 0.25rem 0.625rem |
| `--tag-radius` | var(--radius-sm) |
| `--tag-bg` | var(--color-primary-light) |
| `--tag-text` | var(--color-primary-dark) |
| `--tag-font-size` | 0.75rem |

### Application Status Colors

| Status | Background | Text |
|--------|-----------|------|
| Applied | `#F1F5F9` | `#475569` |
| Screening | `#CFFAFE` | `#155E75` |
| Interview | `#FEF3C7` | `#92400E` |
| Offer | `#DCFCE7` | `#166534` |
| Hired | `#DCFCE7` | `#166534` |
| Rejected | `#FEE2E2` | `#991B1B` |
| Active | `#DBEAFE` | `#1E40AF` |
| Closed | `#F1F5F9` | `#475569` |

### Job Type Badge Colors

| Type | Background | Text |
|------|-----------|------|
| Full-time | `#DBEAFE` | `#1E40AF` |
| Part-time | `#EDE9FE` | `#5B21B6` |
| Contract | `#FFEDD5` | `#9A3412` |
| Remote | `#DCFCE7` | `#166534` |
| Internship | `#CFFAFE` | `#155E75` |

---

## Motion & Animation

| Animation | Duration | Easing | Usage |
|-----------|----------|--------|-------|
| Card hover | 200ms | ease | Job cards, company cards |
| Border accent | 200ms | ease | Job card left border on hover |
| Modal open | 300ms | ease-out | Application form, confirm |
| Modal close | 200ms | ease-in | Modal exit |
| Slide drawer | 300ms | cubic-bezier(0.4,0,0.2,1) | Sidebar, mobile menu |
| Toast enter | 300ms | ease-out | Notifications |
| Count-up | 2s | ease-out | Stat counters |
| Progress bar | 800ms | ease-out | Profile completion |
| Pipeline fill | 500ms | ease | Application pipeline stages |
| Kanban drag | — | native | Drag-and-drop smooth |
| Skeleton | 1.5s | ease-in-out infinite | Loading shimmer |
| Heart toggle | 300ms | cubic-bezier(0.68,-0.55,0.27,1.55) | Save job bounce |

---

## Breakpoints

| Name | Width | Layout Changes |
|------|-------|----------------|
| `--bp-sm` | 640px | Single column |
| `--bp-md` | 768px | 2-column grids |
| `--bp-lg` | 1024px | Sidebar shows; job detail 2-col |
| `--bp-xl` | 1280px | Max container |

---

## Special Design Notes

- **Professional tone**: Inter font only — clean, no decorative fonts
- **Job cards**: list/row format (not grid cards) for better scanning — matches Indeed/LinkedIn pattern
- **Left border accent** on job card hover provides subtle professional feedback
- **Salary** always displayed prominently in bold
- **Skill tags** give instant tech stack visibility
- **Kanban board** for employer ATS is a standout portfolio feature
- **Dual dashboard** concept shows both perspectives of the platform
