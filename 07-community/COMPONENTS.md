# Community / Social — Component Specifications

---

## 1. VoteButton

Vertical voting control used on forum Q&A posts and answers.

### Structure

```
  ▲        Upvote arrow
  24       Score count
  ▼        Downvote arrow
```

### States

| State | Up Arrow | Score | Down Arrow |
|-------|----------|-------|------------|
| Neutral | `#78716C` | `#1C1917` | `#78716C` |
| Upvoted | `#EA580C` filled | `#EA580C` bold | `#78716C` |
| Downvoted | `#78716C` | `#DC2626` bold | `#DC2626` filled |

### Interactions

- Click upvote: score increments, arrow fills with accent color, number pulses
- Click downvote: score decrements, arrow fills red, number pulses
- Click active vote again: removes vote, returns to neutral
- Optimistic update: UI changes immediately, reverts on error
- Cannot vote on own posts

### Sizing

| Size | Arrow | Font | Click Target |
|------|-------|------|-------------|
| Default | 20px | 16px 700 | 36×36px |
| Compact | 16px | 14px 600 | 28×28px |

---

## 2. ThreadCard

Card component for forum/Q&A thread listings.

### Structure

```
┌──────────────────────────────────────────────────┐
│  [av] username · 🔵 Expert (1.2K) · 3h ago      │
│                                                   │
│  Thread Title Goes Here (font-weight: 700)       │
│  First 100 chars of body text preview...         │
│                                                   │
│  [react] [hooks] [state]  ▲ 24  💬 12  👁 340    │
└──────────────────────────────────────────────────┘
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| title | string | Thread title (max 2 lines) |
| preview | string | Body preview (100 chars) |
| author | object | { name, avatar, reputation, level } |
| votes | number | Net vote count |
| answers | number | Answer count |
| views | number | View count |
| tags | string[] | Up to 4 tags |
| timeAgo | string | Relative time |
| isPinned | boolean | Show pin icon |
| hasAcceptedAnswer | boolean | Green checkmark icon |

### Hover

- Background shifts to `--bg-tertiary`
- Subtle left border accent appears (3px `--accent`)
- `cursor: pointer`

---

## 3. JobCard

Job listing card with company info and quick actions.

### Structure

```
┌──────────────────────────────────────────────────┐
│  [company logo]  Senior React Developer          │
│                  Acme Corp · ✓ Verified           │
│                  📍 Remote · 💰 $120K-$150K       │
│                  Full-time · Posted 2h ago        │
│                                                   │
│  [React] [Node.js] [TypeScript]                  │
│                                                   │
│  [🔖 Save]                          [Apply →]    │
└──────────────────────────────────────────────────┘
```

### Badge Variants

| Badge | Background | Text |
|-------|-----------|------|
| Remote | `#DCFCE7` | `#166534` |
| Full-time | `#DBEAFE` | `#1E40AF` |
| Part-time | `#FEF3C7` | `#92400E` |
| Contract | `#EDE9FE` | `#6D28D9` |
| Urgent | `#FEE2E2` | `#991B1B` |

### States

| State | Visual |
|-------|--------|
| Default | White bg, subtle border |
| Hover | Lift + shadow-md |
| Saved | Filled bookmark icon, accent color |
| Applied | "Applied ✓" replaces Apply button, muted |

---

## 4. EventCard

Event listing card with date, location, and RSVP.

### Structure

```
┌──────────────────────────────────────────────────┐
│  [          Cover Image (16:9)                 ] │
│  [MAR]                                           │
│  [15 ]                                           │
├──────────────────────────────────────────────────┤
│  React Global Summit 2026                        │
│  📅 Mar 15-16 · 🕐 9 AM EST                     │
│  📍 Online Event                                 │
│  👥 245 going                                    │
│                                                   │
│  [RSVP]  [Interested]    Free / $49              │
└──────────────────────────────────────────────────┘
```

### Date Badge (overlay on image, top-left)

```css
.date-badge {
  background: white;
  border-radius: 8px;
  padding: 4px 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.date-badge__month { font-size: 11px; color: #DC2626; font-weight: 700; text-transform: uppercase; }
.date-badge__day { font-size: 20px; font-weight: 700; color: #1C1917; }
```

---

## 5. ListingCard

Directory/business listing card with rating and status.

### Structure (Grid View)

