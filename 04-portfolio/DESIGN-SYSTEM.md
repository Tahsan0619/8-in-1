# Portfolio — Design System

## Brand Identity
Bold, expressive, and deeply personal. The portfolio is itself a statement piece — demonstrating craft through execution. Inspired by award-winning personal sites and creative agency portfolios that push boundaries while remaining usable.

---

## Color Palette

### Light Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#FAFAFA` | Page background |
| `--color-surface` | `#FFFFFF` | Cards, modals |
| `--color-surface-alt` | `#F4F4F5` | Alternate sections |
| `--color-text-primary` | `#09090B` | Headlines (near black) |
| `--color-text-body` | `#27272A` | Body text |
| `--color-text-secondary` | `#71717A` | Meta, captions |
| `--color-text-muted` | `#A1A1AA` | Placeholders |
| `--color-accent` | `#6D28D9` | Links, highlights, interactive elements |
| `--color-accent-hover` | `#5B21B6` | Accent hover |
| `--color-accent-light` | `#F5F3FF` | Accent backgrounds |
| `--color-gradient-start` | `#6D28D9` | Gradient |
| `--color-gradient-end` | `#EC4899` | Gradient |
| `--color-border` | `#E4E4E7` | Borders |
| `--color-available` | `#22C55E` | Available badge |
| `--color-busy` | `#EF4444` | Busy badge |

### Dark Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#09090B` | Page background (near black) |
| `--color-surface` | `#18181B` | Cards |
| `--color-surface-alt` | `#27272A` | Sections |
| `--color-text-primary` | `#FAFAFA` | Headlines |
| `--color-text-body` | `#D4D4D8` | Body |
| `--color-accent` | `#A78BFA` | Accent (lighter purple for dark) |
| `--color-border` | `#27272A` | Borders |

---

## Typography

| Element | Font | Weight | Size | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Name/Logo | `'Space Grotesk'` | 700 | 20px | 1.2 | -0.01em |
| H1 (Hero) | `'Space Grotesk'` | 700 | 72px / 44px mob | 1.05 | -0.03em |
| H2 (Section) | `'Space Grotesk'` | 700 | 48px / 32px mob | 1.1 | -0.02em |
| H3 (Project) | `'Space Grotesk'` | 600 | 28px / 22px mob | 1.2 | -0.01em |
| Body | `'Inter'` | 400 | 16px | 1.7 | 0 |
| Body Large | `'Inter'` | 400 | 20px | 1.6 | 0 |
| Caption | `'Inter'` | 400 | 13px | 1.5 | 0.01em |
| Tag | `'Inter'` | 500 | 12px | 1 | 0.03em |
| Display XL | `'Space Grotesk'` | 700 | 96px / 56px mob | 1.0 | -0.04em |
| Animated Tag | `'Space Mono'` | 400 | 18px | 1.4 | 0 |

**Display Stack:** `'Space Grotesk', -apple-system, sans-serif`
**Body Stack:** `'Inter', -apple-system, sans-serif`
**Mono Stack:** `'Space Mono', 'JetBrains Mono', monospace`

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
--space-24: 96px
--space-32: 128px
--space-40: 160px
```

Large section padding: 120-160px vertical for cinematic spacing

---

## Border Radius
```
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 16px
--radius-xl: 24px
--radius-2xl: 32px
--radius-full: 9999px
```

---

## Shadows
```
--shadow-sm: 0 1px 3px rgba(0,0,0,0.05)
--shadow-md: 0 4px 16px rgba(0,0,0,0.08)
--shadow-lg: 0 12px 40px rgba(0,0,0,0.12)
--shadow-glow: 0 0 60px rgba(109,40,217,0.2)
```

---

## Grid
- **Container:** 1440px max-width (wider for portfolio)
- **Gutter:** 32px
- **Project grid:** 2 columns (desktop), 1 (mobile)
- **Photo masonry:** 3 columns → 2 → 1
- **Content sections:** centered, max-width 800px for text

---

## Motion / Animation

### Custom Cursor
- Default: 8px circle, accent color or white (follows mouse with slight lag)
- Hover over links/buttons: expands to 48px with blend-mode difference or text label
- Hover over images: becomes "View" text circle
- Hidden on mobile/tablet (touch devices)
- Implementation: div following mouse via requestAnimationFrame

### Page Transitions
- Navigate: current page fades out + slides down, new page fades in + slides up
- Duration: 500ms
- Easing: cubic-bezier(0.22, 1, 0.36, 1)

### Scroll Effects
- Parallax: hero background moves slower than content
- Scale-on-scroll: project images scale from 0.9 → 1 as they enter
- Text reveal: characters or words animate in sequence
- Scroll-hijack section: full-screen projects snap vertically

### Hover Effects
- Project cards: image scales, title slides up, overlay appears
- Navigation links: underline grows from left
- Buttons: slight scale + shadow increase
- Social icons: rotate + color change

### Typewriter / Morph Tagline
- Animated cycle through roles: "Full Stack Developer" → "UI Designer" → "Problem Solver"
- Typewriter style with blinking cursor, or morphing text transition
- 3-second display per phrase, 80ms per character typing

```
--transition-fast: 150ms ease
--transition-base: 250ms ease
--transition-slow: 500ms ease
--transition-cinematic: 800ms cubic-bezier(0.22, 1, 0.36, 1)
```

---

## Iconography
- **Style:** Minimal line icons, 1.5px stroke
- **Library:** Lucide or custom SVG
- **Social:** Custom filled icons for GitHub, LinkedIn, Twitter, Dribbble, Behance
- **Sizes:** 20px (inline), 24px (social row)

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

## Design References
- **Rauno Freiberg** — Precision, interactive cursor, minimal craft
- **Lusion** — Cinematic scroll, bold layout
- **Pentagram** — Project showcase, editorial portfolio
- **Apple Product Pages** — Scroll-triggered reveals, large imagery
- **Brittany Chiang** — Developer portfolio, clean personal sites
- **Awwwards SOTD winners** — Boundary-pushing interactions
- **Unsplash** — Masonry grid, lightbox for photography
- **Behance** — Project detail layout, creative showcase
