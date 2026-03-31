# JobConnect Job Board — Laravel Backend

## Overview
JobConnect is a multi-role job board platform. Employers post jobs and manage applications; candidates search listings, apply with resumes, and track application statuses.

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
| GET | `/api/jobs` | List active jobs (filterable) |
| GET | `/api/jobs/{id}` | Job detail |
| GET | `/api/jobs/search` | Full-text job search |
| GET | `/api/jobs/featured` | Featured jobs |
| GET | `/api/companies` | List companies |
| GET | `/api/companies/{id}` | Company profile |

### Authenticated (Candidate)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/jobs/{id}/apply` | Apply to a job |
| GET | `/api/applications/my` | My applications |
| DELETE | `/api/applications/{id}` | Withdraw application |
| GET/PUT | `/api/candidate/profile` | Candidate profile |

### Authenticated (Employer)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET/POST/PUT/DELETE | `/api/employer/jobs` | Manage job postings |
| GET | `/api/employer/jobs/{id}/applications` | Applications for a job |
| PUT | `/api/employer/applications/{id}/status` | Update application status |
| GET/PUT | `/api/employer/company` | Company profile |

## Authentication
Uses Laravel Sanctum for token-based API authentication.

## Models
- **Job** – Job listings with requirements and salary
- **Company** – Employer company profiles
- **Application** – Candidate job applications
- **Candidate** – Candidate profiles with resume
