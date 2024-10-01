const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const sendResponse = require("../helper/sendResponse");
const User = require("../models/User");

require("dotenv").config();

const generateToken = (user) => {
  return jwt.sign({ ...user._doc }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

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
      const token = generateToken(user);

      const redirectUrl = `/auth-redirect?token=${token}`;
      res.redirect(redirectUrl);
    } catch (error) {
      sendResponse(res, 500, `Lỗi đăng kí người dùng mới`, {
        error: error.toString(),
        stack: error.stack,
      });
    }
  },

  loginSuccess: (req, res) => {
    const token = generateToken(req.user);
    const redirectUrl = `/auth-redirect?token=${token}`;
    res.redirect(redirectUrl);
  },

  getUserInfos: (req, res) => {
    sendResponse(res, 200, "Đăng nhập lấy thông tin User thành công", {
      user: req.user,
    });
  },
};

module.exports = authController;
