# FLAVR E-Commerce — Node.js Backend

## Overview
RESTful API backend for the FLAVR E-Commerce platform. Handles products, categories, cart management, orders, reviews, and user authentication.

## Requirements
- Node.js 18+
- npm or yarn
- MongoDB 6+

## Setup
1. `npm install`
2. `cp .env.example .env`
3. Configure your `.env` file
4. `npm run dev`

## API Endpoints

### Auth
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login
- `GET /api/auth/me` — Get current user (auth)
- `PUT /api/auth/profile` — Update profile (auth)

### Products
- `GET /api/products` — List products (filter, paginate)
- `GET /api/products/featured` — Featured products
- `GET /api/products/search?q=` — Search products
- `GET /api/products/:id` — Get product
- `POST /api/products` — Create product (admin)
- `PUT /api/products/:id` — Update product (admin)
- `DELETE /api/products/:id` — Delete product (admin)

### Categories
- `GET /api/categories` — List categories
- `POST /api/categories` — Create category (admin)
- `PUT /api/categories/:id` — Update category (admin)

### Cart
- `GET /api/cart` — Get cart (auth)
- `POST /api/cart/add` — Add to cart (auth)
- `PATCH /api/cart/item/:productId` — Update quantity (auth)
- `DELETE /api/cart/item/:productId` — Remove item (auth)

### Orders
- `POST /api/orders` — Place order (auth)
- `GET /api/orders/my` — My orders (auth)
- `GET /api/orders/:id` — Get order (auth)
- `PATCH /api/orders/:id/cancel` — Cancel order (auth)
- `GET /api/orders` — All orders (admin)
- `PATCH /api/orders/:id/status` — Update status (admin)

### Reviews
- `GET /api/reviews/product/:productId` — Product reviews
- `POST /api/reviews` — Add review (auth)
- `DELETE /api/reviews/:id` — Delete review (auth)

## Authentication
JWT-based authentication. Include `Authorization: Bearer <token>` header.
