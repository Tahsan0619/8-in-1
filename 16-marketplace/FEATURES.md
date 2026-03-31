# Marketplace — Features

---

## 1 · Product Browsing & Search

1.1 **Category Navigation** — mega menu with 8 top-level categories (Fashion, Electronics, Home, Books, Gaming, Beauty, Grocery, Sports) and subcategories  
1.2 **Search Bar** — text search with category filter dropdown, debounced live suggestions (300ms), recent & popular searches  
1.3 **Product Grid** — responsive grid (4 → 3 → 2 → 1 columns), toggle between grid and list view  
1.4 **Advanced Filters** — sidebar with category checkboxes, price range (min/max input), rating filter (★ and above), seller type (verified/top-rated)  
1.5 **Sort Options** — dropdown: Relevance / Price Low-High / Price High-Low / Rating / Newest / Best Selling  
1.6 **Pagination** — numbered pages with previous/next, first/last always visible, ellipsis for gaps  
1.7 **Flash Deals Section** — countdown timer, horizontal scrollable product row, discount badge overlay  
1.8 **Recently Viewed** — localStorage-based, horizontal row on homepage, clearable  

---

## 2 · Product Detail

2.1 **Image Gallery** — Swiper.js carousel with thumbnail navigation, zoom on hover (CSS transform), lightbox modal for fullscreen  
2.2 **Variant Selection** — color swatches (circular), size buttons (S/M/L/XL), variant-specific stock count and price  
2.3 **Quantity Selector** — [-] number [+] controls, bounded by 1 and available stock  
2.4 **Price Display** — ৳ formatted with comma grouping, sale price + original (strikethrough) + discount badge  
2.5 **Add to Cart / Buy Now** — cart adds without navigation, Buy Now goes straight to checkout, toast confirmation  
2.6 **Wishlist Toggle** — heart icon fill/unfill animation, localStorage persistence  
2.7 **Compare Button** — adds to floating compare bar (max 3), compare page shows side-by-side specs  
2.8 **Seller Info Strip** — seller name, rating, product count, ships from, delivery estimate, return policy  
2.9 **Tabs: Description / Specs / Reviews** — tabbed interface, specs as key-value table, reviews with rating distribution  
2.10 **Related Products** — "You May Also Like" carousel based on same category  
2.11 **Breadcrumb Navigation** — Category > Subcategory > Product Name  
2.12 **Stock Indicator** — "In Stock" (green) / "Only X left" (warning) / "Out of Stock" (red, disables add to cart)  

---

## 3 · Multi-Vendor Cart

3.1 **Vendor-Grouped Items** — items organized under seller headers with seller name and badge  
3.2 **Cart Item Row** — thumbnail, title, selected variant, unit price, quantity selector, row subtotal, remove/move-to-wishlist  
3.3 **Per-Vendor Subtotals** — subtotal + shipping cost per seller  
3.4 **Order Summary Sidebar** — items total, total shipping, promo discount, grand total  
3.5 **Promo Code** — input + Apply button, validates against mock promo codes, shows discount amount  
3.6 **Cart Badge** — header icon shows total item count, updates on add/remove  
3.7 **Empty Cart State** — illustration + message + [Continue Shopping] button  
3.8 **Cart Persistence** — localStorage, survives refresh and re-visits  

---

## 4 · Checkout Flow

4.1 **Multi-Step Checkout** — 3 steps: Shipping Address → Delivery Options → Payment & Review; progress indicator  
4.2 **Address Form** — name, phone, address line, area/district, division (dropdown), postal code; save address checkbox  
4.3 **Per-Vendor Shipping** — each seller's items show Standard (৳80, 3-5 days) and Express (৳150, 1-2 days) options  
4.4 **Payment Methods (Simulated)** — bKash / Nagad / Credit Card / Cash on Delivery; method-specific form fields  
4.5 **Order Review** — complete summary: items per vendor, shipping per vendor, payment method, grand total  
4.6 **Place Order** — button shows total amount, creates order in localStorage with unique order #  
4.7 **Order Confirmation** — success animation, order number, estimated delivery, [Track Order] CTA  

---

## 5 · Order Tracking

5.1 **Order Detail Page** — order #, date placed, total, per-vendor shipment breakdown  
5.2 **Multi-Vendor Shipments** — single order splits into per-seller shipments with independent status  
5.3 **Status Timeline** — Confirmed → Processing → Shipped → Out for Delivery → Delivered (step indicators)  
5.4 **Tracking Number** — simulated tracking code per shipment  
5.5 **Estimated Delivery** — date range based on shipping method selected  
5.6 **Order Items Table** — product, seller, quantity, price, status per item  

