# Real Estate Platform — Component Specifications

---

## Layout Components

### `Header`
- **Desktop:** Logo | Nav links (Buy, Rent, Agents, Mortgage) | Theme toggle | User avatar/login
- **Mobile:** Hamburger | Logo | Search icon + User icon
- **Behavior:** Sticky, transparent on hero then solid bg on scroll
- **Search bar:** collapsible inline on desktop, full-screen overlay on mobile

### `Footer`
- 4-column grid: Listings (Buy/Rent by area), Resources (Mortgage, Guides), Company (About, Contact, Careers), Contact info
- Area quick links: popular neighborhoods
- App download badges (UI only)
- Social icons row
- Copyright + legal links

### `MobileDrawer`
- Full-screen left slide-in
- Nav links, area links, account links
- Theme toggle, close button

---

## Property Components

### `PropertyCard`
- **Grid variant:** Vertical — image carousel (dots navigation), wishlist heart overlay, price badge on image, title (beds/bath), location, area (sqft), key features icons row
- **List variant:** Horizontal — image left (200px), details right with more specs visible
- **Map popup:** Compact — thumbnail + price + beds/bath + link
- **Hover:** Shadow lift, slight image zoom
- **Badges:** "New" (green), "Reduced" (red), "Featured" (gold), "Hot" (orange) — top-left corner overlay
- **Skeleton:** Pulse animation placeholder

### `PropertyGallery`
- Grid layout: 1 large main + 4 smaller thumbnails
- "+X more" overlay on last thumbnail
- Click any → lightbox modal with full gallery navigation
- Virtual Tour button → opens 360° viewer modal
- Mobile: horizontal swiper with dots

### `PropertySpecs`
- Icon + label pairs in grid: 🛏 Beds, 🚿 Baths, 📐 Area (sqft), 🏗 Year built, 🅿 Parking, 🛗 Floor
- Amenities grid: checkmark list (Gym, Pool, Security, Generator, Rooftop, Garden, etc.)
- Specifications table: key-value pairs (Floor, Facing, Condition, Furnishing, etc.)

### `VirtualTourModal`
- Full-screen modal with close X
- Simulated 360° view: panoramic image with drag-to-rotate (CSS transform + mouse tracking)
- Room navigation: thumbnail strip or dot indicators (Living Room, Kitchen, Bedroom, Balcony)
- Loading state: spinner + "Loading Virtual Tour..."

### `CompareCard`
- Column layout for comparison table
- Property image + price at top
- Specs rows aligned across columns for visual comparison
- Highlight differences: bold/accent for better values
- Remove button per property
- Add slot: dashed border with search dropdown

---

## Search & Filter Components

### `HeroSearch`
- Centered on hero image with backdrop blur
- Row 1: Buy/Rent toggle pills, location input (autocomplete), property type dropdown, search button
- Row 2 (expandable): price range (min/max inputs), bedrooms dropdown, more filters trigger
- Mobile: stacked layout, full-width inputs

### `FilterBar`
- Horizontal bar above listings
- Filter pills: type, price range, beds, baths, area range
- Each pill opens dropdown with options
- "More Filters" → slide-out panel with all filters
- Active filter count badge
- Clear all button
- Mobile: horizontal scroll + bottom sheet for full filters

### `AdvancedFilters`
- Slide-in panel (right side or bottom sheet on mobile)
- All filters: type (apartment/house/land/commercial), price range slider, beds & baths selector, area range, year built range, amenities checkboxes, furnished/unfurnished, ready/under construction
- Apply + Reset buttons

### `SortDropdown`
- Options: Newest, Price (low→high), Price (high→low), Area (largest), Most popular
- Default: Newest

---

## Map Components

### `ListingsMap`
- Leaflet map: fills right half of search page (or full width toggle)
- Property markers: custom icons with price labels
- Cluster markers when zoomed out (number badge)
- Marker hover: popup with property thumbnail + price + beds/bath + link
- Map/List sync: hover on list highlights marker on map and vice versa
- Draw tool: draw rectangle on map to search area
- Recenter + zoom controls
- "Search this area" button on map pan

### `PropertyLocationMap`
- Single property map on detail page
- Property pin at center
- Nearby POI markers: schools (🏫), hospitals (🏥), markets (🛒), transit (🚇)
- Distance indicators from property to POIs
- Street view link (external)

---

## Agent Components

### `AgentCard`
- Photo circle, name, title, rating stars, reviews count
- Specialization badges (Buy, Rent, Commercial)
- Active listings count
- [View Profile] [Contact] buttons
- Compact variant for property detail sidebar

### `AgentProfile`
- Cover + avatar section
- Bio text
- Stats row: listings, sold, years experience, rating
- Tabbed: Active Listings | Sold Properties | Reviews | About
- Contact sidebar: phone, email, contact form

### `ReviewCard`
- User avatar + name + date
- Star rating display
- Review text
- Helpful vote button
- Agent response (if any, nested under review)

### `ContactAgentForm`
- In property detail sidebar or agent profile
- Fields: name, email, phone, message, preferred contact method (call/email/whatsapp)
- Schedule viewing: date picker + time slot selector
- Pre-filled property reference

---

## Financial Components

### `MortgageCalculator`
- Inputs: property price, down payment (% + amount), interest rate (%), loan term (years)
- Slider controls for each with manual input override
- Output: monthly payment, total interest, total cost
- Payment breakdown: donut chart (principal vs interest vs tax)
- Amortization: line chart (balance over time) + table

### `PriceHistoryChart`
- Line chart: property/area price trends over years
- Tooltip with exact values on hover
- Compare: area average vs this property price

### `AffordabilityBadge`
- Color-coded indicator on property cards
- Based on user's saved budget preferences
- Green: within budget, Yellow: slightly over, Red: significantly over

---

## Utility Components

### `Toast`
- Position: top-right
- Types: success, error, info, warning
- Auto-dismiss: 4 seconds
- "Saved to favorites" with undo action

### `SavedSearchAlert`
- Card showing saved search criteria
- Notification toggle: email alerts for new matches (UI only)
- Match count badge
- Edit / Delete actions

### `Breadcrumb`
- Path: Home > Area > Property Type > Property
- Clickable links, current page non-linked
- Truncates on mobile
