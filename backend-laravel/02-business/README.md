# NexGen Business/Agency — Laravel Backend

## Overview
RESTful API backend for the NexGen business/agency website. Handles contact form submissions, service listings, portfolio showcasing, team profiles, blog publishing, testimonials, and newsletter subscriptions with admin management.

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

### Public
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/contact | Submit contact form |
| GET | /api/services | List active services |
| GET | /api/services/{id} | Get service details |
| GET | /api/portfolio | List portfolio items |
| GET | /api/portfolio/{id} | Get portfolio item |
| GET | /api/testimonials | List testimonials |
| GET | /api/blog | List published posts |
| GET | /api/blog/{id} | Get blog post |
| GET | /api/blog/category/{slug} | Posts by category |
| GET | /api/team | List team members |
| GET | /api/team/{id} | Get team member |
| POST | /api/newsletter/subscribe | Subscribe to newsletter |
| POST | /api/newsletter/unsubscribe | Unsubscribe |

### Admin (Admin role required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/admin/contacts | List all contact submissions |
| PUT | /api/admin/contacts/{id}/status | Update contact status |
| POST/PUT/DELETE | /api/admin/services | Manage services |
| POST/PUT/DELETE | /api/admin/portfolio | Manage portfolio |
| POST/PUT/DELETE | /api/admin/testimonials | Manage testimonials |
| POST/PUT/DELETE | /api/admin/blog | Manage blog posts |
| POST/PUT/DELETE | /api/admin/team | Manage team members |

## Authentication
Uses Laravel Sanctum for API token authentication. Include `Authorization: Bearer {token}` header on protected routes.
