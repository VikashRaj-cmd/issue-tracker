# StackForge: Campus Placement & Interview Master Guide

This document is specifically designed to help you prepare for software engineering interviews by breaking down your project, **StackForge** (a MEAN Stack Issue Tracking Platform), into technical talking points, architectural decisions, and potential interview Q&As.

---

## 1. The "Elevator Pitch" (Describe your project in 30 seconds)
> *"For my major project, I built **StackForge**, a full-stack, enterprise-grade issue tracking and project management platform inspired by Jira and GitHub. I built it from scratch using the **MEAN stack** (MongoDB, Express, Angular, Node.js). It features a real-time Kanban board, robust role-based authentication using JWTs, advanced API filtering, and a fully responsive glassmorphism UI. The core focus was on writing clean, scalable MVC architecture on the backend and modular, component-driven design on the frontend."*

---

## 2. Tech Stack & "Why did you choose it?"
Interviewers love asking **why** you picked a specific technology. Here is how you answer:

- **MongoDB & Mongoose**: *"I chose a NoSQL database because issue trackers often have flexible, evolving schemas (like custom fields for issues or dynamic labels). MongoDB allows for fast, document-based storage, and Mongoose provides strict schema validation at the application level."*
- **Express.js & Node.js**: *"Node.js is asynchronous and event-driven, which makes it perfect for a highly interactive app where multiple API calls are happening simultaneously (like updating Kanban cards). Express provided a minimal, unopinionated routing framework that allowed me to structure my MVC architecture cleanly."*
- **Angular (v21)**: *"I chose Angular over React because it is a complete framework. It provided out-of-the-box solutions for routing, HTTP interception (vital for JWTs), and strict typing with TypeScript, which heavily reduced runtime errors in large enterprise-like applications."*

---

## 3. System Architecture & Data Flow

### The MVC Architecture (Backend)
- **Model**: Defines how data is shaped (e.g., `Issue.js`, `User.js`). Handled by Mongoose schemas.
- **View**: Since this is a REST API, the "View" is replaced by JSON responses sent to the Angular client.
- **Controller**: The brains of the app. Takes the incoming request from the router, asks the Model for data, and returns JSON.

### End-to-End Request Flow (Crucial for Interviews)
*Question: What happens when a user logs in?*
1. **Client**: Angular captures email/password and sends a `POST` request.
2. **Backend Router**: Express routes `/api/v1/auth/login` to the `authController`.
3. **Controller/Model**: Finds the user in MongoDB. Uses `bcrypt.compare()` to hash the incoming password and compare it to the stored hash.
4. **Token Generation**: If valid, a JSON Web Token (JWT) is generated containing the user's ID, signed with a secret key.
5. **Client**: Angular receives the JWT, stores it in `localStorage`, and the `JwtInterceptor` attaches it to the `Authorization: Bearer <token>` header of all future requests.

---

## 4. Key Technical Implementations (Flex these in interviews)

### A. Security Measures
- **Helmet**: Secures Express apps by setting various HTTP headers (prevents XSS, Clickjacking).
- **Express Rate Limit**: Blocks IPs that make too many requests (e.g., limits login attempts to prevent brute force).
- **Mongo Sanitize**: Prevents NoSQL injection attacks by stripping `$` operators from request bodies.
- **Bcrypt**: Hashes passwords with a salt. *Never* store plain text passwords.

### B. Advanced Database Querying
Implemented reusable API features for filtering, sorting, and pagination.
- *Example*: `GET /api/v1/issues?status=Done&sort=-createdAt&page=1&limit=10`
- Instead of hardcoding queries, the backend dynamically constructs MongoDB queries (`$gt`, `$in`) from the URL query string.

### C. Kanban Board (Frontend)
- Utilized Drag and Drop interfaces. When an item is dropped, Angular calculates the new state, optimistically updates the UI, and sends an asynchronous HTTP `PUT` request to update the database.

---

## 5. Potential Interview Questions & Answers

**Q1: How did you handle Authentication and State Management?**
**A1:** "I used JWT (JSON Web Tokens). The backend issues a stateless token upon login. On the frontend, Angular stores this token and uses an `HttpInterceptor` to automatically inject it into the headers of outbound requests. If a 401 Unauthorized is returned, the interceptor logs the user out."

**Q2: What happens if two users try to edit an issue at the exact same time?**
**A2:** "Currently, the last request to reach the server wins. In a production upgrade, I would implement optimistic concurrency control using Mongoose's `__v` (version key) to throw an error if a user tries to save an outdated version of the document, or use Socket.io for real-time locking."

**Q3: How do you handle errors in your Express backend?**
**A3:** "I built a centralized error handling middleware. Instead of writing `try/catch` in every single controller, I wrapped my async functions in a `catchAsync` utility. Any thrown error is caught and passed to a global error handler that formats the error into a consistent JSON response (e.g., distinguishing between validation errors and duplicate key errors)."

**Q4: How did you optimize the database?**
**A4:** "I added indexing to frequently queried fields. For example, issues are often queried by their `projectId`. By adding an index on `projectId` in MongoDB, read speeds are significantly increased from O(N) collection scans to O(log N) index lookups. I also implemented pagination to ensure we only load 10-20 items at a time rather than thousands."

---

## 6. Challenges Faced & Overcome (The "Behavioral" Question)

*Interviewer: "Tell me about a difficult bug you faced during this project and how you solved it."*

**Example Answer to use:**
> "One challenge was managing the complexity of the Kanban board updates. When a user drags a card to a new column, the UI needs to update instantly, but the HTTP request to the backend takes a few milliseconds. 
> 
> Initially, the UI would snap back if the network was slow. I solved this by implementing **Optimistic UI Updates** in Angular. I immediately update the local array state so the user sees the card move instantly. Then, I fire the API call in the background. If the API call fails (e.g., due to network error), I catch the error, revert the local state back to its original position, and show an error toast notification. This vastly improved the perceived performance and user experience."
