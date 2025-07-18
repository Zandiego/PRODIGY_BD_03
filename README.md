# ProdigyTech Task 03 – JWT-Based Authentication & Authorization

This project is a secure RESTful API built with Node.js, Express, and MongoDB (Mongoose). It includes JWT-based authentication and role-based access control (RBAC).

---

## 🔐 Features

- ✅ User registration and login
- ✅ Password hashing with bcrypt
- ✅ JWT token generation and validation
- ✅ Middleware to protect routes
- ✅ Role-based access control (admin, user)
- ✅ CRUD operations for users
- ✅ MongoDB integration with Mongoose
- ✅ Environment variable support using dotenv

---

## ⚙️ Setup Instructions

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file in the root directory with the following:

```env
PORT=3000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>

npm run dev.......start server

📫 API Endpoints
🔓 Public Routes

POST /api/users → Register a new user

POST /api/users/login → Login and get JWT token

🔐 Protected Routes (require Bearer <token> in header)
✅ Admin-Only
GET /api/users → Get all users

✅ Admin or Owner
GET /api/users/:id → Get user by ID (only self or admin)

PUT /api/users/:id → Update user (only self or admin)

DELETE /api/users/:id → Delete user (only self or admin)


