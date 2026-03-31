# Marketplace — Design System

---

## Colour Palette

### Light Mode

| Token               | Hex       | Usage                                 |
| -------------------- | --------- | ------------------------------------- |
| `--color-primary`    | `#F97316` | Primary actions, CTA buttons, accents |
| `--color-primary-light` | `#FFF7ED` | Primary tint, hover backgrounds    |
| `--color-primary-dark`  | `#EA580C` | Hover/active states               |
| `--color-secondary`  | `#0EA5E9` | Secondary actions, links, info badges |
| `--color-secondary-light` | `#E0F2FE` | Secondary tint                  |
| `--color-deal`       | `#DC2626` | Flash deals, sale badges, discounts  |
| `--color-deal-bg`    | `#FEF2F2` | Sale section backgrounds             |
| `--color-bg`         | `#FFFFFF` | Page background                      |
| `--color-surface`    | `#F9FAFB` | Cards, panels                        |
| `--color-surface-alt`| `#F3F4F6` | Alternate surfaces, filter sidebar   |
| `--color-border`     | `#E5E7EB` | Borders, dividers                    |
| `--color-text`       | `#111827` | Primary text                         |
| `--color-text-secondary` | `#6B7280` | Descriptions, metadata            |
| `--color-star`       | `#FBBF24` | Star ratings                         |
| `--color-verified`   | `#059669` | Verified seller badges               |
| `--color-success`    | `#10B981` | Success states, in stock, delivered  |
| `--color-warning`    | `#F59E0B` | Low stock, pending status            |
| `--color-error`      | `#EF4444` | Errors, out of stock, cancelled      |

### Dark Mode

| Token               | Hex       | Usage                                 |
| -------------------- | --------- | ------------------------------------- |
| `--color-primary`    | `#FB923C` | Primary actions, CTAs                |
| `--color-primary-light` | `#431407` | Primary tint                      |
| `--color-primary-dark`  | `#FDBA74` | Hover states                      |
| `--color-secondary`  | `#38BDF8` | Secondary actions, links             |
| `--color-secondary-light` | `#0C4A6E` | Secondary tint                  |
| `--color-deal`       | `#F87171` | Sale badges                          |
| `--color-deal-bg`    | `#450A0A` | Sale section backgrounds             |
| `--color-bg`         | `#0F172A` | Page background                      |
| `--color-surface`    | `#1E293B` | Cards, panels                        |
| `--color-surface-alt`| `#334155` | Alternate surfaces                   |
| `--color-border`     | `#475569` | Borders, dividers                    |
| `--color-text`       | `#F1F5F9` | Primary text                         |
| `--color-text-secondary` | `#94A3B8` | Descriptions, metadata            |
| `--color-star`       | `#FBBF24` | Star ratings (unchanged)             |
| `--color-verified`   | `#34D399` | Verified badges                      |
| `--color-success`    | `#34D399` | Success states                       |
| `--color-warning`    | `#FBBF24` | Warnings                             |
| `--color-error`      | `#F87171` | Errors                               |

---

## Typography

| Role         | Font                  | Weight     | Size       | Line Height |
| ------------ | --------------------- | ---------- | ---------- | ----------- |
| H1           | Inter, sans-serif     | 700        | 2.25 rem   | 1.2         |
| H2           | Inter, sans-serif     | 700        | 1.75 rem   | 1.25        |
| H3           | Inter, sans-serif     | 600        | 1.375 rem  | 1.3         |
| H4           | Inter, sans-serif     | 600        | 1.125 rem  | 1.35        |
| Body         | Inter, sans-serif     | 400        | 1 rem      | 1.6         |
| Body Small   | Inter, sans-serif     | 400        | 0.875 rem  | 1.5         |
| Caption      | Inter, sans-serif     | 400        | 0.75 rem   | 1.4         |
| Button       | Inter, sans-serif     | 600        | 0.875 rem  | 1           |
| Price Large  | Inter, sans-serif     | 700        | 1.5 rem    | 1           |
| Price Small  | Inter, sans-serif     | 600        | 1 rem      | 1           |
| Badge        | Inter, sans-serif     | 600        | 0.75 rem   | 1           |

> **Font Stack:** Inter throughout for clean e-commerce readability. Weight variation creates visual hierarchy (700 for prices/headings, 400 for body).

---

## Spacing Scale

