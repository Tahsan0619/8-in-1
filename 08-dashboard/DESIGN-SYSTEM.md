# Dashboard / SaaS — Design System

---

## Color Palette

### Dark Mode (Primary)

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#09090B` | Page background (near black) |
| `--bg-secondary` | `#18181B` | Cards, panels, sidebar |
| `--bg-tertiary` | `#27272A` | Input fields, hover states |
| `--bg-elevated` | `#3F3F46` | Tooltips, dropdown menus |
| `--text-primary` | `#FAFAFA` | Headings, primary content |
| `--text-secondary` | `#A1A1AA` | Secondary text, labels |
| `--text-tertiary` | `#71717A` | Placeholder, disabled |
| `--accent` | `#3B82F6` | Primary blue accent |
| `--accent-hover` | `#2563EB` | Button hover |
| `--accent-muted` | `rgba(59,130,246,0.15)` | Selected rows, active states |
| `--success` | `#22C55E` | Positive metrics, online |
| `--warning` | `#EAB308` | Warnings, pending |
| `--danger` | `#EF4444` | Errors, delete, negative metrics |
| `--info` | `#06B6D4` | Informational badges |
| `--border` | `#27272A` | Borders, dividers |
| `--border-hover` | `#3F3F46` | Interactive element borders |

### Light Mode

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#FFFFFF` | Page background |
| `--bg-secondary` | `#FAFAFA` | Cards, panels |
| `--bg-tertiary` | `#F4F4F5` | Input fields, alternating rows |
| `--text-primary` | `#09090B` | Headings |
| `--text-secondary` | `#71717A` | Secondary text |
| `--accent` | `#2563EB` | Primary blue accent |
| `--border` | `#E4E4E7` | Borders |

### Chart Colors (Sequential Palette)

```
#3B82F6  — Primary Blue
#8B5CF6  — Violet
#06B6D4  — Cyan
#22C55E  — Green
#EAB308  — Yellow
#F97316  — Orange
#EF4444  — Red
#EC4899  — Pink
```

### Metric Change Colors

| Direction | Color | Icon |
|-----------|-------|------|
| Positive | `#22C55E` | `↑` or `▲` |
| Negative | `#EF4444` | `↓` or `▼` |
| Neutral | `#A1A1AA` | `→` or `–` |

---

## Typography

| Role | Font | Weight | Size | Line Height |
|------|------|--------|------|-------------|
| Page Title | **Inter** | 700 | 28px | 1.2 |
| Section Title | Inter | 600 | 20px | 1.3 |
| Card Title | Inter | 600 | 16px | 1.4 |
| Body | Inter | 400 | 14px | 1.5 |
| Small | Inter | 400 | 13px | 1.4 |
| Caption | Inter | 500 | 12px | 1.3 |
| KPI Number | **Geist Mono** | 700 | 32px | 1.1 |
| Table Number | Geist Mono | 500 | 14px | 1.4 |
| Code/ID | **JetBrains Mono** | 400 | 13px | 1.4 |

### Font Loading

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
/* Geist Mono loaded locally or from Vercel CDN */
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

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-xs` | 4px | Small badges, inline tags |
| `--radius-sm` | 6px | Buttons, inputs |
| `--radius-md` | 8px | Cards, panels |
| `--radius-lg` | 12px | Modals, larger containers |
| `--radius-xl` | 16px | Dialogs |
| `--radius-full` | 9999px | Avatars, pills, status dots |

---

## Shadows (Dark Mode)

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` | Subtle depth |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.4)` | Cards, dropdowns |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.5)` | Modals, floating panels |
| `--shadow-glow` | `0 0 0 2px var(--accent), 0 0 0 4px rgba(59,130,246,0.2)` | Focus rings |

### Shadows (Light Mode)

| Token | Value |
|-------|-------|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.06)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` |
| `--shadow-lg` | `0 12px 32px rgba(0,0,0,0.1)` |

---

## Grid & Layout

| Property | Value |
|----------|-------|
| Sidebar width (expanded) | 240px |
| Sidebar width (collapsed) | 64px |
| Header height | 56px |
| Content padding | 24px |
| Card gap | 16px |
| Max content width | No max (fluid) |

### Layout (Dashboard Shell)

```
┌──────┬──────────────────────────────────────┐
│ SIDE │  HEADER (56px)                       │
│ BAR  ├──────────────────────────────────────┤
│      │                                      │
│ 240px│  MAIN CONTENT (scrollable)           │
│      │                                      │
│      │                                      │
│      │                                      │
└──────┴──────────────────────────────────────┘
```

### Breakpoints

| Name | Width | Sidebar | Layout |
|------|-------|---------|--------|
| Mobile | < 768px | Hidden (hamburger) | Stacked cards |
| Tablet | 768–1024px | Collapsed (64px) | 2-column grid |
| Desktop | 1024–1440px | Expanded (240px) | Multi-column |
| Wide | > 1440px | Expanded (240px) | Full density |

---

## Motion & Animation

| Property | Duration | Easing |
|----------|----------|--------|
| Sidebar toggle | 200ms | `ease-in-out` |
| Card hover | 100ms | `ease` |
| Dropdown open | 150ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Modal entrance | 250ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Chart render | 600ms | `ease-out` |
| Number counter | 800ms | Linear interpolation |
| Toast slide | 300ms | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Row selection | 100ms | `ease` |

### Preferences

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## Iconography

- **Set:** Lucide Icons
- **Stroke:** 1.5px
- **Sizes:** 14px (table inline), 16px (nav items), 20px (buttons), 24px (page headers)
- **Color:** Inherits `currentColor`

---

## Component Tokens

### Status Badge

| Status | Background | Text | Dot |
|--------|-----------|------|-----|
| Active | `rgba(34,197,94,0.15)` | `#22C55E` | Filled green |
| Inactive | `rgba(161,161,170,0.15)` | `#A1A1AA` | Filled gray |
| Pending | `rgba(234,179,8,0.15)` | `#EAB308` | Filled yellow |
| Error | `rgba(239,68,68,0.15)` | `#EF4444` | Filled red |

### Priority Badge

| Priority | Color |
|----------|-------|
| Critical | `#EF4444` |
| High | `#F97316` |
| Medium | `#EAB308` |
| Low | `#22C55E` |
| None | `#A1A1AA` |

### Table Row States

| State | Background |
|-------|-----------|
| Default | transparent |
| Hover | `--bg-tertiary` |
| Selected | `--accent-muted` |
| Alternating | `rgba(255,255,255,0.02)` (dark) |
