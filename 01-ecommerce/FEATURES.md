# E-Commerce — Feature Specifications

---

## 1. Product Discovery

### 1.1 Hero Banner / Promo Slider
- Full-width banner area, 60vh height on desktop, 40vh mobile
- Auto-sliding carousel (5s interval), pause on hover
- Each slide: background image + overlay gradient + headline + subtext + CTA button
- Navigation dots at bottom, left/right arrows on hover
- Swipe support on mobile

### 1.2 Category Navigation (Mega Menu)
- Top nav bar with category labels
- Hover triggers mega dropdown: sub-categories in columns + featured image
- Mobile: category accordion inside hamburger drawer
- Categories: Electronics, Fashion, Home, Beauty, Sports, Books

### 1.3 Search Bar
- Centered in header, expands on focus
- Live suggestions dropdown after 2+ characters
- Debounce: 300ms
- Shows product thumbnails + names + prices in dropdown
- Recent searches stored in localStorage
- "No results" state with suggestions

### 1.4 Filter Sidebar
- Left sidebar on shop page (desktop), bottom sheet on mobile
- Filters:
  - **Category:** checkbox list
  - **Price range:** dual-handle range slider + manual min/max inputs
  - **Brand:** checkbox list with search within brands
  - **Rating:** star rating minimum (4+, 3+, etc.)
  - **Availability:** toggle "In stock only"
- Active filter pills shown above product grid
- "Clear all" button
- Filter count badge on mobile filter button

### 1.5 Sort Controls
- Dropdown above product grid, right-aligned
- Options: Relevance, Price (low→high), Price (high→low), Newest, Top rated, Most popular
- Default: Relevance

### 1.6 Product Grid + List Toggle
- Grid view: product cards in 4/3/2 column responsive grid
- List view: horizontal product cards with more detail
- Toggle buttons (grid icon / list icon) above products
- Preference stored in localStorage

### 1.7 Skeleton Loaders
- Product card skeletons: image placeholder + 3 text lines + button placeholder
- Pulse animation (light shimmer sweep)
- Show for 800ms minimum to prevent flash

### 1.8 Pagination + Infinite Scroll Toggle
- Default: numbered pagination with prev/next
- Toggle to infinite scroll mode (intersection observer)
- "Load more" button as intermediate option
- Scroll-to-top button when scrolled past fold

---

## 2. Product Detail Page

### 2.1 Image Gallery
- Main image (large, 1:1 aspect ratio container)
- Thumbnail strip below (horizontal scroll on mobile)
- Click thumbnail to swap main image
- Hover zoom: magnifier effect on desktop
- Lightbox on click for full-screen view
- Support 4-6 images per product

### 2.2 Variant Selector
- **Color:** circular swatches with check icon on selected, color name tooltip
- **Size:** pill buttons (S, M, L, XL), disabled state for unavailable
- **Quantity:** plus/minus stepper, max 10
- Price updates if variants have different pricing

### 2.3 Stock Indicator
- Green dot + "In Stock" for >10 units
- Orange dot + "Only X left" for ≤10 units
- Red dot + "Out of Stock" — disable add to cart, show "Notify Me" button
- Subtle urgency styling for low stock (not obnoxious)

### 2.4 Action Buttons
- **Add to Cart:** primary button, full width on mobile, icon + text
- **Buy Now:** accent button, skips to checkout
- Both disabled when out of stock
- Add to cart shows success animation (checkmark morph)

### 2.5 Wishlist Toggle
- Heart icon button next to actions
- Outline → filled on toggle
- Toast notification on add/remove
- Requires "login" (shows login modal if not logged in)

### 2.6 Product Tabs
- Tabbed interface below main product info
- Tabs: Description | Specifications | Reviews
- **Description:** rich text with product story
- **Specifications:** key-value table (material, weight, dimensions, etc.)
- **Reviews:** see section 2.7

### 2.7 Reviews Section
- Average star rating (large) + rating distribution bar chart
- Individual review cards: user avatar + name + date + stars + text + photos
- "Write a review" button → review form (star select + text + photo upload UI)
- Sort reviews: Most recent, Highest rated, Lowest rated
- Helpful vote button per review

### 2.8 Related Products
- Horizontal carousel below reviews
- 4 visible on desktop, 2 on mobile, swipeable
- Same product card component as grid

---

## 3. Cart & Checkout

### 3.1 Cart Drawer
- Slides in from right edge, 400px width (full width mobile)
- Backdrop overlay with click-to-close
- Close X button
- Cart item list: thumbnail + name + variant + price + quantity stepper + remove button
- Sticky bottom: subtotal + "View Cart" + "Checkout" buttons
- Empty cart state: illustration + "Start shopping" button
- Cart count badge on header cart icon

### 3.2 Quantity & Remove
- Plus/minus stepper per item
- Remove: trash icon, confirmation not needed (undo toast instead)
- Total updates instantly

### 3.3 Coupon Code
- Text input + "Apply" button in cart/checkout
- Success: green checkmark + discount amount shown
- Error: "Invalid code" message
- Applied coupon shown as removable chip

