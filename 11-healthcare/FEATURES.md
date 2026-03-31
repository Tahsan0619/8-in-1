# Healthcare / Hospital — Features

> Detailed specifications for every interactive feature.

---

## 1. Homepage & Discovery

### 1.1 Hero Search
- Full-width hero with calming medical background
- Universal search input: "Search doctors, departments, services"
- Debounced search (300ms) with auto-suggest dropdown
- Grouped results: Doctors, Departments, Services
- Keyboard navigation through results
- Enter or click navigates to relevant page

### 1.2 Quick Actions
- 4-button shortcut grid: Book Appointment, Lab Results, Pharmacy, Emergency
- Icon + label for each action
- Direct navigation to respective pages
- Emergency button styled in red with pulsing indicator

### 1.3 Department Carousel
- Horizontal scrollable row of DepartmentCards
- Each card: icon, department name, brief description, doctor count
- "View All" link to Departments page
- Click card → filters Find a Doctor by that department

### 1.4 Featured Doctors
- 3-card row of top-rated doctors
- DoctorCard shows: avatar, name, specialty, rating, next available slot
- "Book Now" button opens Book Appointment with doctor pre-selected
- "View All" link to Find a Doctor page

### 1.5 Hospital Statistics
- 4 animated stat counters: 150+ Doctors, 50K+ Patients, 20+ Departments, 24/7 Emergency
- Count-up animation triggered on scroll intersection
- Numbers animate from 0 to target over 2 seconds

### 1.6 Patient Testimonials
- Horizontal carousel with auto-play (8s interval)
- Each slide: patient name, photo, star rating, testimonial text
- Navigation dots + prev/next arrows
- Pause on hover

### 1.7 Health Tips / Blog Section
- 3 article preview cards in a row
- Each card: thumbnail, title, excerpt, read time, date
- Click → opens article in a modal or inline expand

---

## 2. Departments

### 2.1 Department Directory
- Grid of DepartmentCards (4 columns desktop, 2 tablet, 1 mobile)
- Each card: large icon, name, description, number of doctors
- Click card → shows DepartmentHero with full details

### 2.2 Department Detail (Expanded)
- In-page expand (accordion style) or separate section
- Full description, list of conditions treated
- "View Doctors" button → navigates to Find a Doctor filtered by department
- Services offered list

---

## 3. Find a Doctor

### 3.1 Search & Filters
- Top search bar: search by doctor name
- Sidebar filters:
  - Department (radio buttons: All, Cardiology, Neurology, etc.)
  - Availability (checkboxes: Today, Tomorrow, This Week)
  - Gender (radio: Any, Male, Female)
  - Rating (minimum stars slider)
- Real-time filtering (no submit button)
- Clear All filters button
- Result count updates dynamically

### 3.2 Doctor Listings
- List view (default) with DoctorCard rows
- Each row: avatar, name, specialty, rating, experience years, next available slot, fee
- Actions: "View Profile", "Book Now"
- Sort dropdown: Rating (High-Low), Experience, Name (A-Z), Fee (Low-High)
- Pagination: 10 per page with numbered pages

### 3.3 URL-based Filtering
- Filter state synced to URL query params
- Shareable filtered URLs
- Back/forward navigation respects filter state

---

## 4. Doctor Profile

### 4.1 Profile Header
- Large avatar, full name with credentials (MBBS, FCPS, etc.)
- Specialty, hospital affiliation, location
- Rating (stars + review count), years of experience
- Consultation fee (৳ BDT)
- Prominent "Book Appointment" CTA

### 4.2 Tabbed Content
- **About Tab**: Bio text, specializations, languages spoken
- **Schedule Tab**: Weekly schedule table (Sun–Fri), morning/evening slots, OFF days
- **Reviews Tab**: Paginated reviewer cards with star ratings, verified badge
- **Qualifications Tab**: Education timeline, certifications, awards

### 4.3 Review System
- Display average rating + total count
- Read-only reviews (no submission — simulated data)
- Reviews sorted by newest first
- Show up to 5 per page, "Load More" button

---

## 5. Appointment Booking

### 5.1 Multi-Step Wizard
- Step 1: Select Department → Select Doctor (with doctor preview card)
- Step 2: Calendar date picker → Time slot grid
- Step 3: Patient information form (name, phone, email, symptoms textarea)
- Step 4: Booking summary + Payment method selection + Confirm
- Horizontal progress bar showing current step
- Back/Next navigation between steps

### 5.2 Date & Time Selection
- Calendar component showing current month
- Navigate months with arrows
- Past dates disabled
- Available dates have dot indicators
- Time slots shown as button grid for selected date
- Booked slots shown as disabled with strikethrough
- Slot duration: 30 minutes

### 5.3 Patient Information Form
- Fields: Full Name*, Phone*, Email, Date of Birth, Symptoms/Notes (textarea)
- Inline validation on blur
- Required field indicators
- Phone format validation (BD format: 01XXXXXXXXX)

### 5.4 Payment & Confirmation
- Payment methods: bKash, Nagad, Credit/Debit Card, Pay at Counter
- Radio selection with provider logos
- Booking summary showing: Doctor, Department, Date, Time, Fee
- "Confirm Booking" button
- Success state: confirmation number, appointment details, add-to-calendar link
- Data saved to localStorage

---

## 6. Patient Dashboard

### 6.1 Dashboard Overview
- Welcome message with patient name
- Upcoming appointments (next 2-3)
- Recent prescriptions (last 3)
- Recent lab results (last 2)
- Quick action links

