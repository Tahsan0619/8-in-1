# Real Estate Platform — Feature Specifications

---

## 1. Property Discovery

### 1.1 Hero Search
- Full-width hero with background property image + gradient overlay
- Search bar: Buy/Rent toggle, location autocomplete, property type dropdown, search button
- Expandable row: price range (min/max), bedrooms, more filters link
- Recent searches dropdown (localStorage)
- Popular searches suggestions

### 1.2 Featured Listings
- Horizontal scroll carousel on homepage
- 4 visible desktop, 2 tablet, 1 mobile
- Each card: image carousel with dots, price badge, beds/bath/area, location, wishlist heart
- "Featured" badge overlay on premium listings
- "View All" link to full listings

### 1.3 Popular Areas
- Grid of area cards: area image, name, listing count, avg price
- Click → filtered listings for that area
- Hover: overlay with quick stats

### 1.4 Market Insights
- Charts section on homepage
- Average price trend (line chart, last 12 months)
- Properties by type (donut chart: apartment, house, land, commercial)
- Data sourced from mock data

---

## 2. Listings & Search

### 2.1 Split View (Map + List)
- Desktop: left 55% = scrollable property list, right 45% = Leaflet map
- Map markers: custom price labels (৳85L, ৳45L)
- Hover property in list → highlight marker on map (bounce animation)
- Click marker → popup with thumbnail + basic info + link
- Map controls: zoom, recenter, "Search this area" button on pan
- Toggle: full map / full list / split view
- Mobile: toggle between map and list (bottom tab buttons)

### 2.2 Filter System
- Horizontal filter bar above results
- Quick filters: Type, Price, Beds, Baths — dropdown per filter
- "More Filters" → slide panel with full filter options:
  - Property type: Apartment, House, Land, Commercial, Studio
  - Price range: dual slider + min/max inputs
  - Bedrooms: 1, 2, 3, 4, 5+
  - Bathrooms: 1, 2, 3+
  - Area range: min/max sqft
  - Year built: range
  - Amenities: checkboxes (parking, gym, pool, security, elevator, generator)
  - Furnished / Unfurnished / Semi-furnished
  - Ready / Under construction
- Active filters: pill badges above results with remove X
- "Clear All" button
- Result count updates live

### 2.3 Sort & View
- Sort dropdown: Newest, Price Low→High, Price High→Low, Largest Area, Most Popular
- View toggle: Grid (cards) / List (horizontal)
- Pagination: numbered with prev/next
- Results count: "248 properties found"

### 2.4 Saved Search
- Save current search criteria (filters + location + sort)
- Saved searches page: list of saved searches with match counts
- Alert toggle: "Notify me of new matches" (UI simulation)

---

## 3. Property Detail

### 3.1 Image Gallery
- Grid layout: 1 large (65%) + 4 small (35%, 2×2 grid)
- Last small image: "+12 More" overlay with count
- Click any image → full-screen lightbox with arrow navigation
- Swipe support in lightbox
- Action bar below: All Photos, Virtual Tour, Share, Save

### 3.2 Virtual Tour
- Modal overlay triggered by "Virtual Tour" button
- Simulated panoramic view: wide image with drag-to-rotate (mouse/touch)
- Room selector: thumbnail strip or pills (Living Room, Kitchen, Master Bedroom, Bathroom, Balcony)
- Each room: different panoramic image
- Fullscreen toggle
- Loading spinner transition between rooms

### 3.3 Property Information
- Title: descriptive name + type badge
- Location: full address, area/neighborhood, city
- Price: large format with price per sqft
- Quick specs: beds, baths, area, year, floor, parking — icon + label grid
- Description: multi-paragraph property description
- Amenities: checkmark grid (gym, pool, 24hr security, CCTV, generator, rooftop, garden, playground, community hall)
- Specifications table: floor level, total floors, facing direction, condition, furnishing status, ownership type

### 3.4 Location Map
- Leaflet map: centered on property with marker
- Nearby POIs: schools, hospitals, markets, restaurants, transit — with distance
- Click POI marker → name and distance popup
- Walk score / Transit score indicators (simulated numeric scores)

### 3.5 Agent Card (Sidebar)
- Agent photo, name, title
- Rating stars + review count
- Contact buttons: Call, Email, WhatsApp
- "Schedule Viewing" → date picker + time slot form
- Pre-filled message with property reference

### 3.6 Mortgage Quick Calculator
- Compact version in property detail sidebar
- Inputs: down payment %, interest rate, term
- Output: monthly payment estimate
- "See Full Breakdown" → mortgage calculator page

