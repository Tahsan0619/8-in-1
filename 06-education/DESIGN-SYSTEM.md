# Education / LMS — Design System

## Brand Identity
Warm, encouraging, and purposeful. The design should feel inviting to learners of all levels — not intimidating. Think Coursera's structure meets Skillshare's visual warmth meets Notion's clarity.

---

## Color Palette

### Light Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#FAFBFC` | Page background |
| `--color-surface` | `#FFFFFF` | Cards, player bg |
| `--color-surface-alt` | `#F1F5F9` | Sidebar, alternate sections |
| `--color-text-primary` | `#0F172A` | Headlines |
| `--color-text-body` | `#334155` | Body text |
| `--color-text-secondary` | `#64748B` | Meta, labels |
| `--color-text-muted` | `#94A3B8` | Placeholders |
| `--color-accent` | `#7C3AED` | Primary CTAs, progress, active |
| `--color-accent-hover` | `#6D28D9` | Accent hover |
| `--color-accent-light` | `#F5F3FF` | Accent backgrounds |
| `--color-success` | `#10B981` | Completed, passed |
| `--color-success-light` | `#ECFDF5` | Success bg |
| `--color-warning` | `#F59E0B` | In progress, caution |
| `--color-error` | `#EF4444` | Failed, incorrect |
| `--color-info` | `#3B82F6` | Info, tips |
| `--color-border` | `#E2E8F0` | Card borders |
| `--color-star` | `#FBBF24` | Ratings |
| `--color-free` | `#10B981` | Free badge |
| `--color-premium` | `#7C3AED` | Premium badge |

### Dark Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0C0A1D` | Background (deep purple-black) |
| `--color-surface` | `#1A1730` | Cards |
| `--color-surface-alt` | `#231F3E` | Sidebar |
| `--color-text-primary` | `#F1F5F9` | Headlines |
| `--color-text-body` | `#CBD5E1` | Body |
| `--color-accent` | `#A78BFA` | Accent |
| `--color-border` | `#2D2855` | Borders |

---

## Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| H1 (Hero) | `'Plus Jakarta Sans'` | 700 | 44px / 32px mob |
| H2 (Section) | `'Plus Jakarta Sans'` | 700 | 32px / 24px mob |
| H3 (Course Title) | `'Plus Jakarta Sans'` | 600 | 20px |
| H4 | `'Plus Jakarta Sans'` | 600 | 17px |
| Body | `'Inter'` | 400 | 15px |
| Caption | `'Inter'` | 400 | 13px |
| Button | `'Inter'` | 600 | 14px |
| Badge | `'Inter'` | 600 | 11px |
| Code | `'JetBrains Mono'` | 400 | 14px |
| Progress Label | `'Inter'` | 600 | 12px |
| Lesson Title | `'Inter'` | 500 | 15px |

**Font Stack:** `'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif`

---

## Spacing
```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
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
--radius-sm: 6px
--radius-md: 10px
--radius-lg: 14px
--radius-xl: 20px
--radius-full: 9999px
```

---

## Shadows
```
--shadow-sm: 0 1px 3px rgba(0,0,0,0.04)
--shadow-md: 0 4px 12px rgba(0,0,0,0.06)
--shadow-lg: 0 8px 24px rgba(0,0,0,0.08)
```

---

## Component Tokens

### Progress Bars
- Track: surface-alt bg, radius-full, 8px height
- Fill: accent bg, radius-full, animated width
- Label: percentage text right-aligned or centered
- Variants: thin (4px, inline), standard (8px), thick (12px, dashboard)

### Course Cards
- Radius: radius-lg
- Image: 16:9 top
- Padding: 16px body
- Hover: shadow-md, translateY(-2px)
- Badge position: top-left of image

### Video Player
- Aspect ratio: 16:9
- Controls: dark overlay bottom
- Progress bar: accent color, seekable
- Custom skin matching brand colors

---

## Motion
```
--transition-fast: 150ms ease
--transition-base: 200ms ease
--transition-slow: 300ms ease
```

- Progress bar fill: 400ms ease-out
- Accordion: 300ms max-height
- Quiz answer select: scale pulse
- Certificate appear: fade + scale from 0.9
- Lesson checkmark: draw animation (SVG)

---

## Iconography
- **Style:** Rounded line icons, friendly feel
- **Library:** Lucide Icons
- **Special:** Checkmark circles (completed), Lock (locked lessons), Play (video), Trophy (certificate)

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
- **Udemy** — Course cards, category browsing, instructor system
- **Coursera** — Structured learning path, certificates
- **Skillshare** — Visual warmth, horizontal browsing
- **Duolingo** — Progress gamification, encouragement
- **Notion** — Clean UI, no clutter
- **YouTube** — Video player UX, sidebar lesson list
- **Khan Academy** — Educational hierarchy, progress tracking
