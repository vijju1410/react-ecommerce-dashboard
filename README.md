React E-Commerce Dashboard

A React-based E-Commerce Dashboard built as part of a ReactJS Internship Assignment.
This project demonstrates authentication, session management, product API integration, and cart management using React and LocalStorage.

Live Demo

Deployed Application

https://react-ecommerce-dashboard-bay.vercel.app/

GitHub Repository

https://github.com/vijju1410/react-ecommerce-dashboard

Features
Authentication System

User Registration with validation

Duplicate email prevention

Login with email & password

Session management using LocalStorage

Auto logout after 5 minutes

Protected Routes

Users cannot access these pages without login:

Dashboard

Products

Cart

Profile

Dashboard

Welcome message with user name

Quick navigation cards

Navbar with navigation links

Logout functionality

Products Page

Fetch products from FakeStore API

Display product image, title, and price

Add products to cart

Responsive product grid

API Used:

https://fakestoreapi.com/products

Cart System

Add products to cart

Increase quantity

Decrease quantity

Remove product

Automatically remove item when quantity becomes zero

Total price calculation

Each user has a separate cart stored in LocalStorage

Example:

cart_user@email.com
Profile Management

Users can:

View profile details

Update name

Update email

Update password

Profile validation included.

Form Validation

Implemented in:

Register Page

Name → only letters allowed

Email → valid email format

Password → minimum 6 characters

Profile Page

Same validations as registration

UI / UX Improvements

Responsive layout

Tailwind CSS styling

SweetAlert2 notifications

Avatar initials in profile

Dynamic cart item count in navbar

Tech Stack

Frontend

React (Create React App)

React Router DOM

Tailwind CSS

Libraries

Axios

SweetAlert2

Storage

LocalStorage

Deployment

Vercel

Project Structure
src
 ├── components
 │     Navbar.js
 │
 ├── pages
 │     Login.js
 │     Register.js
 │     Dashboard.js
 │     Products.js
 │     Cart.js
 │     Profile.js
 │
 ├── App.js
 ├── index.js
Installation

Clone the repository

git clone https://github.com/vijju1410/react-ecommerce-dashboard.git

Navigate to project folder

cd react-ecommerce-dashboard

Install dependencies

npm install

Run the application

npm start

Build for production

npm run build
Deployment

The project is deployed using Vercel.

Deployment Link:

https://react-ecommerce-dashboard-bay.vercel.app/

Future Improvements

Possible enhancements for production-level application:

Product search & filtering

Persistent authentication using backend

Database integration

Order management system

Payment gateway integration

Global state management (Redux / Context API)

Author

Vijay Prajapati

ReactJS Internship Assignment Project

License

This project is created for educational and internship evaluation purposes.