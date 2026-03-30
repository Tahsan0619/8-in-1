# Blog / Content — Feature Specifications

---

## 1. Homepage

### 1.1 Featured Post Hero
- Full-width section, large featured image with gradient overlay
- Post category badge (accent pill)
- Post title (H1, white on dark overlay)
- Excerpt (1-2 lines)
- Author avatar + name + date + read time
- Click anywhere to open post

### 1.2 Trending Posts Row
- Horizontal scroll or 4-column grid
- Numbered posts (01, 02, 03, 04 — large numbers)
- Each: category + title (2 lines) + author + date
- No images — text-focused for scannability

### 1.3 Category Tabs
- Horizontal tab bar: All, Technology, Design, Culture, Business, Science
- Clicking filters the posts below
- Smooth tab indicator animation
- Scrollable on mobile

### 1.4 Latest Posts Grid
- 3-column card grid
- Each card: thumbnail (16:9) + category badge + title + excerpt (2 lines) + author + date + read time
- Load more button or infinite scroll

### 1.5 Most Read Sidebar
- Sticky sidebar widget (desktop only)
- Top 5 posts: numbered list (01-05) + title + read time
- Last 7 days filter
- Compact list style

### 1.6 Newsletter Banner
- Full-width inline banner within feed
- Headline: "Stay in the loop"
- Subtext + email input + subscribe button
- Warm accent background

### 1.7 Tags Cloud
- Sidebar or section widget
- Tags as pills/chips with varying font sizes based on post count
- Click navigates to tag page

---

## 2. Post Detail

### 2.1 Article Layout
- **Header:** Category badge + Title (H1, Playfair Display) + Excerpt + Author card (avatar + name + date + read time)
- **Featured image:** full-width or contained, with caption
- **Drop cap:** first letter of first paragraph, large decorative serif (72px)
- **Body:** Source Serif 4, 19px, 1.85 line-height, max-width 720px centered
- **Media:** responsive images, embedded videos (YouTube/Vimeo), code blocks with syntax highlighting
- **Pull quotes:** large italic text with left accent border and highlight bg

### 2.2 Reading Progress Bar
- Thin bar (3px) fixed at top of viewport
- Accent color
- Width tracks scroll position within article content
- 0% at article start, 100% at article end
- Smooth transition

### 2.3 Estimated Read Time
- Calculated: word count / 200 (avg reading speed)
- Displayed in header meta and post cards
- Format: "8 min read"

### 2.4 Author Card
- Inline in article header: avatar (40px) + name + follow button
- End of article: expanded card — avatar (64px) + name + bio (2 lines) + social links + "Follow" button
- Author name links to author profile page

### 2.5 Table of Contents
- Sticky sidebar (desktop, left side of article)
- Auto-generated from H2/H3 headings
- Active heading highlighted (accent color + bold)
- Click scrolls to heading (smooth scroll, offset for fixed header)
- Collapses to floating button on tablet/mobile

### 2.6 Social Share Buttons
- Fixed floating bar (left side desktop, bottom bar mobile)
- Platforms: Facebook, Twitter/X, WhatsApp, LinkedIn, Copy Link
- Each: icon button with tooltip
- Copy link: shows "Copied!" confirmation
- Share count display (optional, UI only)

### 2.7 Reaction Buttons
- Below article content, before comments
- Emoji-based: 👏 Clap, ❤️ Love, 🔥 Fire, 💡 Insightful
- Click increments count (animated)
- Counts displayed (UI state only, localStorage)

### 2.8 Comment Section
- Below article
- Comment form: textarea + name + submit button
- Threaded replies: indent nested replies (max 3 levels)
- Each comment: avatar + name + timestamp + text + reply button + like button
- Sort: Newest / Top (by likes)
- Show 5 initially, "Load more comments" button

### 2.9 Related Posts
- 3 cards at bottom of article
- Matching by category or tags
- Same card component as homepage grid

---

## 3. Discovery

### 3.1 Search
- Search icon in header, expands to overlay or input
- Live results: shows matching posts as you type (debounce 300ms)
- Search results page: query shown, results list with highlighted matching text
- "No results" with suggestions

