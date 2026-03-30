# 07 — Community / Social Platform

## Overview

A multi-purpose community platform combining **Job Board**, **Forum / Q&A**, **Directory / Listing**, **Events Platform**, **Review Platform**, and **Social Feed** — all in one cohesive experience. Inspired by the design sensibilities of **Stack Overflow**, **Product Hunt**, **Dribbble**, **Eventbrite**, **Yelp**, and **LinkedIn**.

---

## Design Philosophy

- Clean, content-first layouts with generous whitespace
- Card-based architecture for scannable content
- Gamification elements: reputation, badges, streaks
- Warm, approachable color palette — not sterile corporate
- Dense information display that remains readable (like Reddit/HN meets modern design)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 semantic elements |
| Styling | CSS3 — Custom Properties, Grid, Flexbox |
| Logic | Vanilla JavaScript (ES6+ modules) |
| State | LocalStorage for user data, bookmarks, preferences |
| Icons | Lucide Icons (SVG) |
| Charts | Chart.js (analytics/admin) |
| Maps | Leaflet.js (directory map view) |

---

## Pages

| # | Page | Description |
|---|------|-------------|
| 1 | Homepage / Feed | Unified activity feed with tabbed sections |
| 2 | Job Board | Job listings with filters and search |
| 3 | Job Detail | Individual job posting with apply flow |
| 4 | Forum / Q&A | Discussion threads, voting, answers |
| 5 | Thread Detail | Single question with answers, comments |
| 6 | Directory / Listing | Business/service listings with map |
| 7 | Listing Detail | Individual listing with reviews, photos, info |
| 8 | Events | Event calendar, upcoming events, RSVPs |
| 9 | Event Detail | Single event with schedule, speakers, tickets |
| 10 | Review Platform | Review aggregation, top-rated, categories |
| 11 | User Profile | Public profile with activity, reputation, badges |
| 12 | Settings | Account preferences, notifications, privacy |

---

## What Makes This Different

- **Unified Platform:** Six distinct modules sharing a single design system and navigation
- **Reputation System:** Cross-module reputation points, badges, and leaderboards
- **Social Graph:** Follow users, bookmark content across all modules
- **No Framework Overhead:** Pure vanilla JS with module architecture
- **Real-Time Feel:** Optimistic updates, skeleton loading, live counts
- **Accessibility:** Full keyboard navigation, ARIA labels, reduced motion support
