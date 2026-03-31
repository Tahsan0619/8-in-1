# Portfolio — Laravel Backend

## Overview
RESTful API backend for a personal portfolio website. Manages projects with tech stack filtering, skills with proficiency levels, work experience, education, testimonials, and contact messages. Supports admin content management.

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

### Projects (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/projects | List projects (filter by category/tech) |
| GET | /api/projects/{id} | Get project details |
| GET | /api/projects/featured | Featured projects |

### Skills (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/skills | List skills grouped by category |
| GET | /api/skills/{id} | Get skill detail |

### Experience & Education (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/experience | List work experience |
| GET | /api/education | List education history |

### Testimonials (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/testimonials | List testimonials |

### Contact
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/contact | Submit contact message |

### Photos (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/photos | List photos |

### Admin (Admin role required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST/PUT/DELETE | /api/admin/projects | Manage projects |
| POST/PUT/DELETE | /api/admin/skills | Manage skills |
| POST/PUT/DELETE | /api/admin/experience | Manage experience |
| POST/PUT/DELETE | /api/admin/education | Manage education |
| POST/PUT/DELETE | /api/admin/testimonials | Manage testimonials |
| GET | /api/admin/contacts | List contact messages |
| PUT | /api/admin/contacts/{id}/status | Update contact status |

## Authentication
Uses Laravel Sanctum for API token authentication. Include `Authorization: Bearer {token}` header on protected routes.
