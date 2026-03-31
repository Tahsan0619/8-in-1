# Healthcare / Hospital — Components

> Every reusable UI building block — what it looks like, what it does, which pages use it.

---

## 1. Navigation Components

### Header
| Detail | Value |
|--------|-------|
| **Purpose** | Top-level navigation with emergency CTA |
| **States** | Default · Scrolled (sticky, shadow) · Mobile (hamburger) |
| **Contents** | Logo · Nav links (Departments, Doctors, Pharmacy) · Theme toggle · Auth button |
| **Behaviour** | Sticky on scroll; condensed on mobile; emergency button always red |
| **Used On** | Every page |

### MobileMenu
| Detail | Value |
|--------|-------|
| **Purpose** | Full-screen slide-in nav for mobile |
| **Trigger** | Hamburger icon in Header |
| **Contents** | Nav links · Emergency button · Theme toggle |
| **Animation** | Slide from right, 300ms ease |
| **Used On** | Every page (mobile) |

### Sidebar
| Detail | Value |
|--------|-------|
| **Purpose** | Dashboard sidebar navigation |
| **States** | Expanded (240px) · Collapsed (64px icon-only) |
| **Contents** | Dashboard · Appointments · Prescriptions · Lab Results · Vaccinations · Profile · Settings |
| **Behaviour** | Toggle via hamburger; collapses on <1024px |
| **Used On** | Patient Dashboard, Admin Dashboard |

### Footer
| Detail | Value |
|--------|-------|
| **Purpose** | Site-wide footer |
| **Contents** | Department links · Quick links · Hospital hours · Emergency contacts · Address · Social links |
| **Used On** | Every page |

---

## 2. Doctor Components

### DoctorCard
| Detail | Value |
|--------|-------|
| **Purpose** | Doctor preview in listings and featured sections |
| **Variants** | Grid card · List row |
| **Contents** | Avatar · Name · Specialty · Rating (stars + count) · Experience · Next available slot · Fee |
| **Actions** | View Profile · Book Now |
| **Used On** | Home (Featured Doctors), Find a Doctor |

### DoctorProfile
| Detail | Value |
|--------|-------|
| **Purpose** | Full doctor information display |
| **Tabs** | About · Schedule · Reviews · Qualifications |
| **Contents** | Avatar · Name with credentials · Department · Hospital affiliation · Fee · Rating · Bio |
| **Used On** | Doctor Profile page |

### DoctorSchedule
| Detail | Value |
|--------|-------|
| **Purpose** | Weekly schedule table for a doctor |
| **Contents** | Day columns (Sun–Fri) · Morning/Evening time slots · OFF indicators |
| **Visual** | Compact table; available slots in green, OFF in gray |
| **Used On** | Doctor Profile |

### ReviewCard
| Detail | Value |
|--------|-------|
| **Purpose** | Patient review/testimonial |
| **Contents** | Reviewer name · Date · Star rating · Review text · Verified badge |
| **Used On** | Doctor Profile (Reviews tab), Home (Testimonials) |

---

## 3. Appointment Components

### AppointmentWizard
| Detail | Value |
|--------|-------|
| **Purpose** | Multi-step appointment booking flow |
| **Steps** | 1. Select Doctor → 2. Select Date/Time → 3. Patient Info → 4. Confirm/Pay |
| **Progress** | Step indicator bar with numbered circles and connecting lines |
| **Validation** | Each step validated before proceeding |
| **Used On** | Book Appointment page |

### DatePicker
| Detail | Value |
|--------|-------|
| **Purpose** | Calendar for selecting appointment date |
| **Contents** | Month/year header with nav arrows · Day grid · Today highlight · Disabled past days |
| **Visual** | Selected date = primary filled; Available = default; Unavailable = grayed out |
| **Used On** | Book Appointment (Step 2) |

