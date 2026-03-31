# HopeBridge Nonprofit – Node.js API Backend

A RESTful API backend for the HopeBridge Nonprofit platform.

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
cd 15-nonprofit-node
npm install
cp .env.example .env
# Configure environment variables in .env
npm run dev
```

## API Endpoint Groups

| Group      | Base Path        | Description                      |
|------------|------------------|----------------------------------|
| Auth       | /api/auth        | Register, login, profile         |
| Causes     | /api/causes      | Cause management & donations     |
| Donations  | /api/donations   | Donation records                 |
| Volunteers | /api/volunteers  | Volunteer sign-ups               |
| Events     | /api/events      | Nonprofit events                 |
