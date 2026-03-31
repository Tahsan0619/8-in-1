# FLAVR E-Commerce API

Laravel 11 REST API backend for the FLAVR e-commerce platform.

## Tech Stack
- PHP 8.2+ / Laravel 11
- MySQL
- JWT Authentication (tymon/jwt-auth)
- Spatie Laravel Permission
- Intervention Image

## Setup
1. `cp .env.example .env`
2. Configure DB credentials in `.env`
3. `composer install`
4. `php artisan key:generate`
5. `php artisan jwt:secret`
6. `php artisan migrate --seed`
7. `php artisan serve`

## API Endpoints

### Auth
| Method | Endpoint | Auth |
|--------|----------|------|
| POST | /api/v1/auth/register | No |
| POST | /api/v1/auth/login | No |
| POST | /api/v1/auth/logout | Yes |
| GET  | /api/v1/auth/profile | Yes |
| POST | /api/v1/auth/refresh | Yes |

### Products
| Method | Endpoint | Auth |
|--------|----------|------|
| GET    | /api/v1/products | No |
| GET    | /api/v1/products/{id} | No |
| POST   | /api/v1/products | Yes |
| PUT    | /api/v1/products/{id} | Yes |
| DELETE | /api/v1/products/{id} | Yes |

### Orders (auth required)
| Method | Endpoint |
|--------|----------|
| GET    | /api/v1/orders |
| POST   | /api/v1/orders |
| GET    | /api/v1/orders/{id} |
| PUT    | /api/v1/orders/{id} |

### Reviews
| Method | Endpoint | Auth |
|--------|----------|------|
| GET  | /api/v1/reviews | No |
| POST | /api/v1/reviews | Yes |
