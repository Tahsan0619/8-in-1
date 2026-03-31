# MediCare Healthcare — Laravel Backend

## Overview
MediCare is a healthcare management platform supporting doctor discovery, appointment booking, prescription management, lab results, and patient records through a secure RESTful API.

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
| GET | `/api/doctors` | List doctors (filterable) |
| GET | `/api/doctors/{id}` | Doctor profile + schedule |
| GET | `/api/departments` | List departments |

### Authenticated (Patient)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/appointments` | Book appointment |
| GET | `/api/appointments/my` | My appointments |
| PUT | `/api/appointments/{id}/cancel` | Cancel appointment |
| GET | `/api/prescriptions/my` | My prescriptions |
| GET | `/api/lab-results/my` | My lab results |

### Authenticated (Doctor)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/doctor/appointments` | My appointment list |
| PUT | `/api/doctor/appointments/{id}/status` | Update appointment status |
| POST | `/api/doctor/prescriptions` | Create prescription |
| POST | `/api/doctor/lab-results` | Upload lab result |
| GET | `/api/doctor/slots/{date}` | Available slots for date |

### Admin
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET/POST | `/api/admin/doctors` | Manage doctors |
| GET/POST | `/api/admin/departments` | Manage departments |
| GET | `/api/admin/appointments` | All appointments |

## Authentication
Uses Laravel Sanctum for token-based API authentication.

## Models
- **Doctor** – Doctor profiles with specialization, schedule
- **Appointment** – Patient-doctor appointments with time slots
- **Prescription** – Doctor-issued prescriptions with medicines
- **Department** – Hospital departments
- **LabResult** – Diagnostic lab results
