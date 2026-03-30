# Community / Social — Page Layouts

---

## Homepage / Activity Feed

```
┌──────────────────────────────────────────────────────────┐
│  HEADER: Logo | 🔍 Search | Jobs | Forum | Events | Dir │
│          | Reviews | [🔔 3] [Avatar ▼]          | 🌓    │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────┬──────────────────────────┬──────────────┐    │
│  │  LEFT  │     MAIN FEED            │   RIGHT      │    │
│  │  NAV   │                          │   WIDGETS    │    │
│  │        │  [All][Jobs][Forum]       │              │    │
│  │ 🏠 Home│  [Events][Listings]      │ ── TRENDING  │    │
│  │ 💼 Jobs│  [Reviews]               │ #react       │    │
│  │ 💬 Forum│                          │ #remotework  │    │
│  │ 📍 Dir │  ┌─────────────────────┐ │ #design      │    │
│  │ 📅 Events│ │ 💬 [av] user · 2h ago│ │              │    │
│  │ ⭐ Reviews│ │ Thread title here... │ │ ── TOP USERS │    │
│  │ ─────── │ │ ▲ 24 💬 12 👁 340   │ │ 🥇 user 4.2K│    │
│  │ 👤 Profile│ │ [react] [hooks]     │ │ 🥈 user 3.8K│    │
│  │ 🔖 Saved│ └─────────────────────┘ │ 🥉 user 3.1K│    │
│  │ ⚙ Settings│                        │              │    │
│  │        │  ┌─────────────────────┐ │ ── EVENTS    │    │
│  │        │  │ 💼 [logo] Company   │ │ 📅 React Meetup│   │
│  │        │  │ Senior Dev · Remote │ │    in 3 days │    │
│  │        │  │ $120K-$150K         │ │ 📅 JS Conf   │    │
│  │        │  │ [🔖 Save] [Apply]   │ │    in 1 week │    │
│  │        │  └─────────────────────┘ │              │    │
│  │        │                          │ ── STATS     │    │
│  │        │  ┌─────────────────────┐ │ 12K members  │    │
│  │        │  │ 📅 Event: JS Conf   │ │ 340 online   │    │
│  │        │  │ Mar 15 · Online     │ │ 89 posts/day │    │
│  │        │  │ 245 attending       │ │              │    │
│  │        │  │ [RSVP] [Interested] │ │              │    │
│  │        │  └─────────────────────┘ │              │    │
│  │        │                          │              │    │
│  │        │  (infinite scroll...)    │              │    │
│  └────────┴──────────────────────────┴──────────────┘    │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  FOOTER                                                  │
└──────────────────────────────────────────────────────────┘
```

---

## Job Board

```
┌──────────────────────────────────────────────────────────┐
│  HEADER                                                  │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Find Your Next Role                                     │
│  🔍 [Job title, keyword...] 📍 [Location...] [Search]   │
│                                                          │
│  ┌────────────────┬─────────────────────────────────┐    │
│  │  FILTERS       │  JOB LISTINGS                    │    │
│  │                │                                  │    │
│  │  Job Type      │  342 jobs found  Sort: [Newest▼] │    │
│  │  ☑ Full-time   │                                  │    │
│  │  ☐ Part-time   │  ┌────────────────────────────┐  │    │
│  │  ☑ Remote      │  │ [logo] Senior React Dev    │  │    │
│  │  ☐ Contract    │  │ Acme Corp · Remote         │  │    │
│  │                │  │ $120K-$150K · Full-time     │  │    │
│  │  Experience    │  │ [React] [Node] [TypeScript] │  │    │
│  │  ☐ Junior      │  │ Posted 2h ago   [🔖] [Apply]│  │    │
│  │  ☑ Mid-level   │  └────────────────────────────┘  │    │
│  │  ☑ Senior      │                                  │    │
│  │                │  ┌────────────────────────────┐  │    │
│  │  Salary Range  │  │ [logo] UX Designer         │  │    │
│  │  $50K ○───○ $200K │ │ DesignCo · New York       │  │    │
│  │                │  │ $90K-$120K · Full-time      │  │    │
│  │  Category      │  │ [Figma] [UI/UX] [Design]   │  │    │
│  │  ☑ Engineering │  │ Posted 5h ago   [🔖] [Apply]│  │    │
│  │  ☐ Design      │  └────────────────────────────┘  │    │
│  │  ☐ Marketing   │                                  │    │
│  │  ☐ Product     │  ← 1 2 3 ... 12 →               │    │
│  └────────────────┴─────────────────────────────────┘    │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  FOOTER                                                  │
└──────────────────────────────────────────────────────────┘
```

