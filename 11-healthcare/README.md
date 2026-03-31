# 11 — Healthcare / Hospital Platform

## Overview

A comprehensive **healthcare and hospital management platform** combining the appointment booking of **Zocdoc**, the patient portal of **MyChart**, the clinic management of **Practo**, and the pharmacy experience of **1mg** — featuring doctor booking, appointment management, patient portal, department browsing, and a pharmacy section.

---

## Design Philosophy

- **Trust & safety first** — clinical cleanliness in design, no visual clutter
- **Accessibility matters** — high contrast, large tap targets, clear hierarchy
- **Patient-centered** — everything revolves around the patient journey
- **Information density** — medical info needs clarity without oversimplification
- **Calming aesthetic** — soft blues and greens evoke healthcare trust

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 semantic elements |
| Styling | CSS3 — Custom Properties, Grid, Flexbox |
| Logic | Vanilla JavaScript (ES6+ modules) |
| State | LocalStorage for appointments, prescriptions, auth |
| Charts | Chart.js (health stats, admin analytics) |
| Icons | Lucide Icons (SVG) |

---

## Pages

| # | Page | Description |
|---|------|-------------|
| 1 | Home | Hero, department cards, featured doctors, stats, testimonials |
| 2 | Departments | All departments grid with descriptions and doctor counts |
| 3 | Find a Doctor | Doctor directory with search, filter by specialty/availability |
| 4 | Doctor Profile | Bio, qualifications, schedule, reviews, book appointment |
| 5 | Book Appointment | Multi-step booking: doctor → date/time → details → confirm |
| 6 | Patient Dashboard | Upcoming appointments, prescriptions, reports, profile |
| 7 | Appointment Detail | Appointment info, doctor notes, prescription, follow-up |
| 8 | Pharmacy | Medicine catalog, search, cart, order online |
| 9 | Health Records | Patient health records, lab results, vaccination history |
| 10 | Admin Dashboard | Hospital admin — stats, appointments, doctors, revenue |

---

## What Makes This Different

- **Complete Patient Journey:** From department browsing to booking to follow-up
- **Real Appointment System:** Calendar-based slot picker with availability
- **Patient Portal:** Prescriptions, lab results, visit history — all accessible
- **Pharmacy Integration:** Browse and order medicines with dosage info
- **Health Records Vault:** Centralized patient health data display
- **Admin Analytics:** Hospital operation metrics with Chart.js
- **No Framework:** Complex scheduling + medical data UIs in pure vanilla JS
