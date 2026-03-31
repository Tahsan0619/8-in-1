# 16-in-1 — Frontend Portfolio Collection

Sixteen production-grade, fully interactive websites built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no build tools, no dependencies beyond a few CDN libraries. Each site is self-contained, frontend-only, and designed to showcase a different domain of web development.

> **Author:** Tahsan Islam  
> **Stack:** HTML5 · CSS3 · Vanilla JS (ES6+)  
> **State Management:** localStorage (all "backend" features are simulated client-side)  
> **Theme:** Every site supports dark/light mode

---

## Sites

### 01 · FLAVR — E-Commerce

> Curated lifestyle essentials storefront inspired by Everlane, Glossier, and Apple Store.

- Product discovery with hero slider, mega menu, live search, multi-filter sidebar
- Image gallery, variant selectors, wishlist, star reviews
- Multi-step checkout (address → payment → confirmation) with coupon support
- Slide-in cart drawer, skeleton loaders, admin dashboard with Chart.js analytics
- **Pages:** index · shop · product · checkout · order-confirm · account · admin
- **Libs:** Chart.js, Google Fonts (Inter)

---

### 02 · NexGen — Business / Agency

> Corporate site blending Stripe's authority, Linear's elegance, and McKinsey's narrative depth.

- Full-screen hero with page loader animation
- Scroll-triggered reveals via Intersection Observer
- Interactive company timeline, portfolio grid with category filters
- Pricing toggle (monthly/yearly), testimonials carousel
- Contact form with budget range slider, blog with reading time estimates
- **Pages:** index · services · about · work · blog · blog-post · contact

---

### 03 · The Inkwell — Blog / Magazine

> Rich content platform for writers and readers — The Verge meets Medium meets Brain Pickings.

- Reading progress bar, sticky table of contents, drop cap typography
- Threaded comments with sorting, reactions (👏 ❤️ 🔥 💡), social share bar
- Category tabs with infinite scroll, search overlay with live results
- Newsletter popup, breaking news ticker, podcast player (Web Audio API)
- **Pages:** index · post · magazine · podcast · category · author · archive

---

### 04 · Tahsan Islam — Portfolio

> Multi-mode creative portfolio with cinematic scroll, custom cursor, and page transitions.

- Custom cursor (dot + ring), animated typewriter hero
- 2-column project grid with full-screen hover previews
- Project detail with before/after slider, live demo + GitHub links
- Photography masonry gallery with lightbox
- Skills, experience timeline, education, testimonials
- **Pages:** index · work · project · photography · contact

---

### 05 · BookIt — Booking Platform

> Versatile service booking — Calendly's frictionless flow meets Airbnb's map-driven discovery.

- Hero search (location + service + date), featured carousel, category browse
- Service listing with radius/price/rating/availability filters
- Map view toggle with Leaflet.js pin markers and clustering
- Multi-step booking wizard (date/time → details → payment → confirmation)
- Restaurant mode (menu + dine-in/delivery), clinic mode (doctor profiles)
- Provider dashboard with earnings and calendar management
- **Pages:** index · services · service · booking · restaurant · clinic · provider · dashboard
- **Libs:** Leaflet.js, Google Fonts (Plus Jakarta Sans, Inter)

---

### 06 · LearnHub — Education / LMS

> Comprehensive learning management system — Udemy discovery, Coursera focus, Duolingo engagement.

- Course discovery with advanced filters (category, level, price, rating, duration)
- Custom video player with playback speed, auto-advance, progress tracking
- Per-lesson notes with timestamps, curriculum accordion
- Quiz engine with timer, scoring, review, and certificate generation
- Instructor dashboard with student roster and Chart.js earnings analytics
- School mode with timetable and assignments
- **Pages:** index · courses · course · learn · dashboard · instructor · create-course · quiz · certificate · school
- **Libs:** Chart.js, Google Fonts (Plus Jakarta Sans, Inter, JetBrains Mono)

---

### 07 · CommunityHub — Community Platform

> Multi-module community hub unifying jobs, forums, directory, events, reviews, and social feed.

- Unified activity feed with tabbed sections
- Gamification: reputation system, badges, leaderboard, streaks
- Job board with filters, forum/Q&A with voting and accepted answers
- Directory with grid + Leaflet.js map view, event calendar with RSVP
- Review aggregation, user profiles with activity history
- Command palette (Ctrl+K), notification center
- **Pages:** index · jobs · job · forum · thread · directory · listing · events · event · reviews · profile · settings
- **Libs:** Chart.js, Leaflet.js

---

### 08 · NexGen Labs — SaaS Dashboard

> Dark-first admin panel inspired by Linear, Vercel, and Stripe's data-dense aesthetic.

- KPI cards with count-up animation and sparkline charts
- Revenue/expense charts (line, bar, doughnut) with time-range toggles
- Full data table engine: sortable columns, search with debounce, filters, pagination, bulk actions, CSV/JSON export
- CRM contacts with slide-over detail panel
- Kanban pipeline with HTML5 drag-and-drop (Lead → Won/Lost)
- Analytics: traffic trends, source breakdown, conversion funnel, top pages
- Finance overview, invoice management with full invoice viewer
- Team management, notification center, settings (account, billing, integrations, API, appearance)
- Command palette (Ctrl+K), collapsible sidebar, toast notifications
- **Pages:** index · tables · contacts · pipeline · analytics · finance · invoices · settings · notifications · team
- **Libs:** Chart.js 4.4.0

---

### 09 · SiteCraft — CMS / Website Builder

> Powerful drag-and-drop CMS combining Webflow's builder, WordPress content management, and Framer's design polish.

