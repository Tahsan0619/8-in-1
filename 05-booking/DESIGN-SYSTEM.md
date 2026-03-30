# Booking / Service — Design System

## Brand Identity
Clean, trustworthy, and action-oriented. The design should feel like a premium booking app — think a cross between Airbnb's warmth and Calendly's efficiency, with the visual polish of ClassPass.

---

## Color Palette

### Light Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-surface` | `#F9FAFB` | Cards, sections |
| `--color-surface-alt` | `#F3F4F6` | Alternate sections, search bar |
| `--color-text-primary` | `#111827` | Headlines |
| `--color-text-body` | `#374151` | Body text |
| `--color-text-secondary` | `#6B7280` | Meta, captions |
| `--color-text-muted` | `#9CA3AF` | Placeholders |
| `--color-accent` | `#0EA5E9` | CTAs, active slots, links |
| `--color-accent-hover` | `#0284C7` | Accent hover |
| `--color-accent-light` | `#F0F9FF` | Accent backgrounds |
| `--color-success` | `#10B981` | Confirmed, available |
| `--color-success-light` | `#ECFDF5` | Success backgrounds |
| `--color-warning` | `#F59E0B` | Pending, limited |
| `--color-error` | `#EF4444` | Cancelled, unavailable |
| `--color-border` | `#E5E7EB` | Card borders |
| `--color-border-light` | `#F3F4F6` | Subtle borders |
| `--color-star` | `#FBBF24` | Rating stars |

### Dark Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0F172A` | Background |
| `--color-surface` | `#1E293B` | Cards |
| `--color-surface-alt` | `#293548` | Sections |
| `--color-text-primary` | `#F1F5F9` | Headlines |
| `--color-text-body` | `#CBD5E1` | Body |
| `--color-accent` | `#38BDF8` | Accent |
| `--color-border` | `#334155` | Borders |

---

## Typography

| Element | Font | Weight | Size | Line Height |
|---|---|---|---|---|
| H1 (Hero) | `'Plus Jakarta Sans'` | 700 | 44px / 32px mob | 1.15 |
| H2 (Section) | `'Plus Jakarta Sans'` | 700 | 32px / 24px mob | 1.2 |
| H3 (Card) | `'Plus Jakarta Sans'` | 600 | 20px | 1.3 |
| H4 (Sub) | `'Plus Jakarta Sans'` | 600 | 16px | 1.4 |
| Body | `'Inter'` | 400 | 15px | 1.6 |
| Caption | `'Inter'` | 400 | 13px | 1.5 |
| Button | `'Inter'` | 600 | 14px | 1 |
| Price | `'Inter'` | 700 | 24px | 1.2 |
| Time Slot | `'Inter'` | 500 | 14px | 1 |
| Badge | `'Inter'` | 600 | 12px | 1 |

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
--shadow-lg: 0 8px 28px rgba(0,0,0,0.08)
--shadow-xl: 0 16px 40px rgba(0,0,0,0.10)
--shadow-map: 0 2px 8px rgba(0,0,0,0.15)    (map pins/cards)
```

---

## Grid
- **Container:** 1240px max-width
- **Service cards:** 3 columns → 2 → 1
- **Calendar grid:** 7 columns (days of week)
- **Time slots:** 3-4 columns of time blocks
- **Map split:** 50% list / 50% map (desktop)

---

## Component Tokens

### Buttons
| Variant | Style |
|---|---|
| Primary | Accent bg, white text, radius-md, hover: darken, shadow on hover |
| Secondary | White bg, accent text, accent border, hover: accent-light bg |
| Ghost | No bg/border, text-secondary, hover: surface-alt bg |
| Book Now | Accent bg, larger (48px height, 16px font), prominent shadow |

### Time Slot Buttons
- Default: surface bg, border, radius-md, 40px height
- Available: accent border on hover, clickable
- Selected: accent bg, white text
- Unavailable: muted bg, muted text, cursor not-allowed
- Past: same as unavailable

### Calendar Day Cells
- 40x40px squares in 7-column grid
- Current day: accent border ring
- Selected: accent bg
- Has availability: small dot below date
- Unavailable: muted text
- Hover: accent-light bg

---

## Motion
```
--transition-fast: 150ms ease
--transition-base: 200ms ease
--transition-slow: 300ms ease
```

- **Booking steps:** slide-left/right transition between steps
- **Calendar:** fade transition when changing months
- **Map pins:** bounce animation on appear
- **Slot selection:** scale pulse (1 → 1.05 → 1) on click
- **Confirmation:** checkmark draw animation

---

## Iconography
- **Style:** Rounded, friendly line icons
- **Library:** Lucide Icons
- **Sizes:** 16px (meta), 20px (buttons), 24px (nav), 40px (how-it-works)

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
- **Airbnb** — Map-driven discovery, search UI, card design
- **Calendly** — Calendar slot picking, booking flow
- **ClassPass** — Service cards, category browsing
- **OpenTable** — Restaurant booking, time slots
- **Zocdoc** — Doctor booking, specialization filters
- **Uber** — Mobile-first, location input, confirmation
- **Booking.com** — Filter sidebar, result density, trust signals
