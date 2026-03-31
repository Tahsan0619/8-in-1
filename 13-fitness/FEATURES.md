# Fitness & Gym — Features

> Detailed specifications for every interactive feature.

---

## 1. Homepage & Discovery

### 1.1 Hero Section
- Full-width hero with high-energy gym action shot
- Bold headline + motivational subtext
- Two CTAs: "Start Free Trial" (primary) → Membership, "View Classes" (secondary) → Classes
- Gradient overlay for text readability

### 1.2 Why Choose Us
- 4 stat counters: 50+ Classes, 15+ Trainers, 2K+ Members, 24/7 Access
- Count-up animation on scroll intersection
- Icon + stat + label format

### 1.3 Popular Classes
- 4-card row of most popular classes
- ClassCard shows: photo, name, duration, intensity badge, trainer, book button
- "View All Classes" link
- Quick Book → adds to upcoming with toast confirmation

### 1.4 Featured Trainers
- 3 trainer cards with top-rated trainers
- TrainerCard: photo, name, specialty, rating, experience
- "View All Trainers" link

### 1.5 Membership Plans Preview
- 3 PricingCards: Basic, Pro (highlighted), Elite
- Condensed feature list and price
- "Select" CTA → Membership page

### 1.6 Transformations Carousel
- Before/After comparison cards
- Auto-play carousel (8s interval)
- Name, duration, weight change, brief testimonial
- Navigation dots + arrows

---

## 2. Class Schedule & Booking

### 2.1 Calendar View
- Weekly calendar grid (7 columns × time rows)
- Class blocks positioned by day and time
- Color-coded by category (HIIT=red, Yoga=green, Strength=blue, etc.)
- Week navigation: ◀ ▶ arrows to prev/next week
- Click class block → Class Detail page

### 2.2 List View (Alternative)
- Compact table: Day/Time, Class Name, Trainer, Spots (x/y), Intensity, Book button
- Sortable by day, class, trainer
- Filterable alongside calendar filters

### 2.3 Category Filter
- Horizontal pill buttons: All, HIIT, Yoga, Spinning, Strength, CrossFit, Boxing, Dance
- Active category highlighted
- Real-time filter of calendar and list views

### 2.4 Intensity Filter
- Toggle: All, Low, Medium, High
- Combines with category filter
- Updates views instantly

### 2.5 Class Detail
- Full class info: photo, name, description, what to bring, difficulty level
- Trainer mini-card with link to profile
- Upcoming schedule dates/times
- Spots remaining indicator (progress bar: 12/20)
- "Book This Class" button
- Booking saved to localStorage, spot count decremented

### 2.6 Class Booking
- Click "Book" → confirms booking with toast
- Booking appears in Dashboard → Upcoming Classes
- Cancel booking with confirmation dialog
- Cannot double-book same time slot

---

## 3. Trainer Profiles

### 3.1 Trainer Directory
- Grid of TrainerCards (3 columns desktop, 2 tablet, 1 mobile)
- Search by name
- Filter by specialty (dropdown or tags)
- Sort by rating, experience, name

### 3.2 Trainer Profile Page
- **About Tab**: Bio, specialties, languages, philosophy
- **Classes Tab**: Upcoming classes taught by this trainer with book buttons
- **Reviews Tab**: Paginated member reviews with star ratings
- **Certifications Tab**: Timeline of certifications, education, awards

### 3.3 Book a Session
- "Book a Session" CTA on trainer profile
- Opens modal: select date, select available time slot, confirm
- Saved to dashboard bookings

---

## 4. Membership & Pricing

### 4.1 Pricing Plans
- 3 plans displayed as PricingCards
- **Basic** (৳2,000/mo): Gym access, locker, basic amenities
- **Pro** (৳3,500/mo): All Basic + group classes, nutrition plan, app access
- **Elite** (৳5,000/mo): All Pro + personal trainer sessions, priority booking, spa
- Monthly/Yearly toggle (yearly = 20% discount)

### 4.2 Feature Comparison
- Full comparison table with all features
- Rows: Gym Access, Group Classes, Personal Trainer, Nutrition Plan, Spa & Sauna, Guest Passes, etc.
- ✓/✗ indicators with tooltips

### 4.3 Signup Flow
- Click "Get [Plan]" → opens signup form
- Fields: Name, Email, Phone, Emergency Contact, Health conditions (textarea)
- Payment method selection (bKash, Nagad, Card, Cash)
- Confirm → saves membership to localStorage
- Success screen with membership ID

### 4.4 FAQ Accordion
- 6-8 common questions about membership
- Click to expand/collapse, one at a time
- Questions: cancellation policy, freeze options, guest policy, etc.

---

## 5. BMI & Body Composition Calculator

### 5.1 BMI Calculator
- Input fields: Gender (M/F toggle), Age, Height (cm), Weight (kg)
- "Calculate" button
- Results: BMI number, category (Underweight/Normal/Overweight/Obese), color-coded

### 5.2 BMI Gauge
- Horizontal gradient bar: blue (underweight) → green (normal) → orange (overweight) → red (obese)
- Animated pointer slides to BMI value
- Category ranges labeled

