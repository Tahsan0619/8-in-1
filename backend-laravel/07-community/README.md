# CommunityHub Community Platform — Laravel Backend

## Overview
RESTful API backend for the CommunityHub community platform. Provides endpoints for community posts, job board listings with applications, event management with RSVP, forum threads with replies, user directory, and content moderation.

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

### Posts (Public/Auth)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/posts | List community posts |
| GET | /api/posts/{id} | Get post with comments |
| POST | /api/posts | Create post (auth) |
| PUT | /api/posts/{id} | Update own post (auth) |
| DELETE | /api/posts/{id} | Delete own post (auth) |
| POST | /api/posts/{id}/comments | Add comment (auth) |

### Jobs (Public/Auth)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/jobs | List jobs (filter: type/location/remote) |
| GET | /api/jobs/{id} | Get job details |
| POST | /api/jobs | Post a job (auth) |
| POST | /api/jobs/{id}/apply | Apply to job (auth) |

### Events (Public/Auth)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/events | List upcoming events |
| GET | /api/events/{id} | Get event details |
| POST | /api/events | Create event (auth) |
| POST | /api/events/{id}/rsvp | Toggle RSVP (auth) |
| GET | /api/events/{id}/attendees | List attendees |
| GET | /api/my-events | My events (auth) |

### Forum (Public/Auth)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/forum | List forum threads |
| GET | /api/forum/{id} | Get thread with replies |
| POST | /api/forum | Create thread (auth) |
| POST | /api/forum/{id}/reply | Reply to thread (auth) |

### Directory
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/directory | User directory |
| GET | /api/directory/{id} | User profile |

### Admin (Admin role required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/admin/moderation | Posts/comments flagged for moderation |
| PUT | /api/admin/posts/{id}/moderate | Moderate post |
| DELETE | /api/admin/comments/{id} | Delete comment |
| PUT | /api/admin/jobs/{id}/approve | Approve job listing |
| PUT | /api/admin/events/{id}/feature | Feature event |

## Authentication
Uses Laravel Sanctum for API token authentication. Include `Authorization: Bearer {token}` header on protected routes.
