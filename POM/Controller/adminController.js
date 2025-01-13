import { request } from "express";
import prisma from "../DB/db.config.js";

// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// Create an admin
const createAdmin = async (req, res) => {
  try {
    const { mail, Password } = req.body;

    // Check for existing admin
    const existingAdmin = await prisma.admin.findUnique({
      where: { mail:mail },
    });

    if (existingAdmin) {
      return res.status(400).json({ error: 'Admin with this email already exists.' });
    }

    const newAdmin = await prisma.admin.create({
      data: { mail:mail, Password:Password },
    });

    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all admins
const getAllAdmins = async (req, res) => {
  try {
    const admins = await prisma.admin.findMany();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get admin by ID
const getAdminById = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await prisma.admin.findUnique({
      where: { admin_id: parseInt(id, 10) },
    });

    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an admin
const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { mail, Password } = req.body;

    const updatedAdmin = await prisma.admin.update({
      where: { admin_id: parseInt(id, 10) },
      data: { mail, Password },
    });

    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an admin
const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAdmin = await prisma.admin.delete({
      where: { admin_id: parseInt(id, 10) },
    });

    res.status(200).json(deletedAdmin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
};