```
┌──────────────────────────────────────────────────┐
│  [          Photo (4:3)                        ] │
├──────────────────────────────────────────────────┤
│  Cafe Luna                                       │
│  ★★★★★ 4.8 (340) · $$                           │
│  ☕ Coffee · 📍 0.3 mi                           │
│  🟢 Open · Closes at 10 PM                       │
└──────────────────────────────────────────────────┘
```

### Structure (List View)

```
┌──────┬───────────────────────────────────────────┐
│[photo│ Cafe Luna · ★★★★★ 4.8 (340) · $$         │
│  80px│ ☕ Coffee · 📍 0.3 mi · 🟢 Open            │
│     ]│ "Best coffee in town, amazing latte art..." │
└──────┴───────────────────────────────────────────┘
```

### Open/Closed Indicator

| Status | Icon | Color | Text |
|--------|------|-------|------|
| Open | 🟢 | `#16A34A` | "Open · Closes at {time}" |
| Closing Soon | 🟡 | `#D97706` | "Closes in 30 min" |
| Closed | 🔴 | `#DC2626` | "Closed · Opens at {time}" |

---

## 6. ReviewCard

Individual user review with rating and helpful voting.

### Structure

```
┌──────────────────────────────────────────────────┐
│  [av] Tahsan Islam · 🟢 Contributor · ⭐ 12 reviews│
│  ★★★★★  "Amazing atmosphere and coffee"         │
│  Feb 15, 2026                                    │
│                                                   │
│  Full review text here. The coffee was fantastic  │
│  and the barista was incredibly skilled...        │
│                                                   │
│  [📸 photo1] [📸 photo2]                          │
│                                                   │
│  👍 Helpful (12)  👎 (2)  [🚩 Report]            │
│                                                   │
│  ┌─ Owner Response ──────────────────────────┐   │
│  │ [av] Cafe Luna · Owner                    │   │
│  │ Thank you for the kind words, Tahsan!     │   │
│  └───────────────────────────────────────────┘   │
└──────────────────────────────────────────────────┘
```

---

## 7. UserAvatar

Avatar component with online status and reputation badge.

### Structure

```
┌────┐
│ AV │ ● (status dot, bottom-right)
└────┘
🔵 (reputation level badge, optional)
```

### Sizes

| Size | Dimension | Status Dot | Usage |
|------|-----------|-----------|-------|
| xs | 24px | none | Inline mentions |
| sm | 32px | 6px | Comment threads |
| md | 40px | 8px | Cards, feed items |
| lg | 64px | 10px | Profile headers |
| xl | 96px | 14px | Profile page |

### Fallback

- If no image: Show initials on accent-colored circle
- Initials: First letters of first + last name
- Colors cycle through preset palette based on user ID hash

---

## 8. ReputationBadge

Inline badge showing user level based on reputation points.

### Variants

```
🔘 Newcomer (12)     — gray
🟢 Contributor (450)  — green
🔵 Expert (1,200)     — blue
🟣 Master (3,400)     — purple
🟠 Legend (5,200)     — orange (accent)
```

### Styling

```css
.rep-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--level-bg);
  color: var(--level-color);
}
```

---

## 9. TagPill

Clickable tag/category pill used across all modules.

### Structure

```
[react]  [javascript]  [hooks]  [state-management]
```

### States

| State | Background | Text | Border |
|-------|-----------|------|--------|
| Default | `#F5F5F4` | `#57534E` | none |
| Hover | `#FFF7ED` | `#EA580C` | none |
| Active/Selected | `#EA580C` | `#FFFFFF` | none |
| Module-colored | Module accent bg (10%) | Module accent | none |

### Sizing

| Size | Padding | Font |
|------|---------|------|
| sm | 2px 6px | 11px |
| md | 4px 10px | 13px |
| lg | 6px 14px | 14px |

---

## 10. NotificationDropdown

Bell icon dropdown showing recent notifications.

### Structure

```
┌──────────────────────────────────────┐
│  Notifications          [Mark all ✓] │
├──────────────────────────────────────┤
│  ● [av] Sarah upvoted your answer   │
│    "How to manage state..." · 5m ago │
├──────────────────────────────────────┤
│  ● [av] You earned: 🥈 100 Upvotes  │
│    Congratulations! · 1h ago         │
├──────────────────────────────────────┤
│    [av] New event: React Summit      │
│    March 15-16, 2026 · 3h ago        │
├──────────────────────────────────────┤
│    [av] Acme Corp viewed your app    │
│    Senior React Dev · 5h ago         │
├──────────────────────────────────────┤
│           [View All →]               │
└──────────────────────────────────────┘
```

