# LearnHub Education/LMS — Laravel Backend

## Overview
RESTful API backend for the LearnHub learning management system. Supports course catalog with instructor profiles, lesson streaming with enrollment gating, quiz attempts with scoring, progress tracking, and certificate generation upon course completion.

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

### Courses (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/courses | List published courses (filter by category/level/price) |
| GET | /api/courses/{id} | Get course with lesson list (no content) |
| GET | /api/courses/featured | Featured courses |
| GET | /api/courses/search | Search courses |
| GET | /api/instructors | List instructors |
| GET | /api/instructors/{id} | Get instructor profile |

### Enrollments (Auth required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/enrollments | Enroll in a course |
| GET | /api/enrollments | Get user's enrolled courses |
| GET | /api/enrollments/{id} | Get enrollment with progress |
| POST | /api/enrollments/{id}/complete-lesson | Mark lesson as complete |

### Lessons (Auth required — enrollment check)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/lessons/{id} | Get lesson content (requires enrollment) |

### Quizzes (Auth required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/quizzes/{id} | Get quiz questions |
| POST | /api/quizzes/{id}/attempt | Submit quiz attempt |
| GET | /api/quiz-attempts | Get user's quiz history |

### Certificates (Auth required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/certificates | List user's certificates |
| GET | /api/certificates/{id} | Get certificate details |

### Admin (Admin role required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST/PUT/DELETE | /api/admin/courses | Manage courses |
| POST/PUT/DELETE | /api/admin/lessons | Manage lessons |
| POST/PUT/DELETE | /api/admin/quizzes | Manage quizzes |
| GET | /api/admin/enrollments | All enrollments |

## Authentication
Uses Laravel Sanctum for API token authentication. Include `Authorization: Bearer {token}` header on protected routes.
