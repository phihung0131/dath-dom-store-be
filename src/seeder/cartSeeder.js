const mongoose = require("mongoose");
const Cart = require("../models/Cart"); // Adjust the path as needed
const CartProduct = require("../models/CartProduct"); // Adjust the path as needed
const User = require("../models/User"); // Adjust the path as needed
const Product = require("../models/Product"); // Adjust the path as needed

const seedCarts = async () => {
  try {
    // Clear existing carts and cart products
    await Cart.deleteMany({});
    await CartProduct.deleteMany({});

    // Fetch all users
    const users = await User.find({});
    if (users.length === 0) {
      console.log("No users found to create carts for.");
      return;
    }

    // Fetch a sample product to add to the cart

    // Create a cart for each user
    for (const user of users) {
      const cart = {
        customer_id: user._id,
        total: 4, // Example total amount
      };

      const insertedCart = await Cart.create(cart);
      console.log(`Cart created for user ${user._id}`);

      // Define initial cart product data
      const cartProducts = [
        {
          cart_id: insertedCart._id,
          product_id: new mongoose.Types.ObjectId('66f6405f15cc467edadcd4a2'),
          quantity: 2,
          color: "Red",
          size: 10,
        },
        {
          cart_id: insertedCart._id,
          product_id: new  mongoose.Types.ObjectId('66f6405f15cc467edadcd4c0'),
          quantity: 2,
          color: "Blue",
          size: 12,
        },
      ];

      await CartProduct.insertMany(cartProducts);
      console.log(`Cart products added for cart ${insertedCart._id}`);
    }
  } catch (error) {
    console.error("Error seeding carts and cart products:", error);
  }
};

module.exports = { seedCarts }; 