### 6.2 Appointments Section
- Tabbed view: Upcoming | Past | Cancelled
- AppointmentCard for each entry
- Actions: View Details, Reschedule, Cancel (with ConfirmDialog)
- Status badges: Confirmed, Pending, Cancelled, Completed
- Click → Appointment Detail page

### 6.3 Prescriptions Section
- List of PrescriptionCards
- Each: medicine name, dosage, frequency, doctor name, status
- Filter by: Active, Completed, All
- "Reorder" button links to Pharmacy page
- View full prescription detail in modal

### 6.4 Lab Results Section
- List of LabResultCards
- Each: test name, date, result status (Normal/Review/Critical)
- Click → modal with full report details
- Download as PDF (simulated)

### 6.5 Vaccination Records
- Vaccination history table
- Columns: Vaccine, Date Given, Doctor, Dose, Next Due
- Status: Completed (green), Due Soon (yellow), Overdue (red)

### 6.6 Profile Management
- Edit personal info: name, phone, email, date of birth, blood group, allergies
- Emergency contact information
- Change password (simulated)
- Form validation on all fields
- Save to localStorage

---

## 7. Pharmacy

### 7.1 Medicine Catalog
- Grid of MedicineCards (4 columns desktop, 2 tablet, 1 mobile)
- Each card: icon, name, generic name, strength, price per unit
- Category filter tabs: All, Pain Relief, Cardiac, Antibiotics, Vitamins, etc.
- Search within pharmacy

### 7.2 Cart System
- "Add to Cart" button with quantity selector (default: 1)
- Cart icon in header shows badge with item count
- Slide-in cart drawer from right
- Item list with quantity +/- controls
- Per-item subtotal and running total
- Remove item with confirmation
- Cart persisted in localStorage

### 7.3 Prescription Upload
- Required for prescription-only medicines (marked with Rx badge)
- Drop zone with file input fallback
- Image preview after upload
- Accepted: JPG, PNG, PDF (max 5MB)
- Simulated validation (any upload accepted)

### 7.4 Checkout Flow
- Cart summary
- Delivery address form (or "Collect from Counter" option)
- Payment method selection (same as appointment)
- Order confirmation with order number
- Order saved to localStorage

---

## 8. Health Records

### 8.1 Timeline View
- Chronological health timeline showing all events
- Event types: Appointments, Lab Tests, Prescriptions, Vaccinations
- Each entry: date, type icon, title, brief description
- Vertical timeline with alternating left/right cards
- Filter by event type

### 8.2 Records Categories
- Tab navigation: All | Appointments | Lab Tests | Prescriptions | Vaccinations
- Each tab shows filtered HealthTimeline entries
- Click any entry → modal with full details

### 8.3 Export & Download
- "Download PDF" button for individual records (simulated)
- Print-friendly view for appointment summaries
- Share via link (simulated)

---

## 9. Admin Dashboard

### 9.1 KPI Cards
- Today's Appointments (count + % change)
- Active Doctors (total count)
- Monthly Revenue (৳ amount + trend)
- Bed Occupancy (percentage with progress bar)

### 9.2 Charts
- Appointments Bar Chart (7-day trend) — Chart.js
- Department Load Donut Chart (patient distribution) — Chart.js
- Revenue Line Chart (monthly trend)
- Charts update based on date range selector

### 9.3 Today's Appointments Table
- Sortable table: Patient Name, Doctor, Department, Time, Status
- Status badges (Confirmed, Pending, Completed, Cancelled)
- Quick actions: View, Mark Complete, Cancel

### 9.4 Doctor Management
- Doctor list with search
- View doctor profiles
- Toggle doctor availability (active/inactive)
- Add new doctor form (simulated)

### 9.5 Bed Management
- Ward list with bed count and availability
- Visual bed map: occupied (red), available (green), maintenance (gray)
- Total beds, available, occupied stats

---

## 10. UI / UX — Global

### 10.1 Responsive Layout
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Sidebar collapses to hamburger on mobile dashboard
- Cards reflow from 4-col to single column
- Touch-friendly tap targets (min 44px)

### 10.2 Dark Mode
- System preference detection via `prefers-color-scheme`
- Manual toggle in header (sun/moon icon)
- Persisted in localStorage
- All colors mapped through CSS custom properties
- Smooth transition (200ms)

### 10.3 Keyboard Navigation
- Full tab navigation across all interactive elements
- Arrow keys for calendar, time slots, menus
- Escape closes modals and drawers
- Enter triggers primary actions
- Focus indicators visible on all elements

### 10.4 Loading States
- Skeleton loading for doctor cards, appointment cards
- Spinner for form submissions
- Disabled buttons during submission with loading indicator
- Progressive content reveal

### 10.5 Error Handling
- Form validation with inline error messages
- Toast notifications for success/error actions
- Empty states with helpful messages and action buttons
- 404-style fallback for invalid routes

### 10.6 Data Persistence
- All user data stored in localStorage
- Patient profile, appointments, prescriptions, cart, orders
- Theme preference and sidebar state
- Filter/search state in URL params

### 10.7 Accessibility
- WCAG AA compliance
- Semantic HTML (header, nav, main, section, article, footer)
- ARIA labels on interactive elements and icons
- Live regions for dynamic content (toast, search results)
- Reduced motion support
- Color-blind safe design (status uses text + icons, not color alone)

### 10.8 Emergency Features
- Emergency button always visible in header (red, pulsing)
- Emergency number (999) prominently displayed
- Emergency quick action on homepage
- High contrast, never hidden in mobile view
