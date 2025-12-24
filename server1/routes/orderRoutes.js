/**
 * ORDER ROUTES
 * 
 * Handles all order-related endpoints
 */

const express = require('express');
const router = express.Router();

/**
 * POST /order
 * Accepts order data and returns confirmation
 * 
 * Expected body:
 * {
 *   "foodId": 1,
 *   "quantity": 2,
 *   "customerName": "John Doe",
 *   "address": "123 Main St"
 * }
 */
router.post('/order', (req, res) => {
  try {
    const { foodId, quantity, customerName, address } = req.body;

    // Validation
    if (!foodId || !quantity || !customerName || !address) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: foodId, quantity, customerName, address'
      });
    }

    if (quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Quantity must be greater than 0'
      });
    }

    // Generate order confirmation
    const orderId = `ORD-${Date.now()}`;
    const orderDate = new Date().toISOString();

    const confirmation = {
      success: true,
      message: 'Order placed successfully!',
      order: {
        orderId: orderId,
        foodId: foodId,
        quantity: quantity,
        customerName: customerName,
        address: address,
        orderDate: orderDate,
        status: 'confirmed'
      }
    };

    res.status(201).json(confirmation);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error processing order',
      error: error.message
    });
  }
});

module.exports = router;

