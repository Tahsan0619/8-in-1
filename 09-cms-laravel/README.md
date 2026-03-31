# SiteCraft CMS/Website Builder — Laravel API Backend

A headless CMS & website builder REST API built with Laravel 11, JWT Auth, and Spatie Permissions.

## Tech Stack
- **Framework**: Laravel 11
- **Database**: MySQL 8
- **Auth**: tymon/jwt-auth ^2.1
- **Permissions**: spatie/laravel-permission ^6.0
- **Image**: intervention/image ^3.0

## Prerequisites
- PHP ^8.2 & Composer
- MySQL 8
- (Optional) Redis for cache/queue

## Setup
```bash
git clone <repo-url> && cd 09-cms-laravel
composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
# configure DB in .env then:
php artisan migrate --seed
php artisan serve
```

## API Endpoint Groups

| Group      | Prefix            | Description                  |
|------------|-------------------|------------------------------|
| Auth       | /api/auth         | Register, Login, Profile     |
| Pages      | /api/pages        | CRUD + publish/draft         |
| Posts      | /api/posts        | Blog post management         |
| Media      | /api/media        | File upload & management     |
| Settings   | /api/settings     | Site-wide configuration      |
