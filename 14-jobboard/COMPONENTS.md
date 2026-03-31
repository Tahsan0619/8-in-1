# Job Board & Career Platform — Components

> Every reusable UI building block for the job board platform.

---

## 1. Navigation Components

### Header
| Detail | Value |
|--------|-------|
| **Purpose** | Top-level navigation with employer CTA |
| **States** | Default · Scrolled (sticky, shadow) · Mobile (hamburger) |
| **Contents** | Logo · Nav links (Find Jobs, Companies, Salary Insights, Resources) · "Post a Job" button · Theme toggle · Auth/Profile dropdown |
| **Used On** | Every page |

### MobileMenu
| Detail | Value |
|--------|-------|
| **Purpose** | Slide-in mobile navigation |
| **Contents** | Nav links · Post a Job CTA · Theme toggle · Auth |
| **Used On** | Every page (mobile) |

### Sidebar
| Detail | Value |
|--------|-------|
| **Purpose** | Dashboard sidebar navigation |
| **States** | Expanded (240px) · Collapsed (64px) |
| **Variants** | Candidate: Dashboard, Applications, Saved, Resume, Profile, Settings · Employer: Dashboard, Jobs, Applicants, Analytics, Company, Settings |
| **Used On** | Candidate Dashboard, Employer Dashboard |

### Footer
| Detail | Value |
|--------|-------|
| **Purpose** | Site-wide footer |
| **Contents** | Quick links · For Employers · For Candidates · Support · Social · Copyright |
| **Used On** | Every page |

---

## 2. Job Components

### JobCard
| Detail | Value |
|--------|-------|
| **Purpose** | Job listing preview |
| **Variants** | List row (default) · Compact row (dashboard) |
| **Contents** | Company logo · Company name · Job title · Location · Job type badge · Salary range · Skills tags (3 max) · Posted time · Apply button · Save (heart) button |
| **Hover** | Background tint, slight left border accent |
| **Used On** | Home (Featured), Job Search, Company Profile (Open Jobs) |

### JobDetail
| Detail | Value |
|--------|-------|
| **Purpose** | Full job posting view |
| **Layout** | Two-column: description (left) + apply sidebar (right) |
| **Left** | Job title, company, posted date, full description, requirements list, benefits list, similar jobs |
| **Right (sticky)** | Salary, Apply Now button, Save button, Job Facts (type, level, exp, vacancies, deadline), Skills tags, Company mini-card |
| **Used On** | Job Detail page |

### SkillTag
| Detail | Value |
|--------|-------|
| **Purpose** | Technology/skill pill badge |
| **Visual** | Rounded pill, muted background, small text |
| **Examples** | React, TypeScript, Node.js, Figma, Python |
| **Used On** | JobCard, JobDetail, Candidate Profile |

### JobTypeBadge
| Detail | Value |
|--------|-------|
| **Purpose** | Employment type indicator |
| **Variants** | Full-time (blue) · Part-time (purple) · Contract (orange) · Remote (green) · Internship (teal) |
| **Used On** | JobCard, JobDetail |

---

## 3. Company Components

### CompanyCard
| Detail | Value |
|--------|-------|
| **Purpose** | Company preview in directory |
| **Contents** | Logo · Name · Industry · Location · Rating (stars) · Open jobs count |
| **Actions** | View Company |
| **Hover** | Lift shadow |
| **Used On** | Home (Top Companies), Companies page |

### CompanyProfile
| Detail | Value |
|--------|-------|
| **Purpose** | Full company information display |
| **Tabs** | About · Open Jobs · Reviews · Benefits & Culture |
| **Header** | Logo, name, industry, location, employee count, rating, website |
| **Used On** | Company Profile page |

### CompanyReviewCard
| Detail | Value |
|--------|-------|
| **Purpose** | Employee/candidate review |
| **Contents** | Reviewer role · Date · Star rating · Pros · Cons · Rating metrics (Culture, Salary, Work-Life) |
| **Used On** | Company Profile (Reviews tab) |

### BenefitBadge
| Detail | Value |
|--------|-------|
| **Purpose** | Company benefit/perk indicator |
| **Contents** | Icon + label (e.g., 🏥 Health Insurance, 🏠 Remote-friendly, 📚 Learning Budget) |
| **Used On** | Company Profile (Benefits tab), JobDetail |

---

## 4. Search & Filter Components

### HeroSearch
| Detail | Value |
|--------|-------|
| **Purpose** | Homepage job search bar |
| **Contents** | Job title input · Location input · Search button |
| **Extras** | Popular searches row below |
| **Behaviour** | Navigates to Job Search with query params |
| **Used On** | Home page |

### JobFilter
| Detail | Value |
|--------|-------|
| **Purpose** | Sidebar filters for job search |
| **Filters** | Job Type (checkboxes) · Experience Level (radio) · Salary Range (min-max inputs) · Industry (select) · Date Posted (radio: 24h, 7d, 30d, All) |
| **Behaviour** | Real-time filtering; URL param sync; Clear All button |
| **Used On** | Job Search page |

### SearchBar
| Detail | Value |
|--------|-------|
| **Purpose** | Inline search input used across pages |
| **Contents** | Search icon · Input · Clear button |
| **Behaviour** | Debounced (300ms), filters results |
| **Used On** | Companies page, Job Search, Dashboard lists |

### CategoryGrid
| Detail | Value |
|--------|-------|
| **Purpose** | Browse jobs by category |
| **Contents** | Icon + category name + job count per category |
| **Layout** | 4-column grid of clickable cards |
| **Used On** | Home page |