---

## Forum / Q&A Thread Detail

```
┌──────────────────────────────────────────────────────────┐
│  HEADER                                                  │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  How to manage state in large React apps?                │
│  [react] [state-management] [architecture]               │
│  Asked by [av] JohnDoe · 3 hours ago · 🔵 Expert (1.2K) │
│                                                          │
│  ┌──┬───────────────────────────────────────────────┐    │
│  │▲ │ Question body with full rich text content...  │    │
│  │24│ Code blocks with syntax highlighting:         │    │
│  │▼ │ ```js                                         │    │
│  │  │ const [state, setState] = useState()          │    │
│  │  │ ```                                           │    │
│  │🔖│ What's the best approach for...               │    │
│  └──┴───────────────────────────────────────────────┘    │
│                                                          │
│  ── 5 Answers ─── sorted by: [Votes ▼]                  │
│                                                          │
│  ┌──┬───────────────────────────────────────────────┐    │
│  │▲ │ ✅ ACCEPTED ANSWER                            │    │
│  │42│ [av] SarahDev · 🟣 Master (3.4K) · 2h ago    │    │
│  │▼ │                                               │    │
│  │  │ Answer text with explanation...               │    │
│  │  │ Code examples and best practices...           │    │
│  │  │                                               │    │
│  │  │ 💬 3 comments ▼                               │    │
│  │  │ ├─ [av] user: Great answer! · 1h ago          │    │
│  │  │ ├─ [av] user: What about Redux? · 45m ago     │    │
│  │  │ └─ [Add a comment...]                         │    │
│  └──┴───────────────────────────────────────────────┘    │
│                                                          │
│  ┌──┬───────────────────────────────────────────────┐    │
│  │▲ │ [av] DevGuru · 🟢 Contributor (450) · 1h ago │    │
│  │18│                                               │    │
│  │▼ │ Alternative answer text...                    │    │
│  └──┴───────────────────────────────────────────────┘    │
│                                                          │
│  ── Your Answer ────────────────────────────────────     │
│  ┌──────────────────────────────────────────────────┐    │
│  │  [B] [I] [Code] [Link] [Image] | Preview        │    │
│  │  Write your answer here...                       │    │
│  │                                                   │    │
│  └──────────────────────────────────────────────────┘    │
│  [Post Your Answer]                                      │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  FOOTER                                                  │
└──────────────────────────────────────────────────────────┘
```

---

## Directory — Map View

```
┌──────────────────────────────────────────────────────────┐
│  HEADER                                                  │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  🔍 [Search businesses...] 📍 [Near me] [🔍]            │
│  [All] [🍽 Restaurants] [☕ Cafes] [💈 Services] [🏪 Shops]│
│                                                          │
│  ┌─────────────────────┬────────────────────────────┐    │
│  │  LISTING CARDS       │     INTERACTIVE MAP        │    │
│  │  (scrollable)        │                            │    │
│  │                      │    📍          📍           │    │
│  │  ┌─────────────────┐ │         📍                 │    │
│  │  │ [img] Cafe Luna  │ │    📍            📍        │    │
│  │  │ ★★★★★ 4.8 (340) │ │                 📍         │    │
│  │  │ $$ · Coffee · 0.3mi│ │       📍                 │    │
│  │  │ 🟢 Open now      │ │                            │    │
│  │  └─────────────────┘ │         📍                 │    │
│  │                      │    📍                       │    │
│  │  ┌─────────────────┐ │              📍             │    │
│  │  │ [img] Bistro X   │ │    [ + ]                  │    │
│  │  │ ★★★★☆ 4.2 (120) │ │    [ − ]    📍            │    │
│  │  │ $$$ · Italian    │ │                            │    │
│  │  │ 🔴 Closed        │ │                            │    │
│  │  └─────────────────┘ │                            │    │
│  │                      │                            │    │
│  │  (more listings...)  │                            │    │
│  └─────────────────────┴────────────────────────────┘    │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  FOOTER                                                  │
└──────────────────────────────────────────────────────────┘
```

---

## Event Detail

