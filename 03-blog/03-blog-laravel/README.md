# The Inkwell Blog API

Laravel 11 REST API backend for The Inkwell blog/magazine platform.

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

### Posts
| Method | Endpoint | Auth |
|--------|----------|------|
| GET    | /api/v1/posts | No |
| GET    | /api/v1/posts/{slug} | No |
| POST   | /api/v1/posts | Yes |
| PUT    | /api/v1/posts/{id} | Yes |
| DELETE | /api/v1/posts/{id} | Yes |

### Categories & Comments
| Method | Endpoint | Auth |
|--------|----------|------|
| GET  | /api/v1/categories | No |
| POST | /api/v1/categories | Yes |
| GET  | /api/v1/comments | No |
| POST | /api/v1/comments | Yes |
