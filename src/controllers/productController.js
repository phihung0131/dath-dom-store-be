const sendResponse = require("../helper/sendResponse");
const Product = require("../models/Product");
const Category = require("../models/Category");
require("dotenv").config();

const productsController = {
  // Lấy danh sách tất cả sản phẩm
  getAllProducts: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // Trang hiện tại (mặc định 1)
      const limit = parseInt(req.query.limit) || 10; // Số lượng sản phẩm trên mỗi trang (mặc định 10)
      const skip = (page - 1) * limit; // Bỏ qua các sản phẩm trước trang hiện tại

      // Lấy tất cả sản phẩm theo phân trang
      const products = await Product.find()
        .sort({ createdAt: -1 }) // Sắp xếp theo ngày tạo từ mới nhất đến cũ nhất
        .skip(skip)
        .limit(limit)
        .select("-infos -deleted -createdAt -updatedAt -__v")
        .populate({ path: "category", select: "name -_id" });

      // Tổng số lượng sản phẩm
      const total = await Product.countDocuments();
      sendResponse(res, 200, "Lấy dữ liệu Product thành công", {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        products,
      });
      // Trả về kết quả
    } catch (error) {
      sendResponse(
        res,
        500,
        `Có lỗi xảy ra khi lấy dữ liệu Product: ${error.message}`,
        {
          error: error.toString(),
          stack: error.stack,
        }
      );
    }
  },

  // Tìm kiếm và lọc sản phẩm theo các tiêu chí
  searchAndFilterProducts: async (req, res) => {
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

      const products = await Product.find(query)
        .skip(skip)
        .limit(limit)
        .select("-infos -deleted -createdAt -updatedAt -__v")
        .populate({ path: "category", select: "name -_id" });
      const total = await Product.countDocuments(query);

      sendResponse(res, 200, "Tìm kiếm dữ liệu Product thành công", {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
        products,     
      });
    } catch (error) {
      sendResponse(
        res,
        500,
        `Có lỗi xảy ra khi lấy tìm kiếm Product: ${error.message}`,
        {
          error: error.toString(),
          stack: error.stack,
        }
      );
    }
  },

  // Lấy thông tin chi tiết của một sản phẩm
  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id)
        .select("-deleted -createdAt -updatedAt -__v")
        .populate({ path: "category", select: "name -_id" });
      if (!product) sendResponse(res, 404, "Sản phẩm không tồn tại");
      sendResponse(
        res,
        200,
        "Lấy dữ liệu chi tiết Product thành công",
        product
      );
    } catch (error) {
      sendResponse(
        res,
        500,
        `Có lỗi xảy ra khi lấy dữ liệu Product: ${error.message}`,
        {
          error: error.toString(),
          stack: error.stack,
        }
      );
    }
  },

  // Tạo sản phẩm mới
  createProduct: async (req, res) => {
    // logic thêm sản phẩm mới
  },

  // Cập nhật sản phẩm
  updateProduct: async (req, res) => {
    // logic cập nhật sản phẩm
  },

  // Xóa sản phẩm
  deleteProduct: async (req, res) => {
    // logic xóa sản phẩm
  },
};

module.exports = productsController;
