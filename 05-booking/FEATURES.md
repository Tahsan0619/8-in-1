# Booking / Service — Feature Specifications

---

## 1. Homepage

### 1.1 Hero with Search
- Large headline: "Book the Best Services Near You"
- Search form (horizontal bar): Location input (with pin icon) + Service type dropdown + Date picker + "Search" button
- Background: subtle gradient or lifestyle image with overlay
- Popular searches below: quick-link pills

### 1.2 Featured Services
- 4-card row of top-rated services
- Each: image + name + provider + rating (stars) + price + "Book" button
- Auto-curated from highest rated

### 1.3 How It Works
- 3-step horizontal flow: Search → Book → Enjoy
- Each: numbered circle icon + title + description
- Clean, centered layout

### 1.4 Popular Categories
- Icon cards grid (3x2 or scrollable)
- Each: category icon (in circle bg) + name + service count
- Categories: Salon, Clinic, Restaurant, Fitness, Home Services, Auto

### 1.5 Testimonials
- Carousel of customer reviews
- Each: quote + name + service booked + star rating + photo
- Auto-slide, dots navigation

### 1.6 App Download Banner
- Full-width section with app mockup image
- "Download our app" headline
- App Store + Play Store badge buttons (UI only)
- Phone mockup showing the booking screen

---

## 2. Service Listing

### 2.1 Search + Filters
- Top search bar (location + service type)
- Filter sidebar (desktop) / bottom sheet (mobile):
  - Location radius slider
  - Price range (min/max inputs)
  - Rating minimum (star select)
  - Availability (date picker)
  - Category checkboxes
- Active filter pills above results
- Result count: "42 services found"

### 2.2 Service Cards
- Image (16:9 thumbnail)
- Service name + provider name
- Star rating + review count
- Price: "From $25"
- Distance: "2.3 km away"
- "Book Now" button
- Wishlist heart toggle

### 2.3 Map View Toggle
- Toggle button: List | Map (split on desktop, toggle on mobile)
- Map: Leaflet.js with service pin markers
- Click pin → popup card with service summary + "View" button
- Map and list sync (hover list item highlights map pin)
- Marker clusters for dense areas

### 2.4 List vs Grid View
- Grid: image-heavy cards
- List: compact horizontal cards with more text detail
- Toggle buttons above results

---

## 3. Service Detail

### 3.1 Photo Gallery
- Hero image (large) + 4 thumbnail grid
- "View all photos" button → lightbox gallery
- Swipe on mobile

### 3.2 Service Description
- Title + category badge
- Full description (2-3 paragraphs)
- Features list (checkmarks)
- Duration: "60 minutes"

### 3.3 Provider Info Card
- Provider photo (64px circle) + name + "Member since" date
- Star rating + total reviews count
- Response time: "Usually responds within 1 hour"
- "Contact Provider" button

### 3.4 Pricing Breakdown
- Service variants with prices
- Each: variant name + duration + price
- Selected variant highlighted
- Add-ons: optional extras with checkboxes + prices

### 3.5 Availability Calendar
- Month view calendar grid (7 columns)
- Navigate: prev/next month arrows
- Available days: normal styling, clickable
- Unavailable: muted, non-clickable
- Selected: accent bg
- Today: accent border ring
- Small availability dot indicator per day

### 3.6 Time Slot Picker
- Grid of time slots for selected day
- Each slot: time range button (e.g., "10:00 AM")
- States: available, selected (accent bg), booked (disabled)
- Morning / Afternoon / Evening grouping labels

### 3.7 Booking Form
- Fields: name, phone, notes (optional)
- Pre-filled if logged in
- Inline validation

### 3.8 Reviews Section
- Average rating (large stars) + distribution bars (5★ to 1★)
- Individual reviews: avatar + name + date + stars + text
- Sort: Newest, Highest, Lowest
- "Write a review" button

---

## 4. Booking Flow

### 4.1 Step 1: Select Date + Time
- Calendar for date selection
- Time slots for selected date
- Selected shown in summary sidebar

### 4.2 Step 2: Enter Details
- Name, phone, email
- Special requests textarea
- Service variant confirmation

