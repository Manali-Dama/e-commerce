const express = require('express');
const {
  createCart,
  getCartById,
  updateCart,
  deleteCart,
  viewCartWithItems,
} = require('../controllers/cartController');

const router = express.Router();

// Create a cart
router.post('/', createCart);

// Get a cart by ID
router.get('/:cart_id', getCartById);

// View cart with items and product details
router.get('/:cart_id/items', viewCartWithItems);

// Update a cart
router.put('/:cart_id', updateCart);

// Delete a cart
router.delete('/:cart_id', deleteCart);

module.exports = router;
