/**
 * FOOD ROUTES
 * 
 * Handles all food-related endpoints
 */

const express = require('express');
const router = express.Router();

// Static list of food items
const foods = [
  { id: 1, name: 'Pizza Margherita', price: 12.99 },
  { id: 2, name: 'Burger Deluxe', price: 9.99 },
  { id: 3, name: 'Chicken Tacos', price: 8.99 },
  { id: 4, name: 'Caesar Salad', price: 7.99 },
  { id: 5, name: 'Sushi Platter', price: 15.99 },
  { id: 6, name: 'Pad Thai', price: 11.99 },
  { id: 7, name: 'Fish & Chips', price: 10.99 },
  { id: 8, name: 'Chicken Curry', price: 13.99 }
];

/**
 * GET /foods
 * Returns a list of all available food items
 */
router.get('/foods', (req, res) => {
  try {
    res.json({
      success: true,
      data: foods,
      count: foods.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching food items',
      error: error.message
    });
  }
});

module.exports = router;

