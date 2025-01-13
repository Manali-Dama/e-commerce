const express = require('express');
const {
  addItemToCart,
  updateCartItem,
  removeItemFromCart,
} = require('../controllers/cartItemsController');

const router = express.Router();

// Add an item to the cart
router.post('/', addItemToCart);

// Update an item in the cart
router.put('/:item_id', updateCartItem);

// Remove an item from the cart
router.delete('/:item_id', removeItemFromCart);

module.exports = router;