```
┌──────────────────────────────────────────────────────────┐
│  HEADER                                                  │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │          HERO COVER IMAGE (40vh)                  │    │
│  │                                                   │    │
│  │          React Global Summit 2026                 │    │
│  │          March 15-16 · Online Event               │    │
│  │                                                   │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  ┌──────────────────────────────┬───────────────────┐    │
│  │                              │  TICKET SIDEBAR    │    │
│  │  📅 March 15-16, 2026       │  (sticky)           │    │
│  │  🕐 9:00 AM - 5:00 PM EST  │                     │    │
│  │  📍 Online Event            │  Early Bird  $49    │    │
│  │  👥 245 going · 89 interested│  General    $79    │    │
│  │                              │  VIP        $149   │    │
│  │  Organizer:                  │                     │    │
│  │  [av] React Community        │  [Get Tickets]     │    │
│  │  [Follow]                    │                     │    │
│  │                              │  245 attending      │    │
│  │  ── ABOUT ───────────        │  [av][av][av]+242   │    │
│  │  Full event description...   │                     │    │
│  │  Rich text content...        │  [🔖 Save]          │    │
│  │                              │  [📤 Share]         │    │
│  │  ── SCHEDULE ─────────       │                     │    │
│  │  ┌─────────────────────┐     │                     │    │
│  │  │ 9:00  Keynote       │     │                     │    │
│  │  │       John Doe      │     │                     │    │
│  │  │ 10:30 Workshop: Hooks│    │                     │    │
│  │  │       Jane Smith    │     │                     │    │
│  │  │ 12:00 Lunch Break   │     │                     │    │
│  │  │ 13:00 Panel: Future │     │                     │    │
│  │  └─────────────────────┘     │                     │    │
│  │                              │                     │    │
│  │  ── SPEAKERS ─────────       │                     │    │
│  │  [photo] [photo] [photo]     │                     │    │
│  │  Name    Name    Name        │                     │    │
│  │  Title   Title   Title       │                     │    │
│  │                              │                     │    │
│  └──────────────────────────────┴───────────────────┘    │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  FOOTER                                                  │
└──────────────────────────────────────────────────────────┘
```

---

## User Profile

```
┌──────────────────────────────────────────────────────────┐
│  HEADER                                                  │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │  [     Cover Photo Background (200px)          ] │    │
│  │                                                   │    │
│  │  ┌────┐                                           │    │
│  │  │ AV │  Tahsan Islam                             │    │
│  │  └────┘  @tahsan · 🟣 Master (3,400 rep)         │    │
│  │  Full-stack developer · Dhaka, BD                 │    │
│  │  Joined Dec 2024 · 234 followers · 89 following   │    │
│  │                                                   │    │
│  │  [Follow]  [Message]                              │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
│  ── BADGES ─────────────────────────────────────────     │
│  🥇 First Answer  🥈 100 Upvotes  🥉 Event Host  ...    │
│                                                          │
│  ── CONTRIBUTION GRAPH ─────────────────────────────     │
│  ┌──────────────────────────────────────────────────┐    │
│  │ ░░░█░░░██░░░░█░░██░░░█░░░░░██░░░██░░█░░░░░░░██░ │    │
│  │ ░░██░░█░░░░██░░░░░█░░░██░░░░░██░░░░█░░░██░░░░░░ │    │
│  │ ░█░░░░░░░█░░░░██░░░░░░░░█░░░░░░░░░░░░██░░░█░░░ │    │
│  └──────────────────────────────────────────────────┘    │
│  142 contributions in the last year                      │
│                                                          │
│  [Posts] [Questions] [Answers] [Reviews] [Events]        │
│  ─────────────────────────────────────────────────       │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │  How to manage state in large React apps?         │    │
│  │  ▲ 24 · 💬 5 answers · 👁 340 views · 3h ago     │    │
│  │  [react] [state-management]                       │    │
│  ├──────────────────────────────────────────────────┤    │
│  │  Best coffee shops in Dhaka                       │    │
│  │  ★★★★★ · 5 reviews · 1 day ago                    │    │
│  │  [food] [dhaka]                                   │    │
│  └──────────────────────────────────────────────────┘    │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  FOOTER                                                  │
└──────────────────────────────────────────────────────────┘
```

---

## Mobile Layout — Bottom Navigation

```
┌──────────────────┐
│  Logo    🔍  🔔  │
├──────────────────┤
│                  │
│  (Main content   │
│   single column  │
│   full-width     │
│   cards)         │
│                  │
│  ┌──────────────┐│
│  │ Card content ││
│  │ ...          ││
│  └──────────────┘│
│                  │
│  ┌──────────────┐│
│  │ Card content ││
│  │ ...          ││
│  └──────────────┘│
│                  │
├──────────────────┤
│ 🏠  💼  💬  📅  👤│
│Home Jobs Forum Evt Me│
└──────────────────┘
```
