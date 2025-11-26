# 📊 Stock Prediction Portal (Practice Project – React + Django REST Framework)

A full-stack practice project built to strengthen skills in:

Django REST Framework (DRF) for backend APIs

React for frontend UI

JWT authentication, axios interceptors, protected routes

Full-stack architecture, clean folder structure, and integration workflows

⚠ Note:
This portal does not include machine learning yet — it is designed as a foundation for learning full-stack development with React + DRF.
A real ML prediction module may be added later as a separate step once the fundamentals are mastered.

# 🚀 Overview

The Stock Prediction Portal is a practice dashboard that demonstrates a complete full-stack authentication flow, API communication, and front-end structure using modern tools.

It includes:

User login & signup

JWT authentication flow

Automatic token injection using Axios interceptors

Protected routes in React

API endpoints in Django REST Framework

Dashboard layout demonstrating authenticated views

Clean project structure for scalable full-stack apps

# 🧰 Tech Stack
Frontend – React

React 18

React Router DOM

Axios (with request/response interceptors)

JWT token handling (localStorage)

Reusable components

Backend – Django REST Framework

Django

Django REST Framework

Simple JWT / JWT Auth

Modular API structure

SQLite database

# ✨ Features Implemented
# 🔐 Authentication

JWT login & register

Refresh/Access token flow

Automatic Authorization header insertion

Token expiration handling

Redirect to login on 401 using interceptors

# 🎨 Frontend (React)

Reusable layout

ProtectedRoute / PrivateRoute components

AuthProvider context

API service layer using Axios instance

Dashboard sample pages

# 🛠 Backend (DRF)

Auth endpoints

User creation / login

Custom permissions

Organized folder structure

Configurable CORS, settings, and environment setup

# 📂 Project Structure
stock-prediction-portal/
│
├── backend-drf/
│   ├── manage.py
│   ├── stock_prediction_main/
│   ├── api/
│   ├── db.sqlite3
│   └── requirements.txt
│
└── frontend-react/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── axiosInstance.js
    │   ├── AuthProvider.jsx
    │   ├── PrivateRoute.jsx
    │   └── App.jsx
    ├── public/
    ├── package.json
    └── .env

# 🖥️ Getting Started (Run Locally)
# 1️⃣ Clone the Repository
git clone https://github.com/SaddamShah92/stock-prediction-portal.git
cd stock-prediction-portal

# 🔧 Backend Setup (Django)
Create Virtual Environment (Recommended)
cd backend-drf
python -m venv venv
venv\Scripts\activate  # Windows
# OR
source venv/bin/activate  # Mac/Linux

Install Dependencies
pip install -r requirements.txt

Run Migrations
python manage.py migrate

Run Backend Server
python manage.py runserver


Backend will run at:

# 👉 http://localhost:8000

# 🎨 Frontend Setup (React)
cd ../frontend-react
npm install   # or yarn install
npm start     # or yarn start


Frontend will run at:

# 👉 http://localhost:3000

# 🧪 API Handling (Axios + JWT)

My React frontend uses:

Request Interceptor → attaches access token

Response Interceptor → retries on token expiration (401)

Auth Provider Context

PrivateRoute wrapper for protected pages


# 📸 Screenshots

## Login Page
![Login Page](assets/images/Login%20Page.PNG)

## Register Page
![Register Page](assets/images/Register%20Page.PNG)

## Home Page
![Home Page](assets/images/Home%20Page.PNG)

## Dashboard Page
![Dashboard Page](assets/images/Dashboard%20Page.PNG)

# 👤 Author

Syed Saddam Shah
Full-Stack Developer (React + Django)
GitHub: https://github.com/SaddamShah92
