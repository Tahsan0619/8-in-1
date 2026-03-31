# HomeScout Real Estate – Node.js API Backend

A RESTful API backend for the HomeScout Real Estate platform.

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
cd 10-realestate-node
npm install
cp .env.example .env
# Configure environment variables in .env
npm run dev
```

## API Endpoint Groups

| Group       | Base Path         | Description                    |
|-------------|-------------------|--------------------------------|
| Auth        | /api/auth         | Register, login, profile       |
| Properties  | /api/properties   | Property listings & search     |
| Agents      | /api/agents       | Real estate agent profiles     |
| Inquiries   | /api/inquiries    | Property inquiry management    |
