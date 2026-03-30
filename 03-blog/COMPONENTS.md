# Blog / Content — Component Specifications

---

## Layout Components

### `Header`
- **Desktop:** Logo (serif, left) | Nav links center | Search icon + Theme toggle (right)
- **Scrolled:** Add shadow, compact height
- **Mobile:** Logo (left) | Search + Hamburger (right)
- **Height:** 64px desktop, 56px mobile

### `Footer`
- 4-column: About (logo + blurb), Categories list, Quick Links, Social + RSS
- Dark background
- Compact design, text-focused

### `NewsTicker`
- Full-width bar below header, accent/red background
- Auto-scrolling text with "🔴 Breaking:" prefix
- Pause on hover, clickable
- CSS animation (translateX), smooth loop

---

## Post Components

### `PostCard`
- **Standard:** Image (16:9, top) + category badge (overlaid or above title) + title (H3, 2-line clamp) + excerpt (2-line clamp) + meta row (avatar 24px + author + date + read time)
- **Compact (sidebar):** No image — number + title + read time (list item style)
- **Featured (hero):** Full-width image, overlay gradient, white text, large title
- **Hover:** Image scale 1.03, title color → accent

### `CategoryBadge`
- Small pill badge: category name
- Colored backgrounds per category (Tech=blue, Design=purple, Culture=orange, etc.)
- Clickable → navigates to category page

### `ReadTimeBadge`
- Clock icon + "X min read"
- Calculated from word count / 200
- Caption style text

### `PostMeta`
- Inline row: avatar (24px circle) + author name (link) + "·" + date + "·" + read time
- Compact, secondary text color

---

## Article Components

### `ArticleBody`
- Max-width: 720px, centered
- Serif font (Source Serif 4, 19px, 1.85 line-height)
- **Drop cap:** First paragraph, first letter — 72px Playfair Display, float left, 3 lines tall
- **Headings:** H2 (28px) and H3 (22px) with top margin 48px, bottom 16px
- **Paragraphs:** margin-bottom 24px
- **Images:** full article width, radius-md, caption below (italic, secondary)
- **Blockquotes:** left border (4px accent), padding-left 24px, italic, highlight bg
- **Code blocks:** monospace (JetBrains Mono), surface-alt bg, radius-md, padding 20px
- **Lists:** disc/ordered, proper indentation, 8px gap between items
- **Links:** accent/blue, underline on hover

### `ReadingProgressBar`
- Fixed top, 3px height, z-index above all
- Width: percentage of article read
- Accent color
- Smooth width transition
- Calculated via scroll position relative to article start/end

### `TableOfContents`
- **Desktop:** Sticky sidebar, left of article
- List of H2/H3 headings with indentation for H3
- Active heading: accent color, bold, left border indicator
- Scroll-spy: updates on scroll using IntersectionObserver
- Click: smooth scroll to heading
- **Mobile:** Collapsible floating button, expands overlay TOC

### `ShareButtons`
- **Desktop:** Fixed floating bar, left side, below TOC
- **Mobile:** Bottom sticky bar or inline after article
- Buttons: Facebook, Twitter/X, LinkedIn, WhatsApp, Copy Link
- Each: icon-only circle button (40px)
- Copy link: tooltip "Copied!" on click
- Uses `navigator.share` on mobile if available

### `ReactionBar`
- Horizontal row of emoji buttons
- Each: emoji + count
- Click: increment (animated bounce), store in localStorage
- Emojis: 👏 ❤️ 🔥 💡
- Debounce rapid clicks

---

## Comment Components

### `CommentSection`
- Header: "Comments (count)" + sort dropdown (Newest / Top)
- Comment form at top: textarea + name input + submit button
- Comment list below
- "Load more" at bottom

### `CommentCard`
- Avatar (32px) + name + timestamp + comment text
- Actions: ♡ like (count) + Reply button
- Reply form: appears inline below comment
- Nested replies: indented (24px left margin), max 3 levels deep
- Deeper replies link: "View thread"

---

## Podcast Components

### `AudioPlayer` (Sticky)
- Fixed bottom bar, 64px height
- Content: mini cover art (40px) + episode title(truncated) + play/pause + progress bar (seekable) + time display + speed toggle (1x/1.5x/2x) + volume slider + close X
- Progress bar: thin, accent color, click/drag to seek
- Dark background (always dark, regardless of theme)
- Slide-up animation on first play

### `EpisodeCard`
- List item style: episode number + date + play button (circle) + title + duration
- Description: 1-line truncated, expand on click
- Active episode: highlighted bg

### `PodcastHero`
- Cover art (200px square, radius-lg) + show name (H1) + description + subscribe links (pills with platform icons)

---

## Discovery Components

### `SearchOverlay`
- Triggered by search icon click
- Full-width overlay below header (or full-screen on mobile)
- Large text input, auto-focus
- Live results: post title + category + author + date (max 5 results)
- "View all results →" link
- Close on Escape or backdrop click

### `CategoryTabs`
- Horizontal scrollable tab bar
- Each tab: category name, pill style
- Active tab: accent bg, white text
- Smooth underline indicator animation

### `TagCloud`
- Collection of tag pills/chips
- Font size varies by post count (popular tags larger)
- Click → tag page
- Wrap: flex-wrap, gap 8px

---

## Newsletter Components

### `NewsletterBanner`
- Inline within feed
- Warm accent background
- Headline + subtext + email input + subscribe button (inline row)
- Success: input replaced by "🎉 You're subscribed!"

### `NewsletterPopup`
- Exit-intent triggered (mouse leaves viewport top)
- Centered modal: headline + subtext + email input + subscribe + "No thanks" dismiss
- Shows once per session (sessionStorage)
- Slide-up + fade animation
- Backdrop click to dismiss

---

## UI Utility Components

### `ThemeToggle`
- Sun/Moon icon, smooth rotation transition
- Persists in localStorage

### `ReadingModeToggle`
- Book icon button on article pages
- Activates: hides header, sidebar, footer, social buttons
- Shows: article centered, larger text, gentle serif styling
- "Exit" floating pill button at top

### `InfiniteScroll`
- Sentinel element at end of post list
- IntersectionObserver triggers load
- Loading state: 3 skeleton post cards
- New posts fade in
- "Back to top" floating button after first load

### `SkeletonPostCard`
- Matches PostCard dimensions
- Image: gray rectangle with shimmer
- Title: 2 gray bars
- Meta: thin gray bar
- Pulse animation (1.5s)

### `BackToTop`
- Fixed bottom-right
- Appears after 600px scroll
- Arrow-up icon, circular button
- Smooth scroll to top
