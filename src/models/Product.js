const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const ProductSchema = new mongoose.Schema(
  {
    name: String,,
    description: String,
    price: Number,
    imageUrl: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    },
    infos: [{
      color: String,
      size: Number,
      stock: Number
    }]
  },
  { timestamps: true }
);

// Áp dụng plugin mongoose-delete với các tùy chọn
ProductSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
  indexFields: ["deletedAt"],
});

const Product = new mongoose.model("Product", ProductSchema);

module.exports = { Product };
