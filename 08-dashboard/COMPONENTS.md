# Dashboard / SaaS — Component Specifications

---

## 1. KPICard

Key performance indicator card with metric, trend, and sparkline.

### Structure

```
┌──────────────────────┐
│  Total Revenue       │  Label (caption, secondary)
│  $52,400             │  Value (32px, Geist Mono, bold)
│  ▲ 12.5% vs last mo │  Trend (green/red + text)
│  ╱╱╱╲╱╱             │  Sparkline (Chart.js mini)
└──────────────────────┘
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| label | string | Metric name |
| value | number/string | Display value (formatted) |
| change | number | Percentage change |
| changeLabel | string | "vs last month" |
| sparklineData | number[] | Last 7-30 data points |
| icon | string | Optional Lucide icon name |
| href | string | Click-through URL |

### Trend Color

| Condition | Color | Icon |
|-----------|-------|------|
| change > 0 | `#22C55E` | `▲` |
| change < 0 | `#EF4444` | `▼` |
| change === 0 | `#A1A1AA` | `→` |

### Animation

- Number counts up from 0 on mount (800ms, ease-out)
- Sparkline draws left-to-right (600ms)

---

## 2. ChartCard

Wrapper card for Chart.js visualizations.

### Structure

```
┌──────────────────────────────────────────┐
│  Revenue Overview     [7d][30d][90d][12m]│
│                                          │
│           Chart.js Canvas                │
│         (line / bar / area / doughnut)   │
│                                          │
│  — Revenue  — Expenses  — Profit         │
└──────────────────────────────────────────┘
```

### Features

- Title bar with time range toggle buttons
- Chart.js responsive canvas
- Interactive legend (click to toggle datasets)
- Tooltip on hover with formatted values
- Loading: skeleton placeholder while data loads
- Gradient fills for area charts matching chart color at 10% opacity

### Time Range Buttons

| State | Background | Text |
|-------|-----------|------|
| Default | transparent | `--text-secondary` |
| Active | `--bg-tertiary` | `--text-primary` |
| Hover | `--bg-tertiary` at 50% | `--text-primary` |

---

## 3. DataTable

Full-featured sortable, filterable data table.

### Header Row

```
┌───┬──────────────┬───────────────┬──────────┬─────┐
│ ☐ │ Name    ↑↓   │ Email          │ Status   │ ⋯  │
└───┴──────────────┴───────────────┴──────────┴─────┘
```

### Sort States

| State | Icon | Header Style |
|-------|------|-------------|
| None | `↕` (muted) | Normal |
| Ascending | `↑` (accent) | Bold |
| Descending | `↓` (accent) | Bold |

### Row States

| State | Background | Notes |
|-------|-----------|-------|
| Default | transparent | |
| Hover | `--bg-tertiary` | Full row highlight |
| Selected | `--accent-muted` | Checkbox filled |
| Alternating | Subtle 2% white overlay | Optional |

### Bulk Action Bar

- Appears when 1+ rows selected
- Fixed at bottom of table area
- Shows: "{n} selected [Action1] [Action2] [More ▼]"
- Background: `--bg-secondary` with top border

### Pagination

```
Showing 1-25 of 342 results   [10 ▼]   ← 1 2 3 ... 12 →
```

- Items per page: dropdown with options
- Page numbers: active page has accent bg
- Prev/Next: disabled at boundaries

---

## 4. Sidebar

Application sidebar navigation.

### Expanded (240px)

```
┌────────────────────┐
│  [Logo] AppName    │
├────────────────────┤
│  📊 Dashboard      │  ← active (accent bg)
│  📋 Data Tables    │
│  ────────────────  │
│  CRM               │  section label
│  👤 Contacts       │
│  🔀 Pipeline       │
│  ────────────────  │
│  FINANCE           │
│  💰 Overview       │
│  🧾 Invoices       │
│  ────────────────  │
│  📈 Analytics      │
│  ────────────────  │
│  ⚙ Settings       │
│  🔔 Notifications  │
├────────────────────┤
│  [av] Tahsan       │
│  Org Name  ▼       │
│  [◀ Collapse]      │
└────────────────────┘
```

### Collapsed (64px)

```
┌──────┐
│ [L]  │
├──────┤
│  📊  │  ← tooltip "Dashboard" on hover
│  📋  │
│  ──  │
│  👤  │
│  🔀  │
│  ──  │
│  💰  │
│  🧾  │
│  ──  │
│  📈  │
│  ──  │
│  ⚙  │
│  🔔  │
├──────┤
│ [av] │
│ [▶]  │
└──────┘
```

### Active Item

```css
.nav-item--active {
  background: var(--accent-muted);
  color: var(--accent);
  font-weight: 600;
  border-left: 3px solid var(--accent);
}
```

---

## 5. CommandPalette

Global command palette triggered by `Cmd+K` / `Ctrl+K`.

### Structure

