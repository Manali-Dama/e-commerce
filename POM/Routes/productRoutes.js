const express = require('express');
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/productsController');

const router = express.Router();

// Create a product
router.post('/', createProduct);

// Get all products
router.get('/', getAllProducts);

// Get a product by ID
router.get('/:product_id', getProductById);

// Update a product
router.put('/:product_id', updateProduct);

// Delete a product
router.delete('/:product_id', deleteProduct);

module.exports = router;
