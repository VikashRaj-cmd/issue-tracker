# StackForge — Frontend

The Angular 21 frontend for the **StackForge** Issue Tracking Platform. It features a premium, responsive UI with custom glassmorphism styling, a dark/light theme system, and comprehensive issue management capabilities.

---

## ✨ Frontend Features

- **Authentication Module**: Secure Login and Registration forms with route guards and JWT HTTP interceptors.
- **Dashboard**: Real-time statistics, charts, and recent activity overview.
- **Projects & Issues**: Full CRUD capabilities, assignment, and filtering.
- **Kanban Board**: Visual drag-and-drop workflow management for issues.
- **Labels & Users**: Management interfaces for custom issue tags and user directories.
- **Theming**: Persistent Dark and Light theme support built purely with CSS variables.
- **Shared Components**: Highly reusable UI components (spinners, dialogs, empty states).
- **Responsive Layout**: Fluid design that adapts to mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Angular 21 (with Server-Side Rendering support)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (No heavy CSS frameworks, ensuring maximum performance and customizability)
- **Architecture**: Feature-based module organization (`core`, `features`, `layout`, `shared`).

---

## 📂 Folder Structure

```txt
frontend/
├── src/
│   ├── app/
│   │   ├── core/           # Guards (auth), Interceptors (JWT), Models, Services (API)
│   │   ├── features/       # Modules: auth, dashboard, issues, projects, labels, users
│   │   ├── layout/         # Shell, Navbar, Sidebar
│   │   └── shared/         # Reusable components (spinners, dialogs, cards)
│   ├── environments/       # Environment configs (dev & prod)
│   ├── styles.css          # Global styles, theming, glassmorphism CSS
│   └── main.ts             # Application entry point
├── angular.json            # Angular CLI configuration
└── package.json            # Dependencies and scripts
```

---

## ⚙️ Installation & Development Setup

### 1. Prerequisites
Ensure you have Node.js v18+ and the Angular CLI installed:
```bash
npm install -g @angular/cli
```

### 2. Install Dependencies
```bash
cd frontend
npm install
```

### 3. Development Server
Run the local development server:
```bash
ng serve -o
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

*(Note: The frontend expects the backend API to be running on `http://localhost:5000` by default. You can adjust this in `src/environments/environment.ts` if needed).*

---

## 🚢 Production Build & Deployment

### 1. Configure Environments
Before building for production, ensure your production backend URL is properly configured in `src/environments/environment.prod.ts`:
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://your-production-backend.com/api/v1'
};
```

### 2. Build the Application
```bash
ng build --configuration production
```
The build artifacts will be stored in the `dist/` directory.

### 3. Deployment
Deploy the contents of the `dist/` directory to your preferred hosting provider, such as:
- **Vercel**
- **Netlify**
- **Firebase Hosting**

Ensure you configure your hosting provider to redirect all routing requests to `index.html` (SPA fallback routing).

---

## ✅ Implementation Status

| Module | Description | Status |
|---|---|---|
| F01 - F05 | Setup, Layout, Auth, Guards, Dashboard | ✅ Completed |
| F06 - F10 | Projects, Issues, Comments, Labels, Users | ✅ Completed |
| F11 - F15 | Activity, Analytics, Notifications, Profile, Theming | ✅ Completed |
| F16 - F20 | Search, Shared Components, Responsive, Production | ✅ Completed |

---

## 👨‍💻 Author
**Vikash Rajput** - [GitHub](https://github.com/VikashRaj-cmd)
