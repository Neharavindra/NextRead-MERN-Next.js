# NextRead Backend

## 📖 Overview
The **NextRead Backend** is a Node.js & Express-based API that allows users to sign up, log in, and start reading books. It serves as the backend for the **NextRead** application, storing user data and book information in **MongoDB**.

---

## 🚀 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/nextread-backend.git
cd nextread-backend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a **.env** file in the root directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### **4️⃣ Start the Server**
```sh
npm start
```
The server will start at **http://localhost:5000**.

For development with auto-restart, use:
```sh
npm run dev
```

---

## 📁 Project Structure
```
nextread-backend/
│── config/
│   ├── db.js            # Database connection
│── models/
│   ├── User.js          # User schema
│   ├── Book.js          # Book schema
│── routes/
│   ├── auth.js         # Authentication routes
│   ├── books.js        # Book-related routes
│── middlewares/
│   ├── authMiddleware.js # JWT authentication middleware
│── server.js            # Main server entry point
│── .env                 # Environment variables
│── package.json         # Project dependencies
```

---

## 📌 API Endpoints

### **Auth Routes** (`/api/auth`)
- `POST /signup` → Register a new user
- `POST /login` → User login & JWT generation

### **User Routes** (`/api/users`)
- `GET /me` → Get logged-in user details

### **Book Routes** (`/api/books`)
- `GET /` → Fetch all books
- `GET /:id` → Get book details by ID

---

## 🛠 Tech Stack
- **Node.js** - Server runtime
- **Express.js** - API framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT & bcryptjs** - Authentication & password hashing
- **dotenv & CORS** - Environment variables & security middleware

---

## 💡 Future Enhancements
- Implement personalized book recommendations.
- Add real-time reading progress sync across devices.
- Introduce book reviews and ratings system.

---

