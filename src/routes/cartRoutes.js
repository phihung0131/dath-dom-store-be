const express = require("express");
const router = express.Router();
const cartsController = require("../controllers/cartController");

const authMiddleware = require("../middlewares/auth");
// xem san pham trong gio hang
// hiển thị tổng giá trị đơn hàng
router.get(
  "/carts",
  [authMiddleware.verifyToken, authMiddleware.isCustomer],
  cartsController.getCarts
);
router.put('/carts', 
  [authMiddleware.verifyToken, authMiddleware.isCustomer],
  cartsController.updateCart
);
router.delete('/carts',
  [authMiddleware.verifyToken, authMiddleware.isCustomer],
  cartsController.deleteCart
);
module.exports = router;