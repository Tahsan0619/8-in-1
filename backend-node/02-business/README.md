# NexGen Business — Node.js Backend

## Overview
RESTful API backend for the NexGen Business/Agency platform. Handles services, blog posts, portfolio items, testimonials, contact forms, and newsletter subscriptions.

## Requirements
- Node.js 18+
- MongoDB 6+

## Setup
1. `npm install`
2. `cp .env.example .env`
3. `npm run dev`

## API Endpoints
- `POST /api/auth/login` — Admin login
- `GET /api/services` — List services
- `POST /api/contact` — Submit contact form
- `GET /api/blog` — List blog posts
- `GET /api/portfolio` — List portfolio items
- `POST /api/newsletter/subscribe` — Subscribe