- WYSIWYG drag-and-drop page builder with live preview and device switching
- Rich text post editor with media embeds
- Media library with drag-drop upload, organize, and search
- SEO tools (meta tags, OG tags, sitemap, robots) with score checker
- Template library with pre-built sections
- Theme customizer (typography, colors, spacing) with live preview
- **Pages:** index · builder · pages · posts · editor · media · seo · templates · theme · settings

---

### 10 · HomeScout — Real Estate Platform

> Location-first property platform combining Zillow's map search, Realtor.com's details, and Compass UI.

- Split map + listing view with synchronized property markers
- Advanced filters (price, beds, type, area), mortgage calculator
- Virtual tour modals, property comparison (up to 3)
- Agent directory with profiles, reviews, and transaction history
- Neighborhood intelligence (schools, transit, safety scores)
- **Pages:** index · listings · property · agents · agent · calculator · saved · compare · neighborhood · dashboard
- **Libs:** Leaflet.js, Chart.js

---

### 11 · MediCare — Healthcare Platform

> Comprehensive healthcare platform combining ZocDoc's booking, MyChart's portal, and Practo's management.

- Doctor booking with calendar-based slot picker and appointment management
- Patient portal with prescriptions, records, lab results, vaccination history
- Department browsing, doctor directory with specialization filters
- Online pharmacy with dosage info and ordering
- Admin analytics dashboard with Chart.js
- **Pages:** index · departments · doctors · doctor · booking · dashboard · appointment · pharmacy · records · admin
- **Libs:** Chart.js

---

### 12 · Khadok Kitchen — Restaurant Platform

> Full-featured single-restaurant website with digital menu, online ordering, and table reservations.

- Digital menu with categories, search, and dish customization (sizes, add-ons, spice)
- Shopping cart with promo codes, multi-step checkout
- Visual table reservation with interactive floor plan
- Real-time order tracking with animated timeline
- Customer reviews and gallery with lightbox
- Admin panel with menu editor and order management
- **Pages:** index · menu · dish · cart · checkout · tracking · reservations · gallery · reviews · admin

---

### 13 · FitZone — Fitness & Gym Platform

> Comprehensive gym management with class schedules, trainer profiles, workout planner, and progress tracking.

- Interactive class schedule with calendar and weekly views
- Workout planner with exercise library and interval timers
- BMI & body composition calculator with visual charts
- Progress tracking with Chart.js visualizations
- Membership comparison and signup flow
- Trainer profiles with certifications and booking
- **Pages:** index · classes · class · trainers · trainer · membership · bmi · planner · dashboard · admin
- **Libs:** Chart.js

---

### 14 · JobConnect BD — Job Board

> Comprehensive job board with dual dashboards, applicant tracking, and career resources.

- Dual dashboards (candidate and employer views)
- Powerful job search with filters (location, type, salary, experience)
- Application tracking system with Kanban pipeline
- Company profiles with culture, benefits, and open positions
- Salary insights with Chart.js visualizations, career resources
- **Pages:** index · search · job · companies · company · post-job · candidate-dashboard · employer-dashboard · salary · resources
- **Libs:** Chart.js

---

### 15 · HopeBridge — Nonprofit & Charity

> Compelling charity platform with donation flow, fundraising progress, volunteer management, and impact transparency.

- Streamlined 3-step donation flow with payment method selection
- Real-time fundraising progress bars and campaign updates
- Impact tracker with financial transparency dashboard
- Volunteer management with hour tracking
- Events calendar, beneficiary stories
- **Pages:** index · causes · campaign · donate · impact · volunteer · events · stories · about · admin
- **Libs:** Chart.js

---

### 16 · BazarBD — Multi-Vendor Marketplace

> Bangladesh-focused multi-vendor marketplace combining Daraz, Etsy, and Amazon features.

- Multi-vendor cart with items grouped by seller
- Seller storefronts with custom branding and analytics dashboard
- Product variants (size, color, material with separate stock)
- Review system with verified purchase badges and photo reviews
- Product comparison (up to 3), BDT-native pricing
- **Pages:** index · browse · product · seller · cart · checkout · tracking · seller-dashboard · become-seller · admin
- **Libs:** Chart.js

---

## Project Structure

Every site follows the same clean pattern:

```
XX-name/
├── index.html
├── [page].html ...
├── css/
│   └── style.css
└── js/
    ├── data.js      ← mock data store
    └── app.js       ← all application logic
```

## Shared Technical Patterns

| Pattern | Details |
|---|---|
| **CSS Architecture** | Custom properties for theming, grid + flexbox layouts, responsive breakpoints, `prefers-reduced-motion` support |
| **JS Architecture** | IIFE or module pattern, DOM-driven page routing, event delegation, no transpilation needed |
| **State** | localStorage for persistence (cart, auth, preferences, progress) — all changes are per-browser |
| **Animations** | CSS transitions/keyframes, Intersection Observer for scroll reveals, requestAnimationFrame for smooth effects |
| **Accessibility** | Semantic HTML, keyboard navigation, focus management, ARIA where appropriate |
| **Zero Build** | Open any `index.html` in a browser — no npm, no bundler, no server required |

## External Libraries

| Library | CDN | Used In |
|---|---|---|
| **Chart.js 4.4** | jsdelivr | 01, 06, 07, 08, 10, 11, 13, 14, 15, 16 |
| **Leaflet.js** | unpkg | 05, 07, 10 |
| **Google Fonts** | fonts.googleapis.com | 01, 05, 06, 09, 12, 13, 14, 15 |
| **Swiper.js** | cdn | 16 |

## Quick Start

```bash
# Clone the repo
git clone https://github.com/Tahsan0619/8-in-1.git

# Open any site — no install needed
# Just open the HTML file in your browser
start 01-ecommerce/index.html
```

## License

MIT
