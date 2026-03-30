# Education / LMS — Feature Specifications

---

## 1. Homepage

### 1.1 Hero with Search
- Headline: "Learn Without Limits"
- Subtext about the platform
- Search bar: "What do you want to learn?" with suggestions dropdown
- Popular searches: quick-link pills
- Background: subtle gradient or illustration

### 1.2 Category Browse
- Horizontal scroll or grid of category cards
- Categories: Development, Design, Business, Marketing, Languages, Data Science
- Each: icon + name + course count
- Click → filtered course listing

### 1.3 Featured Courses Carousel
- Horizontal carousel of course cards
- Staff picks or highest rated
- 4 visible (desktop), swipeable on mobile
- "See all" link

### 1.4 Stats Section
- 4 counters: 10K+ Students, 500+ Courses, 200+ Instructors, 50+ Countries
- Count-up animation on scroll
- Accent background section

### 1.5 How It Works
- 3 steps: Browse → Enroll → Learn
- Each: icon + title + description
- Clean, centered layout

### 1.6 Testimonials
- Student testimonial carousel
- Quote + name + course taken + rating + avatar

### 1.7 Become an Instructor CTA
- Full-width banner section
- Headline: "Share your knowledge"
- Subtext + "Start Teaching" button
- Background: gradient or illustration

---

## 2. Course Listing

### 2.1 Search + Filters
- Search bar at top
- Filter sidebar:
  - Category: checkbox list
  - Level: Beginner, Intermediate, Advanced
  - Price: Free, Paid, range slider
  - Rating: 4★+, 3★+
  - Duration: Short (<2h), Medium (2-10h), Long (10h+)
- Sort: Relevance, Most Popular, Newest, Highest Rated, Price Low-High
- Result count displayed

### 2.2 Course Cards
- Thumbnail (16:9)
- Title (2-line clamp)
- Instructor name
- Rating: stars + numeric + student count
- Price: current + original (strikethrough if discounted)
- Badges: "Free" (green), "Bestseller" (orange), "New" (blue)
- Wishlist heart toggle
- Hover: full description tooltip or expanded card

---

## 3. Course Detail

### 3.1 Course Header
- Title (H1) + subtitle
- Rating: large stars + numeric + review count + student count
- Instructor: avatar + name + link
- Last updated date
- Language + subtitles info
- Breadcrumb: Home > Category > Course

### 3.2 What You'll Learn
- Checklist grid (2 columns): ✓ Learning outcome items
- 8-10 items
- Clean checkmark styling

### 3.3 Curriculum Accordion
- Sections listed with expand/collapse
- Section header: section number + title + lesson count + duration
- Expanded: lesson list
  - Each lesson: play icon (or lock icon) + lesson title + type badge (Video/Article/Quiz) + duration
  - Completed lessons: checkmark icon (green)
  - Locked: lock icon + "Enroll to unlock"
  - Preview lessons: "Preview" badge, clickable even without enrollment

### 3.4 Instructor Card
- Photo (80px) + name + title/tagline
- Stats: courses taught + students + rating
- Short bio
- "View Profile" link

### 3.5 Requirements List
- Simple bullet list: prerequisites needed

### 3.6 Reviews Section
- Average rating (large) + distribution bars (5★ to 1★)
- Individual reviews: avatar + name + rating + date + text
- "Helpful" vote button
- Sort: Most Recent, Highest, Lowest
- Load more button

### 3.7 Sticky Enroll Sidebar
- Fixed sidebar (desktop), bottom sticky bar (mobile)
- Course thumbnail or preview video
- Price (large): "Free" or "$49.99" + original price
- "Enroll Now" / "Buy Now" button (full width, accent)
- "Add to Wishlist" button
- Includes: duration, lessons count, level, certificate, lifetime access
- 30-day guarantee badge

### 3.8 Preview Video Modal
- Click thumbnail/play button → modal with video player
- Course intro video (2-3 min)
- modal close: X + backdrop

---

## 4. Learning Player

### 4.1 Video Player
- Custom-skinned HTML5 video player
- Controls: play/pause, progress bar (seekable), current/total time, volume, speed (0.5x-2x), fullscreen, picture-in-picture
- Progress saved per lesson
- Auto-advance to next lesson on complete
- Aspect ratio: 16:9

### 4.2 Lesson Sidebar
- Right sidebar (collapses on mobile)
- Course sections + lessons list (same as curriculum accordion)
- Current lesson highlighted
- Completed: checkmark icon
- Progress bar at top: "65% complete"
- Click lesson → loads in player