---

## 6 · Review & Rating System

6.1 **Rating Distribution** — 5-star breakdown with horizontal filled bars and percentages  
6.2 **Review Cards** — star rating, reviewer name, date, "Verified Purchase" badge, review text, optional photos  
6.3 **Photo Reviews** — clickable thumbnails in review, opens in lightbox  
6.4 **Helpful Votes** — "Was this helpful? 👍 (count) 👎 (count)" per review  
6.5 **Seller Response** — sellers can reply to reviews (indented below), shown in dashboard  
6.6 **Review Form** — star input (click to rate), textarea, photo upload (simulated, max 3), submit with validation  
6.7 **Sort Reviews** — Most Recent / Most Helpful / Highest / Lowest  

---

## 7 · Seller Storefront

7.1 **Store Page** — custom banner, logo, store name, tagline, rating, product count, join date  
7.2 **Follow Button** — localStorage follow/unfollow toggle  
7.3 **Store Tabs** — All Products / Best Sellers / New Arrivals / On Sale  
7.4 **In-Store Search** — search within seller's products only  
7.5 **Store Reviews** — aggregated seller reviews from buyers  
7.6 **Sort & Filter** — sort products within store, category filter  

---

## 8 · Seller Dashboard

8.1 **Overview Stats** — Revenue (with trend %), Total Orders, Products Listed, Average Rating  
8.2 **Revenue Chart** — Chart.js line chart: daily revenue over 7d / 30d / 90d toggle  
8.3 **Recent Orders Table** — order #, customer, items count, total, status badge, date; sortable  
8.4 **Order Status Management** — dropdown to update status: Pending → Processing → Shipped → Delivered  
8.5 **Product Manager** — table view with image, title, price, stock, status (Active/Draft); add/edit/delete  
8.6 **Add Product Form** — title, description, price, compare-at price, category, images (simulated), variants (size/color), stock per variant  
8.7 **Low Stock Alerts** — ⚠ warning for products with stock < 5  
8.8 **Customer Reviews** — all reviews for seller's products, reply functionality  
8.9 **Earnings Summary** — total earnings, pending payout, paid out, commission breakdown  
8.10 **Store Settings** — edit store name, tagline, banner, logo, contact info  

---

## 9 · Become a Seller (Onboarding)

9.1 **Benefits Section** — 3 cards: Growing Market, Low Commission, Easy Setup with icons  
9.2 **How It Works** — 3-step visual: Register → Set Up Store → Start Selling  
9.3 **Registration Form** — store name, owner name, email, phone, NID number, primary category, description, terms checkbox  
9.4 **Success State** — welcome message with next steps and link to seller dashboard  
9.5 **Seller Testimonials** — success stories from existing sellers  

---

## 10 · Admin Panel

10.1 **Platform Stats** — Total Revenue, Active Sellers, Total Products, Total Orders, Active Buyers  
10.2 **Revenue Chart** — Chart.js line/bar chart, platform-wide revenue with period filter  
10.3 **Seller Management** — table of all sellers: name, products, revenue, rating, status (Active/Suspended/Pending)  
10.4 **Product Moderation** — flagged/reported products queue, approve/reject actions  
10.5 **Order Overview** — all platform orders with filters by status, seller, date range  
10.6 **Category Management** — add/edit categories and subcategories  
10.7 **Platform Commission** — configurable commission rate (displayed, not enforced)  

---

## 11 · Dark Mode & Accessibility

11.1 **Theme Toggle** — sun/moon icon, localStorage + `prefers-color-scheme` fallback  
11.2 **Smooth Transitions** — 300ms transition on background, color, border for mode switch  
11.3 **Contrast Compliance** — all text meets WCAG AA 4.5:1 in both modes  
11.4 **Focus Indicators** — visible focus rings (2px solid primary) on all interactive elements  
11.5 **Skip Navigation** — hidden "Skip to main content" link  
11.6 **ARIA Labels** — star ratings, cart badge, modals, variant selectors, quantity controls  
11.7 **Keyboard Navigation** — full keyboard support for variant selection, quantity, cart actions, checkout  
11.8 **Reduced Motion** — `prefers-reduced-motion` disables card hover animations, skeleton pulse, success animations  
