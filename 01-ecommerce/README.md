# E-Commerce Demo

A full-featured e-commerce storefront with admin panel — inspired by the clean product-first layouts of **Everlane**, **Glossier**, and **Apple Store**, blended with the utility of **Amazon** and the editorial feel of **Mr Porter**.

## Tech Approach
- HTML5 / CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (ES6+ modules)
- No frameworks — pure craftsmanship
- LocalStorage for cart/wishlist/auth state
- Chart.js for admin analytics

## Design Philosophy
- **Product is king** — large imagery, minimal chrome
- **Whitespace-driven** — breathing room between sections
- **Micro-interactions** — subtle hover states, smooth transitions
- **Trust signals** — clear pricing, stock status, secure checkout feel
- **Speed perception** — skeleton loaders, optimistic UI updates

## Pages
| Page | Route |
|---|---|
| Home | `/` |
| Category / Search Results | `/shop` |
| Product Detail | `/product/:id` |
| Cart (drawer) | overlay |
| Checkout | `/checkout` |
| Order Confirmation | `/order-confirm` |
| Login / Register | modal |
| Account Dashboard | `/account` |
| Order History | `/account/orders` |
| Wishlist | `/account/wishlist` |
| Admin Dashboard | `/admin` |
| Admin Products | `/admin/products` |
| Admin Orders | `/admin/orders` |
| Admin Coupons | `/admin/coupons` |

## Key Differentiators
- Slide-in cart drawer (not a separate page)
- Multi-step checkout with progress stepper
- COD + bKash/Nagad payment UI
- Real skeleton loaders on every async state
- Dark/light mode with smooth transition
- Admin panel with live charts
