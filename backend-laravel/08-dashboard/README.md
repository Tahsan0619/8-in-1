# NexGen Labs SaaS Dashboard — Laravel Backend

## Overview
RESTful API backend for the NexGen Labs SaaS dashboard. Provides analytics and KPI reporting, CRM contacts with pipeline management, task assignment and tracking, invoice generation and payment, team management, and notification delivery.

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

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register account |
| POST | /api/auth/login | Login |
| POST | /api/auth/logout | Logout (auth) |
| GET  | /api/auth/me | Current user (auth) |

### Analytics (Auth required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/analytics/summary | KPI summary stats |
| GET | /api/analytics/revenue-chart | Monthly revenue (12 months) |
| GET | /api/analytics/top-customers | Top customers by revenue |
| GET | /api/analytics/recent-activity | Recent activity feed |

### Contacts (Auth required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/contacts | List contacts (filter by status/source) |
| POST | /api/contacts | Create contact |
| GET | /api/contacts/{id} | Get contact with tasks & invoices |
| PUT | /api/contacts/{id} | Update contact |
| DELETE | /api/contacts/{id} | Delete contact |

### Tasks (Auth required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | List tasks (filter by status/priority) |
| POST | /api/tasks | Create task |
| GET | /api/tasks/{id} | Get task |
| PUT | /api/tasks/{id} | Update task |
| DELETE | /api/tasks/{id} | Delete task |
| POST | /api/tasks/{id}/complete | Mark complete |

### Invoices (Auth required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/invoices | List invoices |
| POST | /api/invoices | Create invoice |
| GET | /api/invoices/{id} | Get invoice |
| PUT | /api/invoices/{id} | Update invoice |
| DELETE | /api/invoices/{id} | Delete invoice |
| POST | /api/invoices/{id}/send | Send invoice to client |
| POST | /api/invoices/{id}/mark-paid | Mark invoice as paid |
| GET | /api/invoices/stats | Invoice totals by status |

### Team (Auth required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/team | List team members |
| POST | /api/team | Invite team member |
| PUT | /api/team/{id} | Update team member |
| DELETE | /api/team/{id} | Remove team member |

### Notifications & Settings (Auth required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/notifications | List notifications |
| POST | /api/notifications/{id}/read | Mark as read |
| GET | /api/settings | Get account settings |
| PUT | /api/settings | Update settings |

## Authentication
Uses Laravel Sanctum for API token authentication. Include `Authorization: Bearer {token}` header on protected routes.
