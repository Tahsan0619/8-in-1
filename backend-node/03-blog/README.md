# The Inkwell — Node.js Backend

## Overview
RESTful API for The Inkwell Blog/Magazine platform. Handles posts, comments, categories, tags, and newsletters.

## Requirements
- Node.js 18+
- MongoDB 6+

## Setup
1. `npm install`
2. `cp .env.example .env`
3. `npm run dev`

## API Endpoints
- `GET /api/posts` — List published posts
- `GET /api/posts/featured` — Featured posts
- `GET /api/posts/trending` — Trending posts
- `GET /api/posts/:slug` — Get post
- `POST /api/comments` — Add comment (auth)
- `GET /api/categories` — List categories
- `POST /api/newsletter/subscribe` — Subscribe
