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

// // Tìm kiếm và lọc sản phẩm với phân trang
// router.get("/carts/search", cartsController.searchAndFilterCarts);

// // Lấy chi tiết sản phẩm theo ID
// router.get("/carts/:id", cartsController.getCart);

// // Tạo sản phẩm mới
// router.post("/carts", (req, res) => res.send("Chưa làm"));

// // Cập nhật sản phẩm
// router.put("/carts/:id", (req, res) => res.send("Chưa làm"));

// // Xóa sản phẩm
// router.delete("/carts/:id", (req, res) => res.send("Chưa làm"));

module.exports = router;

/**
 * @swagger
 * /api/v1/carts:
 *   get:
 *     summary: Lấy tất cả sản phẩm với phân trang
 *     tags:
 *       - Carts
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Vị trí trang
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
/**
 * @swagger
 * /api/v1/carts/search:
 *   get:
 *     summary: Tìm kiếm và lọc sản phẩm với phân trang
 *     tags:
 *       - Carts
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Vị trí trang
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Số sản phẩm trong 1 trang
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Tên sản phẩm cần tìm
 *         example: Adizero Adios Pro 2
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Danh mục sản phẩm cần tìm
 *         example: Giày Thời Trang Nữ
 *       - in: query
 *         name: priceRange
 *         schema:
 *           type: string
 *         description: Khoảng giá sản phẩm cần tìm
 *         example: 1000-200000
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
/**
 * @swagger
 * /api/v1/carts/{id}:
 *   get:
 *     summary: Lấy chi tiết sản phẩm theo ID
 *     tags:
 *       - Carts
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         description: Id của sản phẩm cần xem
 *         require: true
 *         example: 66f6405f15cc467edadcd480
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
