const express = require('express');
const {
  createAdmin,
  getAdminById,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
  adminLogin,
} = require('../controllers/adminController'); // Importing the adminController functions

const router = express.Router();

/**
 * @route   POST /admin
 * @desc    Create a new admin
 * @access  Public
 */
router.post('/', createAdmin);

/**
 * @route   GET /admin/:admin_id
 * @desc    Get admin by ID
 * @access  Public
 */
router.get('/:admin_id', getAdminById);

/**
 * @route   GET /admin
 * @desc    Get all admins
 * @access  Public
 */
router.get('/', getAllAdmins);

/**
 * @route   PUT /admin/:admin_id
 * @desc    Update admin details
 * @access  Public
 */
router.put('/:admin_id', updateAdmin);

/**
 * @route   DELETE /admin/:admin_id
 * @desc    Delete an admin
 * @access  Public
 */
router.delete('/:admin_id', deleteAdmin);

/**
 * @route   POST /admin/login
 * @desc    Admin login
 * @access  Public
 */
router.post('/login', adminLogin);

module.exports = router;