### 3.4 Order Summary
- Subtotal
- Discount (if coupon applied)
- Delivery fee (free above threshold, show threshold message)
- Total (bold, large)

### 3.5 Multi-Step Checkout
- Step indicator: Address → Payment → Confirm (horizontal stepper with icons)
- **Step 1 — Address:**
  - Saved addresses list (radio select)
  - "Add new address" form (name, phone, address, city, area, label)
  - Address validation (required fields)
- **Step 2 — Payment:**
  - Payment method cards: COD, bKash, Nagad
  - COD: no extra step
  - bKash/Nagad: simulated payment number input + PIN field
  - Payment method icons/logos
- **Step 3 — Confirm:**
  - Order summary recap
  - Delivery address shown
  - Payment method shown
  - "Place Order" button (accent, prominent)
- Back button on each step

### 3.6 Order Confirmation
- Success illustration/icon
- Order ID displayed prominently
- Order summary
- Estimated delivery date
- "Continue Shopping" + "View Order" buttons
- Confetti animation on load (subtle)

---

## 4. User Account

### 4.1 Login / Register Modal
- Centered modal with backdrop
- Toggle between Login and Register tabs
- **Login:** email + password + "Forgot password?" link + login button
- **Register:** name + email + password + confirm password + register button
- Form validation with inline errors
- Social login buttons (Google, Facebook — UI only)
- Close on backdrop click or X button

### 4.2 Profile Edit
- Account page, sidebar navigation
- Edit: name, email, phone, avatar (upload UI)
- Change password section
- Save button with success toast

### 4.3 Order History
- Table/card list of orders
- Columns: Order ID, Date, Items count, Total, Status badge
- Status colors: Placed (blue), Processing (orange), Shipped (purple), Delivered (green)
- Click row → order detail

### 4.4 Order Detail
- Order ID + date + status badge
- Visual tracking steps (stepper: Placed → Processing → Shipped → Delivered)
- Active step highlighted
- Items list with thumbnails
- Payment method info
- Delivery address
- "Reorder" button

### 4.5 Saved Addresses
- Card list of addresses
- Each: label badge (Home/Office), name, phone, full address
- Edit + Delete buttons per address
- "Add new address" button
- Default address indicator (star badge)

### 4.6 Wishlist Page
- Product grid (same cards as shop)
- "Add to Cart" button on each card
- Remove from wishlist button
- Empty state: illustration + "Browse products" CTA

---

## 5. Admin Panel

### 5.1 Dashboard Overview
- 4 KPI cards: Today's Revenue, Orders Today, Total Users, Low Stock Items
- Each card: icon + value + percentage change badge (green/red arrow)
- Sales chart: line chart (last 7 days / 30 days toggle)
- Recent orders table (last 10)
- Quick action buttons: Add Product, View Orders, Create Coupon

### 5.2 Product Management
- Data table with columns: Image, Name, Category, Price, Stock, Status, Actions
- Status toggle (active/inactive) inline
- Search + category filter above table
- Add product: form modal (name, description, category, price, compare price, images upload, variants, stock)
- Edit: same form, pre-filled
- Delete: confirmation modal
- Bulk select with checkboxes

### 5.3 Order Management
- Data table: Order ID, Customer, Date, Total, Status, Actions
- Status filter tabs: All, Placed, Processing, Shipped, Delivered
- Click order → detail view
- Status update dropdown per order
- Print invoice button

### 5.4 Coupon Management
- Table: Code, Discount, Type (% or fixed), Min order, Expiry, Status, Actions
- Create coupon form: code, discount value, type, min order amount, expiry date, usage limit
- Toggle active/inactive
- Delete with confirmation

### 5.5 Analytics
- Sales over time chart (bar + line combo)
- Top selling products list
- Revenue by category (donut chart)
- Date range picker
- Export data button (CSV)

---

## 6. UI/UX Global

### 6.1 Responsive Behavior
- Mobile nav: hamburger → full-screen drawer with search + categories + account links
- Touch-friendly: minimum 44px tap targets
- Product cards: swipeable in carousels
- Bottom sticky bar on mobile product page (price + Add to Cart)

### 6.2 Dark / Light Mode
- Toggle in header (sun/moon icon)
- Preference saved in localStorage
- System preference detection on first visit
- Smooth CSS transition (200ms) on toggle

### 6.3 Toast Notifications
- Position: top-right (desktop), top-center (mobile)
- Types: success (green), error (red), info (blue), warning (orange)
- Auto-dismiss: 3 seconds
- Manual dismiss with X button
- Stack up to 3 visible

### 6.4 Empty States
- Empty cart: shopping bag illustration + "Your cart is empty" + CTA
- No search results: magnifier illustration + "No results for X" + suggestions
- No orders: package illustration + "No orders yet" + CTA
- No wishlist items: heart illustration + "Your wishlist is empty" + CTA

### 6.5 Loading States
- Skeleton loaders: product cards, tables, order details
- Button loading: spinner replaces text
- Page transition: top progress bar (thin accent line)
- Image lazy loading with blur-up or skeleton
