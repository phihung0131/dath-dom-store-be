const express = require("express");
const router = express.Router();
const cartsController = require("../controllers/cartController");

// Lấy tất cả sản phẩm với phân trang
router.get("/carts", cartsController.getAllCarts);

// Tìm kiếm và lọc sản phẩm với phân trang
router.get("/carts/search", cartsController.searchAndFilterCarts);

// Lấy chi tiết sản phẩm theo ID
router.get("/carts/:id", cartsController.getCart);

// Tạo sản phẩm mới
router.post("/carts", (req, res) => res.send("Chưa làm"));

// Cập nhật sản phẩm
router.put("/carts/:id", (req, res) => res.send("Chưa làm"));

// Xóa sản phẩm
router.delete("/carts/:id", (req, res) => res.send("Chưa làm"));

module.exports = router;
