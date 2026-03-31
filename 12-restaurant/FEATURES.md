# Restaurant & Food Ordering — Features

> Detailed specifications for every interactive feature.

---

## 1. Homepage & Discovery

### 1.1 Hero Section
- Full-width hero with high-quality food/restaurant background image
- Headline + subtext with warm overlay gradient
- Two CTAs: "Order Now" (primary) → Menu page, "Reserve a Table" (secondary) → Reservation
- Parallax-style background on scroll (optional, reduced-motion safe)

### 1.2 Popular Dishes
- 4-card horizontal row of best-selling dishes
- DishCard shows: photo, name, rating, price, Quick Add button
- "View Full Menu" link to Menu page
- Quick Add → adds default size to cart with toast confirmation

### 1.3 About Section
- Split layout: restaurant photo left, story text right
- Establishment year, mission statement, cuisine type
- "Read More" expands to full story

### 1.4 Why Choose Us
- 3-column feature strip with icons
- Fresh Ingredients · Expert Chefs · Fast Delivery
- Count-up stat below each (e.g., "500+ dishes", "15 chefs", "30 min avg")

### 1.5 Customer Reviews Carousel
- Horizontal carousel with 3 visible cards
- Auto-play (8s interval), pause on hover
- Each card: name, stars, review text, dish ordered
- Navigation dots + prev/next arrows
- "View All Reviews" link

### 1.6 Quick Reservation Form
- Compact inline form: Date, Time, Party Size, Occasion
- "Check Availability" → navigates to Reservation page with pre-filled values

---

## 2. Menu & Browsing

### 2.1 Category Navigation
- Sticky horizontal tab bar below header
- Categories: All, Biriyani, Grills, Curries, Appetizers, Desserts, Beverages, Combos
- Active category highlighted; smooth scroll to section
- Click category scrolls to section OR filters grid

### 2.2 Menu Search
- Search input at top of menu page
- Debounced search (300ms) filters dishes by name/description
- Highlights matching text in results
- "No results" empty state with suggestions

### 2.3 Dietary Filters
- Checkbox row: Vegetarian, Spicy, Chef's Pick
- Combines with category filter
- Real-time filtering; result count updates

### 2.4 Menu Grid
- Responsive grid: 4 columns desktop, 3 tablet, 2/1 mobile
- Grouped by category with section headers
- DishCards with photo, name, rating, price, badges, actions
- Smooth appear animation on filter change

---

## 3. Dish Detail & Customization

### 3.1 Photo Gallery
- Large primary photo with thumbnail strip below
- Click thumbnail swaps main image
- Images zoom on hover (desktop)

### 3.2 Size Selection
- Radio group: Regular, Large, Family (or similar)
- Price updates dynamically based on selection
- Default: Regular pre-selected

### 3.3 Add-ons
- Checkbox list with price additions
- Each add-on has name + price (e.g., "Extra Meat +৳150")
- Multiple add-ons can be selected
- Total price updates in real-time

### 3.4 Spice Level
- Toggle group: Mild · Medium · Hot
- Visual 🌶 indicators (1/2/3 chilis)
- Default: Medium pre-selected

### 3.5 Special Instructions
- Textarea for custom notes (e.g., "No onions", "Extra sauce")
- Max 200 characters with counter
- Optional field

### 3.6 Quantity & Add to Cart
- Quantity selector: − number + (min 1, max 20)
- Dynamic total: base price + add-ons × quantity
- "Add to Cart" button with cart icon
- Success toast on add; cart badge updates
- "You May Also Like" section with 3 related DishCards

---

## 4. Cart System

### 4.1 Cart Items
- List of CartItem rows
- Each shows: thumbnail, name, size, add-ons, spice level, quantity controls, subtotal, remove button
- Quantity changes recalculate subtotal instantly
- Remove item with confirmation toast (undo for 3s)

### 4.2 Promo Code
- Input field with "Apply" button
- Valid codes: "WELCOME10" (10% off), "FEAST20" (20% off), "FREE" (free delivery)
- Success: shows discount line with green text
- Invalid: error message "Invalid promo code"
- Only one promo code at a time; "Remove" option

### 4.3 Cart Summary
- Subtotal (sum of all items)
- Delivery fee (৳60 flat, waived over ৳1500 or with FREE promo)
- Discount amount (if promo applied)
- Total (bold, large)
- "Continue Shopping" → Menu page
- "Proceed to Checkout" → Checkout page

### 4.4 Cart Persistence
- Cart saved to localStorage on every change
- Restored on page load
- Cart badge in header always reflects current count

---

## 5. Checkout & Payment

### 5.1 Delivery / Pickup Toggle
- Switch between "Delivery" and "Pickup" modes
- Delivery shows address form; Pickup shows restaurant address + pickup time

### 5.2 Delivery Form
- Fields: Full Name*, Phone*, Address*, Area (dropdown)*, Delivery Instructions
- Inline validation on blur
- Phone format: BD format (01XXXXXXXXX)

