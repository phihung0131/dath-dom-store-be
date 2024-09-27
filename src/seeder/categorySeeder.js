const mongoose = require('mongoose');
const { Category } = require('../models/Category');

// Dữ liệu mẫu cho danh mục giày dép
const categories = [
  { name: 'Giày Thể Thao Nam', description: 'Các mẫu giày thể thao dành cho nam giới' },
  { name: 'Giày Thể Thao Nữ', description: 'Các mẫu giày thể thao dành cho nữ giới' },
  { name: 'Giày Lười Nam', description: 'Các mẫu giày lười tiện lợi dành cho nam' },
  { name: 'Giày Lười Nữ', description: 'Các mẫu giày lười tiện lợi dành cho nữ' },
  { name: 'Giày Cao Gót', description: 'Các mẫu giày cao gót thời trang' },
  { name: 'Giày Búp Bê', description: 'Giày búp bê thoải mái cho phái nữ' },
  { name: 'Dép Sandal Nam', description: 'Dép sandal tiện lợi cho nam giới' },
  { name: 'Dép Sandal Nữ', description: 'Dép sandal thời trang cho nữ giới' },
  { name: 'Giày Tăng Chiều Cao Nam', description: 'Giày dành cho nam giúp tăng chiều cao' },
  { name: 'Giày Đi Mưa', description: 'Giày chống nước chuyên dụng' },
  { name: 'Giày Thời Trang Nam', description: 'Các mẫu giày thời trang dành cho nam giới' },
  { name: 'Giày Thời Trang Nữ', description: 'Các mẫu giày thời trang dành cho nữ giới' },
  { name: 'Dép Xỏ Ngón Nam', description: 'Dép xỏ ngón phong cách dành cho nam' },
  { name: 'Dép Xỏ Ngón Nữ', description: 'Dép xỏ ngón thời trang dành cho nữ' },
  { name: 'Giày Sneaker Nam', description: 'Giày sneaker phong cách dành cho nam' },
  { name: 'Giày Sneaker Nữ', description: 'Giày sneaker phong cách dành cho nữ' },
  { name: 'Giày Công Sở Nam', description: 'Giày công sở dành cho nam giới' },
  { name: 'Giày Công Sở Nữ', description: 'Giày công sở thời trang dành cho nữ' },
  { name: 'Dép Cao Su', description: 'Dép cao su tiện lợi, dễ vệ sinh' },
  { name: 'Giày Da Nam', description: 'Giày da sang trọng dành cho nam' }
];

// Seed dữ liệu vào Category
const seedCategories = async (mongoose) => {
  try {
    await Category.deleteMany(); // Xóa tất cả danh mục hiện có
    const insertedCategories = await Category.insertMany(categories); // Thêm danh mục mới
    console.log('Categories seeded:', insertedCategories);
  } catch (err) {
    console.log(err);
    mongoose.connection.close(); // Đóng kết nối trong trường hợp xảy ra lỗi
  }
};

module.exports = { seedCategories };
