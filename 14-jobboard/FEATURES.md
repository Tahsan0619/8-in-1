# Job Board & Career Platform — Features

> Detailed specifications for every interactive feature.

---

## 1. Homepage & Discovery

### 1.1 Hero Search
- Full-width hero with professional background
- Two-field search: Job title/keyword + Location
- Search button navigates to Job Search with query params
- Popular searches row below: clickable tags (Frontend Dev, UI Designer, Marketing, etc.)

### 1.2 By the Numbers
- 4 animated stat counters: 5K+ Jobs, 800+ Companies, 200+ Hiring Now, 95% Satisfaction
- Count-up animation on scroll intersection

### 1.3 Featured Jobs
- 4-5 hand-picked job listings as JobCards
- "View All Jobs" link → Job Search page
- Quick Apply button on each card
- Save (heart) button for logged-in users

### 1.4 Top Companies
- 4 CompanyCards with top-rated companies
- "View All Companies" link
- Shows: logo, name, rating, open jobs count

### 1.5 Browse by Category
- 8 category cards in 4-column grid
- Each: icon + category name + job count
- Click → Job Search filtered by category
- Categories: Tech, Finance, Design, Marketing, Engineering, Admin, Education, Healthcare

---

## 2. Job Search & Filtering

### 2.1 Search Bar
- Persistent search at top: keyword + location inputs
- Debounced search (300ms)
- Results update in real-time

### 2.2 Sidebar Filters
- **Job Type** (checkboxes): Full-time, Part-time, Contract, Remote, Internship
- **Experience Level** (radio): Entry, Mid, Senior, Lead
- **Salary Range**: Min and Max inputs (৳ BDT)
- **Industry** (select dropdown)
- **Date Posted** (radio): Last 24h, Last 7 days, Last 30 days, All
- Real-time filtering; URL param sync for shareable searches
- Clear All button; result count updates

### 2.3 Job Listings
- List-style JobCards (not grid — better scanability)
- Each: company logo, company name, title, location, type badge, salary, skills tags, posted time
- Sort: Date (Newest), Salary (High-Low), Relevance
- Pagination: 10 per page

### 2.4 Save Jobs
- Heart/bookmark button on each JobCard
- Toggle saved state; saved jobs appear in Candidate Dashboard
- Saved jobs stored in localStorage

---

## 3. Job Detail

### 3.1 Job Header
- Company logo, company name (link to company profile)
- Job title, location, posted date
- Job type badge, experience level

### 3.2 Job Content (Left Column)
- Full job description (formatted HTML)
- Requirements list (bullet points)
- Benefits list (bullet points)
- About the company section

### 3.3 Apply Sidebar (Right, Sticky)
- Salary range (bold, prominent)
- "Apply Now" button (primary CTA)
- "Save Job" button
- Job Facts: Type, Level, Experience, Vacancies, Application Deadline
- Skills tags
- Company mini-card with rating and link

### 3.4 Application Flow
- Click "Apply Now" → opens ApplicationForm modal
- Fields: Full Name, Email, Phone, Cover Letter, Resume Upload, Portfolio URL
- Resume Upload: drag-and-drop zone, accepts PDF/DOC, max 5MB, shows file preview
- Submit saves application to localStorage
- Success toast with confirmation
- Job appears in Candidate Dashboard as "Applied"

### 3.5 Similar Jobs
- 3 related JobCards based on same category/skills
- Below job detail content

---

## 4. Companies

### 4.1 Company Directory
- Grid of CompanyCards (4 columns desktop, 2 tablet, 1 mobile)
- Search by company name
- Filter by industry dropdown
- Sort by rating, name, job count

### 4.2 Company Profile Page
- **About Tab**: Company description, mission, culture, office photos, tech stack
- **Open Jobs Tab**: List of active job postings with Apply buttons
- **Reviews Tab**: Employee/candidate reviews with star ratings, pros/cons
- **Benefits Tab**: Benefit badges (Health Insurance, Remote, Learning Budget, etc.)

### 4.3 Company Reviews
- Average rating display (large) + rating distribution bars
- Individual ReviewCards with: role, date, stars, pros, cons
- Rating metrics breakdown: Culture, Salary, Work-Life Balance, Growth
- Submit review form (simulated)

---

## 5. Job Posting (Employer)

### 5.1 Post a Job Form
- Multi-section form:
  - **Basic Info**: Job Title, Department, Location, Job Type, Experience Level
  - **Details**: Description (rich textarea), Requirements (add items), Benefits (add items)
  - **Skills**: Tag input (type and enter to add)
  - **Salary**: Range (min-max) or "Negotiable" checkbox
  - **Settings**: Application deadline, vacancy count
