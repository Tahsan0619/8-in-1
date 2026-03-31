# Portfolio API

Laravel 11 REST API backend for the Portfolio website.

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

### Projects
| Method | Endpoint | Auth |
|--------|----------|------|
| GET    | /api/v1/projects | No |
| GET    | /api/v1/projects/{id} | No |
| POST   | /api/v1/projects | Yes |
| PUT    | /api/v1/projects/{id} | Yes |
| DELETE | /api/v1/projects/{id} | Yes |

### Skills & Experience
| Method | Endpoint | Auth |
|--------|----------|------|
| GET  | /api/v1/skills | No |
| POST | /api/v1/skills | Yes |
| GET  | /api/v1/experience | No |
| POST | /api/v1/experience | Yes |
