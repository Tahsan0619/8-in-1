# LearnHub Education API

Laravel 11 REST API backend for the LearnHub LMS (Learning Management System).

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

### Courses
| Method | Endpoint | Auth |
|--------|----------|------|
| GET    | /api/v1/courses | No |
| GET    | /api/v1/courses/{id} | No |
| POST   | /api/v1/courses | Yes |
| PUT    | /api/v1/courses/{id} | Yes |
| DELETE | /api/v1/courses/{id} | Yes |

### Enrollments, Lessons & Quizzes (auth required)
| Method | Endpoint |
|--------|----------|
| POST   | /api/v1/enrollments |
| GET    | /api/v1/enrollments |
| GET    | /api/v1/courses/{id}/lessons |
| GET    | /api/v1/courses/{id}/quizzes |
