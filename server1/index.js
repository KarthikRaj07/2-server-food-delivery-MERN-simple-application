/**
 * SERVER 1 - ORDER SERVICE
 * 
 * This is the Order Service microservice that handles:
 * - Food items listing
 * - Order processing
 * 
 * Port: 5001
 */

const express = require('express');
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = 5001;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for API Gateway communication
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Routes
app.use('/', foodRoutes);
app.use('/', orderRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'Order Service' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Order Service (Server 1) running on http://localhost:${PORT}`);
  console.log(`📋 Available endpoints:`);
  console.log(`   GET  /foods - Get list of food items`);
  console.log(`   POST /order - Place an order`);
});