---

## 5. Application Components

### ApplicationForm
| Detail | Value |
|--------|-------|
| **Purpose** | Job application modal/page |
| **Fields** | Full Name* · Email* · Phone* · Cover Letter (textarea) · Resume Upload (file) · Portfolio URL |
| **Validation** | Required fields, email format, file type validation |
| **Submit** | Saves to localStorage, shows success toast |
| **Used On** | Job Detail (Apply button) |

### ResumeUpload
| Detail | Value |
|--------|-------|
| **Purpose** | CV/Resume file upload simulation |
| **Contents** | Drop zone · File input · Accepted formats hint (PDF, DOC) · File preview after upload |
| **Validation** | PDF/DOC only, max 5MB |
| **Used On** | ApplicationForm, Candidate Dashboard (Resume section) |

### ApplicationCard
| Detail | Value |
|--------|-------|
| **Purpose** | Application entry in candidate dashboard |
| **Contents** | Company logo · Job title · Company name · Applied date · Status badge · Actions |
| **Statuses** | Applied (gray) · Screening (blue) · Interview (yellow) · Offer (green) · Hired (green) · Rejected (red) |
| **Used On** | Candidate Dashboard |

### ApplicationPipeline
| Detail | Value |
|--------|-------|
| **Purpose** | Visual pipeline tracker |
| **Stages** | Applied → Screening → Interview → Offer → Result |
| **Visual** | Horizontal bar with filled/unfilled circles for each stage |
| **Used On** | Candidate Dashboard |

### ProfileCompletion
| Detail | Value |
|--------|-------|
| **Purpose** | Profile completion progress bar |
| **Contents** | Percentage + progress bar + list of incomplete items |
| **Used On** | Candidate Dashboard |

---

## 6. Employer Components

### PostJobForm
| Detail | Value |
|--------|-------|
| **Purpose** | Job posting creation form |
| **Fields** | Job Title* · Department · Location* · Job Type* · Experience Level* · Salary Range (min-max) · Description* (rich textarea) · Requirements* (list) · Benefits (list) · Skills (tag input) · Deadline |
| **Preview** | Live preview panel showing how the job listing will look |
| **Submit** | Saves to localStorage, shows on Job Search |
| **Used On** | Post a Job page |

### ApplicantKanban
| Detail | Value |
|--------|-------|
| **Purpose** | Drag-and-drop applicant tracking board |
| **Columns** | New → Screening → Interview → Offer → Hired |
| **Cards** | Applicant name · Applied role · Date · Resume link |
| **Behaviour** | Drag cards between columns (native Drag API); status updates on drop |
| **Used On** | Employer Dashboard |

### ApplicantCard
| Detail | Value |
|--------|-------|
| **Purpose** | Applicant entry in kanban |
| **Contents** | Name · Email · Applied date · Role · Resume download link · Status |
| **Actions** | Move to next stage · Reject · View details |
| **Used On** | Employer Dashboard (Kanban) |

### JobPostingRow
| Detail | Value |
|--------|-------|
| **Purpose** | Posted job entry in employer dashboard |
| **Contents** | Job title · Date posted · Applications count · Status (Active/Closed) · Actions |
| **Actions** | View · Edit · Close · View Applicants |
| **Used On** | Employer Dashboard (Jobs) |

---

## 7. Salary Components

### SalaryExplorer
| Detail | Value |
|--------|-------|
| **Purpose** | Salary search/filter controls |
| **Fields** | Role (dropdown) · Location (dropdown) · Experience (dropdown) |
| **Behaviour** | Updates all salary visualizations on change |
| **Used On** | Salary Insights page |

### SalaryGauge
| Detail | Value |
|--------|-------|
| **Purpose** | Salary range visual |
| **Contents** | Min – Average – Max with horizontal gauge |
| **Visual** | Gradient bar with pointer at average |
| **Used On** | Salary Insights page |

### SalaryChart
| Detail | Value |
|--------|-------|
| **Purpose** | Salary by experience bar chart (Chart.js) |
| **Contents** | X-axis: experience levels · Y-axis: salary |
| **Used On** | Salary Insights page |

### SalaryTrendChart
| Detail | Value |
|--------|-------|
| **Purpose** | Salary trend over time (Chart.js line chart) |
| **Contents** | 12-month salary average trend line |
| **Used On** | Salary Insights page |

---

## 8. Career Resource Components

### ArticleCard
| Detail | Value |
|--------|-------|
| **Purpose** | Career resource article preview |
| **Contents** | Thumbnail · Title · Category badge · Excerpt · Read time · Date |
| **Categories** | Resume Tips · Interview Prep · Career Growth · Industry Insights |
| **Used On** | Resources page, Home (optional) |

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
| **Used On** | Application form, Close job confirm, Reject applicant |

### EmptyState
| Detail | Value |
|--------|-------|
| **Purpose** | Placeholder when no data |
| **Contents** | Illustration · Message · Action button |
| **Used On** | No search results, No applications, Empty saved jobs |

### StatusBadge
| Detail | Value |
|--------|-------|
| **Purpose** | Visual status indicator |
| **Variants** | Applied · Screening · Interview · Offer · Hired · Rejected · Active · Closed |
| **Used On** | ApplicationCard, JobPostingRow, ApplicantCard |

### StatCounter
| Detail | Value |
|--------|-------|
| **Purpose** | Animated counter stat |
| **Animation** | Count-up on scroll; 2s duration |
| **Used On** | Home (By the Numbers) |
