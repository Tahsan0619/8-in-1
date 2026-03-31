# Nonprofit & Charity — Design System

---

## Colour Palette

### Light Mode

| Token               | Hex       | Usage                                 |
| -------------------- | --------- | ------------------------------------- |
| `--color-primary`    | `#059669` | Primary actions, progress bars, links |
| `--color-primary-light` | `#D1FAE5` | Primary tint, badges, highlights   |
| `--color-primary-dark`  | `#047857` | Hover states, active elements      |
| `--color-secondary`  | `#F59E0B` | Accents, urgency, donate buttons    |
| `--color-secondary-light` | `#FEF3C7` | Secondary tint, alert backgrounds |
| `--color-heart`      | `#EF4444` | Donate heart icon, love reactions   |
| `--color-bg`         | `#FFFFFF` | Page background                      |
| `--color-surface`    | `#F9FAFB` | Cards, panels                        |
| `--color-surface-alt`| `#F3F4F6` | Alternate surface, table rows       |
| `--color-border`     | `#E5E7EB` | Borders, dividers                    |
| `--color-text`       | `#111827` | Primary text                         |
| `--color-text-secondary` | `#6B7280` | Descriptions, metadata            |
| `--color-success`    | `#10B981` | Success states, completed goals     |
| `--color-warning`    | `#F59E0B` | Warnings, ending soon              |
| `--color-error`      | `#EF4444` | Errors, urgent alerts               |

### Dark Mode

| Token               | Hex       | Usage                                 |
| -------------------- | --------- | ------------------------------------- |
| `--color-primary`    | `#34D399` | Primary actions, links               |
| `--color-primary-light` | `#064E3B` | Primary tint                      |
| `--color-primary-dark`  | `#6EE7B7` | Hover states                      |
| `--color-secondary`  | `#FBBF24` | Accents, urgency                    |
| `--color-secondary-light` | `#78350F` | Secondary tint                  |
| `--color-heart`      | `#F87171` | Donate heart icon                   |
| `--color-bg`         | `#0F172A` | Page background                      |
| `--color-surface`    | `#1E293B` | Cards, panels                        |
| `--color-surface-alt`| `#334155` | Alternate surface                    |
| `--color-border`     | `#475569` | Borders, dividers                    |
| `--color-text`       | `#F1F5F9` | Primary text                         |
| `--color-text-secondary` | `#94A3B8` | Descriptions, metadata            |
| `--color-success`    | `#34D399` | Success states                       |
| `--color-warning`    | `#FBBF24` | Warnings                             |
| `--color-error`      | `#F87171` | Errors                               |

---

## Typography

| Role         | Font                  | Weight     | Size       | Line Height |
| ------------ | --------------------- | ---------- | ---------- | ----------- |
| H1           | Merriweather, serif   | 700        | 2.5 rem    | 1.2         |
| H2           | Merriweather, serif   | 700        | 2 rem      | 1.25        |
| H3           | Inter, sans-serif     | 600        | 1.5 rem    | 1.3         |
| H4           | Inter, sans-serif     | 600        | 1.25 rem   | 1.35        |
| Body         | Inter, sans-serif     | 400        | 1 rem      | 1.6         |
| Body Small   | Inter, sans-serif     | 400        | 0.875 rem  | 1.5         |
| Caption      | Inter, sans-serif     | 400        | 0.75 rem   | 1.4         |
| Button       | Inter, sans-serif     | 600        | 0.875 rem  | 1           |
| Stats Number | Merriweather, serif   | 700        | 2.5 rem    | 1           |
| Blockquote   | Merriweather, serif   | 400 italic | 1.25 rem   | 1.6         |

> **Font Stack:** Merriweather (Google Fonts) for emotional headlines & impact numbers; Inter for readable body text and UI elements.

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
| `--radius-sm`       | 0.375 rem |
| `--radius-md`       | 0.5 rem   |
| `--radius-lg`       | 0.75 rem  |
| `--radius-xl`       | 1 rem     |
| `--radius-2xl`      | 1.5 rem   |
| `--radius-full`     | 9999px    |

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
| `--max-width`        | 1200px    |
| `--header-height`    | 72px      |
| `--sidebar-width`    | 260px     |
| `--grid-gap`         | 1.5 rem   |
| `--section-padding`  | 5 rem     |

---

## Component Tokens

### Campaign Card
| Token                      | Value                          |
| --------------------------- | ------------------------------ |
| `--card-radius`             | var(--radius-xl)               |
| `--card-shadow`             | var(--shadow-md)               |
| `--card-hover-shadow`       | var(--shadow-lg)               |
| `--card-padding`            | var(--sp-6)                    |

### Progress Bar
| Token                      | Value                          |
| --------------------------- | ------------------------------ |
| `--progress-height`         | 10px                           |
| `--progress-radius`         | var(--radius-full)             |
| `--progress-track`          | var(--color-surface-alt)       |
| `--progress-fill`           | linear-gradient(90deg, var(--color-primary), var(--color-secondary)) |

### Donate Button
| Token                      | Value                          |
| --------------------------- | ------------------------------ |
| `--donate-bg`               | var(--color-heart)             |
| `--donate-hover-bg`         | #DC2626                        |
| `--donate-text`             | #FFFFFF                        |
| `--donate-radius`           | var(--radius-full)             |
| `--donate-padding`          | var(--sp-3) var(--sp-8)        |

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
| Hover lift            | 200ms    | ease-out               | Cards                    |
| Progress bar fill     | 1200ms   | ease-out               | Campaign progress        |
| Count-up              | 2000ms   | ease-out               | Impact stat numbers      |
| Confetti burst        | 3000ms   | ease-out               | Donation success         |
| Countdown flip        | 600ms    | ease-in-out            | Event timer digits       |
| Toast slide-in        | 300ms    | cubic-bezier(.4,0,.2,1)| Notifications            |
| Toast fade-out        | 200ms    | ease-in                | Notification dismiss     |
| Heart pulse           | 1000ms   | ease-in-out (infinite) | Donate button idle       |
| Modal scale-in        | 250ms    | cubic-bezier(.4,0,.2,1)| Modal open               |
| Page fade-in          | 400ms    | ease-out               | Page transitions         |

---

## Breakpoints

| Name     | Min Width |
| -------- | --------- |
| Mobile   | 0         |
| Tablet   | 768px     |
| Desktop  | 1024px    |
| Wide     | 1280px    |
