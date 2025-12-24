/**
 * API ROUTES
 * 
 * Gateway routes that proxy requests to Server 1 (Order Service)
 */

const express = require('express');
const router = express.Router();
const orderService = require('../services/orderService');

/**
 * GET /api/foods
 * Fetches food list from Order Service and returns to frontend
 */
router.get('/api/foods', async (req, res) => {
  try {
    const result = await orderService.getFoods();
    
    if (result.success) {
      res.json(result.data);
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to fetch foods from Order Service',
        error: result.error
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

/**
 * POST /api/order
 * Sends order to Order Service and returns confirmation to frontend
 * 
 * Expected body:
 * {
 *   "foodId": 1,
 *   "quantity": 2,
 *   "customerName": "John Doe",
 *   "address": "123 Main St"
 * }
 */
router.post('/api/order', async (req, res) => {
  try {
    const orderData = req.body;
    
    // Validate required fields
    if (!orderData.foodId || !orderData.quantity || !orderData.customerName || !orderData.address) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: foodId, quantity, customerName, address'
      });
    }

    const result = await orderService.placeOrder(orderData);
    
    if (result.success) {
      res.status(201).json(result.data);
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to place order with Order Service',
        error: result.error
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

module.exports = router;

