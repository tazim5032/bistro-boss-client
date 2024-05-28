# Bistro Boss - An Online Restaurant Website

[Live Link](https://bistro-boss-167fc.web.app/)

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
   - [User Features](#user-features)
   - [Admin Features](#admin-features)
3. [Technologies Used](#technologies-used)
   - [Frontend](#frontend)
   - [Backend](#backend)
   - [Authentication & Deployment](#authentication--deployment)
4. [Packages](#packages)
5. [Installation and Setup](#installation-and-setup)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

## Project Overview

Bistro Boss is an online restaurant website where users can sign up and order food items. It features a card-based payment system using Stripe, user and admin dashboards, and comprehensive management functionalities for orders, payments, and items.

## Features

### User Features

- **Signup and Order Foods**: Users can register and place orders.
- **Payment System**: Secure card-based payments using Stripe.
- **User Dashboard**: Manage orders and payments.

### Admin Features

- **Item Management**: Add, update, and delete food items.
- **User Management**: Manage user accounts.
- **Payment Management**: Oversee all payments.
- **Statistics**: View comprehensive statistics on the admin dashboard.

## Technologies Used

### Frontend

- **React**: [React](https://reactjs.org/)
- **Tailwind CSS**: [Tailwind CSS](https://tailwindcss.com/)
- **DaisyUI**: [DaisyUI](https://daisyui.com/)

### Backend

- **Node.js**: [Node.js](https://nodejs.org/)
- **Express**: [Express](https://expressjs.com/)
- **MongoDB**: [MongoDB](https://www.mongodb.com/)

### Authentication & Deployment

- **Firebase**: [Firebase](https://firebase.google.com/) for authentication and client-side deployment
- **Vercel**: [Vercel](https://vercel.com/) for server deployment
- **JWT**: [JWT](https://jwt.io/) for security token

## Packages

- **React Hook Form**: [React Hook Form](https://react-hook-form.com/)
- **SweetAlert2**: [SweetAlert2](https://sweetalert2.github.io/)
- **React Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Swiper**: [Swiper](https://swiperjs.com/)
- **React Slider**: [React Slider](https://github.com/mpowaga/react-slider)

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tazim5032/bistro-boss.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd bistro-boss
   ```

3. **Install frontend dependencies:**
   ```bash
   cd client
   npm install
   ```

4. **Install backend dependencies:**
   ```bash
   cd ../server
   npm install
   ```

5. **Create a `.env` file in the server directory and add your environment variables:**
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   FIREBASE_API_KEY=your_firebase_api_key
   ```

6. **Run the backend server:**
   ```bash
   npm start
   ```

7. **Run the frontend development server:**
   ```bash
   cd ../client
   npm start
   ```

## Usage

Visit the [live link](https://bistro-boss-167fc.web.app/) to interact with the application. Users can sign up, order food, and manage their orders and payments. Admins can log in to manage items, users, and view statistics.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or feedback, please contact [Mohammad Fakhrul Islam] at [mfittazim@gmail.com].

---

Thank you for checking out Bistro Boss! Enjoy using the application.