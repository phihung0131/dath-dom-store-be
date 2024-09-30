const sendResponse = require("../helper/sendResponse");
const Cart = require("../models/Cart");
const Category = require("../models/Category");
require("dotenv").config();

const cartsController = {
  // Lấy danh sách tất cả sản phẩm
  getAllCarts: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // Trang hiện tại (mặc định 1)
      const limit = parseInt(req.query.limit) || 10; // Số lượng sản phẩm trên mỗi trang (mặc định 10)
      const skip = (page - 1) * limit; // Bỏ qua các sản phẩm trước trang hiện tại

      // Lấy tất cả sản phẩm theo phân trang
      const carts = await Cart.find()
        .sort({ createdAt: -1 }) // Sắp xếp theo ngày tạo từ mới nhất đến cũ nhất
        .skip(skip)
        .limit(limit)
        .select("-infos -deleted -createdAt -updatedAt -__v")
        .populate({ path: "category", select: "name -_id" });

      // Tổng số lượng sản phẩm
      const total = await Cart.countDocuments();
      sendResponse(res, 200, "Lấy dữ liệu Cart thành công", {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        carts,
      });
      // Trả về kết quả
    } catch (error) {
      sendResponse(
        res,
        500,
        `Có lỗi xảy ra khi lấy dữ liệu Cart: ${error.message}`,
        {
          error: error.toString(),
          stack: error.stack,
        }
      );
    }
  },

  // Tìm kiếm và lọc sản phẩm theo các tiêu chí
  searchAndFilterCarts: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const searchQuery = req.query.search || "";
      const category = req.query.category || null;
      const priceRange = req.query.priceRange || null;

      let query = { name: { $regex: searchQuery, $options: "i" } };

      if (category) {
        categoryTemp = await Category.findOne({
          name: { $regex: category, $options: "i" },
        });
        if (categoryTemp) {
          query.category = categoryTemp._id;
        }
      }

      if (priceRange) {
        const [minPrice, maxPrice] = priceRange.split("-");
        query.price = { $gte: minPrice, $lte: maxPrice };
      }

      const carts = await Cart.find(query)
        .skip(skip)
        .limit(limit)
        .select("-infos -deleted -createdAt -updatedAt -__v")
        .populate({ path: "category", select: "name -_id" });
      const total = await Cart.countDocuments(query);

      sendResponse(res, 200, "Tìm kiếm dữ liệu Cart thành công", {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        carts,     
      });
    } catch (error) {
      sendResponse(
        res,
        500,
        `Có lỗi xảy ra khi lấy tìm kiếm Cart: ${error.message}`,
        {
          error: error.toString(),
          stack: error.stack,
        }
      );
    }
  },

  // Lấy thông tin chi tiết của một sản phẩm
  getCart: async (req, res) => {
    try {
      const cart = await Cart.findById(req.params.id)
        .select("-deleted -createdAt -updatedAt -__v")
        .populate({ path: "category", select: "name -_id" });
      if (!cart) sendResponse(res, 404, "Sản phẩm không tồn tại");
      sendResponse(
        res,
        200,
        "Lấy dữ liệu chi tiết Cart thành công",
        cart
      );
    } catch (error) {
      sendResponse(
        res,
        500,
        `Có lỗi xảy ra khi lấy dữ liệu Cart: ${error.message}`,
        {
          error: error.toString(),
          stack: error.stack,
        }
      );
    }
  },

  // Tạo sản phẩm mới
  createCart: async (req, res) => {
    // logic thêm sản phẩm mới
  },

  // Cập nhật sản phẩm
  updateCart: async (req, res) => {
    // logic cập nhật sản phẩm
  },

  // Xóa sản phẩm
  deleteCart: async (req, res) => {
    // logic xóa sản phẩm
  },
};

module.exports = cartsController;
