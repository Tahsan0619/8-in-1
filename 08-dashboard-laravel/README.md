# NexGen Labs Dashboard API

Laravel 11 REST API backend for the NexGen Labs SaaS Dashboard platform.

## Tech Stack
- PHP 8.2+ / Laravel 11
- MySQL
- JWT Authentication (tymon/jwt-auth)
- Spatie Laravel Permission

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

### Analytics (auth required)
| Method | Endpoint |
|--------|----------|
| GET    | /api/v1/analytics |
| GET    | /api/v1/analytics/summary |
| POST   | /api/v1/analytics |

### CRM Contacts (auth required)
| Method | Endpoint |
|--------|----------|
| GET    | /api/v1/contacts |
| POST   | /api/v1/contacts |
| PUT    | /api/v1/contacts/{id} |

### Invoices & Pipeline (auth required)
| Method | Endpoint |
|--------|----------|
| GET    | /api/v1/invoices |
| POST   | /api/v1/invoices |
| GET    | /api/v1/pipeline |
