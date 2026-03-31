# Marketplace — Components

---

## 1 · Navigation Components

### 1.1 Main Header

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Layout          | Logo · Categories Dropdown · Search Bar · Cart (badge) · Wishlist · Account · Sell · Theme Toggle |
| Search Bar      | Full-width input with category filter dropdown + search icon |
| Cart Icon       | Badge shows item count, updates dynamically                 |
| Mobile          | Hamburger menu, search bar collapses to icon, cart stays visible |
| Sticky          | Yes, compact on scroll                                       |

### 1.2 Category Mega Menu

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Trigger         | "Categories ▼" button hover/click                           |
| Layout          | Multi-column dropdown with category groups                  |
| Items           | Icon · Category name · subcategory links                    |
| Categories      | Fashion, Electronics, Home & Living, Books, Gaming, Beauty, Grocery, Sports |
| Mobile          | Accordion-style expandable list                              |

### 1.3 Footer

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Columns         | About BazarBD · Sell With Us · Customer Help · Payments    |
| Payment Icons   | bKash, Nagad, Visa, Mastercard, COD logo                   |
| Social          | Facebook, Instagram, YouTube                                |
| Bottom Bar      | © 2026 BazarBD · Privacy · Terms · Seller Agreement        |

---

## 2 · Product Components

### 2.1 Product Card

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Image           | 1:1 ratio, hover shows second image if available            |
| Badge           | "Sale", "New", "Hot" overlay badge (top-left)              |
| Content         | Title (2 lines clamped) · Price · Original price (strikethrough) · Discount % |
| Rating          | Star rating + review count                                  |
| Seller          | Seller name with verified badge                             |
| Actions         | Wishlist ♡ toggle, Quick Add to Cart 🛒                     |
| Hover           | Slight lift + shadow, second image transition               |

### 2.2 Product Image Gallery

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Main Image      | Large display with zoom on hover (CSS transform)            |
| Thumbnails      | Horizontal row below main image, active border              |
| Carousel        | Swiper.js with navigation arrows                            |
| Lightbox        | Click to open fullscreen gallery modal                      |

### 2.3 Variant Selector

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Color           | Circular swatches, active ring border                       |
| Size            | Button group: S / M / L / XL, disabled if out of stock     |
| Other           | Dropdown for material, style, etc.                          |
| Stock           | Shows "X left" when stock < 10 for selected variant         |

### 2.4 Quantity Selector

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Layout          | [-] number [+] inline controls                              |
| Min/Max         | Min 1, max = available stock                                |
| Validation      | Disable minus at 1, disable plus at max stock               |

### 2.5 Product Tabs

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Tabs            | Description · Specifications · Reviews                     |
| Style           | Underline active tab indicator                               |
| Specifications  | Key-value table (Brand, Model, Weight, etc.)                |
| Responsive      | Tabs → accordion on mobile                                   |

### 2.6 Product Comparison

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Max Items       | 3 products side-by-side                                      |
| Rows            | Image, Price, Rating, Specifications (matching rows)        |
| Sticky Header   | Product names stay visible while scrolling specs             |
| Add/Remove      | "↗ Compare" button on product cards, floating compare bar   |

---

## 3 · Cart & Checkout Components

### 3.1 Multi-Vendor Cart

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Grouping        | Items grouped by seller with seller header                  |
| Item Row        | Image · Title · Variant · Price · Qty selector · Subtotal · Remove/Wishlist |
| Seller Subtotal | Per-seller subtotal + shipping cost                         |
| Order Summary   | Sidebar: items total, shipping total, promo discount, grand total |
| Promo Code      | Input + Apply button in summary panel                       |
| Empty State     | Illustration + "Your cart is empty" + [Continue Shopping]   |

### 3.2 Checkout Stepper

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Steps           | 1) Address → 2) Shipping per vendor → 3) Payment & Review  |
| Indicator       | Numbered circles with connecting line                       |
| Shipping        | Per-vendor shipping options (Standard / Express)            |
| Payment         | bKash / Nagad / Credit Card / Cash on Delivery              |
| Review          | Full order breakdown before final confirmation              |
| CTA             | [Place Order ৳XX,XXX]                                        |

### 3.3 Order Confirmation

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Content         | Order #, estimated delivery, items summary per vendor       |
| Actions         | [Track Order] · [Continue Shopping]                         |
| Animation       | Checkmark animation on success                              |

---

## 4 · Review Components

### 4.1 Rating Distribution

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Layout          | 5-star breakdown bars with percentage                       |
| Average         | Large star rating number + total review count               |
| Visual          | Horizontal filled bars per star level                       |

