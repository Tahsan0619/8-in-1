# 14 — Job Board & Career Platform

> A full-featured job board with job posting, CV upload simulation, company profiles, applicant tracking, and career resources — inspired by **LinkedIn Jobs + Indeed + Glassdoor + BDJobs** built as a comprehensive career platform for portfolio showcase.

---

## Design Philosophy

1. **Professional & Clean** — Minimal, content-focused design that feels credible and trustworthy
2. **Search-First** — Job discovery is the primary UX, with powerful filters
3. **Dual Audience** — Great experience for both job seekers and employers
4. **Data-Rich** — Salary insights, company reviews, application analytics
5. **Mobile-Ready** — Job seekers browse on their phones

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| **Markup** | HTML5, semantic elements |
| **Styling** | CSS3 — Custom Properties, Grid, Flexbox |
| **Scripting** | Vanilla JS (ES6+) |
| **Charts** | Chart.js (analytics, salary insights) |
| **State** | localStorage for applications, saved jobs, profiles |
| **Icons** | Lucide Icons |
| **Fonts** | Google Fonts |
| **No frameworks** | Zero React / Vue / Tailwind — pure skill demo |

---

## Pages (10)

| # | Page | File | Purpose |
|---|------|------|---------|
| 1 | **Home** | `index.html` | Hero search, featured jobs, top companies, stats |
| 2 | **Job Search** | `jobs.html` | Job listings with filters, search, sort |
| 3 | **Job Detail** | `job.html` | Full job posting — description, requirements, apply |
| 4 | **Companies** | `companies.html` | Company directory with search and industry filters |
| 5 | **Company Profile** | `company.html` | Company page — about, open jobs, reviews, culture |
| 6 | **Post a Job** | `post-job.html` | Employer job posting form with preview |
| 7 | **Candidate Dashboard** | `dashboard.html` | Application tracker, saved jobs, profile, resume |
| 8 | **Employer Dashboard** | `employer.html` | Posted jobs, applicant tracking, analytics |
| 9 | **Salary Insights** | `salary.html` | Salary explorer by role, experience, location |
| 10 | **Career Resources** | `resources.html` | Resume tips, interview guides, career articles |

---

## What Makes This Different

- **Dual dashboard**: Separate candidate and employer views with full workflows
- **Application tracking** with status pipeline (Applied → Screening → Interview → Offer → Hired/Rejected)
- **CV upload simulation** with file preview and profile completion tracker
- **Company profiles** with culture info, benefits, reviews, and open positions
- **Salary insights** with Chart.js visualizations by role and experience level
- **Smart job search** with location, type, salary range, experience level filters
- **BDT salary ranges** with Bangladeshi job market context
- **Applicant tracking system** (ATS) for employer dashboard with drag-and-drop pipeline
