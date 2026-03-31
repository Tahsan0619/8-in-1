# FLAVR E-Commerce — Laravel Backend

## Overview
RESTful API backend for the FLAVR e-commerce platform. Provides endpoints for product browsing, cart management, order processing, wishlists, reviews, and coupon redemption with role-based access for customers and admins.

## Requirements
- PHP 8.1+
- Composer
- MySQL 8.0+
- Laravel 10+

## Setup
1. `composer install`
2. `cp .env.example .env`
3. `php artisan key:generate`
4. Configure your `.env` file
5. `php artisan migrate`
6. `php artisan db:seed` (optional)
7. `php artisan serve`

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login and get token |
| POST | /api/auth/logout | Logout (invalidate token) |
| GET  | /api/auth/me | Get authenticated user |

### Products (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | List products (filterable) |
| GET | /api/products/{id} | Get product details |
| GET | /api/products/search | Search products |
| GET | /api/products/featured | Get featured products |

### Categories (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/categories | List all categories |
| GET | /api/categories/{id} | Get category details |

### Cart (Auth required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/cart | Get cart items |
| POST | /api/cart | Add item to cart |
| PUT | /api/cart/{id} | Update cart item quantity |
| DELETE | /api/cart/{id} | Remove cart item |
| POST | /api/cart/apply-coupon | Apply coupon code |

### Orders (Auth required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/orders | List user orders |
| POST | /api/orders | Place new order |
| GET | /api/orders/{id} | Get order details |
| POST | /api/orders/{id}/cancel | Cancel an order |

### Wishlist (Auth required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/wishlist | Get wishlist |
| POST | /api/wishlist | Add to wishlist |
| DELETE | /api/wishlist/{id} | Remove from wishlist |

### Reviews (Auth required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/reviews | List reviews |
| POST | /api/reviews | Post a review |
| PUT | /api/reviews/{id} | Update review |
| DELETE | /api/reviews/{id} | Delete review |

### Admin (Admin role required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/admin/products | Create product |
| PUT | /api/admin/products/{id} | Update product |
| DELETE | /api/admin/products/{id} | Delete product |
| GET | /api/admin/orders | List all orders |
| PUT | /api/admin/orders/{id}/status | Update order status |
| GET/POST/PUT/DELETE | /api/admin/coupons | Manage coupons |

## Authentication
Uses Laravel Sanctum for API token authentication. Include `Authorization: Bearer {token}` header on protected routes.