### TimeSlotGrid
| Detail | Value |
|--------|-------|
| **Purpose** | Available time slots for selected date |
| **Layout** | Button grid, 4 per row |
| **States** | Available (outlined) · Selected (filled primary) · Booked (disabled, strikethrough) |
| **Used On** | Book Appointment (Step 2) |

### AppointmentCard
| Detail | Value |
|--------|-------|
| **Purpose** | Appointment summary in dashboard |
| **Contents** | Doctor name · Department · Date/Time · Status badge · Actions |
| **Statuses** | 🟢 Confirmed · 🟡 Pending · 🔴 Cancelled · 🔵 Completed |
| **Actions** | View · Reschedule · Cancel |
| **Used On** | Patient Dashboard, Admin Dashboard |

### AppointmentDetail
| Detail | Value |
|--------|-------|
| **Purpose** | Full appointment view |
| **Contents** | Doctor card · Date/Time · Status · Patient notes · Prescription (if completed) · Follow-up |
| **Actions** | Reschedule · Cancel · Add to Calendar · Print |
| **Used On** | Appointment Detail page |

---

## 4. Department Components

### DepartmentCard
| Detail | Value |
|--------|-------|
| **Purpose** | Department overview card |
| **Contents** | Icon · Name · Description · Doctor count · [View Doctors] |
| **Hover** | Lift shadow + border accent |
| **Used On** | Home (Departments section), Departments page |

### DepartmentHero
| Detail | Value |
|--------|-------|
| **Purpose** | Department detail header with description |
| **Contents** | Icon · Title · Full description · Conditions treated list · Doctor count |
| **Used On** | Departments page (expanded view) |

---

## 5. Medical Record Components

### PrescriptionCard
| Detail | Value |
|--------|-------|
| **Purpose** | Prescription summary row |
| **Contents** | Medicine name · Dosage · Frequency · Prescribing doctor · Start/End date · Status |
| **Statuses** | 🟢 Active · ⚪ Completed · 🔴 Discontinued |
| **Actions** | View Details · Reorder (Pharmacy link) |
| **Used On** | Patient Dashboard (Prescriptions), Health Records |

### LabResultCard
| Detail | Value |
|--------|-------|
| **Purpose** | Lab test result summary |
| **Contents** | Test name · Date · Result status · Key values |
| **Statuses** | 🟢 Normal · 🟡 Review Required · 🔴 Critical |
| **Actions** | View Full Report · Download PDF |
| **Used On** | Patient Dashboard (Lab Results), Health Records |

### HealthTimeline
| Detail | Value |
|--------|-------|
| **Purpose** | Chronological health events |
| **Contents** | Timeline with dated entries: appointments, lab tests, prescriptions, vaccinations |
| **Visual** | Vertical timeline with dots, alternating cards |
| **Used On** | Health Records page |

### VaccinationRecord
| Detail | Value |
|--------|-------|
| **Purpose** | Vaccination history entry |
| **Contents** | Vaccine name · Date administered · Doctor · Dose number · Next due date |
| **Used On** | Patient Dashboard (Vaccinations), Health Records |

---

## 6. Pharmacy Components

### MedicineCard
| Detail | Value |
|--------|-------|
| **Purpose** | Medicine product card |
| **Contents** | Icon/image · Name · Generic name · Strength · Price per unit · Category badge |
| **Actions** | Add to Cart (with quantity) |
| **Used On** | Pharmacy page |

### PharmacyCart
| Detail | Value |
|--------|-------|
| **Purpose** | Slide-in cart drawer for pharmacy orders |
| **Contents** | Item list with quantity controls · Per-item subtotal · Total · Prescription upload · Checkout |
| **Behaviour** | Slide from right; overlay backdrop; updates badge on cart icon |
| **Used On** | Pharmacy page |

### PrescriptionUpload
| Detail | Value |
|--------|-------|
| **Purpose** | Upload prescription image for prescription-only medicines |
| **Contents** | Drop zone · File input · Preview · Accepted formats hint |
| **Validation** | Image files only; max 5MB |
| **Used On** | Pharmacy Cart (Checkout) |

