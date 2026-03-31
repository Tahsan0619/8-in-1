# Portfolio — Node.js Backend

## Overview
RESTful API for a developer portfolio. Manages projects, skills, experience, education, testimonials, and contact messages.

## Requirements
- Node.js 18+
- MongoDB 6+

## Setup
1. `npm install`
2. `cp .env.example .env`
3. `npm run dev`

## API Endpoints
- `GET /api/projects` — List projects
- `GET /api/projects/featured` — Featured projects
- `GET /api/skills` — Skills by category
- `GET /api/experience` — Work experience
- `GET /api/education` — Education
- `POST /api/contact` — Submit contact message (admin)
