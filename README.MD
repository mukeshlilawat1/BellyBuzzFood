# 🍔 BellyBuzzFood App

![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/Frontend-ReactJS-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-blue)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

---

## ✨ Overview

**BellyBuzzFood** is a **modern full-stack food delivery application** built collaboratively.  
It allows users to browse restaurants, view menus, add items to the cart, place orders, and manage their profiles seamlessly.  

This project demonstrates real-world skills in:

- Full-stack development (React + Node.js/Express)  
- RESTful API design and integration  
- JWT-based user authentication and authorization  
- Responsive UI for mobile and web  
- Collaborative development using Git and GitHub
- Cloud-ready architecture and deployment strategies

> _Perfect for learning and demonstrating full-stack development capabilities._

---

## 🚀 Features

- Browse restaurants with detailed menus  
- Add items to cart and place orders in real-time  
- User authentication (Sign Up / Login) with JWT  
- Profile management and order history tracking  
- Real-time order status updates (optional notifications)  
- Admin panel for managing restaurants, menus, and orders  
- Responsive and modern design using Tailwind CSS  
- Seamless collaboration for multiple contributors
- Multi-database support (MongoDB / MySQL)

---

## 🧩Tech Stack

| Frontend   | Backend        | Database | Auth  | Tools / Libraries       |
|------------|---------------|----------|-------|------------------------|
| React.js   | Node.js        | MongoDB  | JWT   | Git, GitHub, Postman   |
| Tailwind   | Express.js     |          |       | Vite, Lodash, Axios    |
| HeadlessUI |                |          |       | React Router, Redux    |

---

## 🗺️ Project Structure

```
BellyBuzzFood/
│
├── frontend/                    # React.js frontend
│   ├── public/                  # Public assets
│   ├── src/                     # Source code
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/               # Application pages
│   │   ├── context/             # React Context for state management
│   │   ├── hooks/               # Custom hooks
│   │   ├── utils/               # Helper functions
│   │   ├── App.jsx              # Main App component
│   │   └── index.jsx            # Entry point
│   └── package.json             # Frontend dependencies
│
├── backend/                     # Node.js/Express backend
│   ├── controllers/             # API controllers
│   ├── models/                  # Database models
│   ├── routes/                  # Express routes
│   ├── middleware/              # Authentication & error handling
│   ├── config/                  # DB & environment configs
│   └── server.js                # Backend entry point
│
├── database/                    # DB scripts / seeders
├── scripts/                     # Automation scripts
├── .gitignore                   # Git ignore file
├── LICENSE                      # MIT License
└── README.md                    # Project documentation
```

---

## 📦 Getting Started

### Prerequisites

- Node.js & npm  
- MongoDB (local or Atlas)  
- Postman (optional, for API testing)  

### Installation

1. **Clone the repository**  
```bash
git clone <repo-url>
```

2. **Backend Setup**  
```bash
cd BellyBuzzFood/backend
npm install
npm start
```

3. **Frontend Setup**  
```bash
cd ../frontend
npm install
npm start
```

4. **Access Local App:**  
- Frontend: `http://localhost:3000`  
- Backend: `http://localhost:5000`  

---

## 🛠️ API Endpoints

| Endpoint           | Method | Description                       |
|-------------------|--------|----------------------------------|
| /restaurants       | GET    | List all restaurants             |
| /menus/:id         | GET    | Get menu by restaurant           |
| /cart              | POST   | Add item to cart                 |
| /cart              | GET    | Get cart items                   |
| /orders            | POST   | Place an order                   |
| /orders/:userId    | GET    | Get order history for a user     |
| /auth/login        | POST   | Login / JWT                      |
| /auth/register     | POST   | User registration                |
| /admin/restaurants | POST   | Admin: Add new restaurant        |
| /admin/menus       | POST   | Admin: Add menu items            |

---

## 👤 Contributors

- Mukesh Lilawat – Owner / Lead Developer  
- [Gaurav Kumawat] – Role / Full-Stack Developer    

> GitHub automatically tracks contributions from commits.

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🎨 Screenshots

> _Add screenshots or GIFs of key UI features here._

---

## 🌐 Live Demo

> _Add link to live deployed version if available._

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you would like to change.  
Please follow the [Contributor Guidelines](CONTRIBUTING.md) if you add one.

---

## 📚 Resources

- [ReactJS Docs](https://reactjs.org/)  
- [Node.js Docs](https://nodejs.org/en/docs/)  
- [MongoDB Docs](https://www.mongodb.com/docs/)  
- [JWT Introduction](https://jwt.io/introduction/)  
- [TailwindCSS Docs](https://tailwindcss.com/docs)  

---

> _Star ⭐ this repo if you find it useful!_
