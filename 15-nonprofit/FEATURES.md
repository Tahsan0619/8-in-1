# Nonprofit & Charity — Features

---

## 1 · Campaign System

1.1 **Campaign Listing** — grid/list toggle, filter by category (Water, Education, Healthcare, Emergency), sort by newest/most funded/ending soon  
1.2 **Campaign Detail** — hero photo, story body (rich text), "How Your Donation Helps" impact tiers, progress bar with animated fill  
1.3 **Campaign Updates Timeline** — chronological updates with date, photo, description; newest first  
1.4 **Campaign Sharing** — share to Facebook/Twitter/WhatsApp via share widget, copy link with toast confirmation  
1.5 **Campaign Categories** — badge-based filtering: 💧 Water · 📚 Education · 🏥 Healthcare · 🆘 Emergency  
1.6 **Urgency Indicators** — campaigns with <10 days remaining get "Ending Soon" badge and red-pulsing progress bar  
1.7 **Goal Completion** — campaigns reaching 100% show ✓ badge, confetti burst, and "Successfully Funded" status  

---

## 2 · Donation Flow

2.1 **Multi-Step Donation Form** — 3 steps: Amount & Frequency → Personal Info → Payment & Confirmation; progress indicator bar  
2.2 **Preset Amounts** — ৳500 / ৳1,000 / ৳2,500 / ৳5,000 / ৳10,000 quick-select buttons with impact labels  
2.3 **Custom Amount** — number input with ৳ prefix, minimum ৳100, max validation  
2.4 **Donation Frequency** — radio toggle: One-time or Monthly recurring  
2.5 **Anonymous Donation** — checkbox hides donor name from public donor list  
2.6 **Dedication Message** — optional "In honor of..." text field for tribute donations  
2.7 **Payment Methods (Simulated)** — bKash / Nagad / Credit Card / Bank Transfer selector with method-specific form fields  
2.8 **Donation Summary** — review panel before confirmation: campaign, amount, frequency, processing fee breakdown  
2.9 **Success Celebration** — confetti animation (CSS keyframes, 3s), thank-you message with impact statement and receipt number  
2.10 **Receipt Generation** — printable receipt with donation details, print CSS for clean output  
2.11 **Recent Donors List** — campaign page shows recent donors: name/anonymous, amount, time ago  
2.12 **Donation localStorage** — all donations stored locally with receipt IDs, retrievable from donor dashboard  

---

## 3 · Impact Tracking

3.1 **Impact Counter Section** — 4 stats (Total Raised, Lives Changed, Projects Completed, Regions Served) with count-up animation on scroll (Intersection Observer)  
3.2 **Fund Allocation Donut Chart** — Chart.js donut showing category breakdown (Water 35%, Education 28%, Healthcare 22%, Emergency 15%)  
3.3 **Donation Trend Line Chart** — Chart.js line chart: monthly donations over 12 months, adapts to dark mode  
3.4 **Impact By Category Cards** — 4 category cards with icon, project count, people helped count  
3.5 **Financial Transparency Table** — sortable table: Category / Received / Spent / Remaining; totals row; visual ratio bars  
3.6 **Before/After Comparisons** — story detail page shows before & after photos where available  

---

## 4 · Volunteer System

4.1 **Volunteer Opportunities** — list of open positions with title, location, time commitment, duration, required skills  
4.2 **Category Filters** — filter buttons: All / Field Work / Events / Admin / Online  
4.3 **Volunteer Signup Form** — name, email, phone, skills (multi-select tags), availability, preferred area, motivation textarea  
4.4 **Volunteer Stats** — horizontal bar: 200+ Active Volunteers · 12,000+ Hours · 15 Districts  
4.5 **Form Validation** — inline validation with error messages, required field markers  
4.6 **Success Confirmation** — submission shows confirmation with next steps and expected response time  

---

## 5 · Events & Fundraising

5.1 **Event Listing** — upcoming/past toggle, type filter, cards with cover photo and date badge  
5.2 **Countdown Timer** — live countdown (days/hours/minutes/seconds), updates via setInterval  
5.3 **Fundraising Progress** — events with fundraising goals show mini progress bar + percentage  
5.4 **Event Registration Modal** — overlay form: name, email, phone, guests count  
5.5 **Registration Confirmation** — success state with event details and calendar download link  
5.6 **Event States** — Upcoming (normal), Happening Now (pulsing badge), Past (grayed, "Completed")  

---

## 6 · Stories & Testimonials

6.1 **Story Cards** — beneficiary photo, quote excerpt, name, location; first story featured at full width  
6.2 **Story Detail Page** — long-form article with hero image, blockquote styling, rich body text  
6.3 **Related Campaign** — story sidebar shows linked campaign card with donate CTA  
6.4 **Before/After Photos** — side-by-side or slider comparison where applicable  
6.5 **Social Sharing** — share buttons at story bottom for amplification  

---

## 7 · Admin Dashboard

7.1 **Overview Cards** — Total Raised, This Month, Active Campaigns, Active Volunteers stat cards  
7.2 **Donation Trend Chart** — Chart.js line chart: donations over last 30 days  
7.3 **Recent Donations Table** — donor, amount, campaign, time; sortable, scrollable  
7.4 **Campaign Status Table** — campaign name, progress %, visual bar, status badge (Active/Paused/Completed)  
7.5 **Sidebar Navigation** — collapsible sidebar: Dashboard / Campaigns / Donations / Volunteers / Events / Reports / Settings  
7.6 **Campaign CRUD** — add/edit/pause campaigns from admin; data in localStorage  
7.7 **Volunteer Applications** — view pending volunteer signups, approve/reject  
7.8 **Event Management** — create/edit events, view registrations  

---

## 8 · Causes Listing Page

8.1 **Campaign Grid** — responsive grid of campaign cards (3 columns → 2 → 1)  
8.2 **Category Filter** — horizontal filter buttons: All / 💧 Water / 📚 Education / 🏥 Healthcare / 🆘 Emergency  
8.3 **Sort Dropdown** — sort by: Newest / Most Funded / Ending Soon / Most Donors  
8.4 **Search** — text search across campaign titles and descriptions  
8.5 **Load More / Pagination** — "Load More" button or infinite scroll simulation  

---

## 9 · About Page

9.1 **Mission Section** — organization mission statement with large typography  
9.2 **Team Grid** — team member cards: photo, name, role, short bio  
9.3 **Timeline** — organization history as vertical timeline (founding → milestones)  
9.4 **Partners & Sponsors** — logo grid of organizational partners  
9.5 **Annual Report Summary** — key stats from latest year, link to full report  
9.6 **Contact CTA** — get in touch section with email, phone, address, map embed placeholder  

---

## 10 · Dark Mode & Accessibility

10.1 **Theme Toggle** — sun/moon icon button, localStorage persistence, respects `prefers-color-scheme`  
10.2 **Smooth Transitions** — 300ms transition on background, color, border-color for theme switch  
10.3 **Contrast Compliance** — all text meets WCAG AA 4.5:1 ratio in both modes  
10.4 **Focus Indicators** — visible focus rings on all interactive elements (2px solid primary)  
10.5 **Skip Navigation** — "Skip to main content" link hidden until focused  
10.6 **ARIA Labels** — progress bars, charts, modals, and dynamic content properly labeled  
10.7 **Keyboard Navigation** — full keyboard support for donation flow, modals, filters  
10.8 **Reduced Motion** — respects `prefers-reduced-motion`: disables confetti, count-up, countdown animations  
