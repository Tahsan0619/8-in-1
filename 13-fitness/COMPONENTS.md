# Fitness & Gym — Components

> Every reusable UI building block for the fitness platform.

---

## 1. Navigation Components

### Header
| Detail | Value |
|--------|-------|
| **Purpose** | Top-level navigation |
| **States** | Default · Scrolled (sticky, shadow) · Mobile (hamburger) |
| **Contents** | Logo · Nav links (Classes, Trainers, Membership, BMI Calculator) · Theme toggle · Auth/Profile button |
| **Used On** | Every page |

### MobileMenu
| Detail | Value |
|--------|-------|
| **Purpose** | Full-screen slide-in mobile navigation |
| **Contents** | Nav links · Join Now CTA · Theme toggle |
| **Used On** | Every page (mobile) |

### Sidebar
| Detail | Value |
|--------|-------|
| **Purpose** | Dashboard sidebar navigation |
| **States** | Expanded (240px) · Collapsed (64px) |
| **Contents** | Dashboard · Classes · Workouts · Progress · Goals · Achievements · Profile · Settings |
| **Used On** | Member Dashboard, Admin Dashboard |

### Footer
| Detail | Value |
|--------|-------|
| **Purpose** | Site-wide footer |
| **Contents** | Hours · Location · Contact · Social links · Quick links |
| **Used On** | Every page |

---

## 2. Class Components

### ClassCard
| Detail | Value |
|--------|-------|
| **Purpose** | Class preview in listings and featured sections |
| **Variants** | Grid card · Calendar cell · List row |
| **Contents** | Photo · Class name · Duration · Intensity badge · Trainer name · Schedule · Spots remaining · Book button |
| **Intensity** | 🟢 Low · 🟡 Medium · 🔴 High |
| **Hover** | Lift shadow, image slight zoom |
| **Used On** | Home (Popular), Classes page |

### ClassCalendar
| Detail | Value |
|--------|-------|
| **Purpose** | Weekly schedule calendar view |
| **Contents** | 7-column grid (Sun–Sat) · Time rows · Class blocks placed in slots |
| **Navigation** | ◀ ▶ arrows to navigate weeks |
| **Behaviour** | Click class block → Class Detail page |
| **Used On** | Classes page |

### ClassDetail
| Detail | Value |
|--------|-------|
| **Purpose** | Full class information display |
| **Contents** | Photo · Name · Description · Trainer card · Duration · Intensity · Equipment needed · Upcoming schedule · Spots remaining · Book button |
| **Used On** | Class Detail page |

### ClassListItem
| Detail | Value |
|--------|-------|
| **Purpose** | Compact class row in list view |
| **Contents** | Day/Time · Class name · Trainer · Spots (x/y) · Intensity dot · Book button |
| **Used On** | Classes page (list view), Trainer Profile (classes tab) |

---

## 3. Trainer Components

### TrainerCard
| Detail | Value |
|--------|-------|
| **Purpose** | Trainer preview card |
| **Contents** | Photo · Name · Specialty · Rating (stars + count) · Experience years · Certifications preview |
| **Actions** | View Profile · Book Session |
| **Used On** | Home (Featured Trainers), Trainers page |

### TrainerProfile
| Detail | Value |
|--------|-------|
| **Purpose** | Full trainer information display |
| **Tabs** | About · Classes · Reviews · Certifications |
| **Contents** | Large avatar · Name · Title · Rating · Experience · Specialty badges · Bio · Class schedule |
| **Used On** | Trainer Profile page |

### ReviewCard
| Detail | Value |
|--------|-------|
| **Purpose** | Member review for trainer |
| **Contents** | Reviewer name · Date · Star rating · Review text · Class attended |
| **Used On** | Trainer Profile (Reviews tab), Home (carousel) |

---

## 4. Membership Components

