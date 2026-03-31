# The Inkwell Blog/Magazine — Laravel Backend

## Overview
RESTful API backend for The Inkwell blog and magazine platform. Supports multi-author publishing, post categorization and tagging, nested comments with moderation, post reactions, newsletter subscriptions, and trending/featured content feeds.

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

### Posts (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/posts | List published posts |
| GET | /api/posts/{id} | Get post (increments views) |
| GET | /api/posts/featured | Featured posts |
| GET | /api/posts/trending | Trending posts by views |
| GET | /api/posts/search | Search posts |

### Taxonomy (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/categories | List categories |
| GET | /api/categories/{id} | Get category |
| GET | /api/tags | List tags |
| GET | /api/tags/{id} | Get tag |
| GET | /api/authors | List authors |
| GET | /api/authors/{id} | Get author profile |

### Comments
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/posts/{post}/comments | List approved comments |
| POST | /api/posts/{post}/comments | Post a comment (auth) |
| DELETE | /api/comments/{id} | Delete own comment (auth) |

### Reactions
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/posts/{post}/reactions | Toggle reaction on post |

### Newsletter
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/newsletter/subscribe | Subscribe to newsletter |

### Admin (Admin role required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST/PUT/DELETE | /api/admin/posts | Manage posts |
| POST/PUT/DELETE | /api/admin/categories | Manage categories |
| POST/PUT/DELETE | /api/admin/tags | Manage tags |
| POST/PUT/DELETE | /api/admin/authors | Manage authors |
| PUT | /api/admin/comments/{id}/approve | Approve comment |

## Authentication
Uses Laravel Sanctum for API token authentication. Include `Authorization: Bearer {token}` header on protected routes.
