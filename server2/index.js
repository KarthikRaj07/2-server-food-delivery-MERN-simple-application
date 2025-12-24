/**
 * SERVER 2 - API GATEWAY
 * 
 * This is the API Gateway that acts as a bridge between:
 * - Frontend (React app)
 * - Server 1 (Order Service)
 * 
 * Port: 5000
 */

const express = require('express');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for frontend communication
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// API Routes
app.use('/', apiRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'API Gateway' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 API Gateway (Server 2) running on http://localhost:${PORT}`);
  console.log(`📋 Available endpoints:`);
  console.log(`   GET  /api/foods - Get food list (proxies to Server 1)`);
  console.log(`   POST /api/order - Place order (proxies to Server 1)`);
  console.log(`\n⚠️  Make sure Server 1 (Order Service) is running on port 5001`);
});

