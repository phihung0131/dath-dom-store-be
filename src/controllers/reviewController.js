const sendResponse = require("../helper/sendResponse");
const Review = require("../models/Review");
const productsController = require("./productController");

const reviewController = {
  create: async (req, res) => {
    try {
      const { product, comment, rating } = req.body;
      const customer = req.user._id;

      // Check if the user has already reviewed this product
      const existingReview = await Review.findOne({ customer, product });
      if (existingReview) {
        return sendResponse(
          res,
          400,
          "Bạn đã đánh giá sản phẩm này rồi",
          existingReview
        );
      }

      const newReview = new Review({
        customer,
        product,
        comment,
        rating,
      });

      await newReview.save();

      // Update product's totalRate
      await productsController.updateProductTotalRate(product);

      sendResponse(res, 201, "Tạo Review thành công", newReview);
    } catch (error) {
      sendResponse(res, 400, "Lỗi tạo Review", error.toString());
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { comment, rating } = req.body;

      const review = await Review.findById(id);
      if (!review) {
        return sendResponse(res, 404, "Không tìm thấy review");
      }

      if (req.user._id != review.customer) {
        return sendResponse(res, 400, "Bạn không có quyền sửa review này");
      }

      review.comment = comment;
      review.rating = rating;

      await review.save();

      // Update product's totalRate
      await productsController.updateProductTotalRate(review.product);

      sendResponse(res, 200, "Sửa Review thành công", review);
    } catch (error) {
      sendResponse(res, 400, "Lỗi sửa Review", error.toString());
    }
  },

  del: async (req, res) => {
    try {
      const { id } = req.params;

      const review = await Review.findById(id);
      if (!review) {
        return sendResponse(res, 404, "Không tìm thấy review");
      }

      if (req.user._id != review.customer) {
        return sendResponse(res, 400, "Bạn không có quyền sửa review này");
      }

      const productId = review.product;

      await review.delete(); // Using soft delete from mongoose-delete

      // Update product's totalRate
      await productsController.updateProductTotalRate(productId);

      sendResponse(res, 200, "Xóa Review thành công");
    } catch (error) {
      sendResponse(res, 400, "Lỗi xóa Review", error.toString());
    }
  },
};

module.exports = reviewController;
