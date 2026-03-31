# HopeBridge Nonprofit/Charity — Laravel Backend

## Overview
HopeBridge is a nonprofit and charity management platform supporting cause campaigns, online donations with payment gateway integration, volunteer management, events, impact stories, and transparent reporting.

## Requirements
- PHP 8.1+
- Composer
- MySQL 8.0+
- Laravel 10+

## Setup
1. `composer install`
2. `cp .env.example .env`
3. `php artisan key:generate`
4. Configure `.env` with your database credentials and payment gateway keys
5. `php artisan migrate`
6. `php artisan serve`

## API Endpoints

### Public
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/causes` | List causes |
| GET | `/api/causes/{id}` | Cause detail with progress |
| GET | `/api/campaigns` | Active campaigns |
| GET | `/api/events` | Upcoming events |
| GET | `/api/stories` | Impact stories |
| GET | `/api/impact` | Overall impact numbers |
| GET | `/api/donations/stats` | Aggregated donation stats |

### Authenticated
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/donations` | Make a donation |
| GET | `/api/donations/my` | My donation history |
| GET | `/api/donations/{id}/receipt` | Download receipt |
| POST | `/api/volunteers` | Register as volunteer |

### Admin
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET/POST/PUT/DELETE | `/api/admin/causes` | Manage causes |
| GET/POST/PUT/DELETE | `/api/admin/campaigns` | Manage campaigns |
| GET | `/api/admin/donations` | All donations |
| GET | `/api/admin/donations/report` | Donation reports |
| GET/PUT | `/api/admin/volunteers` | Manage volunteers |

## Authentication
Uses Laravel Sanctum for token-based API authentication.

## Models
- **Cause** – Charitable causes with funding goals
- **Campaign** – Fundraising campaigns linked to causes
- **Donation** – Donor contributions with payment records
- **Volunteer** – Volunteer registrations and profiles
- **Event** – Charity events and fundraisers
