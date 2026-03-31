# NexGen Business API

Laravel 11 REST API backend for the NexGen Business/Agency platform.

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

### Services
| Method | Endpoint | Auth |
|--------|----------|------|
| GET    | /api/v1/services | No |
| GET    | /api/v1/services/{id} | No |
| POST   | /api/v1/services | Yes |
| PUT    | /api/v1/services/{id} | Yes |
| DELETE | /api/v1/services/{id} | Yes |

### Projects (Portfolio)
| Method | Endpoint | Auth |
|--------|----------|------|
| GET  | /api/v1/projects | No |
| POST | /api/v1/projects | Yes |

### Inquiries
| Method | Endpoint | Auth |
|--------|----------|------|
| POST | /api/v1/inquiries | No |
| GET  | /api/v1/inquiries | Yes |
