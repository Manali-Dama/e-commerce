const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addItemToCart = async (req, res) => {
  try {
    const { cart_id, product_id, quantity } = req.body;

    // Fetch the product to get the price
    const product = await prisma.products.findUnique({
      where: { ws_Id: product_id },
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Add the item to cartItems
    const newItem = await prisma.cartItems.create({
      data: {
        cart_id,
        product_id,
        quantity,
      },
    });

    // Update cart total
    const cart = await prisma.cart.findUnique({ where: { cart_id } });

    const updatedCart = await prisma.cart.update({
      where: { cart_id },
      data: {
        total: cart.total + product.price * quantity,
      },
    });

    res.status(201).json({ cart: updatedCart, item: newItem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//remove 

const removeItemFromCart = async (req, res) => {
    try {
      const { cart_id, item_id } = req.body;
  
      // Fetch the item to calculate price adjustment
      const item = await prisma.cartItems.findUnique({
        where: { id: item_id },
        include: { product: true },
      });
  
      if (!item) {
        return res.status(404).json({ error: 'Item not found in cart' });
      }
  
      // Delete the item from cartItems
      await prisma.cartItems.delete({ where: { id: item_id } });
  
      // Update cart total
      const cart = await prisma.cart.findUnique({ where: { cart_id } });
  
      const updatedCart = await prisma.cart.update({
        where: { cart_id },
        data: {
          total: cart.total - item.product.price * item.quantity,
        },
      });
  
      res.status(200).json({ cart: updatedCart, message: 'Item removed successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  //view cart

  const viewCart = async (req, res) => {
    try {
      const { cart_id } = req.params;
  
      const cart = await prisma.cart.findUnique({
        where: { cart_id: parseInt(cart_id, 10) },
        include: {
          items: {
            include: {
              product: true, // Fetch related product details
            },
          },
        },
      });
  
      if (!cart) {
        return res.status(404).json({ error: 'Cart not found' });
      }
  
      res.status(200).json(cart);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  