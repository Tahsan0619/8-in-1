# E-Commerce — Component Specifications

---

## Layout Components

### `Header`
- **Desktop:** Logo (left) | Search bar (center, expandable) | Icons right (wishlist, account, cart with badge) | Theme toggle
- **Mobile:** Hamburger (left) | Logo (center) | Search + Cart (right)
- **Behavior:** Sticky on scroll, shadow appears on scroll-down, hides on scroll-down/shows on scroll-up (smart header)
- **Sub-nav:** Category links below main header (desktop only), collapses into hamburger on mobile

### `MegaMenu`
- Triggered on category hover (desktop) / tap (mobile accordion)
- Content: 3-4 column sub-category links + featured product image
- Backdrop overlay behind menu
- 200ms delay before close (prevents accidental close)

### `Footer`
- 4-column grid: Shop links, Account links, Company links, Contact info
- Newsletter signup: email input + subscribe button
- Social icons row
- Payment method icons (Visa, Mastercard, bKash, Nagad)
- Copyright line
- Responsive: stacks to accordion on mobile

### `MobileDrawer`
- Full-screen overlay from left
- Search bar at top
- Category list with expand arrows
- Account links section
- Theme toggle
- Close button + backdrop click close

---

## Product Components

### `ProductCard`
- **Grid variant:** Vertical card — image (aspect 1:1), wishlist heart overlay, name, rating stars, price (current + original with strikethrough), add to cart button
- **List variant:** Horizontal — image left (150px), details right (name, description excerpt, rating, price, add to cart)
- **Hover state:** Image scale 1.05, shadow lift, quick-view button overlay
- **Badges:** "Sale" (red), "New" (green), "Hot" (orange) — positioned top-left of image
- **Skeleton variant:** Pulse animation placeholder matching card layout

### `ProductGallery`
- Main image container with zoom-on-hover (CSS transform)
- Thumbnail strip (4-6 thumbnails, horizontal)
- Active thumbnail highlighted with border
- Lightbox modal on image click
- Swipeable on mobile (touch events)

### `VariantSelector`
- Color swatches: 28px circles, border on selected, tooltip for color name
- Size pills: text buttons in a row, outlined style, filled on selected, disabled for unavailable
- Quantity stepper: minus button | input (40px wide) | plus button, min 1 max 10

### `StarRating`
- Display mode: filled stars (gold) + empty stars (gray), supports half stars
- Input mode: hover highlights stars, click selects rating
- Shows count in parentheses: "★★★★☆ (124)"
- Size variants: sm (14px), md (16px), lg (20px)

### `PriceDisplay`
- Current price: bold, primary color
- Original price (if discounted): smaller, muted, strikethrough
- Discount badge: "33% OFF" — small accent badge
- Handles: regular price, sale price, variant-based pricing

---

## Cart Components

### `CartDrawer`
- Fixed position right, width 420px (100% mobile)
- Slide-in animation (300ms ease-out)
- Backdrop: semi-transparent black, click to close
- Header: "Your Cart (count)" + close X
- Scrollable item list
- Sticky footer: summary + buttons

### `CartItem`
- Thumbnail (64px square) | Product info (name, variant, price) | Quantity stepper | Remove icon
- Compact horizontal layout
- Remove: trash icon, on click shows undo toast (3s)
- Total per item calculated and displayed

### `CouponInput`
- Text input + "Apply" button (inline)
- States: default, loading (spinner), success (green check + discount shown), error (red border + message)
- Applied coupon: chip with code + remove X

### `OrderSummary`
- Line items: label left, amount right
- Subtotal, Discount (green, negative), Delivery, Total (bold, larger)
- Divider between items and total

---

## Checkout Components

### `CheckoutStepper`
- Horizontal 3-step indicator
- Each step: number circle + label
- States: completed (check icon, accent color), active (filled, primary), upcoming (outlined, muted)
- Connecting line between steps (filled for completed)

### `AddressCard`
- Card with: label badge (Home/Office), name, phone, full address
- Radio button for selection
- Edit + Delete actions (icon buttons)
- Add new: dashed border card with + icon

### `PaymentMethodCard`
- Card per method: logo/icon + name + description
- Radio select
- bKash/Nagad: expandable with phone number + PIN inputs

---

## Account Components

### `AuthModal`
- Centered dialog, max-width 440px
- Tab switch: Login | Register
- Form inputs with labels, validation messages below
- Submit button (full width)
- Divider: "or continue with"
- Social login buttons: Google, Facebook (icon + text)

### `OrderCard`
- Card: Order ID + date + item count + total + status badge
- Status badge colors per state
- Click to expand/navigate to detail

### `OrderTracker`
- Horizontal stepper: Placed → Processing → Shipped → Delivered
- Active step pulsing dot
- Timestamp below each step
- Line connecting steps (solid for passed, dashed for upcoming)

### `AddressManager`
- Grid of address cards
- Default address star indicator
- "Set as default" action
- Add new card (dashed outline, centered + icon)

---

## Admin Components

### `AdminSidebar`
- Fixed left, 240px wide (collapses to 64px icons-only on tablet)
- Logo at top
- Nav items: icon + label, active state with accent left border
- Hover: background highlight
- Mobile: overlay drawer

### `KPICard`
- Icon (left or top), metric name, value (large number), trend badge (↑12% green or ↓5% red)
- 4 cards in a row, responsive to 2x2 on tablet, stack on mobile

### `DataTable`
- Sortable column headers (click to toggle asc/desc)
- Row hover highlight
- Checkbox column for bulk select
- Actions column: edit, delete, status toggle
- Pagination bar: items per page + page numbers
- Empty state row
- Loading: skeleton rows

### `AdminChart`
- Chart.js wrapper
- Toggle buttons for time range
- Responsive container
- Tooltip on hover
- Legend below chart

### `StatusBadge`
- Small pill badge
- Colors: blue (placed), orange (processing), purple (shipped), green (delivered), red (cancelled)
- Dot indicator + text

---

## UI Utility Components

### `Toast`
- Position: top-right stack
- Variants: success (green), error (red), info (blue), warning (orange)
- Icon + message + close X
- Auto-dismiss progress bar
- Slide-in from right animation

### `SkeletonLoader`
- Variants: card, text-line, avatar, image, table-row
- Pulse animation: shimmer wave sweep
- Match exact dimensions of real content

### `EmptyState`
- Centered container
- Illustration/icon (large, muted)
- Heading + subtext
- CTA button

### `ThemeToggle`
- Sun/moon icon button
- Rotation animation on switch
- Smooth transition for all themed elements

### `Modal`
- Centered dialog with backdrop
- Max-width configurable (sm: 400px, md: 560px, lg: 720px)
- Close: X button + backdrop click + Escape key
- Slide-up + fade-in animation

### `Breadcrumb`
- Home > Category > Subcategory > Current (not linked)
- Separator: ">" or "/" character
- Last item: bold, no link
- Truncate middle items on mobile with "..."

### `Pagination`
- Previous + page numbers + next
- Active page highlighted
- Ellipsis for large page counts (1 2 3 ... 10)
- Items per page selector