- Form validation with inline errors
- Live preview panel showing formatted job listing

### 5.2 Job Preview
- Side-by-side preview of how the listing will appear
- Toggle between edit and preview modes
- "Publish" saves to localStorage and makes job appear in search

---

## 6. Candidate Dashboard

### 6.1 KPI Overview
- 4 stat cards: Applications Sent, Interview Invites, Saved Jobs, Profile Views
- Profile completion progress bar with percentage and incomplete items list

### 6.2 Application Pipeline
- Visual horizontal pipeline: Applied → Screening → Interview → Offer → Result
- Count of applications at each stage
- Pipeline stages are colored and animated

### 6.3 Application Tracking
- Tabbed view: All | Applied | Screening | Interview | Offer | Hired | Rejected
- ApplicationCard for each: company, job title, date, status badge, actions
- Click → view application details
- Status changes simulated via buttons (for demo)

### 6.4 Saved Jobs
- List of saved/bookmarked jobs
- Each with Apply button and Unsave option
- Empty state if no saved jobs

### 6.5 Resume / CV Management
- Upload resume (PDF/DOC file simulation)
- Preview uploaded file name and date
- Replace with new upload
- Profile completion links to resume status

### 6.6 Profile Management
- Edit personal info: name, email, phone, location, bio, skills (tag input)
- Work experience entries (add/edit/remove)
- Education entries (add/edit/remove)
- Save to localStorage

---

## 7. Employer Dashboard

### 7.1 KPI Overview
- 3 stat cards: Active Jobs, Total Applications, Applications This Month

### 7.2 Applicant Tracking System (ATS)
- Kanban board with drag-and-drop columns:
  - **New** → **Screening** → **Interview** → **Offer** → **Hired**
- ApplicantCards draggable between columns
- Each card: name, email, applied role, date, resume link
- Drag uses native HTML5 Drag API
- Status updates on drop, saved to localStorage

### 7.3 Job Management
- Table of posted jobs: Title, Date Posted, Applications Count, Status, Actions
- Status: Active (green), Closed (gray)
- Actions: View Details, Edit, Close Job, View Applicants
- Close Job with confirmation dialog

### 7.4 Application Analytics
- Line chart (Chart.js): applications over last 30 days
- Donut chart: applications by job
- Bar chart: applications by source (direct, search, referral)
- Date range selector

### 7.5 Company Profile Editor
- Edit company info: name, description, industry, location, website, logo
- Manage benefits list
- Culture photos (simulated upload)

---

## 8. Salary Insights

### 8.1 Salary Explorer
- Dropdown filters: Role, Location, Experience Level
- Results update all visualizations on change

### 8.2 Salary Range Display
- Large display: Average, Minimum, Maximum salary
- Horizontal gauge visualization (gradient bar with pointer)

### 8.3 Salary by Experience Chart
- Horizontal bar chart (Chart.js): Entry, Mid, Senior, Lead salary bars
- Labels with ৳ amounts

### 8.4 Salary Trend
- Line chart (Chart.js): 12-month average salary trend
- Shows market direction

### 8.5 Top Paying Companies
- Table: Company name, average salary, industry
- Sorted by salary descending

---

## 9. Career Resources

### 9.1 Article Listing
- Grid of ArticleCards (3 columns desktop)
- Categories: Resume Tips, Interview Prep, Career Growth, Industry Insights
- Category filter tabs
- Each card: thumbnail, title, category badge, excerpt, read time

### 9.2 Article Detail
- Full article content with formatted text
- Table of contents sidebar (generated from headings)
- Related articles at bottom
- Share buttons (simulated)

---

## 10. UI / UX — Global

### 10.1 Responsive Layout
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Job detail sidebar stacks below content on mobile
- Kanban becomes horizontal scroll on tablet/mobile
- Touch-friendly (min 44px targets)

### 10.2 Dark Mode
- System preference detection + manual toggle
- Persisted in localStorage
- Smooth transition (200ms)

### 10.3 Keyboard Navigation
- Full tab navigation
- Escape closes modals
- Enter triggers searches and primary actions
- Arrow keys in dropdowns

### 10.4 Loading States
- Skeleton shimmer for job cards, company cards
- Spinner for form submissions
- Disabled buttons during processing

### 10.5 Data Persistence
- All data in localStorage: jobs, applications, companies, saved jobs, profiles, resume, reviews, salary data
- Candidate and employer data separated by namespace
- Data survives page refreshes

### 10.6 Accessibility
- WCAG AA compliance
- Semantic HTML with landmarks
- ARIA labels on interactive elements (drag targets, status badges)
- Focus indicators on all controls
- Reduced motion support
- Screen reader announcements for kanban drag operations
