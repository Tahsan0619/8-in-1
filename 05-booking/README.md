# Booking / Service Demo

A versatile service booking platform blending the frictionless booking UX of **Calendly** and **OpenTable**, the clean service discovery of **ClassPass**, and the map-driven exploration of **Airbnb** — with built-in restaurant and clinic modes.

## Tech Approach
- HTML5 / CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (ES6+ modules)
- LocalStorage for booking state, auth, favorites
- CSS calendar grid for availability
- Leaflet.js for maps (open-source)
- No frameworks

## Design Philosophy
- **Frictionless flow** — 3-4 steps max from discovery to confirmation
- **Trust-building** — ratings, reviews, provider photos everywhere
- **Location-aware** — map integration is central, not an afterthought
- **Time-focused** — calendars and slots are the hero UI elements
- **Multi-mode** — generic services, restaurants, clinics all covered

## Pages
| Page | Route |
|---|---|
| Home | `/` |
| Service Listing | `/services` |
| Service Detail | `/services/:id` |
| Booking Flow | `/book/:id` |
| Booking Confirmation | `/booking/confirm` |
| User Dashboard | `/dashboard` |
| Provider Dashboard | `/provider` |
| Restaurant Menu | `/restaurant` |
| Table Reservation | `/restaurant/reserve` |
| Doctor Listing | `/clinic` |
| Doctor Profile | `/clinic/:id` |
| Appointment Booking | `/clinic/book/:id` |

## Key Differentiators
- Real-time slot availability calendar UI
- Map view with service pins (Leaflet)
- Multi-step booking wizard
- Restaurant menu with cart + dine-in/delivery toggle
- Clinic mode with doctor profiles and specialization filter
- Provider dashboard with earnings + calendar management
- SMS confirmation mockup UI
