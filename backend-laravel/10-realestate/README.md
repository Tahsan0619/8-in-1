# HomeScout Real Estate — Laravel Backend

## Overview
HomeScout is a full-featured real estate listing platform. Buyers can search, filter, and save properties; agents manage listings and inquiries; and a mortgage calculator helps buyers estimate payments.

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
| GET | `/api/properties` | List active properties (filterable) |
| GET | `/api/properties/{id}` | Property detail |
| GET | `/api/properties/search` | Full-text property search |
| GET | `/api/properties/featured` | Featured listings |
| GET | `/api/neighborhoods` | Available cities/neighborhoods |
| GET | `/api/agents` | List agents |
| GET | `/api/agents/{id}` | Agent profile |
| POST | `/api/inquiries` | Submit property inquiry |
| POST | `/api/calculator/mortgage` | Mortgage calculator |

### Authenticated (Buyer)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/saved/{property}` | Save a property |
| DELETE | `/api/saved/{property}` | Remove saved property |
| GET | `/api/saved` | My saved properties |
| GET | `/api/my-inquiries` | My submitted inquiries |

### Agent
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/agent/properties` | Create listing |
| PUT | `/api/agent/properties/{id}` | Update listing |
| DELETE | `/api/agent/properties/{id}` | Delete listing |
| GET | `/api/agent/inquiries` | View inquiries |
| PUT | `/api/agent/inquiries/{id}/status` | Update inquiry status |

## Authentication
Uses Laravel Sanctum for token-based API authentication.

## Models
- **Property** – Listing details, location, pricing, media
- **Agent** – Agent profiles linked to users
- **Inquiry** – Buyer inquiries on properties
- **SavedProperty** – Pivot for buyer-saved properties
- **Review** – Property and agent reviews
