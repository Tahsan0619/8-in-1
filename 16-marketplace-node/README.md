# BazarBD Multi-Vendor Marketplace – Node.js API Backend

A RESTful API backend for the BazarBD Multi-Vendor Marketplace platform.

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
cd 16-marketplace-node
npm install
cp .env.example .env
# Configure environment variables in .env
npm run dev
```

## API Endpoint Groups

| Group    | Base Path       | Description                        |
|----------|-----------------|------------------------------------|
| Auth     | /api/auth       | Register, login, profile           |
| Products | /api/products   | Product listings & search          |
| Sellers  | /api/sellers    | Seller/vendor management           |
| Orders   | /api/orders     | Order processing                   |
| Reviews  | /api/reviews    | Product reviews & ratings          |
| Cart     | /api/cart       | Shopping cart management           |
