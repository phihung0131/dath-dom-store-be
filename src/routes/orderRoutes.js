const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authMiddleware = require("../middlewares/auth");

// Tạo đơn hàng
router.post(
  "/orders",
  [authMiddleware.verifyToken, authMiddleware.isCustomer],
  orderController.create
);

module.exports = router;
