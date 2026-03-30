# Education / LMS — Component Specifications

---

## 1. CourseCard

Display component for course items in listings and carousels.

### Structure

```
┌──────────────────────┐
│  [ Thumbnail Image ] │  280 × 158px (16:9)
│  [Badge]             │  top-left overlay
├──────────────────────┤
│  Category · Duration │  caption / muted
│  Course Title (2ln)  │  font-weight: 700
│  Instructor Name     │  font-size: 14px
│  ★★★★★ 4.8 (1,234)  │  star color: #F59E0B
│  $49.99  ̶$̶9̶9̶.̶9̶9̶     │  price + strikethrough
└──────────────────────┘
```

### Props

| Prop | Type | Description |
|------|------|-------------|
| thumbnail | string | Course thumbnail URL |
| title | string | Course title (max 2 lines, ellipsis) |
| instructor | string | Instructor name |
| rating | number | Average rating 0-5 |
| ratingCount | number | Total ratings |
| price | number | Current price |
| originalPrice | number | Crossed-out original price |
| badge | string | "Bestseller" \| "New" \| "Free" \| null |
| category | string | Category label |
| duration | string | Total duration "20h 30m" |

### Badges

| Badge | Background | Text |
|-------|-----------|------|
| Bestseller | `#FEF3C7` | `#92400E` |
| New | `#EDE9FE` | `#6D28D9` |
| Free | `#DCFCE7` | `#166534` |
| Hot | `#FEE2E2` | `#991B1B` |

### Hover State

- Card lifts `translateY(-4px)`, `box-shadow: 0 12px 24px rgba(0,0,0,0.1)`
- Thumbnail overlay fades in with `Preview this course` text and ▶ icon
- Transition: `0.25s ease`

---

## 2. CurriculumAccordion

Expandable course curriculum with sections and lessons.

### Section Header

```
┌──────────────────────────────────────────────────┐
│  ▼  Section 1: Introduction to React   3 lessons │
│     25 min total                                  │
└──────────────────────────────────────────────────┘
```

### Expanded Content

```
│  ▶ Welcome to the Course            5:00   FREE  │
│  ▶ Environment Setup                10:00  🔒    │
│  📝 Quiz: Getting Started           —      🔒    │
```

### Lesson Types & Icons

| Type | Icon | Label |
|------|------|-------|
| Video | ▶ | Duration "12:30" |
| Article | 📄 | "Article" |
| Quiz | 📝 | "Quiz" |
| Assignment | 📂 | "Assignment" |
| Resource | 📎 | "Download" |

### States

| State | Visual |
|-------|--------|
| Collapsed | `▶` chevron, summary line |
| Expanded | `▼` chevron, lesson list visible |
| Completed section | Green checkmark replaces chevron |
| Locked section | 🔒 icon on lessons, muted text |

---

## 3. VideoPlayer (Custom)

Full-featured custom HTML5 video player for learning.

### Layout

```
┌──────────────────────────────────────────────────┐
│                                                   │
│                  VIDEO CONTENT                    │
│                                                   │
│                     ▶ / ⏸                         │
│                                                   │
├──────────────────────────────────────────────────┤
│  ●──────────────────────○──────  12:30 / 25:00   │
│  ⏮ ◁ ⏸ ▷ ⏭  [1x ▼]  🔊━━━━━○  📝 [CC] ⛶       │
└──────────────────────────────────────────────────┘
```

### Controls

| Control | Function |
|---------|----------|
| ⏮ / ⏭ | Previous / next lesson |
| ◁ / ▷ | Skip back / forward 10s |
| ⏸ / ▶ | Play / pause (space bar) |
| 1x dropdown | Speed: 0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x |
| 🔊 slider | Volume control |
| 📝 | Add note at timestamp |
| CC | Subtitles toggle |
| ⛶ | Fullscreen toggle |

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Space / K | Play / Pause |
| ← / → | Skip ±5s |
| J / L | Skip ±10s |
| F | Fullscreen |
| M | Mute |
| ↑ / ↓ | Volume ±5% |

### Progress Bar

- Played: accent purple `#7C3AED`
- Buffered: `rgba(124, 58, 237, 0.3)`
- Remaining: `#E5E7EB`
- Chapters marked with small dots on timeline