### 5.3 Body Stats Extension
- Optional extended inputs: Waist, Neck, Hip circumference
- Activity level dropdown
- Calculates: BMR, estimated body fat %, ideal weight range
- Daily calorie needs table by activity level

### 5.4 BMI History
- "Save to History" button stores current BMI with date
- Line chart (Chart.js) showing BMI over time
- Horizontal colored bands for category ranges
- History stored in localStorage

### 5.5 Health Recommendations
- Based on BMI category, show relevant tips
- Underweight: nutrition-focused
- Normal: maintenance tips
- Overweight/Obese: exercise recommendations
- Links to relevant classes and trainers

---

## 6. Workout Planner

### 6.1 Plan Management
- Sidebar list of saved workout plans
- Create new plan with name input
- Delete plan with confirmation
- Plans stored in localStorage

### 6.2 Exercise Library
- Click "+ Add Exercise" → opens modal
- Searchable exercise list grouped by muscle group
- Muscle groups: Chest, Back, Shoulders, Arms, Core, Legs, Cardio
- Each exercise has name, muscle group, difficulty
- Select exercise → configure sets, reps, weight, rest time
- Add to current plan

### 6.3 Exercise Configuration
- Sets (1-10), Reps (1-30), Weight (kg), Rest time (seconds)
- Drag to reorder exercises within plan
- Edit exercise details inline
- Remove exercise with undo toast

### 6.4 Active Workout Mode
- Click "Start Workout" → enters active mode
- Shows current exercise with sets/reps/weight
- Rest timer countdown between sets
- Mark set as completed (checkbox)
- Auto-advance to next exercise when all sets done
- "Finish Workout" → saves log

### 6.5 Workout Summary
- After completing workout: total time, exercises done, total volume (kg × reps), sets completed
- "Save Workout" stores in history
- Congratulatory animation

---

## 7. Member Dashboard

### 7.1 KPI Overview
- 4 stat cards: Workouts This Week, Current Streak, BMI, Membership Plan
- Streak counter with fire icon and glow effect

### 7.2 Upcoming Classes
- Next 3 booked classes
- Each: class name, trainer, date/time, cancel button
- "View All" link to full bookings list

### 7.3 Weekly Activity Chart
- Bar chart (Chart.js): workouts per day for current week
- Color-coded by workout type
- Goal line overlay (e.g., target 5 workouts/week)

### 7.4 Recent Workouts
- Last 5 completed workouts
- Each: plan name, duration, date, status badge (✅)
- Click → view workout details

### 7.5 Progress Tracking
- Weight progress line chart (Chart.js)
- Log new weight entry (date + weight)
- Goal weight line overlay
- Body measurements tracking (optional)

### 7.6 Goals
- Create fitness goals: type (weight loss, strength, attendance), target, deadline
- Progress bar for each goal (current vs target)
- Mark as completed when reached
- Goal suggestions based on profile

### 7.7 Achievements
- Badge grid: unlocked (colored + glow) vs locked (gray + silhouette)
- Examples: First Workout, 7-Day Streak, 30-Day Streak, 100 Workouts, BMI Goal Reached
- Achievement unlock animation (scale bounce + glow)
- Total badges count

---

## 8. Admin Dashboard

### 8.1 KPI Cards
- Active Members (count)
- Today's Check-ins (count)
- Monthly Revenue (৳ amount)
- Class Occupancy Rate (%)

### 8.2 Class Management
- Table of all classes: Name, Category, Trainer, Schedule, Capacity, Status
- Add new class form
- Edit class details
- Toggle class active/cancelled

### 8.3 Trainer Management
- Trainer list with search
- View profiles, edit details
- Assign classes to trainers
- Toggle availability

### 8.4 Member Management
- Member list with search and membership filter
- View profiles, check-in history
- Membership status (Active, Expired, Frozen)
- Revenue reports by membership type (donut chart)

---

## 9. UI / UX — Global

### 9.1 Responsive Layout
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Calendar becomes horizontally scrollable on mobile
- Cards stack to 1 column on mobile
- Touch-friendly (min 44px targets)

### 9.2 Dark Mode
- System preference detection + manual toggle
- Persisted in localStorage
- All colors through CSS custom properties
- Smooth transition (200ms)

### 9.3 Keyboard Navigation
- Full tab navigation
- Arrow keys for calendar, forms
- Escape closes modals
- Enter triggers primary actions

### 9.4 Loading States
- Skeleton shimmer for cards and charts
- Spinner for calculations and form submissions
- Disabled buttons during processing

### 9.5 Data Persistence
- All data in localStorage: membership, bookings, workout plans, workout history, BMI history, goals, achievements, weight log
- Data survives page refreshes
- Export (simulated) for workout history

### 9.6 Accessibility
- WCAG AA compliance
- Semantic HTML with landmarks
- ARIA labels on interactive elements
- Focus indicators on all controls
- Reduced motion support
- Color-blind safe (intensity uses text labels, not just color)
