# Blog / Content — Design System

## Brand Identity
Editorial, literary, and intelligent. The design puts content front and center with exceptional typography, generous whitespace, and a color palette that never competes with the writing. Think The New Yorker meets a modern tech blog.

---

## Color Palette

### Light Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#FFFDF9` | Page background (warm white) |
| `--color-surface` | `#FFFFFF` | Cards, article body |
| `--color-surface-alt` | `#F7F5F0` | Sidebar, section backgrounds |
| `--color-text-primary` | `#1C1917` | Headlines, article body |
| `--color-text-body` | `#292524` | Long-form reading text |
| `--color-text-secondary` | `#78716C` | Meta info, captions |
| `--color-text-muted` | `#A8A29E` | Placeholders |
| `--color-accent` | `#DC2626` | Category badges, active states, links on hover |
| `--color-accent-soft` | `#FEF2F2` | Accent backgrounds |
| `--color-link` | `#1D4ED8` | Inline text links |
| `--color-link-hover` | `#1E40AF` | Link hover |
| `--color-border` | `#E7E5E4` | Dividers |
| `--color-border-light` | `#F5F5F4` | Subtle separators |
| `--color-highlight` | `#FEF9C3` | Text highlight / pull quotes bg |

### Dark Mode
| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#121212` | Page background |
| `--color-surface` | `#1C1C1C` | Cards, article |
| `--color-surface-alt` | `#242424` | Sidebar |
| `--color-text-primary` | `#FAFAF9` | Headlines |
| `--color-text-body` | `#E7E5E4` | Article body |
| `--color-text-secondary` | `#A8A29E` | Meta |
| `--color-accent` | `#EF4444` | Accent |
| `--color-link` | `#60A5FA` | Links |
| `--color-border` | `#2A2A2A` | Borders |
| `--color-highlight` | `#422006` | Highlight bg |

---

## Typography

| Element | Font | Weight | Size | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| Logo | `'Playfair Display'` | 700 | 28px | 1.1 | -0.01em |
| H1 (Post Title) | `'Playfair Display'` | 700 | 42px / 32px mob | 1.2 | -0.02em |
| H2 (Section) | `'Playfair Display'` | 600 | 32px / 26px mob | 1.25 | -0.01em |
| H3 (Card Title) | `'Inter'` | 600 | 20px | 1.3 | 0 |
| H4 (Subhead) | `'Inter'` | 600 | 17px | 1.4 | 0 |
| Body (Article) | `'Source Serif 4'` | 400 | 19px | 1.85 | 0 |
| Body (UI) | `'Inter'` | 400 | 15px | 1.6 | 0 |
| Caption | `'Inter'` | 400 | 13px | 1.5 | 0.01em |
| Overline | `'Inter'` | 700 | 11px | 1.3 | 0.1em |
| Blockquote | `'Source Serif 4'` | 400 italic | 22px | 1.7 | 0 |
| Drop Cap | `'Playfair Display'` | 700 | 72px | 1 | 0 |
| Code | `'JetBrains Mono'` | 400 | 14px | 1.6 | 0 |
| Nav | `'Inter'` | 500 | 14px | 1 | 0.02em |

**Article Font Stack:** `'Source Serif 4', 'Georgia', 'Noto Serif', serif`
**UI Font Stack:** `'Inter', -apple-system, system-ui, sans-serif`
**Display Font Stack:** `'Playfair Display', 'Georgia', serif`

---

## Spacing
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
--space-20: 80px
```

Article content max-width: **720px** (optimal reading width, ~65-75 characters/line)

---

## Border Radius
```
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 20px
--radius-full: 9999px
```

---

## Shadows
```
--shadow-sm: 0 1px 3px rgba(0,0,0,0.04)
--shadow-md: 0 4px 12px rgba(0,0,0,0.05)
--shadow-lg: 0 8px 24px rgba(0,0,0,0.07)
```

---

## Grid
- **Container:** 1200px max-width
- **Article:** 720px centered (with optional sidebar)
- **Blog grid:** 3 columns → 2 → 1
- **Magazine layout:** CSS Grid areas (feature + sidebar + columns)
- **Gutter:** 28px (16px mobile)

---

## Motion
```
--transition-fast: 150ms ease
--transition-base: 200ms ease
--transition-slow: 350ms ease
```

- **Reading progress bar:** smooth width transition on scroll
- **Infinite scroll:** fade-in new posts (200ms)
- **TOC tracking:** smooth scroll-spy highlight transition
- **Newsletter popup:** slide-up + fade (400ms)
- **Breaking news ticker:** CSS marquee animation (linear, 20s)

---

## Iconography
- **Style:** Thin line icons, 1.5px stroke
- **Library:** Lucide Icons
- **Sizes:** 16px (inline/meta), 20px (buttons), 24px (nav)

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
- **The Verge** — Bold editorial layout, content density, category colors
- **Medium** — Reading experience, clean article layout, progress bar
- **Smashing Magazine** — Developer blog UX, code blocks, category system
- **Brain Pickings (The Marginalian)** — Literary typography, warm palette
- **The New Yorker** — Drop caps, serif elegance, editorial authority
- **Substack** — Newsletter integration, author-first design
- **Overcast** — Podcast player UI, minimal audio controls
