# FitZone Fitness & Gym – Node.js API Backend

A RESTful API backend for the FitZone Fitness & Gym platform.

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
cd 13-fitness-node
npm install
cp .env.example .env
# Configure environment variables in .env
npm run dev
```

## API Endpoint Groups

| Group       | Base Path          | Description                    |
|-------------|--------------------|--------------------------------|
| Auth        | /api/auth          | Register, login, profile       |
| Classes     | /api/classes       | Fitness class management       |
| Memberships | /api/memberships   | Gym membership plans           |
| Trainers    | /api/trainers      | Trainer profiles               |
| Workouts    | /api/workouts      | Workout plans & tracking       |
