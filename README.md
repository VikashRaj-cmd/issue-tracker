# StackForge — Full-Stack Issue Tracking Platform

A comprehensive, production-ready **Issue & Bug Tracking System** built with the **MEAN stack** (MongoDB, Express.js, Angular, Node.js) — heavily inspired by systems like GitHub Issues, Jira, and Linear.

---

## 🚀 Project Overview

StackForge is designed to help software development teams track bugs, manage projects, and collaborate seamlessly. It features a robust backend API and a highly responsive, glassmorphic Angular frontend. 

The platform supports Kanban boards, label management, role-based access control, and detailed activity tracking, making it an ideal open-source solution for project management.

---

## ✨ Features

- **Authentication & Authorization**: Secure JWT-based login, registration, and route protection.
- **Project Management**: Create, update, and manage projects with member assignment.
- **Issue Tracking & Kanban Board**: Track bugs, assign priorities, manage statuses, and visualize workflows via Kanban.
- **Labels System**: Fully customizable colored labels for issues.
- **Activity & Timeline**: Comprehensive history tracking for all issue changes.
- **Responsive UI & Theming**: Premium dark/light themes with glassmorphism effects, responsive for mobile and desktop.
- **Dashboard Analytics**: Real-time statistics, recent activity, and charts.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Angular 21 (with SSR support)
- **Styling**: Vanilla CSS (Custom Glassmorphism, CSS Variables, Flexbox/Grid)
- **Routing**: Angular Router with Auth Guards
- **HTTP**: RxJS & Angular HttpClient with Interceptors

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js v5
- **Database**: MongoDB Atlas + Mongoose
- **Security**: Helmet, express-rate-limit, express-mongo-sanitize, bcryptjs
- **Logging**: Winston

---

## 📂 Folder Structure

```txt
stackforge/
├── backend/                  # Node.js + Express REST API
│   ├── config/               # App config, DB connection, logger
│   ├── controllers/          # Route handler logic
│   ├── middleware/           # Auth, error, logging, validation middleware
│   ├── models/               # Mongoose schemas
│   ├── routes/               # Express route definitions
│   └── ...
├── frontend/                 # Angular SPA
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/         # Guards, interceptors, models, services
│   │   │   ├── features/     # Auth, dashboard, issues, projects, labels, users
│   │   │   ├── layout/       # Shell layout components
│   │   │   └── shared/       # Reusable components
│   └── ...
├── screenshots/              # Application UI previews
├── postman/                  # Postman collection for API testing
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js v18+
- Angular CLI (`npm install -g @angular/cli`)
- MongoDB Atlas account or local MongoDB server

### 1. Backend Setup
Navigate to the backend directory, install dependencies, and configure your environment variables:
```bash
cd backend
npm install
```
Create a `.env` file in the `backend/` folder (use `.env.example` as a reference):
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
Run the backend server:
```bash
npm run dev
```

### 2. Frontend Setup
Navigate to the frontend directory, install dependencies, and run the development server:
```bash
cd frontend
npm install
ng serve -o
```
The frontend will open at `http://localhost:4200`.

---

## 🚢 Build & Deployment

### Backend Deployment
The backend can be deployed to platforms like Render, Railway, or Heroku. Ensure you set the environment variables in your hosting provider's dashboard.
```bash
# Production command
npm start
```

### Frontend Deployment
Update `frontend/src/environments/environment.prod.ts` with your deployed backend URL.
```bash
ng build --configuration production
```
Deploy the generated `dist/` folder to Vercel, Netlify, or Firebase Hosting.

---

## 🧪 Testing Instructions

1. **Backend Testing**: Use the provided Postman collection (`postman/Issue Tracker API.postman_collection.json`). Import it into Postman to test all endpoints.
2. **Frontend Testing**: Ensure the backend is running. Open the app, register a new user, create a project, and add issues to verify the full flow.

---

## 📸 Screenshots
*(Add your screenshots here by uploading them to the `screenshots/` directory and linking them below)*
- ![Dashboard](screenshots/.keep)
- ![Kanban Board](screenshots/.keep)

---

## 🔮 Future Enhancements
- **Real-time Updates**: Implement Socket.io for live updates on Kanban boards.
- **File Attachments**: Allow users to upload screenshots and logs directly to issues.
- **Threaded Comments**: Enable rich-text threaded discussions on issues.
- **Email Notifications**: Send updates via Nodemailer for issue assignments.

---

## 👥 Contributors
- **Vikash Rajput** - [GitHub Profile](https://github.com/VikashRaj-cmd)

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
