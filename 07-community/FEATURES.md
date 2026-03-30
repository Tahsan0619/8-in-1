# Community / Social — Features

---

## 1. Homepage / Unified Feed

### 1.1 Activity Feed
- Combined feed from all modules: new jobs, forum posts, events, reviews, listings
- Each post type has distinct card style with module accent color indicator
- Infinite scroll with skeleton loading
- Quick actions inline: upvote, bookmark, share, comment

### 1.2 Tab Navigation
- [All] [Jobs] [Discussions] [Events] [Listings] [Reviews]
- Active tab has accent underline with smooth slide animation
- Tab counts show unread/new items since last visit
- Remembers last selected tab in localStorage

### 1.3 Sidebar Widgets (Right)
- **Trending Topics:** Top hashtags/keywords this week
- **Leaderboard:** Top 5 contributors with reputation scores
- **Upcoming Events:** Next 3 events with countdown timers
- **Featured Listing:** Promoted/sponsored listing card
- **Community Stats:** Total members, posts today, active now

### 1.4 Left Navigation
- Home / Feed
- Job Board
- Forum / Q&A
- Directory
- Events
- Reviews
- My Profile
- Bookmarks
- Settings
- Collapsible on tablet, bottom bar on mobile

---

## 2. Job Board

### 2.1 Job Listing Page
- Search bar with location autocomplete
- Filters: Job type (Full-time, Part-time, Remote, Contract), Experience level, Salary range, Category, Posted date
- Sort: Newest, Relevance, Salary high-low
- List view with company logo, title, company, location, salary, tags, posted date
- Save/bookmark jobs
- "Easy Apply" badge for jobs with built-in application

### 2.2 Job Detail Page
- Company logo + name + verified badge
- Job title, location (with map), salary range
- Tags: Remote, Full-time, Senior, etc.
- Full description with rich text formatting
- Requirements list (bullets)
- Benefits section with icons
- Apply button (opens modal with form or redirects)
- Similar jobs carousel at bottom
- Company profile sidebar: size, industry, founded, website, other open positions

### 2.3 Post a Job
- Multi-step form: Company Info → Job Details → Requirements → Preview
- Rich text editor for description
- Tag/category selector with autocomplete
- Salary range slider
- Preview before publishing

### 2.4 Job Application Flow
- Quick apply modal: Name, email, resume upload, cover letter (optional), portfolio URL
- Application status tracking: Applied → Reviewed → Interview → Offer/Rejected
- Email notification mock

---

## 3. Forum / Q&A

### 3.1 Thread Listing
- Sort tabs: [Newest] [Hot] [Unanswered] [Most Voted]
- Each thread shows: title, author avatar + name + reputation, vote count, answer count, view count, tags, time ago
- Pinned threads at top with pin icon
- Category filter sidebar
- "Ask a Question" floating action button

### 3.2 Thread Detail / Question Page
- Question with vote arrows (▲ score ▼), author info, timestamp
- Rich content: code blocks with syntax highlighting, images, links
- Tags below question
- Answer section sorted by votes (accepted answer pinned at top)
- Each answer: vote arrows, author info, "Accept" button (for question author)
- Comment threads under each answer (collapsible)
- Markdown editor for writing answers

### 3.3 Ask a Question
- Title input with "similar questions" suggestions as you type
- Rich markdown editor with preview toggle
- Tag selector (max 5 tags)
- Category dropdown
- "Post Question" with validation

### 3.4 Voting System
- Upvote: +10 reputation to author
- Downvote: -2 reputation to author
- Accept answer: +15 reputation to answerer
- Vote buttons animate on click (scale pulse + color change)
- Cannot vote on own posts
- Daily vote limit indicator

---

## 4. Directory / Listing

### 4.1 Listing Page — Grid & Map View
- Toggle: [Grid View] [List View] [Map View]
- Grid: Cards with photo, name, category, rating, price range, distance
- Map View: Split layout — left scrollable list, right interactive map with pins
- Filters: Category, Price range, Rating, Distance, Open now
- Search: "Find restaurants, shops, services..."

### 4.2 Listing Detail
- Photo gallery (hero carousel, click for lightbox)
- Business name, rating (stars + count), price range ($ to $$$$), category
- Address with map embed
- Hours of operation (highlights if currently open/closed)
- Contact: phone, website, email
- Amenities/features with icons (WiFi, Parking, Pet-friendly, etc.)
- Menu/services section (for restaurants, salons, etc.)
- Reviews section with filter by stars
- Write a review CTA
- Similar listings carousel

### 4.3 Add a Listing
- Multi-step form: Basic Info → Location → Photos → Details → Preview
- Photo upload with drag-and-drop, crop, reorder
- Category-specific fields (restaurant: cuisine type, salon: services offered)
- Hours of operation table builder
- Map pin placement for exact location

---

## 5. Events Platform

