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
