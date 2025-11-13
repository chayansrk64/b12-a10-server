
---

## 🐾 **Server Side – `README.md`**

```markdown
# 🐾 PawMart Server — API & Backend

**Live Server:** [https://pawmart-server-dusky.vercel.app](https://pawmart-server-dusky.vercel.app)

This is the backend service for **PawMart**, a pet adoption and care platform.  
It handles user authentication, CRUD operations, and secure API communication with the MongoDB database.

---

## 🌟 Key Features

- ⚙️ **RESTful API with Express.js** — clean, well-structured endpoints for CRUD operations.
- 🗃️ **MongoDB Database** — stores user data, pet listings, and adoption information.
- 🔐 **Firebase Admin Integration** — verifies and protects routes with Firebase tokens.
- 🌐 **CORS & Middleware Support** — ensures secure and smooth client–server communication.
- 🚀 **Deployed on Vercel** — fast and reliable hosting for Node.js APIs.
- 🧩 **Dynamic Route Handling** — load listings, categories, and details via parameterized routes.

---

## 🧰 Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB (Atlas)**
- **Firebase Admin SDK**
- **Dotenv**
- **CORS**
- **Vercel Hosting**

---

## ⚙️ API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `GET` | `/listings` | Get all pet listings |
| `GET` | `/listings/:id` | Get specific listing details |
| `POST` | `/listings` | Add a new pet listing |
| `PUT` | `/listings/:id` | Update a listing |
| `DELETE` | `/listings/:id` | Delete a listing |
| `GET` | `/categories/:name` | Filter listings by category |

---

## 🚀 Installation and Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/pawmart-server.git
cd pawmart-server

# Install dependencies
npm install

# Create a .env file and add:
PORT=3000
DB_URI=your_mongodb_connection_string
FIREBASE_SERVICE_ACCOUNT=your_firebase_admin_json_base64

# Start the server
npm run start
