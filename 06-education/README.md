# Education / LMS Demo

A comprehensive learning management system blending the course discovery of **Udemy**, the focused learning experience of **Coursera**, the clean UI of **Skillshare**, and the engagement mechanics of **Duolingo** — with built-in quiz engine and school mode.

## Tech Approach
- HTML5 / CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (ES6+ modules)
- LocalStorage for enrollment, progress, quiz state
- Custom video player controls
- Chart.js for instructor analytics
- No frameworks

## Design Philosophy
- **Progress-driven** — progress bars, completion checks, streaks everywhere
- **Focus-first** — learning player minimizes distractions
- **Gamified subtly** — certificates, scores, completion badges (not obnoxious)
- **Accessible** — WCAG-friendly contrast, keyboard nav, clear hierarchy
- **Dual-sided** — student AND instructor experiences

## Pages
| Page | Route |
|---|---|
| Home | `/` |
| Course Listing | `/courses` |
| Course Detail | `/courses/:slug` |
| Learning Player | `/learn/:slug/:lesson` |
| Student Dashboard | `/dashboard` |
| Instructor Dashboard | `/instructor` |
| Create Course | `/instructor/create` |
| Quiz | `/learn/:slug/quiz/:id` |
| Certificate | `/certificate/:id` |
| School Timetable | `/school` |

## Key Differentiators
- Custom video player with lesson progress tracking
- Curriculum accordion with lock/unlock states
- Quiz engine with timer, scoring, review
- Certificate generator (HTML/CSS certificate)
- School mode with timetable + assignments
- Instructor course creation multi-step form
