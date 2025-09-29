# API Documentation - BellyBuzzFood

This document provides details about the API endpoints for **BellyBuzzFood**. All backend routes follow RESTful conventions.

---

## Base URL
```
http://localhost:5000/api
```

---

## Authentication

### 1. Register User
**POST** `/auth/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "userId": "<user_id>"
}
```

---

### 2. Login User
**POST** `/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "<JWT_TOKEN>",
  "userId": "<user_id>"
}
```

---

## Restaurants

### 1. Get All Restaurants
**GET** `/restaurants`

**Response:**
```json
[
  {
    "id": 1,
    "name": "Pizza Place",
    "location": "City Center",
    "menu": [ ... ]
  },
  ...
]
```

### 2. Get Restaurant By ID
**GET** `/restaurants/:id`

**Response:**
```json
{
  "id": 1,
  "name": "Pizza Place",
  "location": "City Center",
  "menu": [ ... ]
}
```

---

## Menu Items

### 1. Get All Menu Items
**GET** `/menu`

### 2. Get Menu Item By ID
**GET** `/menu/:id`

### 3. Add Menu Item (Admin Only)
**POST** `/menu`

**Request Body:**
```json
{
  "name": "Cheese Pizza",
  "price": 12.99,
  "description": "Delicious cheese pizza"
}
```

### 4. Update Menu Item (Admin Only)
**PUT** `/menu/:id`

### 5. Delete Menu Item (Admin Only)
**DELETE** `/menu/:id`

---

## Orders

### 1. Place an Order
**POST** `/orders`

**Request Body:**
```json
{
  "userId": "<user_id>",
  "items": [
    { "menuId": 1, "quantity": 2 },
    { "menuId": 5, "quantity": 1 }
  ]
}
```

**Response:**
```json
{
  "orderId": "<order_id>",
  "status": "Pending"
}
```

### 2. Get Orders By User
**GET** `/orders/user/:userId`

### 3. Update Order Status (Admin Only)
**PUT** `/orders/:orderId`

**Request Body:**
```json
{
  "status": "Completed"
}
```

### 4. Delete Order (Admin Only)
**DELETE** `/orders/:orderId`

---

> All responses include proper HTTP status codes (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, etc.)