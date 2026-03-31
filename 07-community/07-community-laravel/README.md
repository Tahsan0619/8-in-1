# CommunityHub API

Laravel 11 REST API backend for the CommunityHub platform (forum, jobs, events).

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

### Forum Posts
| Method | Endpoint | Auth |
|--------|----------|------|
| GET    | /api/v1/forum-posts | No |
| GET    | /api/v1/forum-posts/{id} | No |
| POST   | /api/v1/forum-posts | Yes |
| PUT    | /api/v1/forum-posts/{id} | Yes |
| POST   | /api/v1/forum-posts/{id}/vote | Yes |

### Jobs & Events
| Method | Endpoint | Auth |
|--------|----------|------|
| GET  | /api/v1/jobs | No |
| GET  | /api/v1/events | No |
| POST | /api/v1/events/{id}/rsvp | Yes |

### Directory
| Method | Endpoint | Auth |
|--------|----------|------|
| GET  | /api/v1/directory | No |
