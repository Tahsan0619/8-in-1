# Restaurant & Food Ordering — Components

> Every reusable UI building block for the restaurant platform.

---

## 1. Navigation Components

### Header
| Detail | Value |
|--------|-------|
| **Purpose** | Top-level navigation with cart badge |
| **States** | Default · Scrolled (sticky, shadow) · Mobile (hamburger) |
| **Contents** | Logo · Nav links (Menu, Reservations, Gallery, Reviews) · Cart icon with badge · Theme toggle |
| **Behaviour** | Sticky on scroll; cart badge animates on add |
| **Used On** | Every page |

### MobileMenu
| Detail | Value |
|--------|-------|
| **Purpose** | Full-screen slide-in mobile navigation |
| **Contents** | Nav links · Cart (with item count) · Theme toggle · Order Now CTA |
| **Animation** | Slide from right, 300ms ease |
| **Used On** | Every page (mobile) |

### Sidebar
| Detail | Value |
|--------|-------|
| **Purpose** | Admin dashboard navigation |
| **States** | Expanded (240px) · Collapsed (64px) |
| **Contents** | Dashboard · Orders · Menu Editor · Reservations · Reviews · Settings |
| **Used On** | Admin page |

### Footer
| Detail | Value |
|--------|-------|
| **Purpose** | Site-wide footer |
| **Contents** | Operating hours · Location/map · Contact info · Social links · Quick links |
| **Used On** | Every page |

---

## 2. Menu & Dish Components

### DishCard
| Detail | Value |
|--------|-------|
| **Purpose** | Menu item preview card |
| **Variants** | Grid card · List row |
| **Contents** | Food photo · Name · Short description · Rating (stars + count) · Price · Dietary badges |
| **Badges** | 🌶 Spicy · 🥬 Vegetarian · ⭐ Chef's Pick · 🆕 New |
| **Actions** | View Details · Quick Add to Cart |
| **Hover** | Image zoom (scale 1.05), lift shadow |
| **Used On** | Home (Popular), Menu page |

### DishDetail
| Detail | Value |
|--------|-------|
| **Purpose** | Full dish view with customization options |
| **Contents** | Large photo gallery · Name · Rating · Description · Size selector · Add-ons checklist · Spice level toggle · Special instructions textarea · Quantity selector · Price (dynamic) · Add to Cart CTA |
| **Used On** | Dish Detail page |

### CategoryTabs
| Detail | Value |
|--------|-------|
| **Purpose** | Horizontal scrollable category filter |
| **Contents** | Pill buttons: All, Biriyani, Grills, Curries, Appetizers, Desserts, Beverages, Combos |
| **Behaviour** | Sticky below header; smooth scroll; active tab highlighted |
| **Used On** | Menu page |

### DietaryFilter
| Detail | Value |
|--------|-------|
| **Purpose** | Checkbox filters for dietary preferences |
| **Options** | Vegetarian · Spicy · Chef's Pick |
| **Behaviour** | Real-time filtering, combines with category |
| **Used On** | Menu page |

---

## 3. Cart & Order Components

### CartItem
| Detail | Value |
|--------|-------|
| **Purpose** | Single item row in cart |
| **Contents** | Thumbnail · Name · Size · Add-ons list · Spice level · Quantity controls (−/+) · Subtotal · Remove button |
| **Used On** | Cart page |

### CartSummary
| Detail | Value |
|--------|-------|
| **Purpose** | Order total breakdown |
| **Contents** | Subtotal · Delivery fee · Discount line (if promo applied) · Total |
| **Used On** | Cart page, Checkout page |

### PromoCode
| Detail | Value |
|--------|-------|
| **Purpose** | Promo/discount code input |
| **Contents** | Input field · Apply button · Success/error message · Applied discount display |
| **Validation** | Check against predefined codes; show percentage off |
| **Used On** | Cart page |

### OrderTimeline
| Detail | Value |
|--------|-------|
| **Purpose** | Visual order status progression |
| **Steps** | Order Placed → Confirmed → Preparing → Ready → Out for Delivery → Delivered |
| **Visual** | Vertical timeline with colored dots: ✅ completed (green), 🔄 current (animated), ○ pending (gray) |
| **Animation** | Current step pulses; progress line fills |
| **Used On** | Order Tracking page |

### OrderSummaryCard
| Detail | Value |
|--------|-------|
| **Purpose** | Order details summary |
| **Contents** | Order number · Item list · Total · Delivery address · Estimated time |
| **Used On** | Order Tracking page, Admin (Orders) |

---

## 4. Reservation Components

### ReservationForm
| Detail | Value |
|--------|-------|
| **Purpose** | Table reservation input form |
| **Fields** | Date (date picker) · Time (dropdown) · Party size (stepper) · Occasion (dropdown) |
| **Actions** | Check Availability → shows floor plan |
| **Used On** | Home (quick form), Reservation page |