```
┌──────────────────────────────────────────┐
│  🔍 [Type a command or search...]       │
├──────────────────────────────────────────┤
│                                          │
│  NAVIGATION                              │
│  > 📊 Dashboard                Cmd+1    │
│  > 📋 Data Tables              Cmd+2    │
│  > 👤 Contacts                 Cmd+3    │
│                                          │
│  ACTIONS                                 │
│  > + Create Invoice            Cmd+N    │
│  > + Add Contact                        │
│  > ↗ Export Data               Cmd+E    │
│                                          │
│  RECENT                                  │
│  > Invoice #1042                        │
│  > John Doe (contact)                   │
│                                          │
└──────────────────────────────────────────┘
```

### Behavior

- `Cmd+K` to open/close
- Type to filter results instantly
- Arrow keys navigate, Enter selects
- ESC closes
- Backdrop: `rgba(0,0,0,0.6)` + `backdrop-filter: blur(4px)`
- Result items: icon + label + optional shortcut
- Selected item: accent-muted background

---

## 6. KanbanColumn

Single column in the CRM pipeline board.

### Structure

```
┌──────────────────────┐
│  LEAD   5 · $24,000  │  Header with count and total value
├──────────────────────┤
│                      │
│  ┌──────────────────┐│  Draggable card
│  │ Acme Corp        ││
│  │ $5,000           ││
│  │ [av] John · 3d   ││
│  └──────────────────┘│
│                      │
│  ┌──────────────────┐│
│  │ NextGen Inc      ││
│  │ $4,200           ││
│  │ [av] Jane · 1d   ││
│  └──────────────────┘│
│                      │
│  [+ Add Deal]        │
└──────────────────────┘
```

### Column Header Colors

| Stage | Accent Bar (top 3px) |
|-------|---------------------|
| Lead | `#A1A1AA` (gray) |
| Qualified | `#3B82F6` (blue) |
| Proposal | `#EAB308` (yellow) |
| Negotiation | `#F97316` (orange) |
| Won | `#22C55E` (green) |
| Lost | `#EF4444` (red) |

### Drag & Drop

- Card lifts with shadow on drag start
- Drop zone highlights with dashed border
- Placeholder shows where card will land
- Smooth reflow animation on drop (200ms)

---

## 7. KanbanCard

Individual deal card within a pipeline column.

### Structure

```
┌──────────────────────┐
│  Acme Corp           │  Company name (bold)
│  💰 $5,000           │  Deal value (mono font)
│  [av] John Doe       │  Owner avatar + name
│  🕐 3 days           │  Days in current stage
│  ● High              │  Priority dot + label
└──────────────────────┘
```

### Hover State

- Subtle border color change to `--border-hover`
- Shadow lifts to `--shadow-md`
- Quick action icons appear: Edit, Archive

### Priority Dot

| Priority | Color |
|----------|-------|
| Critical | `#EF4444` |
| High | `#F97316` |
| Medium | `#EAB308` |
| Low | `#22C55E` |

---

## 8. StatusBadge

Pill-shaped status indicator used across tables and cards.

### Variants

```
[● Active]  [● Pending]  [● Inactive]  [● Error]
```

### Specs

| Status | Dot | Background | Text |
|--------|-----|-----------|------|
| Active | `#22C55E` | `rgba(34,197,94,0.1)` | `#22C55E` |
| Pending | `#EAB308` | `rgba(234,179,8,0.1)` | `#EAB308` |
| Inactive | `#A1A1AA` | `rgba(161,161,170,0.1)` | `#A1A1AA` |
| Error | `#EF4444` | `rgba(239,68,68,0.1)` | `#EF4444` |
| Paid | `#22C55E` | `rgba(34,197,94,0.1)` | `#22C55E` |
| Overdue | `#EF4444` | `rgba(239,68,68,0.1)` | `#EF4444` |
| Draft | `#71717A` | `rgba(113,113,122,0.1)` | `#71717A` |

### Styling

```css
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
}
.status-badge__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
```

---

## 9. SlideOverPanel

Right-side slide-over panel for detail views (contact detail, etc.).

### Structure

```
                          ┌──────────────────────┐
                          │  Contact Detail  [✕] │
                          ├──────────────────────┤
                          │                      │
                          │  ┌────┐              │
                          │  │ AV │ John Doe     │
                          │  └────┘ john@acme.com│
                          │  Acme Corp · CEO     │
                          │  📞 +1 555-0123      │
                          │                      │
                          │  [Edit] [Delete]     │
                          │                      │
                          │  ── ACTIVITY ──────  │
                          │  ● Email sent · 2h   │
                          │  ● Call logged · 1d  │
                          │  ● Note added · 3d   │
                          │                      │
                          │  ── DEALS ─────────  │
                          │  Pipeline A · $5,000 │
                          │                      │
                          │  ── NOTES ─────────  │
                          │  Interested in Pro   │
                          │  plan upgrade...     │
                          │                      │
                          │  [+ Add Note]        │
                          └──────────────────────┘
```