---

## 4. ProgressBar

Reusable linear progress indicator.

### Variants

```
Standard:
████████████░░░░░░░  65%

Slim (in cards):
████████░░░░  40%

Labeled:
JavaScript Fundamentals
████████████████░░░  85%  ✓
```

### Sizes

| Size | Height | Border Radius |
|------|--------|---------------|
| sm | 4px | 2px |
| md | 8px | 4px |
| lg | 12px | 6px |

### Color Thresholds

| Progress | Fill Color |
|----------|-----------|
| 0–25% | `#EF4444` (red) |
| 25–50% | `#F59E0B` (amber) |
| 50–75% | `#7C3AED` (purple) |
| 75–100% | `#10B981` (green) |

---

## 5. RatingStars

Star rating display and interactive rating input.

### Display Mode

```
★★★★☆  4.2  (1,234 ratings)
```

- Filled star: `#F59E0B`
- Empty star: `#D1D5DB`
- Supports half stars via CSS clip-path

### Input Mode

```
Rate this course:
☆ ☆ ☆ ☆ ☆
```

- Hover: stars fill on hover from left to right
- Click: locks in the rating
- Hover tooltip: "1 - Poor", "2 - Fair", "3 - Good", "4 - Very Good", "5 - Excellent"

---

## 6. EnrollSidebar

Sticky sidebar for course detail page with enrollment CTA.

### Structure

```
┌──────────────────────┐
│  [ Preview Video ]   │
│       ▶ Play         │
├──────────────────────┤
│  $49.99   ̶$̶9̶9̶.̶9̶9̶    │
│  50% off — 2 days!   │
│                      │
│  [████ Enroll Now ██]│  Primary CTA
│  [  Add to Wishlist ]│  Secondary outline
│                      │
│  30-Day Guarantee    │
│                      │
│  This course includes│
│  📹 20h on-demand    │
│  📄 15 articles      │
│  📝 5 quizzes        │
│  🏆 Certificate      │
│  📱 Mobile access    │
│  ♾️  Lifetime access  │
│                      │
│  [Share] [Gift]      │
└──────────────────────┘
```

### Behavior

- Sticky positioning: `position: sticky; top: 24px`
- On mobile: collapses into fixed bottom bar with price + `[Enroll Now]`
- Price animation: large to small pulse on load
- Countdown timer for sales: red accent background

---

## 7. LessonSidebar

Collapsible sidebar for the learning player with curriculum navigation.

### Structure

```
┌──────────────────────┐
│  Course Progress     │
│  ████████░░░  65%    │
├──────────────────────┤
│  ▼ Section 1: Intro  │
│    ✅ 1. Welcome     │
│    ✅ 2. Setup       │
│    ▶ᐳ 3. First App  │  ← Currently playing
│    ○ 4. Components   │
├──────────────────────┤
│  ▶ Section 2: State  │
│  🔒 Section 3: Adv.  │
└──────────────────────┘
```

### Lesson Item States

| State | Icon | Text Style |
|-------|------|-----------|
| Completed | ✅ | Strikethrough, muted |
| Current | ▶ᐳ | Bold, accent color |
| Available | ○ | Normal |
| Locked | 🔒 | Muted, cursor: not-allowed |

### Responsive

- Desktop: fixed sidebar 320px wide
- Tablet: overlay drawer, triggered by hamburger
- Mobile: full-screen overlay with close button

---

## 8. NotesPanel

In-lesson note-taking panel below the video player.

### Structure

```
┌──────────────────────────────────────┐
│  📝 My Notes            [+ Add Note] │
├──────────────────────────────────────┤
│  ┌────────────────────────────────┐  │
│  │ 🕐 2:15  useState is for...   │  │
│  │ [Edit] [Delete]               │  │
│  ├────────────────────────────────┤  │
│  │ 🕐 8:42  useEffect cleanup... │  │
│  │ [Edit] [Delete]               │  │
│  └────────────────────────────────┘  │
│                                      │
│  [────── type note here ──────] [💾] │
└──────────────────────────────────────┘
```

### Features

- Auto-captures current video timestamp when note is created
- Click timestamp to jump video to that point
- Notes stored in localStorage per course-lesson
- Rich text support: bold, italic, code blocks
- Export: Download all notes as .txt or .md

