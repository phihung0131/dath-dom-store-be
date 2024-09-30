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
      sendResponse(res, 201, "Đăng kí người dùng thành công", { user, token });
    } catch (error) {
      sendResponse(res, 500, `Lỗi đăng kí người dùng mới`, {
        error: error.toString(),
        stack: error.stack,
      });
    }
  },

  loginSuccess: (req, res) => {
    const token = generateToken(req.user);
    console.log(token);

    // Chuyển hướng về frontend với token trong URL
    const frontendUrl = `${process.env.FRONTEND_URL_TOKEN}?token=${token}`;

    res.redirect(frontendUrl);

    // sendResponse(res, 200, "Đăng nhập thành công", { user: req.user, token });
  },

  test: (req, res) => {
    const token = generateToken(req.user);
    sendResponse(res, 200, "Đăng nhập thành công", { user: req.user, token });
  },
};

module.exports = authController;
