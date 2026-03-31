# BazarBD Multi-Vendor Marketplace — Laravel Backend

## Overview
BazarBD is a multi-vendor e-commerce marketplace. Buyers browse and purchase products from multiple sellers; sellers manage their shops and products; the platform handles orders, commissions, payouts, and reviews.

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
| GET | `/api/products` | List products (filterable) |
| GET | `/api/products/{id}` | Product detail |
| GET | `/api/products/search` | Search products |
| GET | `/api/products/featured` | Featured products |
| GET | `/api/categories` | Category tree |
| GET | `/api/sellers` | List sellers |
| GET | `/api/sellers/{id}` | Seller shop |

### Authenticated (Buyer)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET/POST/PUT/DELETE | `/api/cart` | Cart management |
| POST | `/api/orders` | Place order |
| GET | `/api/orders/my` | My orders |
| GET | `/api/orders/{id}` | Order detail |
| POST | `/api/reviews` | Post review |

### Authenticated (Seller)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET/POST/PUT/DELETE | `/api/seller/products` | Manage products |
| GET | `/api/seller/orders` | Seller orders |
| GET | `/api/seller/stats` | Shop statistics |
| POST | `/api/seller/withdraw` | Request payout |
| PUT | `/api/seller/profile` | Update shop profile |

### Admin
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/sellers` | All sellers |
| PUT | `/api/admin/sellers/{id}/verify` | Verify seller |
| GET | `/api/admin/orders` | All orders |
| GET | `/api/admin/payouts` | Payout requests |
| PUT | `/api/admin/payouts/{id}/process` | Process payout |

## Authentication
Uses Laravel Sanctum for token-based API authentication.

## Models
- **Product** – Marketplace products with variants
- **Seller** – Seller shops with commission and balance
- **Order** – Customer orders across multiple sellers
- **OrderItem** – Individual items in an order
- **Cart** – Buyer shopping cart
