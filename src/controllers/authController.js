const passport = require("passport");
const bcrypt = require("bcryptjs");

const sendResponse = require("../helper/sendResponse");
const User = require("../models/User");

require("dotenv").config();

const authController = {
  register: async (req, res) => {
    try {
      const { name, address, username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        address,
        username,
        email,
        password: hashedPassword,
      });
      await user.save();
      sendResponse(res, 201, "Đăng kí người dùng thành công", user);
    } catch (error) {
      sendResponse(res, 500, `Lỗi đăng kí người dùng mới`, {
        error: error.toString(),
        stack: error.stack,
      });
    }
  },

  logout: (req, res) => {
    req.logout((err) => {
      if (err) {
        sendResponse(res, 500, "Lỗi đăng xuất", { error: err.toString() });
      }
      sendResponse(res, 200, "Đăng xuất thành công");
    });
  },

  loginSuccess: (req, res) => {
    sendResponse(res, 200, "Đăng nhập thành công", req.user);
  },
};

module.exports = authController;