### PricingCard
| Detail | Value |
|--------|-------|
| **Purpose** | Membership plan card |
| **Variants** | Basic · Pro (popular/highlighted) · Elite |
| **Contents** | Plan name · Price (monthly/yearly toggle) · Feature list (✓/✗) · CTA button |
| **Popular** | PRO card has "Popular" badge, slight scale (1.05), primary border |
| **Used On** | Home (Plans section), Membership page |

### BillingToggle
| Detail | Value |
|--------|-------|
| **Purpose** | Monthly / Yearly billing switch |
| **Contents** | Toggle with "Monthly" / "Yearly (Save 20%)" labels |
| **Behaviour** | Updates all PricingCard prices on toggle |
| **Used On** | Membership page |

### FeatureComparison
| Detail | Value |
|--------|-------|
| **Purpose** | Detailed plan comparison table |
| **Contents** | Feature rows × Plan columns with ✓/✗ indicators |
| **Used On** | Membership page |

### FAQAccordion
| Detail | Value |
|--------|-------|
| **Purpose** | Expandable FAQ items |
| **Contents** | Question header · Answer body · Toggle icon (+/−) |
| **Behaviour** | Click to expand/collapse; one open at a time |
| **Used On** | Membership page |

---

## 5. BMI & Calculator Components

### BMIForm
| Detail | Value |
|--------|-------|
| **Purpose** | BMI calculation input form |
| **Fields** | Gender toggle (M/F) · Age · Height (cm) · Weight (kg) |
| **Actions** | Calculate button |
| **Validation** | Numeric inputs, reasonable ranges |
| **Used On** | BMI Calculator page |

### BMIResult
| Detail | Value |
|--------|-------|
| **Purpose** | BMI calculation result display |
| **Contents** | BMI number (large) · Category label · Color-coded category |
| **Categories** | Underweight (<18.5, blue) · Normal (18.5-24.9, green) · Overweight (25-29.9, orange) · Obese (30+, red) |
| **Used On** | BMI Calculator page |

### BMIGauge
| Detail | Value |
|--------|-------|
| **Purpose** | Visual BMI scale with pointer |
| **Contents** | Horizontal gradient bar (blue → green → orange → red) · Arrow pointer at BMI value |
| **Used On** | BMI Calculator page |

### BodyStatsForm
| Detail | Value |
|--------|-------|
| **Purpose** | Extended body composition inputs |
| **Fields** | Waist · Neck · Hip (for females) · Activity level dropdown |
| **Outputs** | BMR · Estimated body fat % · Ideal weight range · Daily calorie needs |
| **Used On** | BMI Calculator page |

### CalorieTable
| Detail | Value |
|--------|-------|
| **Purpose** | Daily calorie needs by activity level |
| **Contents** | Activity levels (Sedentary, Light, Moderate, Active, Very Active) × calorie values |
| **Used On** | BMI Calculator page |

### BMIHistoryChart
| Detail | Value |
|--------|-------|
| **Purpose** | BMI tracking over time (Chart.js line chart) |
| **Contents** | X-axis: dates · Y-axis: BMI · Horizontal bands for categories |
| **Data** | From localStorage history |
| **Used On** | BMI Calculator page |

---

## 6. Workout Planner Components

### WorkoutPlanList
| Detail | Value |
|--------|-------|
| **Purpose** | Sidebar list of saved workout plans |
| **Contents** | Plan name · Exercise count · Active indicator |
| **Actions** | Select · Delete · New Plan |
| **Used On** | Workout Planner page |

### ExerciseCard
| Detail | Value |
|--------|-------|
| **Purpose** | Single exercise entry in a plan |
| **Contents** | Exercise name · Sets × Reps · Weight · Rest time · Order number |
| **Actions** | Edit · Remove · Drag to reorder |
| **Used On** | Workout Planner page |

### AddExerciseModal
| Detail | Value |
|--------|-------|
| **Purpose** | Modal to add exercise to plan |
| **Contents** | Search exercise library · Category filter · Exercise selector · Sets/Reps/Weight/Rest inputs |
| **Library** | Pre-built exercise list with muscle groups |
| **Used On** | Workout Planner page |

