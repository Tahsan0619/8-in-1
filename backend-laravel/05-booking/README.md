# BookIt Booking Platform — Laravel Backend

## Overview
RESTful API backend for the BookIt booking platform. Handles service discovery, provider profiles with availability windows, booking scheduling with conflict prevention, customer reviews, and payment status tracking.

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

### Services (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/services | List services (filter by category) |
| GET | /api/services/{id} | Get service details |

### Providers (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/providers | List providers (filter by service/rating) |
| GET | /api/providers/{id} | Get provider with availability & reviews |
| GET | /api/providers/{id}/availability | Get available slots |

### Reviews (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/reviews | List reviews |
| GET | /api/reviews/{id} | Get review |

### Bookings (Auth required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/bookings | List user's bookings |
| POST | /api/bookings | Create booking |
| GET | /api/bookings/{id} | Get booking details |
| PUT | /api/bookings/{id} | Update booking |
| POST | /api/bookings/{id}/cancel | Cancel booking |

### Profile (Auth required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/profile | Get user profile |
| PUT | /api/profile | Update profile |

### Admin (Admin role required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST/PUT/DELETE | /api/admin/services | Manage services |
| POST/PUT/DELETE | /api/admin/providers | Manage providers |
| GET | /api/admin/bookings | All bookings |
| PUT | /api/admin/bookings/{id}/status | Update booking status |

## Authentication
Uses Laravel Sanctum for API token authentication. Include `Authorization: Bearer {token}` header on protected routes.
