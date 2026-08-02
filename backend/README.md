# StackForge — Backend

The Node.js and Express.js REST API for the **StackForge** Issue Tracking Platform. This backend is designed with enterprise-grade patterns, focusing on robust security, clean architecture, and exhaustive API endpoints.

---

## ✨ Backend Features

- **Authentication & Security**: JWT-based auth, bcrypt password hashing, Express Rate Limiter, Helmet headers, and Mongo query sanitization.
- **Role-based Access Control**: Granular authorization middleware to restrict routes based on user roles (Admin vs User) and project membership.
- **RESTful API Design**: Clean, structured, and versioned routes (`/api/v1/...`).
- **Advanced Querying**: Built-in support for filtering, sorting, field limiting, and pagination across major collections.
- **Validation**: Strict input validation and sanitization using `express-validator`.
- **Centralized Error Handling**: A unified error handling pipeline catching async errors, MongoDB validation errors, and custom AppErrors.
- **Logging**: Structured JSON application logging and request tracing powered by `winston`.

---

## 🛠️ Tech Stack & Architecture

- **Runtime**: Node.js (v18+)
- **Framework**: Express.js v5
- **Database**: MongoDB Atlas + Mongoose ODM
- **Architecture**: MVC pattern (Models, Controllers, Routes, Middlewares).

---

## 📂 Folder Structure

```txt
backend/
├── config/               # Database connection and Logger configurations
├── controllers/          # Business logic and request handling
├── middleware/           # Auth (protect/restrictTo), Error handling, Validation
├── models/               # Mongoose schemas (User, Project, Issue, Label, Activity)
├── routes/               # Express routing definitions
├── utils/                # Helpers (AppError, catchAsync, Token generators)
├── validators/           # express-validator schemas
├── scripts/              # DB seeders and utility scripts
├── logs/                 # Winston output logs
├── app.js                # Express app initialization
├── server.js             # Server startup and graceful shutdown
└── .env.example          # Environment variable template
```

---

## ⚙️ Installation & Development Setup

### 1. Prerequisites
- Node.js v18+
- MongoDB instance (Local or Atlas)

### 2. Install Dependencies
```bash
cd backend
npm install
```

### 3. Environment Variables
Create a `.env` file in the root of the `backend` directory. Use `.env.example` as a template:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/stackforge
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:4200
```

### 4. Database Seeding (Optional)
To populate your database with initial labels and test data:
```bash
npm run seed
```

### 5. Start the Server
```bash
# Development (with nodemon)
npm run dev

# Production
npm start
```
The server will run at `http://localhost:5000`.

---

## 🧪 Postman Testing

A complete Postman collection is provided in the root `postman/` directory: `Issue Tracker API.postman_collection.json`.

1. Import the collection into Postman.
2. Set up an environment variable `baseUrl` to `http://localhost:5000`.
3. Register and Login a user.
4. Set the returned JWT token as a Bearer Token in your Postman collection authorization settings.
5. You can now test all protected routes (Projects, Issues, Labels, Users).

---

## ✅ API Checklist

| Resource | Endpoints | Status |
|---|---|---|
| **Auth** | `POST /register`, `POST /login`, `GET /me` | ✅ Complete |
| **Projects** | `GET /`, `POST /`, `PUT /:id`, `DELETE /:id`, `POST /members` | ✅ Complete |
| **Issues** | `GET /`, `POST /`, `PUT /:id`, `DELETE /:id`, `POST /assign` | ✅ Complete |
| **Labels** | `GET /`, `POST /`, `PUT /:id`, `DELETE /:id` | ✅ Complete |
| **Users** | `GET /`, `GET /:id` | ✅ Complete |
| **Activity** | `GET /logs` | ✅ Complete |

---

## 👨‍💻 Author
**Vikash Rajput** - [GitHub](https://github.com/VikashRaj-cmd)