### WorkoutTimer
| Detail | Value |
|--------|-------|
| **Purpose** | Rest timer during active workout |
| **Contents** | Countdown timer · Current exercise · Next exercise · Skip rest button |
| **Audio** | Beep on timer end (optional) |
| **Used On** | Workout Planner (active mode) |

### WorkoutSummary
| Detail | Value |
|--------|-------|
| **Purpose** | Post-workout summary |
| **Contents** | Total time · Exercises completed · Volume (total weight) · Sets completed · Save to history |
| **Used On** | Workout Planner (after workout) |

---

## 7. Dashboard Components

### StreakCounter
| Detail | Value |
|--------|-------|
| **Purpose** | Current workout streak display |
| **Contents** | 🔥 icon · Day count · "day streak" label |
| **Visual** | Large number, animated flame effect |
| **Used On** | Dashboard |

### WeeklyActivityChart
| Detail | Value |
|--------|-------|
| **Purpose** | Workouts per day bar chart (Chart.js) |
| **Contents** | 7-bar chart (Sun–Sat) · Workout count per day |
| **Used On** | Dashboard |

### ProgressChart
| Detail | Value |
|--------|-------|
| **Purpose** | Weight/measurement progress line chart (Chart.js) |
| **Contents** | Line chart over time · Goal line overlay · Data from log entries |
| **Used On** | Dashboard (Progress section) |

### GoalCard
| Detail | Value |
|--------|-------|
| **Purpose** | Fitness goal with progress |
| **Contents** | Goal title · Target · Current · Progress bar (%) · Deadline |
| **Examples** | "Lose 5kg", "Run 5km", "30-day streak" |
| **Used On** | Dashboard (Goals section) |

### AchievementBadge
| Detail | Value |
|--------|-------|
| **Purpose** | Unlocked/locked achievement |
| **States** | 🏆 Unlocked (colored + glow) · 🔒 Locked (gray, silhouette) |
| **Contents** | Badge icon · Title · Description · Date unlocked |
| **Examples** | First Workout, 7-Day Streak, 50 Classes, Sub-25 BMI |
| **Used On** | Dashboard (Achievements section) |

### UpcomingClassCard
| Detail | Value |
|--------|-------|
| **Purpose** | Booked class preview in dashboard |
| **Contents** | Class name · Trainer · Date/Time · Location · Cancel button |
| **Used On** | Dashboard |

---

## 8. Transformation Components

### BeforeAfterCard
| Detail | Value |
|--------|-------|
| **Purpose** | Member transformation showcase |
| **Contents** | Before photo · After photo · Name · Duration · Weight change · Testimonial |
| **Visual** | Side-by-side or slider comparison |
| **Used On** | Home (Transformations carousel) |

---

## 9. Utility Components

### Toast
| Detail | Value |
|--------|-------|
| **Variants** | Success · Error · Warning · Info |
| **Behaviour** | Slides from top-right; auto-dismiss 4s; stacks up to 3 |
| **Used On** | Global |

### Modal
| Detail | Value |
|--------|-------|
| **Variants** | Confirm · Form · Alert |
| **Close** | × button · Escape · Backdrop click |
| **Used On** | Add exercise, Cancel class, Delete plan |

### EmptyState
| Detail | Value |
|--------|-------|
| **Purpose** | Placeholder when no data |
| **Contents** | Illustration · Message · Action button |
| **Used On** | Workout plans (none), Classes (no results), Achievements (none) |

### IntensityBadge
| Detail | Value |
|--------|-------|
| **Purpose** | Class intensity indicator |
| **Variants** | Low (green) · Medium (yellow) · High (red) |
| **Used On** | ClassCard, ClassDetail, ClassListItem |

### StatCounter
| Detail | Value |
|--------|-------|
| **Purpose** | Animated counter stat |
| **Animation** | Count-up on scroll; 2s duration |
| **Used On** | Home (Why Choose Us) |
