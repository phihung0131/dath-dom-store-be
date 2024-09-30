const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const CartSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Tên sản phẩm là bắt buộc"],
      trim: true, // Xóa khoảng cách đầu và cuối
      minlength: [3, "Tên sản phẩm phải dài ít nhất 3 ký tự"],
    },
    description: {
      type: String,
      required: [true, "Mô tả sản phẩm là bắt buộc"],
      minlength: [10, "Mô tả sản phẩm phải dài ít nhất 10 ký tự"],
    },
    price: {
      type: Number,
      required: [true, "Giá sản phẩm là bắt buộc"],
      min: [0, "Giá phải là số dương"],
    },
    imageUrl: {
      type: [String],
      validate: {
        validator: function (value) {
          return value.every((url) =>
            /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(url)
          ); // Validates if each string is a valid image URL
        },
        message:
          "Mỗi URL hình ảnh phải hợp lệ và ở định dạng jpg, jpeg, png hoặc gif",
      },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Danh mục sản phẩm là bắt buộc"],
    },
    totalRate: {
      type: Number,
      min: [0, "Tổng tỷ lệ phải ít nhất là 0"],
      max: [5, "Tổng tỷ lệ không được vượt quá 5"],
      default: 0,
    },
    infos: [
      {
        color: {
          type: String,
          required: [true, "Màu sắc là bắt buộc"],
          // enum: ["Red", "Blue", "Green", "Black", "White"], // Example color choices
        },
        size: {
          type: Number,
          required: [true, "Kích thước là bắt buộc"],
          min: [1, "Kích thước phải ít nhất là 1"],
        },
        quantity: {
          type: Number,
          required: [true, "Số lượng là bắt buộc"],
          min: [0, "Số lượng phải là một số không âm"],
        },
      },
    ],
  },
  { timestamps: true }
);

// Apply mongoose-delete plugin with options
CartSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
  indexFields: ["deletedAt"],
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