### 5.3 Payment Selection
- Radio group with logos: Cash on Delivery, bKash, Nagad, Card
- Default: Cash on Delivery selected

### 5.4 Order Confirmation
- Summary: all items, delivery info, payment method, total
- "Place Order" button
- On success: 
  - Generate order number (ORD-YYYY-XXXX)
  - Clear cart
  - Save order to localStorage
  - Redirect to Order Tracking page
  - Success toast notification

---

## 6. Order Tracking

### 6.1 Order Status Timeline
- Vertical timeline with 6 stages:
  1. Order Placed (timestamp)
  2. Confirmed (timestamp)
  3. Preparing (animated cooking icon)
  4. Ready for Pickup
  5. Out for Delivery (animated delivery icon)
  6. Delivered
- Completed steps: green checkmark + timestamp
- Current step: pulsing animation + estimated time
- Pending steps: gray circle

### 6.2 Simulated Progress
- Auto-advance through stages every 15 seconds (demo mode)
- Each stage transition has smooth animation
- "Delivered" triggers success celebration (confetti or checkmark animation)

### 6.3 Order Details Panel
- Order number, items list, total
- Delivery address and recipient info
- Estimated delivery time
- Contact support link (simulated)

---

## 7. Table Reservation

### 7.1 Reservation Form
- Date picker (no past dates)
- Time dropdown (30-min intervals: 12:00 PM – 10:00 PM)
- Party size stepper (1–12)
- Occasion dropdown: Dinner, Birthday, Anniversary, Business, Other
- "Check Availability" triggers floor plan view

### 7.2 Interactive Floor Plan
- Visual SVG/CSS restaurant layout
- Tables shown as circles/rectangles with table numbers and capacity
- Color-coded: 🟢 Available, 🔴 Booked, 🟡 Selected
- Click available table → selects it (turns yellow)
- Hover shows tooltip: "Table 5 — seats 4"
- Only tables matching party size are clickable

### 7.3 Reservation Details
- After table selection, show detail form:
  - Name*, Phone*, Email, Special Requests (textarea)
- "Confirm Reservation" button
- Success: confirmation number, date/time, table number
- Saved to localStorage

---

## 8. Reviews

### 8.1 Review Statistics
- Large average rating display (e.g., "4.7 out of 5")
- Total review count
- Rating distribution: horizontal bars for 5★ through 1★ with counts
- Percentage filled bars with smooth animation

### 8.2 Review List
- Paginated ReviewCards (6 per page)
- Each: reviewer name, date, star rating (filled/empty ★), review text, dish ordered tag
- Sort: Newest First, Highest Rated, Lowest Rated
- Load More button

### 8.3 Write a Review
- Star rating selector (hover to preview, click to set)
- Name input, dish select dropdown, review textarea
- Submit saves to localStorage and adds to list
- Form validation: name required, minimum 1 star, min 10 chars text

---

## 9. Admin Dashboard

### 9.1 KPI Cards
- Today's Orders (count + trend)
- Pending Reservations (count)
- Today's Revenue (৳ amount)
- Average Order Value (৳ amount)

### 9.2 Active Orders Management
- Table: Order #, Items, Time, Status, Total, Actions
- Status badges: Preparing, Ready, Out for Delivery, Delivered, Cancelled
- Actions: Update Status (dropdown), View Details, Cancel (with confirm)
- Real-time status changes saved to localStorage

### 9.3 Menu Editor
- List of all menu items grouped by category
- Each item: name, category, price, available toggle
- "Add New Item" opens MenuItemEditor form
- Edit existing items inline or in modal
- Toggle availability (available/sold out)

### 9.4 Reservation Management
- Today's reservations table
- Columns: Guest, Date/Time, Party Size, Table, Status, Actions
- Actions: Confirm, Modify (reassign table), Cancel
- Status: Confirmed, Pending, Cancelled, Completed

---

## 10. UI / UX — Global

### 10.1 Responsive Layout
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Menu categories become horizontally scrollable on mobile
- Cart accessible from floating button on mobile
- Touch-friendly controls (min 44px targets)

### 10.2 Dark Mode
- System preference detection + manual toggle
- Warm dark palette (not cold gray)
- Persisted in localStorage
- Smooth transition (200ms)
- Food photos remain vibrant through proper contrast

### 10.3 Cart Micro-interactions
- Badge bounce animation when item added
- Quantity buttons have tap feedback
- Remove item has undo toast (3s)
- Promo code apply has success/error animation

### 10.4 Loading States
- Skeleton shimmer for menu cards
- Spinner for form submissions
- Disabled buttons during processing

### 10.5 Data Persistence
- All data in localStorage: cart, orders, reservations, reviews, menu items
- Cart survives page refreshes
- Order history accessible from tracking page
- Admin changes persist

### 10.6 Accessibility
- WCAG AA compliance
- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation for menus, forms, and floor plan
- Focus indicators on all interactive elements
- Reduced motion support