### 3.2 Category Pages
- Category hero: name + description + post count
- Filtered post grid (same as homepage grid)
- Sidebar with category list + popular posts

### 3.3 Tag Pages
- Tag name as heading + post count
- Grid of posts tagged with that tag
- Related tags row

### 3.4 Archive
- Month/year grouping
- Collapsible sections per month
- Each entry: date + title + category
- Chronological, most recent first

---

## 4. Author

### 4.1 Author Profile
- Author hero: large avatar + name + role/title + bio + social links
- Published count + total reads stats
- Follow button (UI toggle)

### 4.2 Author's Posts
- Grid listing of posts by this author
- Sorted by newest
- Same card style as homepage

---

## 5. Magazine Mode

### 5.1 Editorial Layout
- CSS Grid areas layout: 1 large feature (spans 2 cols + 2 rows) + 4 smaller posts + sidebar column
- Category color accents on each card
- Dense, newspaper-style layout
- Breaking news ticker at top

### 5.2 Breaking News Ticker
- Thin bar below header
- Auto-scrolling text (CSS marquee): "🔴 Breaking: headline text..."
- Accent/red background
- Click navigates to article
- Pausable on hover

### 5.3 Photo Essay Layout
- Full-width image blocks with captions
- Text overlaid on images or between large image sections
- Parallax scroll effect on images (subtle)
- Minimal UI chrome

### 5.4 Video Post Embed
- YouTube/Vimeo embed with custom play button overlay
- Responsive 16:9 container
- Video posts have a play icon badge on cards

---

## 6. Podcast Section

### 6.1 Podcast Landing Page
- Show banner: cover art + name + description + subscribe links (Apple, Spotify, RSS)
- Episode list: chronological, newest first
- Each episode: number + title + date + duration + play button + description excerpt

### 6.2 Audio Player (Sticky)
- Fixed bar at bottom of viewport (above footer nav on mobile)
- Controls: play/pause, progress bar (seekable), current time / total time, speed (1x/1.5x/2x), volume
- Currently playing: cover art thumbnail + episode title
- Persist across page navigation (player state in localStorage)
- Close/minimize button

### 6.3 Episode Detail
- Episode header: cover art + title + number + date + duration
- Show notes: rich text content
- Embedded player (same as sticky, but inline too)
- Transcript accordion (expandable)

---

## 7. Newsletter

### 7.1 Exit-Intent Popup
- Triggers when mouse moves toward browser close/nav area (desktop)
- Modal: headline + subtext + email input + subscribe button
- "No thanks" dismiss link
- Shows once per session (sessionStorage flag)
- Animated entry: slide-up + fade

### 7.2 Confirmation Page
- After subscribe: "You're in!" page
- Confirmation message + what to expect
- Recommended posts to read while waiting

---

## 8. UI/UX Global

### 8.1 Typography-First Design
- Serif for reading, sans-serif for UI
- Proper typographic scale and rhythm
- Generous line-height for body text
- Optimized measure (65-75 characters per line)
- Proper heading hierarchy (no skipping levels)

### 8.2 Dark / Light Mode
- Toggle in header
- Dark mode: warm dark (not pure black) — easier on eyes for reading
- localStorage persistence + system preference detection
- Smooth transition (200ms)

### 8.3 Reading Mode
- Toggle button on article pages (book icon)
- Hides: header, sidebar, ads, share buttons
- Shows: article content only, centered, slightly larger text
- Elegant distraction-free experience
- "Exit reading mode" floating button

### 8.4 Infinite Scroll
- On blog listing pages
- Intersection observer on sentinel element
- Loading: 3 skeleton cards appear
- Append new posts smoothly (fade-in)
- URL updates with page number for shareability
- "Back to top" button appears after first load

### 8.5 Responsive Images
- `<picture>` with srcset for different sizes
- Lazy loading with `loading="lazy"` + blur-up placeholder
- Proper aspect ratio containers to prevent layout shift
- Lightbox on click for full-size view
