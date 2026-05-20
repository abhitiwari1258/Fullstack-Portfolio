# 🚀 Full Stack Portfolio Website

A modern full-stack portfolio built using **React, Tailwind CSS, Node.js, Express, MongoDB** with an **Admin Dashboard**, **JWT Authentication**, **Dark Mode**, **Charts**, and **Project Management System**.

---

# 📌 Live Demo

Frontend: [Add deployment link]  [Pending (work in progress)]

Backend API: [Add backend deployment link] [Pending (work in progress)]

---

# 🎥 Project Demo Videos

---

## 📂 Projects Page Demo

[![Watch Video](./screenshots/project-thumbnail.png)](https://youtu.be/6MkMS1JDpxk?feature=shared)

---

# ✨ Features

## User Features

✔ Responsive Portfolio Website  
✔ Dark / Light Theme Toggle  
✔ About Section with Skills & Education  
✔ Resume Download  
✔ Social Media Links  
✔ Projects Showcase  
✔ Contact Form  
✔ Introduction Section  
✔ Smooth Animations using Framer Motion  

---

## Admin Features

Secure Admin Panel:

✔ JWT Authentication  
✔ Protected Routes  
✔ Login System  
✔ Add Projects  
✔ Delete Projects  
✔ View Contact Messages  
✔ Delete Messages  
✔ Charts & Analytics Dashboard  
✔ Logout System  

---

## Dashboard Analytics

Implemented charts for:

- Contact trends
- Projects distribution
- Pie charts
- Bar charts
- Status cards

---

# 🛠 Tech Stack

## Frontend

- React.js
- Tailwind CSS
- React Router DOM
- Axios
- Framer Motion
- React Hot Toast
- Recharts
- SweetAlert2
- Context API

---

## Backend

- Node.js
- Express.js
- JWT Authentication
- bcrypt
- Multer (if file upload)
- REST APIs


---

# 🔐 Authentication Flow

Login:

Admin Login
↓
Backend verifies credentials
↓
JWT token generated
↓
Token stored in localStorage
↓
Protected Route checks token
↓
Access Admin Dashboard


---

# 🗂 Project Structure

```bash
portfolio/
│
├── client/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── context/
│   ├── assets/
│   └── App.jsx
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   └── server.js
```

---

# ⚙ Installation

Clone repository:

```bash
git clone YOUR_REPO_URL
```

Install frontend:

```bash
cd client
npm install
npm run dev
```

Install backend:

```bash
cd server
npm install
npm run server
```

---

# Environment Variables

Backend `.env`

```env
PORT=5000

MONGO_URI=

JWT_SECRET=

ADMIN_EMAIL=

ADMIN_PASSWORD=
```

---

# API Routes

Authentication:

```bash
POST /api/auth/login
```

Projects:

```bash
GET /api/projects

POST /api/projects

DELETE /api/projects/:id
```

Contacts:

```bash
POST /api/contact

GET /api/contact

DELETE /api/contact/:id
```

---

# 🌙 Dark Mode

Implemented using:

Context API

localStorage

Tailwind Dark Classes

Features:

Persist theme after refresh

Global dark mode

Admin dark mode

Responsive UI

---

# 📊 Charts Used

Dashboard contains:

Pie Chart

Bar Chart

Project Analytics

Contact Analytics

Built using:

Recharts

---

# 📱 Responsive Design

Supports:

Desktop

Tablet

Mobile

Admin Dashboard Responsive Layout

---

# 🚀 Deployment

Frontend:

Vercel / Netlify

Backend:

Render / Railway

Database:

MongoDB Atlas

---

# Future Improvements

Planned features:

[ ] Introduction video upload

[ ] Blog system

[ ] Cloudinary integration

[ ] Admin image upload

[ ] Search projects

[ ] Pagination

[ ] Email notifications

[ ] Resume analytics

[ ] Project categories

---

# 💡 Challenges Faced

Implementing JWT Authentication

Protected Routes

Dark Mode persistence

Admin Dashboard state handling

Charts integration

MongoDB CRUD operations

---

# 📖 What I Learned

Building full-stack applications

Authentication systems

REST APIs

MongoDB integration

State management

Charts and analytics

Responsive UI

Dark mode implementation

---

# 👤 Author

Abhishek Tiwari

GitHub: [https://github.com/abhitiwari1258]

LinkedIn: [https://www.linkedin.com/in/abhishek-tiwari-054bab34b/]

Portfolio: [Add link]

Leetcode: [Add link]

Email: [abhishektiwari1258@gmail.com]

---

# ⭐ If you like this project

Give it a star on GitHub ⭐
