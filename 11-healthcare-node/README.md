# MediCare Healthcare – Node.js API Backend

A RESTful API backend for the MediCare Healthcare platform.

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
cd 11-healthcare-node
npm install
cp .env.example .env
# Configure environment variables in .env
npm run dev
```

## API Endpoint Groups

| Group         | Base Path           | Description                      |
|---------------|---------------------|----------------------------------|
| Auth          | /api/auth           | Register, login, profile         |
| Doctors       | /api/doctors        | Doctor profiles & availability   |
| Appointments  | /api/appointments   | Appointment booking              |
| Prescriptions | /api/prescriptions  | Prescription management          |
| Patients      | /api/patients       | Patient records                  |
