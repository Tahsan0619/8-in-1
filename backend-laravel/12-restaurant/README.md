# Khadok Kitchen Restaurant — Laravel Backend

## Overview
Khadok Kitchen is a restaurant management backend supporting online ordering (dine-in, takeaway, delivery), table reservations, menu management with categories, coupon discounts, and customer reviews.

## Requirements
- PHP 8.1+
- Composer
- MySQL 8.0+
- Laravel 10+

## Setup
1. `composer install`
2. `cp .env.example .env`
3. `php artisan key:generate`
4. Configure `.env` with your database credentials
5. `php artisan migrate`
6. `php artisan serve`

## API Endpoints

### Public
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/menu` | List menu items (filterable by category) |
| GET | `/api/menu/{id}` | Menu item detail |
| GET | `/api/categories` | List categories |
| GET | `/api/menu/featured` | Featured items |
| GET | `/api/reviews` | Public reviews |

### Authenticated (Customer)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Place an order |
| GET | `/api/orders/my` | My orders |
| GET | `/api/orders/{id}` | Order detail + tracking |
| PUT | `/api/orders/{id}/cancel` | Cancel order |
| POST | `/api/reservations` | Book a table |
| GET | `/api/reservations/my` | My reservations |
| PUT | `/api/reservations/{id}/cancel` | Cancel reservation |

### Admin
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET/POST/PUT/DELETE | `/api/admin/menu` | Manage menu items |
| GET/POST/PUT/DELETE | `/api/admin/categories` | Manage categories |
| GET | `/api/admin/orders` | All orders with filters |
| PUT | `/api/admin/orders/{id}/status` | Update order status |
| GET/POST/PUT | `/api/admin/tables` | Manage tables |
| GET | `/api/admin/reservations` | All reservations |

## Authentication
Uses Laravel Sanctum for token-based API authentication.

## Models
- **MenuItem** – Food and beverage items with dietary info
- **Category** – Menu categories
- **Order** – Customer orders with items and payment
- **Reservation** – Table reservations
- **Coupon** – Discount coupons
