// server.js
// const express = require("express");
// const bodyParser = require("body-parser");
// const { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient();
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// CRUD Routes

// Create a product
app.post("/products", async (req, res) => {
  try {
    const { name, price, package_size, tags, images, description } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        name,
        price,
        package_size,
        tags,
        images,
        description,
      },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get all products
app.get("/products", async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Get a single product by id
app.get("/products/:id", async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { ws_Id: parseInt(req.params.id) },
    });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Update a product
app.put("/products/:id", async (req, res) => {
  try {
    const { name, price, package_size, tags, images, description } = req.body;
    const updatedProduct = await prisma.product.update({
      where: { ws_Id: parseInt(req.params.id) },
      data: {
        name,
        price,
        package_size,
        tags,
        images,
        description,
      },
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Delete a product
app.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await prisma.product.delete({
      where: { ws_Id: parseInt(req.params.id) },
    });
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