| Token   | Value  |
| ------- | ------ |
| `--sp-1` | 0.25 rem |
| `--sp-2` | 0.5 rem  |
| `--sp-3` | 0.75 rem |
| `--sp-4` | 1 rem    |
| `--sp-5` | 1.25 rem |
| `--sp-6` | 1.5 rem  |
| `--sp-8` | 2 rem    |
| `--sp-10`| 2.5 rem  |
| `--sp-12`| 3 rem    |
| `--sp-16`| 4 rem    |
| `--sp-20`| 5 rem    |

---

## Border Radius

| Token              | Value    |
| ------------------- | -------- |
| `--radius-sm`       | 0.25 rem |
| `--radius-md`       | 0.5 rem  |
| `--radius-lg`       | 0.75 rem |
| `--radius-xl`       | 1 rem    |
| `--radius-2xl`      | 1.5 rem  |
| `--radius-full`     | 9999px   |

---

## Shadows

| Token              | Value                                      |
| ------------------- | ------------------------------------------ |
| `--shadow-sm`       | 0 1px 2px rgba(0,0,0,0.05)                |
| `--shadow-md`       | 0 4px 6px -1px rgba(0,0,0,0.07)           |
| `--shadow-lg`       | 0 10px 15px -3px rgba(0,0,0,0.08)         |
| `--shadow-xl`       | 0 20px 25px -5px rgba(0,0,0,0.1)          |

---

## Layout Tokens

| Token               | Value     |
| -------------------- | --------- |
| `--max-width`        | 1280px    |
| `--header-height`    | 64px      |
| `--sidebar-width`    | 260px     |
| `--filter-width`     | 280px     |
| `--grid-gap`         | 1rem      |
| `--section-padding`  | 4 rem     |

---

## Component Tokens

### Product Card
| Token                      | Value                          |
| --------------------------- | ------------------------------ |
| `--card-radius`             | var(--radius-lg)               |
| `--card-shadow`             | var(--shadow-sm)               |
| `--card-hover-shadow`       | var(--shadow-md)               |
| `--card-padding`            | var(--sp-4)                    |
| `--card-image-ratio`        | 1 / 1                         |

### Cart Item
| Token                      | Value                          |
| --------------------------- | ------------------------------ |
| `--cart-item-padding`       | var(--sp-4) var(--sp-6)        |
| `--cart-item-border`        | 1px solid var(--color-border)  |
| `--cart-vendor-bg`          | var(--color-surface-alt)       |

### Sale Badge
| Token                      | Value                          |
| --------------------------- | ------------------------------ |
| `--badge-bg`                | var(--color-deal)              |
| `--badge-text`              | #FFFFFF                        |
| `--badge-radius`            | var(--radius-sm)               |
| `--badge-padding`           | var(--sp-1) var(--sp-2)        |
| `--badge-font-size`         | 0.75rem                        |

### Seller Badge
| Token                      | Value                          |
| --------------------------- | ------------------------------ |
| `--verified-bg`             | var(--color-verified)          |
| `--verified-text`           | #FFFFFF                        |
| `--top-rated-bg`            | var(--color-star)              |

### Toast
| Token                      | Value                          |
| --------------------------- | ------------------------------ |
| `--toast-radius`            | var(--radius-lg)               |
| `--toast-shadow`            | var(--shadow-lg)               |
| `--toast-padding`           | var(--sp-4) var(--sp-6)        |
| `--toast-duration`          | 4000ms                         |

---

## Motion & Animation

| Animation            | Duration | Easing                 | Usage                    |
| --------------------- | -------- | ---------------------- | ------------------------ |
| Card hover lift       | 200ms    | ease-out               | Product cards            |
| Image swap            | 300ms    | ease-in-out            | Product card hover       |
| Add to cart           | 400ms    | cubic-bezier(.4,0,.2,1)| Cart icon bounce         |
| Cart badge bump       | 300ms    | ease-out               | Badge count update       |
| Wishlist fill         | 300ms    | ease-in-out            | Heart icon toggle        |
| Toast slide-in        | 300ms    | cubic-bezier(.4,0,.2,1)| Notifications            |
| Toast fade-out        | 200ms    | ease-in                | Notification dismiss     |
| Order checkmark       | 600ms    | ease-out               | Order success            |
| Star fill             | 150ms    | ease-out               | Rating input hover       |
| Page fade-in          | 300ms    | ease-out               | Page transitions         |
| Skeleton pulse        | 1500ms   | ease-in-out (infinite) | Loading placeholders     |

---

## Breakpoints

| Name     | Min Width |
| -------- | --------- |
| Mobile   | 0         |
| Tablet   | 768px     |
| Desktop  | 1024px    |
| Wide     | 1280px    |
| Ultra    | 1536px    |
