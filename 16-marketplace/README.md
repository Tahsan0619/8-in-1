# 16 · Marketplace — BazarBD

> **Concept:** A multi-vendor marketplace platform inspired by **Daraz + Etsy + Amazon + Shopify Marketplace** — built as a Bangladesh-focused portfolio piece. Sellers create storefronts, list products, manage orders. Buyers browse, compare, review, and checkout from multiple vendors in a unified cart.

---

## Design Philosophy

| Principle             | Description                                                          |
| --------------------- | -------------------------------------------------------------------- |
| Multi-Vendor First    | Every feature supports the seller↔buyer relationship                 |
| Trust & Safety        | Seller ratings, buyer reviews, verified badges build confidence      |
| Unified Experience    | Cart handles products from multiple sellers seamlessly               |
| Seller Empowerment    | Rich vendor dashboard with analytics, order management, products     |
| Local Context         | BDT pricing (৳), Bangladeshi delivery zones, bKash/Nagad payments   |

---

## Tech Stack

| Layer      | Technology                                   |
| ---------- | -------------------------------------------- |
| Structure  | HTML5 semantic elements                      |
| Styling    | CSS3 — Custom Properties, Grid, Flexbox      |
| Logic      | Vanilla JS (ES6+ modules)                   |
| Charts     | Chart.js (seller analytics)                  |
| State      | localStorage (cart, wishlist, orders, stores) |
| Libraries  | Swiper.js (product image carousel)           |

---

## Pages (10)

| #  | Page              | Route               | Purpose                                   |
| -- | ----------------- | -------------------- | ----------------------------------------- |
| 1  | Home              | `index.html`         | Featured products, top sellers, categories |
| 2  | Browse / Search   | `browse.html`        | Product grid with filters & search         |
| 3  | Product Detail    | `product.html`       | Full product page with images & reviews    |
| 4  | Seller Storefront | `store.html`         | Individual vendor shop page                |
| 5  | Cart              | `cart.html`           | Multi-vendor cart with grouped items       |
| 6  | Checkout          | `checkout.html`      | Address, shipping per vendor, payment      |
| 7  | Order Tracking    | `order.html`         | Order status with per-vendor tracking      |
| 8  | Seller Dashboard  | `dashboard.html`     | Vendor analytics, orders, inventory        |
| 9  | Become a Seller   | `sell.html`          | Seller registration and onboarding         |
| 10 | Admin Panel       | `admin.html`         | Platform-wide management & analytics       |

---

## What Makes This Different

- **Multi-vendor cart** — items grouped by seller, separate shipping per vendor, combined checkout
- **Seller storefronts** — each vendor has their own branded storefront page with custom banner
- **Seller analytics** — revenue charts, top products, order volume, customer demographics
- **Product variants** — size/color/material variants with separate stock per variant
- **Review & rating system** — verified purchase badges, photo reviews, seller response to reviews
- **BDT-native pricing** — all currency in ৳ with comma formatting (৳1,25,000 lakh format)
- **Seller verification badges** — verified, top-rated, new seller indicators
- **Multi-vendor order tracking** — single order splits into per-seller shipments with independent tracking
- **Comparison feature** — compare up to 3 products side-by-side
