# FitZone Fitness/Gym — Laravel Backend

## Overview
FitZone is a gym and fitness management backend supporting class scheduling, trainer profiles, membership plans, class bookings, personalized workout plans, and progress tracking.

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
| GET | `/api/classes` | List fitness classes (filterable) |
| GET | `/api/classes/{id}` | Class detail |
| GET | `/api/trainers` | List trainers |
| GET | `/api/trainers/{id}` | Trainer profile |
| GET | `/api/memberships` | Membership plans |

### Authenticated (Member)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/classes/{id}/book` | Book a class |
| DELETE | `/api/bookings/{id}` | Cancel booking |
| GET | `/api/bookings/my` | My class bookings |
| POST | `/api/memberships/subscribe` | Purchase membership |
| GET | `/api/memberships/my` | My membership |
| GET | `/api/workouts/my` | My workout plans |
| POST | `/api/workouts` | Create workout plan |
| POST | `/api/progress` | Log progress entry |
| GET | `/api/progress/my` | My progress history |

### Admin
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET/POST/PUT/DELETE | `/api/admin/classes` | Manage classes |
| GET/POST/PUT/DELETE | `/api/admin/trainers` | Manage trainers |
| GET/POST/PUT/DELETE | `/api/admin/memberships` | Manage membership plans |
| GET | `/api/admin/bookings` | All class bookings |

## Authentication
Uses Laravel Sanctum for token-based API authentication.

## Models
- **FitnessClass** – Scheduled gym/fitness classes
- **Trainer** – Trainer profiles with specializations
- **Membership** – Membership plan definitions
- **UserMembership** – Active member subscriptions
- **WorkoutPlan** – Personalized workout programs
