# Khadok Kitchen Restaurant – Node.js API Backend

A RESTful API backend for the Khadok Kitchen Restaurant platform.

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
cd 12-restaurant-node
npm install
cp .env.example .env
# Configure environment variables in .env
npm run dev
```

## API Endpoint Groups

| Group        | Base Path          | Description                   |
|--------------|--------------------|-------------------------------|
| Auth         | /api/auth          | Register, login, profile      |
| Menu         | /api/menu          | Menu items management         |
| Orders       | /api/orders        | Order processing              |
| Reservations | /api/reservations  | Table reservation booking     |
| Reviews      | /api/reviews       | Customer reviews              |