---

## 9. QuizEngine

Interactive quiz component with multiple question types.

### Question Types

**Multiple Choice:**
```
Q3: What hook is used for side effects?

  ○  useState
  ●  useEffect        ← selected
  ○  useContext
  ○  useReducer
```

**True / False:**
```
Q5: React is a framework.

  ○  True
  ●  False            ← selected
```

**Fill in the Blank:**
```
Q7: The hook ________ is used to manage state.

  [________useState________]
```

### States

| State | Visual |
|-------|--------|
| Unanswered | Empty radio circles |
| Selected | Filled accent circle, option highlighted |
| Correct (after submit) | Green bg `#DCFCE7`, ✓ icon |
| Incorrect (after submit) | Red bg `#FEE2E2`, ✗ icon, correct shown |

### Results Screen

```
┌──────────────────────────────────┐
│          Quiz Complete! 🎉       │
│                                  │
│          Score: 8/10             │
│          Grade: 80%  A-          │
│                                  │
│  ████████████████░░░░ 80%       │
│                                  │
│  ✅ Q1  ✅ Q2  ✅ Q3  ✗ Q4      │
│  ✅ Q5  ✅ Q6  ✅ Q7  ✗ Q8      │
│  ✅ Q9  ✅ Q10                   │
│                                  │
│  [Review Answers] [Next Lesson]  │
└──────────────────────────────────┘
```

---

## 10. CertificateBadge

Certificate display card for completed courses.

### Structure

```
┌──────────────────────────────────┐
│  🏆                              │
│  Certificate of Completion       │
│                                  │
│  Complete React Developer        │
│  Completed on January 15, 2026   │
│                                  │
│  [Download PDF] [Share]          │
└──────────────────────────────────┘
```

### Features

- Certificate generated as styled HTML, exportable to PDF via print
- Share generates a public URL with verification
- Gold gradient border on hover

---

## 11. InstructorDashboard Components

### CourseStatsCard

```
┌──────────┐
│ 📈 2,340 │
│ Students │
│ ▲ +12%   │ (green if positive, red if negative)
└──────────┘
```

### RevenueChart

- Chart.js line chart
- Monthly revenue trend
- Tooltip shows exact amount
- Toggle: This month / 3 months / 6 months / Year

### StudentTable

```
┌────────────────────────────────────────────────┐
│  Student      │ Course        │ Progress │ Date│
├───────────────┼───────────────┼──────────┼─────┤
│  [av] Tahsan  │ React Course  │ ██░░ 40% │ Jan │
│  [av] Sarah   │ React Course  │ ████ 80% │ Dec │
└────────────────────────────────────────────────┘
```

---

## 12. CategoryPill

Horizontal scrollable category filter.

### Structure

```
[All] [💻 Development] [🎨 Design] [📈 Business] [📣 Marketing] →
```

### States

| State | Background | Text |
|-------|-----------|------|
| Default | `#F3F4F6` | `#374151` |
| Active | `#7C3AED` | `#FFFFFF` |
| Hover | `#EDE9FE` | `#6D28D9` |

- Horizontal scroll with fade edges on overflow
- Click filters course listings
- Pill shape: `border-radius: 999px`

---

## 13. SearchOverlay

Full-screen search overlay for finding courses.

### Structure

```
┌──────────────────────────────────────────────────┐
│                                    [✕ Close]     │
│                                                   │
│  🔍 [Search courses, topics, instructors...]     │
│                                                   │
│  Recent Searches:                                 │
│  React hooks · Python basics · UI Design          │
│                                                   │
│  Popular Topics:                                  │
│  [JavaScript] [React] [Python] [Design] [AI]     │
│                                                   │
│  (results appear as you type)                     │
│  ┌──────────────────────────────────────────┐     │
│  │ [thumb] React Complete Course — $49.99   │     │
│  │ [thumb] Advanced React Patterns — $29.99 │     │
│  └──────────────────────────────────────────┘     │
└──────────────────────────────────────────────────┘
```

### Behavior

- Opens with `Ctrl+K` or clicking search icon
- Backdrop blur: `backdrop-filter: blur(8px)`
- Debounced search: 300ms delay
- Results show max 5 courses, 3 instructors, 2 categories
- ESC to close
