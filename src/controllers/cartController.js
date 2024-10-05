const sendResponse = require("../helper/sendResponse");
const Cart = require("../models/Cart");
const CartProduct = require("../models/CartProduct");
const Product = require("../models/Product");
require("dotenv").config();
const getCartInfo = async (customerID) => {
  const cart = await Cart.findOne({ customer_id: customerID }).select("customer_id _id total");
  if (!cart) {
    newCart = new Cart({
      customer_id: customerID,
    });
    // Tạo giỏ hàng mới
    await newCart.save();
    cart = newCart;
  }

  const cartProducts = await CartProduct.find({ cart_id: cart._id }).select(
    "product_id quantity color size -_id"
  );

  // Get product details
  const productIds = cartProducts.map((cp) => cp.product_id);
  const products = await Product.find({ _id: { $in: productIds } }).select(
    "name price imageUrl _id promotionalPrice"
  );

  const productInfo = cartProducts.map((cp) => {
    const product = products.find(
      (p) => p._id.toString() === cp.product_id.toString()
    );
    return {
      ...product._doc,
      quantity: cp.quantity,
      color: cp.color,
      size: cp.size,
    };
  });

  // Calculate total product
  const total = productInfo.reduce((acc, cur) => {
    const price = cur.promotionalPrice || cur.price;
    return acc + price * cur.quantity;
  }, 0);

  cart.total = total;
  await cart.save();

  return { cart: { ...cart._doc, productInfo }, total };
};

const cartsController = {
  getCarts: async (req, res) => {
    try {
      const customerID = req.user._id;
      const cartInfo = await getCartInfo(customerID);
      sendResponse(res, 200, "Lấy dữ liệu Cart thành công", cartInfo);
    } catch (error) {
      sendResponse(res, 500, "Lỗi lấy dữ liệu Cart", error.toString());
    }
  },
  // thay doi so luong san pham trong cart
  updateCart: async (req, res) => {
    const { productId, quantity , color , size } = req.body;
    try {
      const customerID = req.user._id;

      // Tìm cart có customer_id là customerID
      let cart = await Cart.findOne({ customer_id: customerID });
      if (!cart) {
        newCart = new Cart({
          customer_id: customerID,
        });
        // Tạo giỏ hàng mới
        await newCart.save();
        cart = newCart;
      }

      const cartProduct = await CartProduct.findOne({ cart_id: cart._id, product_id: productId });
      if (!cartProduct) {
        return sendResponse(res, 404, 'Product not found in cart');
      }
      // Update only the fields that are provided
      if (quantity !== undefined) {
        cartProduct.quantity = quantity;
      }
      if (color !== undefined) {
        cartProduct.color = color;
      }
      if (size !== undefined) {
        cartProduct.size = size;
      }
      cartProduct.quantity = quantity;
      await cartProduct.save();
      const cartInfo = await getCartInfo(customerID);
      sendResponse(res, 200, 'Cart updated successfully', cartInfo);
    } catch (error) {
      sendResponse(res, 500, 'Error updating cart', error.toString());
    }
  },
  //xoa san pham trong cart
  deleteCart: async (req, res) => {
    const { productId } = req.body;
    try {
      const customerID = req.user._id;

      // Tìm cart có customer_id là customerID
      let cart = await Cart.findOne({ customer_id: customerID });
      if (!cart) {
        newCart = new Cart({
          customer_id: customerID,
        });
        // Tạo giỏ hàng mới
        await newCart.save();
        cart = newCart;
      }
      const cartProduct = await CartProduct.findOne({ cart_id: cart._id, product_id: productId });
      if (!cartProduct) {
        return sendResponse(res, 404, 'Product not found in cart', { cart });
      }
      await cartProduct.delete();
      
      const cartInfo = await getCartInfo(customerID);
      
      sendResponse(res, 200, 'Product removed from cart successfully',cartInfo);
    } catch (error) {
      sendResponse(res, 500, 'Error removing product from cart', error.toString());
    }
  },
};

module.exports = cartsController;
