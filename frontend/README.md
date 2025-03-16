# NextRead Frontend

## 📖 Overview
The **NextRead Frontend** is a React-based web application built with **Next.js** that allows users to sign up, log in, and start reading books seamlessly. It provides an intuitive UI and integrates with the **NextRead Backend** for authentication and book data retrieval.

---

## 🚀 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/nextread-frontend.git
cd nextread-frontend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a **.env.local** file in the root directory and add:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### **4️⃣ Start the Application**
```sh
npm run dev
```
The application will run at **http://localhost:3000**.

---

## 📁 Project Structure
```
nextread-frontend/
│── public/                # Static assets like images
│── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Main application pages
│   ├── hooks/             # Custom hooks for API calls
│   ├── context/           # Context API for global state management
│   ├── styles/            # Global styles (CSS Modules)
│   ├── utils/             # Helper functions
│── next.config.js         # Next.js configuration
│── package.json          # Project dependencies
```

---

## 📌 Features
- 📚 **Browse & Read Books** – Explore a collection of books and start reading instantly.
- 🔐 **Authentication** – User registration and login with JWT.
- 🎨 **Dark/Light Mode** – Switch themes for better readability.
- 📖 **Reading Progress** – Track and sync progress across devices.

---

## 🔗 API Integration
The frontend interacts with the backend using RESTful API calls:

- **POST `/api/auth/signup`** – Register a new user.
- **POST `/api/auth/login`** – Authenticate user and receive JWT.
- **GET `/api/books`** – Fetch available books.
- **GET `/api/books/:id`** – Retrieve book details.

---

## 🛠 Tech Stack
- **Next.js** - React-based framework for SSR & performance
- **Tailwind CSS** - Styling framework
- **Context API** - State management
- **TypeScript** - Strongly typed JavaScript

---

## 💡 Future Enhancements
- 📱 **Mobile-friendly PWA version**.
- 📊 **Reading statistics & personalized recommendations**.
- 🔖 **Bookmarking & highlighting functionality**.

---