### 5.1 Events Listing
- Calendar view toggle: [Grid] [Calendar] [Timeline]
- Grid: Event cards with cover image, title, date, location, price, attendees count
- Calendar: Monthly calendar with event dots, click day to see events
- Timeline: Chronological list grouped by date
- Filters: Category, Date range, Price (free/paid), Location, Online/In-person
- Featured/promoted events carousel at top

### 5.2 Event Detail
- Hero cover image with overlay gradient
- Title, date/time, location (address + map)
- Organizer info with follow button
- Description with rich text
- Schedule/agenda (if multi-session): time, session title, speaker
- Speakers section with photos and bios
- Ticket tiers table: tier name, price, availability, quantity selector
- RSVP / Buy Tickets button
- Attendee avatars row: "245 going · 89 interested"
- Share buttons
- Related events at bottom

### 5.3 Create Event
- Cover image upload
- Title, description (rich editor)
- Date/time picker (start and end, timezone)
- Location: physical address or "Online Event" with link
- Ticket tiers builder (add/remove tiers, set prices and limits)
- Agenda builder (add sessions with time, title, speaker)
- Publish settings: Public/Private, require approval

### 5.4 RSVP & Ticket Flow
- Select ticket tier → quantity → checkout (for paid)
- RSVP confirmation with "Add to Calendar" (generates .ics file)
- Ticket stored in user profile with QR code mock
- Attendee list visible on event page

---

## 6. Review Platform

### 6.1 Review Aggregation Page
- Categories: Restaurants, Tech, Services, Products, Places
- Top rated this week/month
- Recent reviews feed
- Search: "Search reviews for..."
- Sort: Most helpful, Newest, Highest rated, Lowest rated

### 6.2 Individual Review
- Reviewer avatar, name, reputation, review count
- Star rating (1-5) with breakdown categories
- Review title and body (rich text, photos allowed)
- Helpful/Not helpful voting
- Owner/business response section
- Report button

### 6.3 Write a Review
- Star rating selector (hover labels: Poor → Excellent)
- Category-specific rating criteria (Food: Taste, Service, Ambiance, Value)
- Title and body with markdown
- Photo upload (up to 5)
- Pros and cons fields
- Submit with preview

---

## 7. Social Feed Features

### 7.1 Post Types
- **Status Update:** Text-only micro-post (280 char limit)
- **Rich Post:** Text + image/gallery + links
- **Share:** Re-share any content from other modules with commentary
- **Poll:** 2-4 options, timed voting
- **Milestone:** Auto-generated "earned badge" or "hit 1000 reputation" posts

### 7.2 Interactions
- Like (heart icon with count)
- Comment (threaded, collapsible)
- Share/Repost
- Bookmark/Save
- Report

### 7.3 User Follow System
- Follow/Unfollow users
- Following feed vs. Discover feed
- Follower/following counts on profile
- "People you may know" suggestions based on activity overlap

---

## 8. User Profile & Reputation

### 8.1 Public Profile
- Cover photo + avatar
- Display name, username, bio, location, website, join date
- Reputation score with level badge (Newcomer → Legend)
- Achievement badges grid
- Activity tabs: [Posts] [Questions] [Answers] [Reviews] [Events] [Jobs Applied]
- Contribution graph (GitHub-style heatmap)
- Follow / Message buttons

### 8.2 Reputation System
- Points earned from: posting (+5), answering (+10), accepted answer (+15), review (+5), event hosting (+20), upvotes received (+10 each)
- Points lost from: downvotes received (-2), post deleted (-10)
- Badges: Bronze, Silver, Gold for milestones (first post, 10 answers, 100 upvotes, etc.)
- Leaderboard: weekly, monthly, all-time

### 8.3 Settings Page
- Profile editing
- Notification preferences (email digest, push, per-module toggles)
- Privacy: profile visibility, activity visibility
- Theme: Light / Dark / System
- Language preference
- Connected accounts (mock)
- Delete account

---

## 9. Global UI/UX Features

### 9.1 Notification Center
- Bell icon with unread count badge
- Dropdown panel with grouped notifications
- Types: new answer, upvote, event reminder, job match, badge earned, follower
- Mark as read (individual and all)
- Click to navigate to relevant content

### 9.2 Global Search
- Ctrl+K opens search overlay
- Search across all modules simultaneously
- Results grouped by type: Jobs, Discussions, Events, Listings, Users
- Recent searches saved
- Keyboard navigation through results

### 9.3 Bookmarks / Saved
- Unified bookmarks page for all saved content
- Filter by type
- Organize into collections/folders
- Quick remove from bookmark

### 9.4 Dark Mode
- System preference detection
- Manual toggle in header
- Smooth 200ms transition
- All module accent colors adjusted for dark backgrounds

### 9.5 Responsive Design
- Desktop: 3-column layout (nav + content + widgets)
- Tablet: 2-column, collapsible nav
- Mobile: Single column, bottom tab navigation, swipe gestures
- Touch-optimized tap targets (min 44px)

### 9.6 Performance
- Skeleton screens for all async content
- Lazy loading images with blur-up placeholder
- Virtual scrolling for long lists (jobs, forum threads)
- Optimistic updates on vote/bookmark actions
