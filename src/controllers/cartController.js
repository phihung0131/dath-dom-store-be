const sendResponse = require("../helper/sendResponse");
const Cart = require("../models/Cart");
const CartProduct = require("../models/CartProduct");
const Product = require("../models/Product");
require("dotenv").config();

const cartsController = {
  getCarts: async (req, res) => {
    try {
      const customerID = req.user._id;

      // Tìm cart có customer_id là customerID
      let cart = await Cart.findOne({ customer_id: customerID }).select(
        "customer_id _id total"
      );

      if (!cart) {
        newCart = new Cart({
          customer_id: customerID,
        });
        // Tạo giỏ hàng mới
        await newCart.save();
        cart = newCart;
      }

      // Tìm các sản phẩm trong cart
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

      // // Calculate total price, using promotionalPrice if available
      // const totalPrice = productInfo.reduce((acc, cur) => {
      //   const priceToUse =
      //     cur.promotionalPrice !== null ? cur.promotionalPrice : cur.price;
      //   return acc + priceToUse * cur.quantity;
      // }, 0);

      // Calculate total product
      const total = productInfo.reduce((acc, cur) => {
        return acc + cur.quantity;
      }, 0);

      await Cart.findByIdAndUpdate(cart._id, { total });

      // Trả về kết quả
      res.status(200).json({
        message: "Lấy dữ liệu Cart thành công",
        data: {
          cart: { ...cart._doc, productInfo, total },
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  // thay doi so luong san pham trong cart
};

module.exports = cartsController;
