# Khadok Kitchen Restaurant — Laravel API Backend

A restaurant management REST API built with Laravel 11, JWT Auth, and Spatie Permissions.

## Tech Stack
- **Framework**: Laravel 11
- **Database**: MySQL 8
- **Auth**: tymon/jwt-auth ^2.1
- **Permissions**: spatie/laravel-permission ^6.0
- **Image**: intervention/image ^3.0

## Prerequisites
- PHP ^8.2 & Composer
- MySQL 8

## Setup
```bash
git clone <repo-url> && cd 12-restaurant-laravel
composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
php artisan migrate --seed
php artisan serve
```

## API Endpoint Groups

| Group        | Prefix              | Description                       |
|--------------|---------------------|-----------------------------------|
| Auth         | /api/auth           | Register, Login, Profile          |
| Menu         | /api/menu           | Menu items CRUD & category filter |
| Orders       | /api/orders         | Place & manage orders             |
| Reservations | /api/reservations   | Table reservations                |
| Reviews      | /api/reviews        | Customer reviews & ratings        |
