# Booking / Service — Component Specifications

---

## Layout Components

### `Header`
- Logo left | Nav center (Browse, My Bookings) | Login/Avatar + Theme toggle right
- Search bar variant for listing pages (full-width below nav)
- Sticky, shadow on scroll

### `Footer`
- 4-column: About, Services, Support, Contact
- App download badges
- Social icons
- Payment method icons

### `BottomNav` (Mobile)
- Fixed bottom bar: Home, Search, Bookings, Profile (4 icons + labels)
- Active: accent color
- 56px height

---

## Search Components

### `SearchBar`
- **Hero variant:** Large, horizontal, 3 fields + button
  - Location: text input with 📍 icon, autocomplete suggestions
  - Service: dropdown select
  - Date: date picker trigger
  - Search: accent button
- **Listing variant:** Compact, single row with filter button

### `FilterSidebar`
- Collapsible sections per filter type
- **Location radius:** Range slider (1-50 km)
- **Price range:** Dual inputs (min/max)
- **Rating:** Star buttons (5★, 4★+, 3★+)
- **Availability:** Date picker integration
- **Category:** Checkbox list
- "Apply Filters" button (mobile)
- Active filter count badge
- "Clear all" link

### `FilterPills`
- Row above results showing active filters
- Each: text + remove X
- "Clear all" link at end

---

## Service Components

### `ServiceCard`
- Image (16:9, radius-lg top)
- Body: name (H3) + provider + star rating + review count + price + distance
- Footer: "Book Now" button
- Wishlist heart (top-right of image)
- Hover: shadow-md, translate-y -2px

### `ProviderCard`
- Photo (64px circle) + name + "Member since" text
- Rating display + review count
- Response time badge
- "Contact" button (secondary)

### `ServiceGallery`
- Main hero image (large)
- Thumbnail grid (2x2) beside hero
- "Show all photos" button → lightbox
- Responsive: stacks on mobile

---

## Calendar & Booking Components

### `CalendarPicker`
- Month view: 7-column grid (Sun-Sat headers)
- Month/year header with prev/next arrows
- Day cells (40x40px):
  - Normal: clickable, text-primary
  - Today: accent border ring
  - Selected: accent bg, white text
  - Has availability: small green dot below date
  - Unavailable: muted text, not clickable
  - Past: muted, not clickable
- Month transition: fade animation

### `TimeSlotPicker`
- Grouped by time of day: Morning, Afternoon, Evening
- Slot buttons: time label (e.g., "10:00 AM"), 40px height, radius-md
- States:
  - Available: surface bg, border, hover accent-light bg
  - Selected: accent bg, white text
  - Booked: muted bg, muted text, cursor not-allowed, strikethrough
  - Last slot: orange border, "Last!" micro-badge
- 3-4 columns layout

### `BookingStepper`
- Horizontal step indicator: 4 steps with numbers
- Completed: checkmark, accent color
- Active: filled circle, accent
- Upcoming: outlined, muted
- Connecting lines (colored for completed)

### `BookingSummary`
- Sticky sidebar card
- Service thumbnail + name + provider
- Selected date + time + duration
- Price breakdown: base + add-ons + total
- Updates live as user makes selections

### `BookingConfirmation`
- Large checkmark animation (SVG draw)
- Booking ID in accent, large text
- Summary details (service, date, time, provider, total)
- Action buttons: "Add to Calendar", "View My Bookings"
- SMS mockup: phone frame with SMS bubble

---

## Dashboard Components

### `BookingCard`
- Service name + provider + date/time + status badge
- Actions: Cancel (red text) / Reschedule (accent text) for upcoming
- Actions: Rebook (accent) / Review (secondary) for past
- Status badges: Confirmed (green), Pending (yellow), Cancelled (red), Completed (gray)

### `ProviderCalendar`
- Week view: 7 columns (days) × time slots (rows)
- Booked slots: filled accent bg
- Available: empty
- Blocked: hatched/gray
- Click to toggle availability
- Customer name shown in booked slots

### `EarningsCard`
- KPI card: icon + label + value + trend badge
- 4 in a row: Today, This Week, This Month, Total

### `NotificationItem`
- Icon (type-based: 🔔 📅 ❌ ⭐) + title + description + timestamp
- Unread: left accent border + bold title
- Read: normal styling
- Click marks as read

---

## Restaurant Components

### `MenuCategoryTabs`
- Horizontal scrollable pills: Appetizers, Main, Drinks, Desserts
- Active: accent bg
- Scroll to category section on click

### `MenuItemCard`
- Image (square, 80px) + name + description (1 line) + price + "Add" button
- After adding: button becomes quantity stepper [- qty +]
- Dietary badges: 🌱 Veg, 🌶 Spicy (optional pills)

### `OrderSidebar`
- Sticky right sidebar (desktop) / bottom sheet (mobile)
- Item list: name + qty + price
- Subtotal + delivery fee + total
- "Place Order" button

### `DeliveryToggle`
- Pill toggle: Delivery | Dine-in
- Delivery: shows address input field
- Dine-in: shows table reservation prompt

### `TableReservation`
- Date picker + party size (dropdown 1-10) + time slot
- Special requests textarea
- "Reserve" button

---

## Clinic Components

### `DoctorCard`
- Photo (80px circle) + name + specialization badge + experience + rating + fee
- "Book Appointment" button
- Compact info density

### `DoctorProfile`
- Large photo + full credentials + about text
- Qualification list
- Languages, hospital affiliation
- Consultation fee display

### `AppointmentSlots`
- Day tabs (Mon-Fri) with date labels
- Time slots per day (vertical list)
- "Off" days shown as disabled
- Select → inline confirmation

### `PrescriptionCard`
- Date + doctor name + diagnosis
- Expandable: medications list + dosage + follow-up date
- "View Details" button

---

## Map Components

### `MapView`
- Leaflet.js map container
- Service pins with price labels
- Click pin → popup card (image + name + rating + "View")
- Marker clustering for dense areas
- Zoom controls
- "Redo search in this area" button on map move

### `MapListSync`
- Hover list item → highlight map pin (bounce)
- Click map pin → scroll to list item
- Visual connection between list and map

---

## Utility Components

### `ThemeToggle`
- Sun/Moon icon, smooth transition
- localStorage persistence

### `SMSMockup`
- Phone frame (CSS illustration)
- Chat bubble with booking confirmation text
- Decorative element, not interactive

### `StarRating`
- Display: filled/empty stars with half-star support
- Input: hover + click to select rating
- Shows numeric value beside stars
