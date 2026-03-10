🛒 React E-Commerce Dashboard








A React-based E-Commerce Dashboard developed as part of a ReactJS Internship Assignment.

This project demonstrates modern frontend concepts including:

Authentication system

Session management

API integration

Cart functionality

Protected routes

Form validation

User profile management

The application uses React, Tailwind CSS, LocalStorage, and SweetAlert2 to simulate a real-world e-commerce dashboard.

🌐 Live Demo

🔗 Deployed Application

https://react-ecommerce-dashboard-bay.vercel.app/

📂 GitHub Repository

https://github.com/vijju1410/react-ecommerce-dashboard

🚀 Features
🔐 Authentication System

User registration with validation

Duplicate email prevention

Login with email & password

Session management using LocalStorage

Automatic logout after 5 minutes

🔒 Protected Routes

Users cannot access these pages without login:

Dashboard

Products

Cart

Profile

📊 Dashboard

The dashboard provides quick navigation to main sections.

Features include:

Welcome message with logged-in username

Quick navigation cards

Navbar navigation

Logout functionality

🛍 Products Page

Products are fetched dynamically from FakeStore API.

Features:

Product listing

Product image, title, and price display

Add products to cart

Responsive product grid

API Used:

https://fakestoreapi.com/products
🛒 Cart System

Cart functionality includes:

Add product to cart

Increase product quantity

Decrease product quantity

Remove product from cart

Automatic removal when quantity reaches zero

Total price calculation

Each user has a separate cart stored in LocalStorage.

Example storage key:

cart_user@email.com
👤 Profile Management

Users can manage their account details.

Features:

View profile information

Update name

Update email

Update password

Avatar with user initials

Profile validation is implemented for secure updates.

✅ Form Validation
Register Page

Validation rules:

Name → only alphabets allowed

Email → valid email format

Password → minimum 6 characters

Profile Page

The same validation rules are applied when updating profile information.

🎨 UI / UX Improvements

The project includes several UI enhancements:

Responsive layout

Tailwind CSS styling

SweetAlert2 notifications

Avatar initials display

Dynamic cart item count in Navbar

Clean and minimal UI

🧰 Tech Stack
Category	Technology
Frontend	React (Create React App)
Routing	React Router DOM
Styling	Tailwind CSS
API Calls	Axios
Alerts	SweetAlert2
Storage	LocalStorage
Deployment	Vercel
📁 Project Structure
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
⚙️ Installation

Clone the repository:

git clone https://github.com/vijju1410/react-ecommerce-dashboard.git

Navigate to project directory:

cd react-ecommerce-dashboard

Install dependencies:

npm install

Run the application:

npm start

Build for production:

npm run build
🚀 Deployment

The project is deployed using Vercel.

Live Deployment:

https://react-ecommerce-dashboard-bay.vercel.app/

🔮 Future Improvements

Possible enhancements for production-level systems:

Product search functionality

Product category filters

Backend authentication

Database integration

Order management system

Payment gateway integration

Global state management (Redux / Context API)

👨‍💻 Author

Vijay Prajapati

ReactJS Internship Assignment Project

📄 License

This project is created for educational and internship evaluation purposes.
