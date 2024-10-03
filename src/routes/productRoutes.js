const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productController");

// Lấy tất cả sản phẩm với phân trang
router.get("/products", productsController.getAllProducts);

// Tìm kiếm và lọc sản phẩm với phân trang
router.get("/products/search", productsController.searchAndFilterProducts);

// Lấy chi tiết sản phẩm theo ID
router.get("/products/:id", productsController.getProduct);

// Tạo sản phẩm mới
router.post("/products", (req, res) => res.send("Chưa làm"));

// Cập nhật sản phẩm
router.put("/products/:id", (req, res) => res.send("Chưa làm"));

// Xóa sản phẩm
router.delete("/products/:id", (req, res) => res.send("Chưa làm"));

module.exports = router;

/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: "ALL - Lấy tất cả sản phẩm với phân trang (Note: Product nào có khuyễn mãi sẽ có thêm thuộc tính promotionalPrice)"
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Vị trí trang (không có thì mặc định 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Số sản phẩm trong 1 trang (không có thì mặc định 10)
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
 * /api/v1/products/search:
 *   get:
 *     summary: ALL - Tìm kiếm và lọc sản phẩm với phân trang
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Vị trí trang (không có thì mặc định 1)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Số sản phẩm trong 1 trang (không có thì mặc định 10)
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
 *         example: Giày chạy bộ nam
 *       - in: query
 *         name: priceRange
 *         schema:
 *           type: string
 *         description: Khoảng giá sản phẩm cần tìm
 *         example: 1000-200000
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Sắp xếp theo gì (name/prire/rating) => không điền thì xếp theo sản phẩm mới nhất
 *         example: name
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *         description: Giảm dần hay tăng dần (mặc định là tăng)
 *         example: desc
 *       - in: query
 *         name: minRating
 *         schema:
 *           type: string
 *         description: Lọc theo rating 
 *         example: 3
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
 * /api/v1/products/{id}:
 *   get:
 *     summary: "ALL - Lấy chi tiết sản phẩm theo ID (Note Product nào có khuyễn mãi sẽ có thêm thuộc tính promotionalPrice)"
 *     tags:
 *       - Products
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
