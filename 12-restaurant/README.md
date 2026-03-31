# 12 — Restaurant & Food Ordering Platform

> A full-featured restaurant website with digital menu, online ordering, table reservation, and order tracking — inspired by **Uber Eats + OpenTable + Foodpanda** but designed as a single-restaurant experience for portfolio showcase.

---

## Design Philosophy

1. **Appetite Appeal** — Warm colours, large food photography, inviting atmosphere
2. **Frictionless Ordering** — Menu → Cart → Checkout in minimal steps
3. **Real-time Feel** — Live order tracking with animated status updates
4. **Reservation Made Easy** — Visual table selection with time-slot availability
5. **Mobile-First** — Most food orders happen on phones

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| **Markup** | HTML5, semantic elements |
| **Styling** | CSS3 — Custom Properties, Grid, Flexbox |
| **Scripting** | Vanilla JS (ES6+) |
| **State** | localStorage for cart, orders, reservations |
| **Icons** | Lucide Icons |
| **Fonts** | Google Fonts |
| **No frameworks** | Zero React / Vue / Tailwind — pure skill demo |

---

## Pages (10)

| # | Page | File | Purpose |
|---|------|------|---------|
| 1 | **Home** | `index.html` | Hero, featured dishes, about, testimonials, CTA |
| 2 | **Menu** | `menu.html` | Full menu with categories, search, dietary filters |
| 3 | **Dish Detail** | `dish.html` | Single dish — photos, description, customization, add to cart |
| 4 | **Cart** | `cart.html` | Order summary, quantity controls, promo code, checkout |
| 5 | **Checkout** | `checkout.html` | Delivery/pickup details, payment, order placement |
| 6 | **Order Tracking** | `tracking.html` | Real-time order status with animated timeline |
| 7 | **Reservations** | `reservation.html` | Table reservation — date, time, party size, table map |
| 8 | **Gallery** | `gallery.html` | Restaurant ambiance, food photography, events |
| 9 | **Reviews** | `reviews.html` | Customer reviews, ratings, stats |
| 10 | **Admin** | `admin.html` | Order management, menu editor, reservation dashboard |

---

## What Makes This Different

- **Full ordering flow**: Browse menu → Customize dish → Cart → Checkout → Track order
- **Visual table reservation** with interactive floor plan
- **Dish customization**: sizes, add-ons, spice levels, special instructions
- **Order tracking timeline** with animated status progression
- **Promo code system** with discount calculation
- **BDT pricing** with realistic Bangladeshi restaurant items
- **Admin panel** for managing orders, menu items, and reservations
