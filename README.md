# Node.js API CRUD with Express and Role-Based Authorization

This project is a RESTful API built with Node.js, Express, and MySQL, implementing CRUD operations and Role-Based Access Control (RBAC) for authorization.

## Features
- CRUD operations for managing books
- Role-Based Access Control (RBAC) to restrict access based on user roles
- Environment-based database configuration using `.env`
- Modular project structure following MVC (Model-View-Controller) pattern

## Requirements
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MySQL](https://www.mysql.com/)
- [Postman](https://www.postman.com/) (for API testing)

## Installation and Setup

Follow these steps to set up and run the project:

### 1. Clone the Repository
```sh
git clone https://github.com/adjisdhani/nodejs-api-crud-express-authorization.git
```

### 2. Navigate to the Project Directory
```sh
cd nodejs-api-crud-express-authorization
```

### 3. Install Dependencies
```sh
npm install --save-dev
```

### 4. Set Up Environment Variables
Create a `.env` file in the root directory and configure the database settings:

```ini
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=bookdb
```

### 5. Set Up MySQL Database
Log into MySQL and create the necessary database and tables:

```sql
CREATE DATABASE bookdb;

USE bookdb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role ENUM('admin', 'user') NOT NULL
);

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

INSERT INTO users (name, role) VALUES ('Admin User', 'admin');
INSERT INTO users (name, role) VALUES ('Regular User', 'user');
```

### 6. Start the Server
```sh
npm run dev
```

If successful, you should see:
```
✅ Database connected successfully!
Server is running on port 5000
```

## API Endpoints

### **Books API**

| Method | Endpoint        | Description                     | Role Required |
|--------|----------------|---------------------------------|---------------|
| GET    | /api/books     | Get all books                   | user, admin   |
| POST   | /api/books     | Add a new book                  | admin         |
| GET    | /api/books/:id | Get a single book by ID         | user, admin   |
| PUT    | /api/books/:id | Update a book by ID            | admin         |
| DELETE | /api/books/:id | Delete a book by ID            | admin         |

### **Users API**
| Method | Endpoint       | Description                     | Role Required |
|--------|---------------|---------------------------------|---------------|
| GET    | /api/users    | Get all users                   | admin         |
| GET    | /api/users/:id | Get a single user by ID        | admin         |

## Testing the API
Use **Postman** or **cURL** to test the API:

### **1. Get All Books (Accessible by All Users)**
```sh
GET http://localhost:5000/api/books
Headers:
    X-User-ID: 1  # Admin or User ID
```

### **2. Add a Book (Only Admins Can Access)**
```sh
POST http://localhost:5000/api/books
Headers:
    X-User-ID: 1  # Admin ID
Body:
{
    "title": "New Book",
    "author": "John Doe"
}
```

### **3. Delete a Book (Only Admins Can Access)**
```sh
DELETE http://localhost:5000/api/books/1
Headers:
    X-User-ID: 1  # Admin ID
```

### **4. Access Denied for Regular Users**
```sh
DELETE http://localhost:5000/api/books/1
Headers:
    X-User-ID: 2  # Regular User ID
```
**Expected Response:** `{ "message": "Access denied" }`

## Author
**Adjis Ramadhani Utomo**