### 4.3 Step 3: Payment
- Payment method: COD / Online
- COD: confirmed immediately
- Online: simulated payment form (card number UI or bKash/Nagad input)
- Order total displayed

### 4.4 Step 4: Confirmation
- Success icon (checkmark animation)
- Booking ID prominently displayed
- Booking summary: service + date + time + provider + total
- "Add to Calendar" button (generates .ics file mockup)
- "View My Bookings" button
- SMS confirmation mockup (phone UI showing SMS text)

### 4.5 Booking Summary Card
- Sticky sidebar during booking flow
- Service image + name + provider
- Date + time slot
- Price breakdown
- Total

---

## 5. User Dashboard

### 5.1 Upcoming Bookings
- Card list sorted by date
- Each: service name + provider + date + time + status badge + "Cancel" + "Reschedule" buttons
- Status: Confirmed (green), Pending (yellow)

### 5.2 Past Bookings
- Same card style, muted colors
- "Rebook" button per booking
- "Leave Review" link if unreviewed

### 5.3 Cancel / Reschedule
- Cancel: confirmation modal with reason dropdown
- Reschedule: opens calendar + slot picker, updates booking

### 5.4 Notifications
- List of booking-related notifications
- Types: Booking confirmed, Reminder (24h before), Cancelled, Review requested
- Read/unread indicator (dot)

---

## 6. Provider Dashboard

### 6.1 Today's Bookings
- Daily view list of bookings
- Each: time + customer name + service + status + actions (confirm/cancel)
- Timeline-style layout

### 6.2 Manage Availability
- Week view calendar
- Click to toggle slots on/off
- Bulk set: recurring availability (e.g., Mon-Fri 9am-5pm)
- Block specific dates

### 6.3 Earnings Summary
- KPI cards: Today's earnings, This week, This month, Total
- Earnings chart (bar chart, weekly/monthly)
- Transaction list with dates and amounts

### 6.4 Profile Management
- Edit: name, bio, photos, services offered, pricing
- Service area settings
- Response time settings

---

## 7. Restaurant Mode

### 7.1 Menu with Categories
- Category tabs: Appetizers, Main Course, Drinks, Desserts
- Item cards: photo + name + description (1 line) + price + "Add" button
- Quantity stepper after adding

### 7.2 Cart / Order
- Sticky sidebar or bottom sheet
- Items with quantity + price
- Subtotal + delivery fee + total
- "Place Order" button

### 7.3 Table Reservation
- Date picker + party size dropdown + time slot picker
- Special requests field
- "Reserve Table" button
- Confirmation with reservation details

### 7.4 Delivery vs Dine-In Toggle
- Toggle at top: Delivery | Dine-in
- Delivery: shows delivery address input + fee
- Dine-in: shows table reservation option

---

## 8. Clinic Mode

### 8.1 Doctor Listing
- Cards: photo + name + specialization + experience years + rating + "Book" button
- Filter: specialization dropdown, gender, rating, availability
- Search by doctor name

### 8.2 Doctor Profile
- Large photo + name + specialization + qualifications
- About paragraph
- Languages spoken
- Consultation fee
- Available days + current week slots
- Patient reviews

### 8.3 Appointment Booking
- Same flow as service booking (date → time → details → confirm)
- Additional: symptoms/reason textarea
- Consultation type: In-person / Video call toggle

### 8.4 Prescription History
- List view: date + doctor + diagnosis + "View" button
- Detail: doctor info + diagnosis + medications list + follow-up date
- UI only, no real data

---

## 9. UI/UX Global

### 9.1 Real-Time Slot Availability
- Slots visually update when booked (animation: slot shrinks + grays out)
- "Last slot!" warning badge
- Smooth transitions on state change

### 9.2 SMS Confirmation Mockup
- Phone frame UI showing SMS bubble
- Message: "Your booking #BK1234 is confirmed. Service: Haircut, Date: Jan 15, Time: 2:00 PM"
- Decorative element on confirmation page

### 9.3 Mobile-First Design
- Bottom navigation bar: Home, Search, Bookings, Profile
- Swipe for map/list toggle
- Pull-to-refresh gesture (visual only)
- 44px minimum touch targets

### 9.4 Dark / Light Mode
- Toggle in header
- localStorage + system preference
- Smooth transition