### 4.2 Review Card

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Header          | Reviewer name · Star rating · Date · "Verified Purchase" badge |
| Body            | Review text (expandable if long)                            |
| Photos          | Optional review photos (clickable thumbnails)               |
| Helpful         | "Was this helpful? 👍 (12) 👎 (2)"                         |
| Seller Reply    | Optional seller response below review, indented             |

### 4.3 Review Form

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Star Input      | Clickable star rating (1-5), required                       |
| Text            | Textarea for review body                                    |
| Photos          | Upload preview (max 3 images, simulated)                    |
| Submit          | Validation: minimum star rating required                    |

---

## 5 · Seller Components

### 5.1 Seller Card (Top Sellers)

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Logo            | Store logo/avatar                                            |
| Content         | Store name · Rating · Product count                         |
| Badges          | ✓ Verified, 🏆 Top Rated, 🆕 New Seller                    |
| CTA             | [Visit Store]                                                |

### 5.2 Seller Storefront Banner

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Banner          | Custom cover image (16:4 ratio)                             |
| Logo            | Circular logo overlapping banner bottom                     |
| Info            | Store name, tagline, rating, product count, join date       |
| Actions         | [Follow] button, [Chat] button (simulated)                  |

### 5.3 Seller Info Strip (Product Page)

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Layout          | Horizontal bar on product page                               |
| Content         | Seller name · Rating · Product count · [Visit Store]        |
| Delivery Info   | Ships from, delivery estimate, return policy                |

---

## 6 · Seller Dashboard Components

### 6.1 Dashboard Sidebar

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Items           | Dashboard · Orders · Products · Reviews · Analytics · Earnings · Store Settings |
| Active          | Highlighted background + left border accent                 |
| Collapsible     | Toggle to icon-only mode on desktop                         |
| Mobile          | Off-canvas drawer                                            |

### 6.2 Stats Cards

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Items           | Revenue · Orders · Products · Rating                        |
| Trend           | ↑12% (green) or ↓3% (red) vs last period                   |
| Layout          | 4-column grid, responsive to 2×2                             |

### 6.3 Revenue Chart

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Type            | Line chart (Chart.js)                                        |
| Data            | Daily revenue over 30 days                                   |
| Toggle          | 7d / 30d / 90d period selector                               |
| Theme           | Adapts to dark mode                                          |

### 6.4 Orders Table

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Columns         | Order # · Customer · Items · Total · Status · Date          |
| Status Badges   | Pending (yellow), Shipped (blue), Delivered (green), Cancelled (red) |
| Actions         | Update status dropdown, view details                        |
| Filters         | Status filter, date range                                    |

### 6.5 Product Manager

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| View            | Table with image thumbnail, title, price, stock, status     |
| Actions         | Edit / Delete / Toggle active                                |
| Add Product     | Modal form: title, description, price, images, category, variants, stock |
| Low Stock Alert | ⚠ icon and red text when stock < 5                          |

---

## 7 · Shared / UI Components

### 7.1 Search Bar

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Layout          | Category dropdown + text input + search button              |
| Suggestions     | Dropdown with recent searches + popular searches            |
| Results         | Live search results as-you-type (debounced 300ms)           |

### 7.2 Breadcrumb

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Separator       | " > " chevron                                                |
| Links           | All segments clickable except current (bold, no link)       |

### 7.3 Pagination

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Layout          | ← Previous · [1] 2 3 ... 7 · Next →                        |
| Active          | Current page highlighted                                     |
| Boundaries      | First/last always shown, ellipsis for gaps                  |

### 7.4 Price Display

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Format          | ৳XX,XXX (BDT with comma grouping)                           |
| Discount        | Original price strikethrough + discount percentage badge    |
| Color           | Sale price in accent color                                   |

### 7.5 Theme Toggle

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Icon            | Sun ↔ Moon with rotation transition                         |
| Storage         | localStorage + `prefers-color-scheme` fallback              |
| Transition      | 300ms on background, color, border                          |

### 7.6 Toast Notification

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Types           | Success · Error · Info · Warning                            |
| Content         | "Added to cart!" / "Order placed!" / error messages         |
| Position        | Bottom-right, stacking                                       |
| Duration        | 4 seconds, auto-dismiss with close button                   |

### 7.7 Empty State

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Illustration    | Simple SVG/CSS illustration per context                     |
| Message         | Context-specific empty message                               |
| CTA             | Action button (e.g., "Start Shopping", "Add Products")      |

### 7.8 Back to Top

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Visibility      | Appears after 400px scroll                                   |
| Behavior        | Smooth scroll to top                                         |