### FloorPlan
| Detail | Value |
|--------|-------|
| **Purpose** | Interactive restaurant table map |
| **Contents** | Visual layout of tables with table numbers and capacity |
| **States** | 🟢 Available (clickable) · 🔴 Booked (disabled) · 🟡 Selected (highlighted) |
| **Behaviour** | Click available table to select; shows table details on hover |
| **Used On** | Reservation page |

### ReservationConfirm
| Detail | Value |
|--------|-------|
| **Purpose** | Post-reservation confirmation details |
| **Contents** | Confirmation number · Date/Time · Table number · Party size · Guest name |
| **Used On** | Reservation page (after booking) |

---

## 5. Gallery Components

### GalleryGrid
| Detail | Value |
|--------|-------|
| **Purpose** | Masonry-style image gallery |
| **Contents** | Food photography · Restaurant interior · Events · Kitchen |
| **Behaviour** | Click opens lightbox; category filter tabs |
| **Used On** | Gallery page |

### Lightbox
| Detail | Value |
|--------|-------|
| **Purpose** | Full-screen image viewer |
| **Contents** | Large image · Caption · Prev/Next arrows · Close button · Counter (3/12) |
| **Navigation** | Arrow keys · Click arrows · Swipe (mobile) |
| **Close** | × button · Escape · Backdrop click |
| **Used On** | Gallery page |

---

## 6. Review Components

### ReviewCard
| Detail | Value |
|--------|-------|
| **Purpose** | Customer review entry |
| **Contents** | Reviewer name · Date · Star rating · Review text · Dish ordered · Verified badge |
| **Used On** | Home (testimonials), Reviews page |

### ReviewStats
| Detail | Value |
|--------|-------|
| **Purpose** | Aggregate review statistics |
| **Contents** | Average rating (large) · Total reviews · Rating distribution bar chart (5★ to 1★) |
| **Used On** | Reviews page |

### ReviewForm
| Detail | Value |
|--------|-------|
| **Purpose** | Submit a new review |
| **Fields** | Name · Star rating (clickable stars) · Review text · Dish select |
| **Validation** | Minimum 3 stars interaction, name required |
| **Used On** | Reviews page |

---

## 7. Checkout Components

### DeliveryForm
| Detail | Value |
|--------|-------|
| **Purpose** | Delivery information input |
| **Fields** | Full name · Phone · Address · Area (dropdown) · Delivery instructions |
| **Toggle** | Delivery / Pickup switch |
| **Used On** | Checkout page |

### PaymentMethod
| Detail | Value |
|--------|-------|
| **Purpose** | Payment option selection |
| **Options** | Cash on Delivery · bKash · Nagad · Card |
| **Contents** | Radio buttons with provider logos |
| **Used On** | Checkout page |

---

## 8. Admin Components

### OrderRow
| Detail | Value |
|--------|-------|
| **Purpose** | Order entry in admin list |
| **Contents** | Order # · Items summary · Time · Status badge · Total · Actions |
| **Actions** | View · Update Status · Cancel |
| **Used On** | Admin (Orders) |

### MenuItemEditor
| Detail | Value |
|--------|-------|
| **Purpose** | Add/Edit menu item form |
| **Fields** | Name · Category · Description · Price · Sizes · Add-ons · Dietary tags · Image upload · Available toggle |
| **Used On** | Admin (Menu) |

### ReservationRow
| Detail | Value |
|--------|-------|
| **Purpose** | Reservation entry in admin list |
| **Contents** | Guest name · Date/Time · Party size · Table # · Status · Actions |
| **Actions** | Confirm · Cancel · Modify |
| **Used On** | Admin (Reservations) |

---

## 9. Utility Components

### Toast
| Detail | Value |
|--------|-------|
| **Variants** | Success · Error · Warning · Info |
| **Behaviour** | Slides from top-right; auto-dismiss 4s; stacks up to 3 |
| **Used On** | Global |

### Modal
| Detail | Value |
|--------|-------|
| **Variants** | Confirm · Alert · Form |
| **Close** | × button · Escape · Backdrop click |
| **Used On** | Cancel order, Remove item, Lightbox |

### QuantitySelector
| Detail | Value |
|--------|-------|
| **Purpose** | Increment/decrement quantity |
| **Contents** | − button · Number display · + button |
| **Constraints** | Min 1, Max 20; 0 removes item from cart |
| **Used On** | Dish Detail, Cart |

### SpiceLevelToggle
| Detail | Value |
|--------|-------|
| **Purpose** | Select spice intensity |
| **Options** | Mild · Medium · Hot |
| **Visual** | Toggle group with 🌶 icons; selected = filled |
| **Used On** | Dish Detail |

### EmptyState
| Detail | Value |
|--------|-------|
| **Purpose** | Placeholder when no data |
| **Contents** | Illustration · Message · Action button |
| **Used On** | Cart (empty), Orders (none), Search (no results) |

### StatCounter
| Detail | Value |
|--------|-------|
| **Purpose** | Animated counter stat |
| **Animation** | Count-up on scroll; 2s duration |
| **Used On** | Home (Why Choose Us section) |
