# JobConnect BD Job Board – Node.js API Backend

A RESTful API backend for the JobConnect BD Job Board platform.

## Tech Stack
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Other**: bcryptjs, express-validator, multer, helmet, cors, morgan

## Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm

## Setup
```bash
git clone <repo-url>
cd 14-jobboard-node
npm install
cp .env.example .env
# Configure environment variables in .env
npm run dev
```

## API Endpoint Groups

| Group        | Base Path           | Description                    |
|--------------|---------------------|--------------------------------|
| Auth         | /api/auth           | Register, login, profile       |
| Jobs         | /api/jobs           | Job listings & search          |
| Companies    | /api/companies      | Company profiles               |
| Applications | /api/applications   | Job applications               |
| Candidates   | /api/candidates     | Candidate profiles             |
