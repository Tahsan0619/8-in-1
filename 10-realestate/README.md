# 10 — Real Estate Platform

## Overview

A full-featured **real estate property platform** combining the map-driven search of **Zillow**, the property presentation of **Realtor.com**, the sleek UI of **Compass**, and the agent experience of **Redfin** — featuring property listings with map search, mortgage calculator, agent profiles, virtual tour modals, and saved searches.

---

## Design Philosophy

- **Location-first** — map is central to the experience, not an afterthought
- **Photography-forward** — large, immersive property images drive interest
- **Trust & transparency** — clear pricing, neighborhood info, agent verification
- **Search-driven** — powerful filters that feel simple and fast
- **Local feel** — BD-relevant features: sqft pricing in BDT, local areas, flat/apartment focus

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 semantic elements |
| Styling | CSS3 — Custom Properties, Grid, Flexbox |
| Logic | Vanilla JavaScript (ES6+ modules) |
| State | LocalStorage for saved properties, searches, auth |
| Maps | Leaflet.js (OpenStreetMap tiles) |
| Charts | Chart.js (market trends, mortgage breakdown) |
| Icons | Lucide Icons (SVG) |

---

## Pages

| # | Page | Description |
|---|------|-------------|
| 1 | Home | Hero search, featured listings, popular areas, market stats |
| 2 | Listings / Search | Map + list view with filters, sort, pagination |
| 3 | Property Detail | Gallery, details, agent contact, mortgage calc, virtual tour |
| 4 | Agent Directory | Agent cards with ratings, specializations, listings count |
| 5 | Agent Profile | Agent bio, stats, active listings, reviews, contact form |
| 6 | Mortgage Calculator | Interactive calculator with payment breakdown chart |
| 7 | Saved / Favorites | User's saved properties and searches |
| 8 | Compare Properties | Side-by-side property comparison (up to 3) |
| 9 | Neighborhood Guide | Area overview — amenities, schools, transit, safety scores |
| 10 | Dashboard (Agent) | Agent dashboard — listings, leads, analytics, schedule |

---

## What Makes This Different

- **Split Map + List View:** Zillow-style synchronized map and property list
- **Virtual Tour Modal:** Simulated 360° tour with room navigation
- **Mortgage Calculator:** Interactive with chart.js pie/line breakdown
- **Property Comparison:** Side-by-side spec comparison for up to 3 properties
- **Agent Ecosystem:** Full agent profiles with reviews and lead management
- **Neighborhood Intelligence:** Area scoring for schools, transit, dining, safety
- **BD Market Ready:** BDT pricing, local area names, flat/apartment terminology
- **No Framework:** Complex map interactions + real-time filters in pure vanilla JS
