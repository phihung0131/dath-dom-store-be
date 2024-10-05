const CryptoJS = require("crypto-js"); // npm install crypto-js
const sendResponse = require("../helper/sendResponse");
const Order = require("../models/Order");
const OrderProduct = require("../models/OrderProduct");
const OrderVoucher = require("../models/OrderVoucher");
const Voucher = require("../models/Voucher");
const Payment = require("../models/Payment");
const Product = require("../models/Product");
const CustomerVoucher = require("../models/CustomerVoucher");
const PaymentAPI = require("../services/paymentService");
// const MomoPayment = require('../services/MomoPayment');
// const ZaloPayment = require('../services/ZaloPayment');
// const VNPayPayment = require('../services/VNPayPayment');

const orderController = {
  create: async (req, res) => {
    const { products, codeVoucher, paymentMethod, name, phone, address } =
      req.body;

    // Tạo đơn hàng mới
    const order = new Order({
      customerId: req.user._id,
      status: "Waiting for payment",
      name,
      phone,
      address,
    });

    // Tính tổng giá trị đơn hàng
    let totalPrice = 0;

    for (const product of products) {
      // Tìm sản phẩm trong bảng Product
      const dbProduct = await Product.findById(product.id);
      if (!dbProduct) {
        return sendResponse(res, 404, `Sản phẩm không tìm thấy`);
      }

      // Kiểm tra nếu có promotionalPrice thì dùng, không thì dùng price
      const price =
        dbProduct.promotionalPrice !== null
          ? dbProduct.promotionalPrice
          : dbProduct.price;

      // Tính giá trị đơn hàng cho sản phẩm hiện tại
      const productTotal = price * product.quantity;

      // Cộng vào tổng giá trị đơn hàng
      totalPrice += productTotal;

      // Lưu thông tin sản phẩm vào OrderProduct
      const orderProduct = new OrderProduct({
        orderId: order._id,
        productId: product.id,
        quantity: product.quantity,
        color: product.color,
        size: product.size,
      });

      await orderProduct.save();
    }

    // Áp voucher
    if (codeVoucher) {
      const voucher = await Voucher.findOne({ code: codeVoucher });
      if (!voucher) {
        return sendResponse(res, 404, "Không tìm thấy voucher");
      }
      if (voucher.quantity <= 0) {
        return sendResponse(res, 400, "Số lượng voucher đã hết");
      }
      if (new Date() > voucher.expirationDate) {
        return sendResponse(res, 400, "Voucher đã hết hạn");
      }

      const usedVoucher = await CustomerVoucher.findOne({
        voucherId: codeVoucher,
      });
      if (usedVoucher) {
        return sendResponse(
          res,
          400,
          "Người dùng đã sử dụng voucher này trước đây"
        );
      }

      const orderVoucher = new OrderVoucher({
        orderId: order._id,
        voucherId: voucher._id,
      });
      await orderVoucher.save();
      totalPrice *= 1 - voucher.discountPercent / 100;
      voucher.quantity--;
      await voucher.save();
    }

    order.totalPrice = totalPrice;
    await order.save();

    // Tạo thanh toán
    const payment = new Payment({
      orderId: order._id,
      method: paymentMethod,
      status: "pending",
    });
    await payment.save();

    // Initialize payment based on the chosen method
    let paymentUrl = "";
    switch (paymentMethod) {
      case "MOMO":
        paymentUrl = await PaymentAPI.createMomoPayment(order._id, totalPrice);
        break;
      case "ZALO":
        paymentUrl = await PaymentAPI.createZaloPayment(order._id, totalPrice);
        order.status = "Failure";
        payment.status = "failure";
        await payment.save();
        await order.save();
        break;
      case "COD":
        payment.status = "success";
        await payment.save();
        order.status = "Order successful";
        await order.save();
        break;
    }

    sendResponse(res, 200, "Tạo đơn hàng thành công", {
      order,
      payment: { ...payment._doc, paymentUrl },
    });
  },

  handleMomoPaymentCallback: async (req, res) => {
    try {
      // console.log(req.body);
      const { orderId, resultCode } = req.body;

      const order = await Order.findById(orderId);
      if (!order) {
        return sendResponse(res, 404, "Không tìm thấy đơn hàng");
      }

      const payment = await Payment.findOne({ orderId });

      if (resultCode == 0) {
        order.status = "Order successful";
        payment.status = "success";
      } else {
        order.status = "Failure";
        payment.status = "failure";
      }
      await order.save();
      await payment.save();

      // console.log("ORDER: \n", order._doc);
      // console.log("PAYMENT: \n", payment._doc);

      res.send("Thenkiu");
      // sendResponse(res, 200, "Cập nhật trạng thái đơn hàng thành công", {
      //   order: order._doc,
      //   payment: payment._doc,
      // });
    } catch (error) {
      console.error(error);
      sendResponse(
        res,
        500,
        "Lỗi API callback thanh toán MOMO",
        error.toString()
      );
    }
  },

  handleZaloPaymentCallback: async (req, res) => {
    try {
      let result = {};
      // console.log(req.body);
      let dataStr = req.body.data;
      let reqMac = req.body.mac;

      let mac = CryptoJS.HmacSHA256(
        dataStr,
        "kLtgPl8HHhfvMuDHPwKfgfsY4Ydm9eIz"
      ).toString();
      // console.log("mac =", mac);

      // kiểm tra callback hợp lệ (đến từ ZaloPay server)
      if (reqMac !== mac) {
        // callback không hợp lệ
        result.return_code = -1;
        result.return_message = "mac not equal";
      } else {
        // thanh toán thành công
        // merchant cập nhật trạng thái cho đơn hàng ở đây
        let dataJson = JSON.parse(dataStr, "kLtgPl8HHhfvMuDHPwKfgfsY4Ydm9eIz");
        const orderId = dataJson["app_trans_id"].split("_")[1];

        // console.log(orderId);
        const order = await Order.findById(orderId);
        if (!order) {
          return sendResponse(res, 404, "Không tìm thấy đơn hàng");
        }

        const payment = await Payment.findOne({ orderId });

        order.status = "Order successful";
        payment.status = "success";

        await order.save();
        await payment.save();

        // console.log("ORDER: \n", order._doc);
        // console.log("PAYMENT: \n", payment._doc);

        result.return_code = 1;
        result.return_message = "success";
      }
      res.json(result);
    } catch (error) {
      console.error(error);
      sendResponse(
        res,
        500,
        "Lỗi API callback thanh toán MOMO",
        error.toString()
      );
    }
  },
};

module.exports = orderController;
