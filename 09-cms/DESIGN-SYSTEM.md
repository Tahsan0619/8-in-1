# CMS / Website Builder — Design System

## Brand Identity
Professional, creative, empowering — inspired by the sleek interfaces of **Webflow**, **Framer**, and **Linear**. The builder should feel like a premium tool that's a joy to use.

---

## Color Palette

### Light Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Page background |
| `--color-surface` | `#FAFAFA` | Sidebar, panels |
| `--color-surface-alt` | `#F3F4F6` | Hover states, dropzones |
| `--color-canvas` | `#F9FAFB` | Builder canvas bg |
| `--color-text-primary` | `#111827` | Headings, labels |
| `--color-text-secondary` | `#6B7280` | Descriptions, meta |
| `--color-text-muted` | `#9CA3AF` | Placeholders |
| `--color-accent` | `#6366F1` | Primary actions, links, selected states |
| `--color-accent-hover` | `#4F46E5` | Accent hover |
| `--color-accent-muted` | `rgba(99,102,241,0.1)` | Accent backgrounds |
| `--color-success` | `#10B981` | Published, saved, success |
| `--color-warning` | `#F59E0B` | Draft, scheduled, caution |
| `--color-error` | `#EF4444` | Delete, errors, poor SEO |
| `--color-info` | `#3B82F6` | Info states, links |
| `--color-border` | `#E5E7EB` | Card/panel borders |
| `--color-border-strong` | `#D1D5DB` | Input borders |
| `--color-builder-outline` | `#6366F1` | Selected section outline in builder |
| `--color-drop-zone` | `rgba(99,102,241,0.15)` | Drop target highlight |

### Dark Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#09090B` | Page background |
| `--color-surface` | `#18181B` | Sidebar, panels |
| `--color-surface-alt` | `#27272A` | Hover, elevated |
| `--color-canvas` | `#0F0F12` | Builder canvas bg |
| `--color-text-primary` | `#F4F4F5` | Headings |
| `--color-text-secondary` | `#A1A1AA` | Meta text |
| `--color-text-muted` | `#71717A` | Placeholders |
| `--color-border` | `#27272A` | Borders |
| `--color-border-strong` | `#3F3F46` | Input borders |

---

## Typography

| Element | Font | Weight | Size | Line Height |
|---|---|---|---|---|
| Logo | `'Inter', sans-serif` | 800 | 20px | 1.2 |
| H1 (Page title) | `'Inter', sans-serif` | 700 | 28px | 1.2 |
| H2 (Section head) | `'Inter', sans-serif` | 600 | 20px | 1.3 |
| H3 (Card title) | `'Inter', sans-serif` | 600 | 15px | 1.4 |
| Body | `'Inter', sans-serif` | 400 | 14px | 1.6 |
| Caption / Meta | `'Inter', sans-serif` | 400 | 12px | 1.4 |
| Code / Mono | `'JetBrains Mono', monospace` | 400 | 13px | 1.5 |
| Button | `'Inter', sans-serif` | 500 | 13px | 1 |
| Nav item | `'Inter', sans-serif` | 500 | 13px | 1.2 |
| Badge | `'Inter', sans-serif` | 600 | 11px | 1 |

**Font Stack:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`
**Mono Stack:** `'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace`

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
```

---

## Border Radius
```
--radius-xs: 4px     (badges, small elements)
--radius-sm: 6px     (buttons, inputs, tags)
--radius-md: 8px     (cards, dropdowns)
--radius-lg: 12px    (modals, panels)
--radius-xl: 16px    (feature cards)
--radius-full: 9999px (avatars, pills, toggles)
```

---

## Shadows
```
--shadow-xs: 0 1px 2px rgba(0,0,0,0.04)
--shadow-sm: 0 2px 4px rgba(0,0,0,0.06)
--shadow-md: 0 4px 12px rgba(0,0,0,0.08)
--shadow-lg: 0 8px 24px rgba(0,0,0,0.12)
--shadow-xl: 0 16px 48px rgba(0,0,0,0.16)
--shadow-inner: inset 0 1px 3px rgba(0,0,0,0.06)
--shadow-outline: 0 0 0 3px var(--color-accent-muted)
```

---

## Layout System
- **Sidebar width:** 240px (collapsed: 64px)
- **Property panel width:** 300px
- **Section panel width:** 260px
- **Content max-width:** 1200px
- **Builder canvas:** fluid, fills between panels
- **Grid:** CSS Grid for layouts, Flexbox for components
- **Gutter:** 24px (16px mobile)

---

## Component Tokens

### Buttons
| Variant | Background | Text | Border | Hover |
|---|---|---|---|---|
| Primary | `--color-accent` | white | none | accent-hover |
| Secondary | `--color-surface-alt` | `--color-text-primary` | `--color-border` | darken bg |
| Ghost | transparent | `--color-text-secondary` | none | surface-alt bg |
| Danger | transparent | `--color-error` | `--color-error` | error bg tint |
| Icon | transparent | `--color-text-secondary` | none | surface-alt bg, border-radius: full |

**Sizing:**
- Small: 28px height, 8px padding-x, 12px font
- Medium: 36px height, 14px padding-x, 13px font
- Large: 44px height, 20px padding-x, 14px font

### Inputs
- Height: 36px
- Padding: 0 12px
- Border: 1px solid `--color-border-strong`
- Border-radius: `--radius-sm`
- Focus: accent border + shadow-outline
- Error: error border + subtle red tint
- Font-size: 13px

### Cards
- Background: `--color-surface`
- Border: 1px solid `--color-border`
- Radius: `--radius-md`
- Hover: border-color transitions to accent-muted
- Transition: 150ms ease

### Builder Section Blocks
- Default: transparent bg, dashed border on hover
- Selected: solid accent border (2px) + shadow-outline
- Drag handle: `--color-text-muted`, visible on hover
- Drop target: accent border + drop-zone bg tint

---

## Motion / Animation
```
--transition-fast: 100ms ease
--transition-base: 150ms ease
--transition-slow: 250ms ease
--transition-smooth: 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

- **Sidebar collapse:** width transition 200ms
- **Panel slide:** translateX 250ms ease-out
- **Section reorder:** transform 200ms with drag ghost
- **Canvas resize (device):** width transition 300ms smooth
- **Drag ghost:** opacity 0.8, slight scale(1.02) rotation(1deg)
- **Save indicator:** fade-in/out 150ms
- **Skeleton pulse:** 1.5s infinite ease-in-out

---

## Iconography
- **Icon set:** Lucide Icons (consistent stroke-based)
- **Default size:** 18px
- **Nav icons:** 20px
- **Toolbar icons:** 16px
- **Color:** currentColor (inherits text color)
- **Custom icons:** Section block icons (simplified outlines of section types)
