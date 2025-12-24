# 🍔 Food Delivery Application - Microservices Architecture

A simple food delivery application built with microservices architecture using React, Node.js, and Express.

## 📋 Architecture Overview

```
Frontend (React) → API Gateway (Server 2) → Order Service (Server 1)
```

- **Frontend**: React application running on port 3000 (default)
- **Server 2 (API Gateway)**: Node.js/Express gateway on port 5000
- **Server 1 (Order Service)**: Node.js/Express service on port 5001

## 🏗️ Project Structure

```
AnNewFood/
├── frontend/              # React application
│   ├── src/
│   │   ├── App.js        # Main app component
│   │   └── components/
│   │       ├── FoodList.jsx      # Food list component
│   │       └── OrderButton.jsx   # Order placement component
│   └── package.json
├── server1/               # Order Service
│   ├── index.js          # Main server file
│   ├── routes/
│   │   ├── foodRoutes.js # Food endpoints
│   │   └── orderRoutes.js # Order endpoints
│   └── package.json
├── server2/               # API Gateway
│   ├── index.js          # Main server file
│   ├── routes/
│   │   └── apiRoutes.js  # Gateway routes
│   ├── services/
│   │   └── orderService.js # Service layer for Server 1 communication
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation & Running

#### Step 1: Install Dependencies

Open three separate terminal windows/tabs and navigate to each directory:

**Terminal 1 - Server 1 (Order Service):**
```bash
cd AnNewFood/server1
npm install
```

**Terminal 2 - Server 2 (API Gateway):**
```bash
cd AnNewFood/server2
npm install
```

**Terminal 3 - Frontend:**
```bash
cd AnNewFood/frontend
npm install
```

#### Step 2: Start the Services

**IMPORTANT:** Start the services in this order:

1. **Start Server 1 (Order Service)** - Terminal 1:
```bash
cd AnNewFood/server1
npm start
```
You should see:
```
🚀 Order Service (Server 1) running on http://localhost:5001
```

2. **Start Server 2 (API Gateway)** - Terminal 2:
```bash
cd AnNewFood/server2
npm start
```
You should see:
```
🚀 API Gateway (Server 2) running on http://localhost:5000
```

3. **Start Frontend** - Terminal 3:
```bash
cd AnNewFood/frontend
npm start
```
The React app will open automatically in your browser at `http://localhost:3000`

## 📡 API Endpoints

### Server 1 (Order Service) - Port 5001

- `GET /foods` - Get list of all food items
- `POST /order` - Place an order
- `GET /health` - Health check

### Server 2 (API Gateway) - Port 5000

- `GET /api/foods` - Get food list (proxies to Server 1)
- `POST /api/order` - Place order (proxies to Server 1)
- `GET /health` - Health check

## 🔧 API Usage Examples

### Get Food List
```bash
curl http://localhost:5000/api/foods
```

### Place an Order
```bash
curl -X POST http://localhost:5000/api/order \
  -H "Content-Type: application/json" \
  -d '{
    "foodId": 1,
    "quantity": 2,
    "customerName": "John Doe",
    "address": "123 Main St, City"
  }'
```

## 🎯 Features

- ✅ Display food items with prices
- ✅ Select food items
- ✅ Place orders with customer details
- ✅ Order confirmation with order ID
- ✅ Error handling
- ✅ Clean, beginner-friendly code with comments

## 🛠️ Development

### Using Nodemon (Optional)

For auto-restart during development, you can use nodemon:

**Server 1:**
```bash
cd AnNewFood/server1
npm run dev
```

**Server 2:**
```bash
cd AnNewFood/server2
npm run dev
```

## 📝 Notes

- Make sure Server 1 is running before starting Server 2
- The frontend expects the API Gateway to be running on port 5000
- CORS is enabled for all services to allow cross-origin requests
- All services use JSON for request/response bodies

## 🐛 Troubleshooting

1. **Port already in use**: Make sure ports 5000, 5001, and 3000 are not in use by other applications
2. **Connection errors**: Ensure all services are running in the correct order
3. **CORS issues**: The services have CORS enabled, but if you encounter issues, check the browser console

## 📚 Technologies Used

- **Frontend**: React, Axios
- **Backend**: Node.js, Express
- **Communication**: REST APIs, HTTP (Axios)

---

Happy coding! 🎉