### 3.7 Similar Properties
- Horizontal carousel below detail
- Same area, similar specs, similar price range
- 4 visible desktop, auto-scroll on mobile

---

## 4. Mortgage Calculator (Full Page)

### 4.1 Calculator Inputs
- Property price: number input with BDT formatting
- Down payment: percentage slider (5-50%) + calculated amount display
- Interest rate: slider (5-15%) with 0.25% steps
- Loan term: dropdown (5, 10, 15, 20, 25, 30 years)
- All inputs update results in real-time

### 4.2 Results Display
- Monthly payment: large bold number
- Payment breakdown donut chart: principal, interest, property tax estimate
- Total loan amount, total interest, total cost
- Comparison: renting vs buying monthly cost

### 4.3 Amortization Schedule
- Line chart: principal vs interest payments over time (crossover point highlighted)
- Detailed table: year, annual payment, principal paid, interest paid, remaining balance
- Download as PDF button (UI simulation)

---

## 5. Agents

### 5.1 Agent Directory
- Grid of agent cards with search and filter
- Search by name or area
- Filter by specialization: Residential, Commercial, Rental, Land
- Sort by: rating, listings count, experience
- Pagination

### 5.2 Agent Profile
- Cover image + avatar overlap
- Name, title, bio, years of experience
- Contact info: phone, email, office address
- Stats bar: active listings, total sold, avg rating, response time
- Tabbed content: Active Listings (property grid), Sold (with sale prices), Reviews (paginated), About (full bio + certifications)
- Contact form: schedule meeting or send message

### 5.3 Agent Reviews
- Average rating: large stars + number + total count
- Rating distribution: horizontal bar chart (5 star → 1 star)
- Review cards: user name, date, stars, text, helpful votes
- Sort: most recent, highest, lowest
- Write review form

---

## 6. User Features

### 6.1 Saved / Favorites
- Grid of saved properties
- Remove from saved with heart toggle
- "Get alerts for similar properties" toggle per saved property
- Saved searches section with match count badges
- Empty state: illustration + "Start browsing" CTA

### 6.2 Compare Properties
- Compare up to 3 properties side-by-side
- Add via: compare button on property cards + search within compare page
- Comparison rows: price, beds, baths, area, price per sqft, year, floor, amenities (✅/❌)
- Highlight best values (green text)
- Remove individual properties from comparison
- Clear all button

### 6.3 Auth (Login / Register)
- Modal dialog: toggle Login / Register tabs
- Login: email + password
- Register: name, email, phone, password
- Social login buttons (Google — UI only)
- "As Agent" registration option (additional fields: license, experience, areas)

---

## 7. Agent Dashboard

### 7.1 Dashboard Overview
- KPIs: Active Listings, Total Views, Leads This Month, Avg Response Time
- Recent leads list: name, property interested in, date, status
- Listing performance: views chart per property
- Quick actions: Add Listing, View Leads, Edit Profile

### 7.2 Listing Management
- Table: property image, title, status (Active/Draft/Sold), views, inquiries, date
- Add/edit listing form: property details, images, pricing, description, amenities
- Status toggle: Active / Draft / Sold / Archived
- Analytics per listing: views, saves, inquiries over time

### 7.3 Lead Management
- Incoming inquiries: name, contact, property, message, date, status (New/Contacted/Converted)
- Status update via dropdown
- Quick reply button → email/message compose
- Lead source tracking (search, referral, direct)

---

## 8. UI/UX Global

### 8.1 Responsive Behavior
- Hero search: stacked on mobile, minimal on tablet
- Property grid: 3 → 2 → 1 columns
- Map: toggle mode on mobile (map or list, not split)
- Agent cards: 4 → 3 → 2 → 1
- Gallery: swiper on mobile
- Bottom sticky: CTA bar on mobile property pages (price + Contact Agent)

### 8.2 Dark / Light Mode
- Toggle in header
- LocalStorage persistence
- System preference on first visit
- Map tiles: auto-switch to dark tile set
- Smooth 200ms transition

### 8.3 Toast Notifications
- Top-right desktop, top-center mobile
- Types: success, error, info, warning
- "Saved to favorites!" with undo, "Viewing scheduled", "Filter applied"
- 4s auto-dismiss

### 8.4 Loading States
- Property card skeletons: image + text pulses
- Map: loading overlay with spinner
- Gallery lightbox: progressive image load
- Calculator: result values animate in (counter effect)
- Table skeleton: row placeholders
