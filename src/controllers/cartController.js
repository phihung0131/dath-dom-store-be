const { get } = require("mongoose");
const sendResponse = require("../helper/sendResponse");
const Cart = require("../models/Cart");
const CartProduct = require("../models/CartProduct");
const Product = require("../models/Product");
require("dotenv").config();

const cartsController = {
  // Lấy danh sách tất cả sản phẩm trong cart cua nguoi dung co ID
  getCarts: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // Trang hiện tại (mặc định 1)
      const skip = (page - 1) * 10; // Bỏ qua các sản phẩm trước trang hiện tại
      const customerID = req.query.customerID || null;

      if (!customerID) {
        return res.status(400).json({ message: "customerID is required" });
      }

      // Tìm cart có customer_id là customerID
      const cart = await Cart.findOne({ customer_id: customerID })
        .select("-infos -deleted -createdAt -updatedAt -__v");

      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      // Tìm các sản phẩm trong cart
      const cartProducts = await CartProduct.find({ cart_id: cart._id }).select("product_id quantity -_id");

      // Populate product details
      const productIds = cartProducts.map(cp => cp.product_id);
      const products = await Product.find({ _id: { $in: productIds } }).select("name description price imageUrl category _id");
      // const productInfor = cartProducts.map(cp => ({
      //   product_id: cp.product_id,
      //   quantity: cp.quantity
      // }));
      const ProductInfo = cartProducts.map(cp => {
        const product = products.find(p => p._id.toString() === cp.product_id.toString());
          return {
            ...product._doc, // Spread the product details
            quantity: cp.quantity
          };
      });
      // tinh tong tien = quantity_product1 * price_price1 + quantity_product2 * price_product2 + ...
      const totalPrice = ProductInfo.reduce((acc, cur) => acc + cur.price * cur.quantity, 0); 
      // Trả về kết quả
      res.status(200).json({
        message: "Lấy dữ liệu Cart thành công",
        data: {
          cart,
          ProductInfo
        },
        totalPrice
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  // thay doi so luong san pham trong cart
  

};

module.exports = cartsController;
