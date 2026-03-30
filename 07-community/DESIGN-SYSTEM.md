# Community / Social — Design System

---

## Color Palette

### Light Mode

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#FAFAF9` | Page background (warm stone white) |
| `--bg-secondary` | `#FFFFFF` | Cards, panels |
| `--bg-tertiary` | `#F5F5F4` | Input fields, code blocks |
| `--bg-accent` | `#FFF7ED` | Highlight strips, badges bg |
| `--text-primary` | `#1C1917` | Headings, body text |
| `--text-secondary` | `#78716C` | Captions, metadata |
| `--text-tertiary` | `#A8A29E` | Placeholder text |
| `--accent` | `#EA580C` | Primary accent (warm orange) |
| `--accent-hover` | `#C2410C` | Hover state |
| `--accent-light` | `#FFF7ED` | Accent background |
| `--success` | `#16A34A` | Accepted answers, online status |
| `--warning` | `#D97706` | Pending, flagged |
| `--danger` | `#DC2626` | Errors, delete, downvote |
| `--info` | `#2563EB` | Links, info badges |
| `--border` | `#E7E5E4` | Card borders, dividers |
| `--border-focus` | `#EA580C` | Focus rings |

### Dark Mode

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0C0A09` | Page background (warm black) |
| `--bg-secondary` | `#1C1917` | Cards, panels |
| `--bg-tertiary` | `#292524` | Input fields, code blocks |
| `--text-primary` | `#FAFAF9` | Headings, body text |
| `--text-secondary` | `#A8A29E` | Captions, metadata |
| `--accent` | `#FB923C` | Primary accent (lighter orange for dark) |
| `--accent-hover` | `#F97316` | Hover |
| `--border` | `#44403C` | Card borders |

### Module Accent Colors

Each module gets a secondary accent for identity while sharing the primary orange:

| Module | Color | Hex |
|--------|-------|-----|
| Job Board | Emerald | `#059669` |
| Forum/Q&A | Blue | `#2563EB` |
| Directory | Amber | `#D97706` |
| Events | Rose | `#E11D48` |
| Reviews | Violet | `#7C3AED` |
| Social Feed | Orange | `#EA580C` |

---

## Typography

| Role | Font | Weight | Size | Line Height |
|------|------|--------|------|-------------|
| Headings | **General Sans** | 700 | 32-48px | 1.2 |
| Sub-headings | General Sans | 600 | 20-28px | 1.3 |
| Body | **Inter** | 400 | 16px | 1.6 |
| Body Small | Inter | 400 | 14px | 1.5 |
| Captions | Inter | 500 | 12px | 1.4 |
| Code | **JetBrains Mono** | 400 | 14px | 1.5 |
| Thread Title | General Sans | 700 | 20px | 1.3 |
| Username | Inter | 600 | 14px | 1.4 |

### Font Loading

```css
@import url('https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

---

## Spacing Scale

| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 6px | Buttons, badges, pills |
| `--radius-md` | 10px | Cards, inputs |
| `--radius-lg` | 16px | Modals, large cards |
| `--radius-xl` | 24px | Feature sections |
| `--radius-full` | 9999px | Avatars, pills |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle depth |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)` | Cards resting |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Cards hover |
| `--shadow-lg` | `0 10px 30px rgba(0,0,0,0.1)` | Dropdowns |
| `--shadow-xl` | `0 20px 50px rgba(0,0,0,0.12)` | Modals |
| `--shadow-glow` | `0 0 0 3px rgba(234,88,12,0.15)` | Focus rings |

---

## Grid & Layout

| Property | Value |
|----------|-------|
| Max width | 1200px |
| Content columns | 12-column grid |
| Gutter | 24px |
| Sidebar width | 280px (left nav) |
| Right sidebar | 320px (widgets) |
| Main content | Fluid center column |

### Layout Pattern (3-column)

```
┌──────┬──────────────────────┬────────┐
│ Left │     Main Content     │ Right  │
│ Nav  │                      │ Widget │
│ 280  │       Fluid          │  320   │
└──────┴──────────────────────┴────────┘
```

### Breakpoints

| Name | Width | Layout |
|------|-------|--------|
| Mobile | < 768px | Single column, bottom nav |
| Tablet | 768–1024px | 2 columns, no right sidebar |
| Desktop | 1024–1440px | 3 columns |
| Wide | > 1440px | 3 columns, centered container |

---

## Motion & Animation

| Property | Duration | Easing |
|----------|----------|--------|
| Hover effects | 150ms | `ease-out` |
| Panel expand | 250ms | `ease-in-out` |
| Modal open | 300ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Page transition | 200ms | `ease` |
| Toast slide-in | 400ms | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Vote animation | 300ms | Spring-like bounce |

### Micro-interactions

- Upvote/downvote: number pulses and changes color
- Bookmark: heart icon fills with scale animation
- Badge earned: confetti-like particle burst
- Reply expand: smooth slide-down with fade

---

## Iconography

- **Set:** Lucide Icons (consistent 24px grid)
- **Stroke:** 1.5px
- **Sizes:** 16px (inline), 20px (buttons), 24px (navigation), 32px (feature)
- **Color:** Inherits `currentColor`

---

## Component Tokens

### Vote Button

| State | Color | Background |
|-------|-------|-----------|
| Default | `#78716C` | transparent |
| Upvoted | `#EA580C` | `#FFF7ED` |
| Downvoted | `#DC2626` | `#FEF2F2` |
| Hover | `#1C1917` | `#F5F5F4` |

### Reputation Badge

| Level | Label | Color |
|-------|-------|-------|
| 0-99 | Newcomer | `#A8A29E` |
| 100-499 | Contributor | `#059669` |
| 500-1999 | Expert | `#2563EB` |
| 2000-4999 | Master | `#7C3AED` |
| 5000+ | Legend | `#EA580C` |

### Status Indicator

| Status | Color | Shape |
|--------|-------|-------|
| Online | `#16A34A` | 8px filled circle |
| Idle | `#D97706` | 8px half-moon |
| Offline | `#A8A29E` | 8px ring only |
