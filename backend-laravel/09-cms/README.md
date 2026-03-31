# SiteCraft CMS/Website Builder — Laravel Backend

## Overview
SiteCraft is a headless CMS and website builder backend. It supports multi-page management, media library, theme switching, blog/post publishing, and site-wide SEO settings through a RESTful API.

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
6. `php artisan storage:link`
7. `php artisan serve`

## API Endpoints

### Public
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/pages/{slug}` | Get published page by slug |
| GET | `/api/posts` | List published posts |
| GET | `/api/posts/{slug}` | Get post by slug |
| GET | `/api/themes` | List available themes |
| GET | `/api/settings` | Get public site settings |

### Admin (auth:sanctum + admin middleware)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET/POST | `/api/admin/pages` | List / create pages |
| GET/PUT/DELETE | `/api/admin/pages/{page}` | Show / update / delete page |
| POST | `/api/admin/pages/{page}/publish` | Publish a page |
| GET/POST | `/api/admin/posts` | List / create posts |
| GET/POST | `/api/admin/media` | List media items |
| POST | `/api/admin/media/upload` | Upload media file |
| GET/POST | `/api/admin/themes` | List / create themes |
| POST | `/api/admin/themes/{theme}/activate` | Activate a theme |
| GET/PUT | `/api/admin/settings` | Get / update settings |
| GET/PUT | `/api/admin/seo/{type}/{id}` | Get / update SEO for a resource |

## Authentication
Uses Laravel Sanctum for token-based API authentication.

## Models
- **Page** – CMS pages with slug, content, template, SEO fields
- **Post** – Blog posts with categories, tags, publish status
- **Media** – File/image library with type classification
- **Theme** – Site themes with settings JSON
- **User** – Admin users with roles