### Specs

- Width: 480px (desktop), full-width (mobile)
- Backdrop: `rgba(0,0,0,0.3)` click to close
- Slide-in: 250ms from right, cubic-bezier
- Close: ✕ button or ESC key
- Scrollable content area

---

## 10. InvoiceBuilder

Line items table for creating/editing invoices.

### Structure

```
┌──────────────────────────────────────────────┐
│  Item           │ Qty │  Rate   │  Amount    │
├─────────────────┼─────┼─────────┼────────────┤
│ [Web Design   ] │ [1] │ [$3000] │  $3,000.00 │
│ [Development  ] │ [40]│ [$100 ] │  $4,000.00 │
│ [Hosting      ] │ [1] │ [$200 ] │    $200.00 │
│                 │     │         │            │
│ [+ Add Line Item]                             │
├──────────────────────────────────────────────┤
│                        Subtotal:  $7,200.00  │
│                        Tax (10%):   $720.00  │
│                        Discount:      $0.00  │
│                        ─────────────────     │
│                        Total:     $7,920.00  │
└──────────────────────────────────────────────┘
```

### Features

- Add/remove line items dynamically
- Auto-calculate: amount = qty × rate
- Auto-sum subtotal, tax, discount, total
- Inline editing in all fields
- Delete row: X button on hover (right side)
- Tab key navigates between fields

---

## 11. ToastNotification

Non-blocking notification toast stack.

### Variants

```
Success:  ┌─ ✓ Invoice sent successfully ──────── ✕ ─┐
Error:    ┌─ ✗ Failed to save changes ──── [Retry] ✕ ─┐
Warning:  ┌─ ⚠ Rate limit approaching ──────────── ✕ ─┐
Info:     ┌─ ℹ New version available ──── [Update] ✕ ─┐
```

### Specs

| Variant | Left Border | Icon Color |
|---------|------------|-----------|
| Success | `#22C55E` | `#22C55E` |
| Error | `#EF4444` | `#EF4444` |
| Warning | `#EAB308` | `#EAB308` |
| Info | `#3B82F6` | `#3B82F6` |

### Behavior

- Position: top-right, 24px from edges
- Stack: max 3 visible, newest on top
- Auto-dismiss: 5000ms (configurable)
- Enter: slide-in from right (300ms)
- Exit: fade + slide-right (200ms)
- Optional action button inline
- Progress bar at bottom showing time remaining

---

## 12. EmptyState

Placeholder for empty tables, lists, and sections.

### Structure

```
┌──────────────────────────────────────────┐
│                                          │
│              [illustration]              │
│                                          │
│          No invoices yet                 │
│    Create your first invoice to get      │
│    started with billing.                 │
│                                          │
│          [+ Create Invoice]              │
│                                          │
└──────────────────────────────────────────┘
```

### Context-Specific Messages

| Context | Title | CTA |
|---------|-------|-----|
| Invoices | "No invoices yet" | "Create Invoice" |
| Contacts | "No contacts added" | "Add Contact" |
| Search (no results) | "No results found" | "Clear Filters" |
| Notifications | "All caught up!" | (none) |
| Pipeline | "No deals in this stage" | "Add Deal" |

---

## 13. BreadcrumbNav

Hierarchical breadcrumb navigation in the header.

### Structure

```
Dashboard  >  Finance  >  Invoices  >  INV-1042
```

### Specs

- Separator: `>` or `/` character in muted color
- Items: links except last (current page, bold)
- Truncation: On mobile, show `... > Parent > Current`
- Font: 14px, `--text-secondary` for links, `--text-primary` for current

---

## 14. FilterBar

Horizontal filter controls for tables and lists.

### Structure

```
🔍 [Search...]  [Status ▼] [Category ▼] [Date Range ▼]  [+ Add Filter]

Active: [Status: Active ✕] [Category: Sales ✕]  [Clear all]
```

### Filter Dropdown

```
┌────────────────────┐
│  Status            │
│  ☑ Active          │
│  ☐ Pending         │
│  ☐ Inactive        │
│  ────────────────  │
│  [Apply]  [Reset]  │
└────────────────────┘
```

### Active Filter Chip

```css
.filter-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: var(--accent-muted);
  color: var(--accent);
  border-radius: 6px;
  font-size: 12px;
}
.filter-chip__remove {
  cursor: pointer;
  opacity: 0.7;
}
```

---

## 15. SettingsNavPanel

Left-side navigation within the settings page.

### Structure

```
┌──────────────────┐
│  ● Account       │  ← active (accent color, bold)
│  ○ Team          │
│  ○ Billing       │
│  ○ Integrations  │
│  ○ API           │
│  ○ Appearance    │
│  ○ Notifications │
└──────────────────┘
```

### Specs

- Width: 200px
- Active item: left border accent, accent text color
- Hover: `--bg-tertiary` background
- Mobile: Horizontal scroll tabs at top
- Sticky positioning alongside scrollable settings content