### 4.3 Notes Tab
- Tab below video (alongside Q&A)
- Textarea for taking notes per lesson
- Saved in localStorage per lesson
- Timestamp button: inserts current video timestamp
- Notes list for all lessons

### 4.4 Q&A Tab
- Questions list for current lesson
- Post question form: title + description
- Each question: upvote count + title + author + timestamp + reply count
- Expand → replies thread
- Sort: Most Recent, Most Voted

### 4.5 Certificate Progress Bar
- Visual progress toward certificate
- "Complete all lessons and pass the quiz to earn your certificate"
- Percentage complete
- Milestone markers

---

## 5. Student Dashboard

### 5.1 Enrolled Courses
- Card grid of enrolled courses
- Each: thumbnail + title + instructor + progress bar + "Continue" button
- Last accessed date
- Sort: Last Accessed, Progress, Name

### 5.2 Continue Learning
- Top section: hero card for most recent course
- "Continue where you left off" + lesson name + thumbnail
- Large "Continue" button

### 5.3 Completed Courses
- Same card style, 100% progress badge
- "View Certificate" button
- "Leave Review" link if unreviewed

### 5.4 Certificates
- Grid of earned certificates
- Each: certificate thumbnail + course name + date earned + "Download" button
- Certificate design: border frame + course name + student name + date + course logo

### 5.5 Quiz Results History
- Table: course + quiz name + score + pass/fail badge + date + "Review" link
- Score percentage displayed with color (green=pass, red=fail)

---

## 6. Instructor Dashboard

### 6.1 My Courses
- List/grid of instructor's courses
- Each: thumbnail + title + student count + rating + earnings
- Status: Published, Draft, Under Review
- "Edit" + "View Analytics" links

### 6.2 Create Course (Multi-Step)
- **Step 1:** Basic info — title, subtitle, category, level, language, thumbnail upload
- **Step 2:** Curriculum — add sections, add lessons (title, type, video upload UI, duration)
- **Step 3:** Pricing — free or paid, price input, promo pricing
- **Step 4:** Review & Publish — preview, submit
- Progress stepper at top
- Save as draft at any step

### 6.3 Student Stats
- Total enrolled students chart (line chart, over time)
- Course completion rates (bar chart)
- Top courses by enrollment

### 6.4 Revenue Summary
- KPI cards: This month earnings, Total earnings, Avg course price
- Earnings chart (monthly, line)
- Payout history table

---

## 7. Quiz / Assessment

### 7.1 MCQ Quiz
- Quiz header: name + total questions + time limit
- Timer: countdown in header (accent, gets red under 60s)
- Question: numbered, question text + 4 options (radio buttons)
- Navigation: Previous / Next + question dots indicator
- Submit button (confirm modal before submit)

### 7.2 Instant Results
- Score display: large percentage + pass/fail badge
- Score breakdown: correct / incorrect / skipped counts
- Time taken
- "Review Answers" button
- "Retake Quiz" button (if failed)
- Certificate unlock message (if passed)

### 7.3 Review Wrong Answers
- Show each question with student's answer vs correct answer
- Correct: green highlight
- Incorrect: red highlight + correct answer shown in green
- Explanation per question (if provided)

### 7.4 Certificate Unlock
- Pass threshold (e.g., 70%)
- On pass: celebration animation (confetti) + certificate preview
- "Download Certificate" button (generates printable certificate)

---

## 8. School Mode

### 8.1 Class Timetable
- Weekly grid: time slots × days
- Color-coded subjects
- Current class highlighted
- Click → class detail (subject, teacher, room)

### 8.2 Assignment Submission
- Assignment list: title + subject + due date + status badge (Submitted/Pending/Late)
- Submit: file upload UI + text input + submit button
- Feedback display after grading

### 8.3 Teacher-Student Messaging
- Simple chat interface
- Message list: sender avatar + name + message + timestamp
- Input: text field + send button
- Conversation list sidebar

### 8.4 Notice Board
- Announcement cards: title + date + content + priority badge (Important/Info)
- Most recent at top
- Expandable content

---

## 9. UI/UX Global

### 9.1 Progress Bars
- Everywhere: course cards, dashboard, player sidebar, certificate progress
- Smooth animation on load/update
- Color: accent (in progress), success (completed)

### 9.2 Video Player Skin
- Custom controls matching brand
- Progress bar: thin accent line, buffered in lighter shade
- Hover: progress bar grows taller
- Time tooltip on scrub

### 9.3 Mobile Player
- Full-width video, lesson list below
- Swipe between notes/Q&A tabs
- Landscape: full-screen video auto

### 9.4 Dark Mode
- Toggle in header
- Deep purple-black tones (not pure gray)
- Extra attention to video player area (always dark)
