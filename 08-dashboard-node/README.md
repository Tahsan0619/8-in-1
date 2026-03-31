# NexGen Labs SaaS Dashboard – Node.js API Backend

A RESTful API backend for the NexGen Labs SaaS Dashboard, built with Node.js, Express, MongoDB, and JWT authentication.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Helmet, CORS, bcryptjs

## Prerequisites

- Node.js >= 18.x
- MongoDB (local or Atlas)
- npm or yarn

## Setup

1. Clone the repository and navigate to this folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the environment file:
   ```bash
   cp .env.example .env
   ```
4. Configure your environment variables in `.env`
5. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoint Groups

| Group     | Base Path        | Description                              |
|-----------|------------------|------------------------------------------|
| Auth      | /api/auth        | Register, login, profile, logout         |
| Analytics | /api/analytics   | Analytics CRUD + summary + dashboard     |
| Contacts  | /api/contacts    | CRM contacts                             |
| Invoices  | /api/invoices    | Invoice management                       |
