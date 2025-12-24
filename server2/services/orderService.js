/**
 * ORDER SERVICE
 * 
 * Service layer that handles communication with Server 1 (Order Service)
 * Uses axios to make HTTP requests
 */

const axios = require('axios');

// Base URL for Server 1 (Order Service)
const ORDER_SERVICE_URL = 'http://localhost:5001';

/**
 * Fetch all food items from Order Service
 * @returns {Promise} Promise that resolves to food items data
 */
const getFoods = async () => {
  try {
    const response = await axios.get(`${ORDER_SERVICE_URL}/foods`);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error fetching foods from Order Service:', error.message);
    return {
      success: false,
      error: error.response?.data || error.message
    };
  }
};

/**
 * Place an order through Order Service
 * @param {Object} orderData - Order data (foodId, quantity, customerName, address)
 * @returns {Promise} Promise that resolves to order confirmation
 */
const placeOrder = async (orderData) => {
  try {
    const response = await axios.post(`${ORDER_SERVICE_URL}/order`, orderData);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error placing order with Order Service:', error.message);
    return {
      success: false,
      error: error.response?.data || error.message
    };
  }
};

module.exports = {
  getFoods,
  placeOrder
};

