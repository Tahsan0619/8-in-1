# SiteCraft CMS – Node.js API Backend

A RESTful API backend for the SiteCraft CMS / Website Builder platform.

## Tech Stack
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Other**: bcryptjs, express-validator, multer, helmet, cors, morgan

## Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm

## Setup
```bash
git clone <repo-url>
cd 09-cms-node
npm install
cp .env.example .env
# Configure environment variables in .env
npm run dev
```

## API Endpoint Groups

| Group       | Base Path      | Description              |
|-------------|----------------|--------------------------|
| Auth        | /api/auth      | Register, login, profile |
| Pages       | /api/pages     | CMS page management      |
| Posts       | /api/posts     | Blog/news posts          |
| Media       | /api/media     | Media/file uploads       |
| Settings    | /api/settings  | Site settings            |