### Item States

| State | Visual |
|-------|--------|
| Unread | Blue dot `●`, slightly highlighted bg |
| Read | No dot, normal bg |
| Hover | `--bg-tertiary` background |

### Badge on Bell Icon

- Red circle with white count
- Max display: "99+"
- Pulse animation on new notification

---

## 11. MapView (Leaflet)

Interactive map component for directory listings.

### Features

- Custom styled tiles (warm, muted colors matching design system)
- Custom pin markers with category icon
- Cluster markers for dense areas
- Click pin → popup card with listing preview
- Hover card on pin → mini info (name, rating)
- Zoom controls: `+` / `−` buttons (styled to match design)
- "Use my location" button

### Popup Card

```
┌──────────────────────┐
│ [img] Cafe Luna      │
│ ★★★★★ 4.8 · $$      │
│ 🟢 Open now          │
│ [View Details →]     │
└──────────────────────┘
```

---

## 12. SearchOverlay

Global search modal triggered by `Ctrl+K`.

### Structure

```
┌──────────────────────────────────────────────────┐
│                                     [ESC]        │
│  🔍 [Search everything...                    ]   │
│                                                   │
│  ── RESULTS ────────────────────────────────      │
│                                                   │
│  💬 DISCUSSIONS                                   │
│  · How to manage state in React — ▲ 24           │
│  · Best practices for useEffect — ▲ 18           │
│                                                   │
│  💼 JOBS                                          │
│  · Senior React Developer — Acme Corp            │
│  · UX Designer — DesignCo                        │
│                                                   │
│  📅 EVENTS                                        │
│  · React Global Summit — Mar 15                  │
│                                                   │
│  👤 USERS                                         │
│  · [av] JohnDoe · 🔵 Expert                     │
│                                                   │
│  ── RECENT SEARCHES ────────────────────────      │
│  react hooks · remote jobs · coffee shops         │
└──────────────────────────────────────────────────┘
```

### Behavior

- `Ctrl+K` or `/` to open
- Debounce: 300ms
- ESC or click backdrop to close
- Backdrop: `rgba(0,0,0,0.5)` with `backdrop-filter: blur(4px)`
- Arrow keys navigate results, Enter to select
- Results max: 3 per category

---

## 13. MarkdownEditor

Rich text editor for forum posts, reviews, and event descriptions.

### Toolbar

```
[B] [I] [~~] [Code] [```] [Link] [Image] [List] [Quote] | [Preview]
```

### Features

- Live markdown preview toggle (split or tab)
- Code blocks with language selector for syntax highlighting
- Image upload via drag-and-drop or button
- Link insertion dialog
- Keyboard shortcuts (Ctrl+B bold, Ctrl+I italic, etc.)
- Auto-grow textarea
- Character/word count at bottom

---

## 14. SkeletonLoader

Placeholder loading states for all content types.

### Variants

```
Thread Skeleton:
┌──────────────────────────────────────┐
│  [○] ▓▓▓▓▓▓ · ▓▓▓▓ · ▓▓             │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                 │
│  [▓▓▓] [▓▓▓]  ▓▓  ▓▓  ▓▓           │
└──────────────────────────────────────┘

Job Card Skeleton:
┌──────────────────────────────────────┐
│  [□] ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓               │
│      ▓▓▓▓▓▓▓▓ · ▓▓▓▓▓               │
│      ▓▓▓▓▓ · ▓▓▓▓▓▓▓                │
│  [▓▓▓▓] [▓▓▓] [▓▓▓▓▓]              │
└──────────────────────────────────────┘
```

### Animation

```css
.skeleton {
  background: linear-gradient(90deg, #F5F5F4 25%, #E7E5E4 50%, #F5F5F4 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## 15. BottomNavBar (Mobile)

Fixed bottom navigation for mobile viewport.

### Structure

```
┌──────────────────────────────────────┐
│  🏠     💼     💬     📅      👤     │
│ Home   Jobs  Forum  Events   Me     │
└──────────────────────────────────────┘
```

### Specs

- Height: 64px + safe area inset
- Background: `--bg-secondary` with top border
- Active item: accent color icon + label
- Inactive: `--text-tertiary`
- Tap feedback: subtle background ripple
- Badge on Forum icon for unread count