---

## 7. Search & Filter Components

### HeroSearch
| Detail | Value |
|--------|-------|
| **Purpose** | Homepage universal search |
| **Contents** | Search input · Placeholder: "Search doctors, departments, services" · Auto-suggest dropdown |
| **Behaviour** | Debounced search (300ms) · Shows grouped results (Doctors, Departments, Services) |
| **Used On** | Home page |

### DoctorFilter
| Detail | Value |
|--------|-------|
| **Purpose** | Sidebar filters for doctor search |
| **Filters** | Department (radio) · Availability (checkbox: Today, Tomorrow, This Week) · Gender (radio) · Rating (min stars) |
| **Behaviour** | Updates results in real-time; URL params for shareable search; Clear All button |
| **Used On** | Find a Doctor page |

### CategoryTabs
| Detail | Value |
|--------|-------|
| **Purpose** | Horizontal tab filter for categories |
| **Contents** | Scrollable pill buttons: All, Pain Relief, Cardiac, Antibiotics, etc. |
| **Used On** | Pharmacy page |

---

## 8. Payment Components

### PaymentMethod
| Detail | Value |
|--------|-------|
| **Purpose** | Payment option selection |
| **Options** | bKash · Nagad · Credit/Debit Card · Pay at Counter |
| **Contents** | Radio buttons with provider logos · Quick info about each method |
| **Used On** | Book Appointment (Step 4), Pharmacy Checkout |

### BookingSummary
| Detail | Value |
|--------|-------|
| **Purpose** | Appointment booking summary before confirmation |
| **Contents** | Doctor info · Date/Time · Patient info · Fee · Selected payment method |
| **Actions** | Edit (go back to step) · Confirm Booking |
| **Used On** | Book Appointment (Step 4) |

---

## 9. Utility Components

### Toast
| Detail | Value |
|--------|-------|
| **Variants** | Success (green) · Error (red) · Warning (amber) · Info (blue) |
| **Behaviour** | Slides in from top-right; auto-dismiss after 4s; manual close; stacks up to 3 |
| **Used On** | Global |

### Modal
| Detail | Value |
|--------|-------|
| **Variants** | Confirm · Form · Alert |
| **Contents** | Title · Body content / form · Action buttons |
| **Close** | × button · Escape key · Backdrop click |
| **Used On** | Cancel appointment, Reschedule, Delete confirmation |

### ConfirmDialog
| Detail | Value |
|--------|-------|
| **Purpose** | Destructive action confirmation |
| **Contents** | Warning icon · Message · Cancel / Confirm buttons |
| **Confirm style** | Red for destructive, primary for neutral |
| **Used On** | Cancel appointment, Remove from cart |

### StatusBadge
| Detail | Value |
|--------|-------|
| **Purpose** | Visual status indicator |
| **Variants** | Confirmed (green) · Pending (yellow) · Cancelled (red) · Completed (blue) · Active (green) |
| **Used On** | AppointmentCard, PrescriptionCard, LabResultCard |

### EmptyState
| Detail | Value |
|--------|-------|
| **Purpose** | Placeholder when no data exists |
| **Contents** | Illustration · Message · Suggested action button |
| **Used On** | Appointments (none), Prescriptions (none), Search (no results) |

### QuickActions
| Detail | Value |
|--------|-------|
| **Purpose** | Shortcut grid for common actions |
| **Buttons** | Book Appointment · Lab Results · Pharmacy · Emergency |
| **Used On** | Home page |

### StatCounter
| Detail | Value |
|--------|-------|
| **Purpose** | Animated counter for statistics |
| **Contents** | Number (count-up animation) · Label · Optional icon |
| **Animation** | Count-up on scroll intersection; 2s duration |
| **Used On** | Home (Hospital at a Glance), Admin Dashboard (KPI cards) |
