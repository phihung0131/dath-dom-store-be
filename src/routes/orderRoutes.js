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

/**
 * @swagger
 * /api/v1/orders:
 *   post:
 *     summary: CUSTOMER - Tạo đơn hàng
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "66f6405f15cc467edadcd4a2"
 *                     quantity:
 *                       type: integer
 *                       example: 2
 *                     color:
 *                       type: string
 *                       example: "Black"
 *                     size:
 *                       type: integer
 *                       example: 48
 *               codeVoucher:
 *                 type: string
 *                 example: ""
 *               paymentMethod:
 *                 type: string
 *                 enum: [ZALO, MOMO, COD]
 *                 example: "COD"
 *               name:
 *                 type: string
 *                 example: "Hùng"
 *               phone:
 *                 type: string
 *                 example: "0345812804"
 *               address:
 *                 type: string
 *                 example: "HCM"
 *     responses:
 *       'XXX':
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
