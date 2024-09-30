const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const authMiddleware = require("../middlewares/auth");
const authController = require("../controllers/authController");

const router = express.Router();

// Đăng ký tài khoản local
router.post("/register", authController.register);

// Đăng nhập local
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  authController.loginSuccess
);

// Đăng nhập Facebook
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { session: false, scope: ["email"] })
);
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    session: false,
    failureRedirect: "/login",
  }),
  authController.loginSuccess
);

// Đăng nhập Google
router.get(
  "/auth/google",
  passport.authenticate("google", {
    session: false,
    scope: ["profile", "email"],
  })
);
router.get("/auth/google/callback", (req, res, next) => {
  passport.authenticate("google", { session: false }, async (err, user, info) => {
    if (err) {
      return next(err); // Nếu có lỗi, chuyển đến middleware xử lý lỗi
    }
    if (!user) {
      return res.redirect("/login"); // Chuyển hướng đến trang đăng nhập nếu không tìm thấy người dùng
    }

    // Nếu xác thực thành công, gọi hàm loginSuccess của bạn
    req.user = user; // Đặt người dùng vào req để sử dụng trong loginSuccess
    return authController.loginSuccess(req, res); // Gọi hàm loginSuccess
  })(req, res, next);
});

//Test
router.get(
  "/login/customer",
  [authMiddleware.verifyToken, authMiddleware.isCustomer],
  authController.test
);
router.get(
  "/login/admin",
  [authMiddleware.verifyToken, authMiddleware.isAdminOrOwner],
  authController.test
);
router.get(
  "/login/owner",
  [authMiddleware.verifyToken, authMiddleware.isOwner],
  authController.test
);

module.exports = router;

/**
 * @swagger
 * /api/v1/register:
 *   post:
 *     summary: Đăng kí
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: 456
 *               password:
 *                 type: string
 *                 example: 456
 *               name:
 *                 type: string
 *                 example: 456
 *               address:
 *                 type: string
 *                 example: 456
 *               email:
 *                 type: string
 *                 example: 456
 *     responses:
 *       'XXX':
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: Đăng nhập local (Dùng tài khoản và mật khẩu bình thường)
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: 456
 *               password:
 *                 type: string
 *                 example: 456
 *     responses:
 *       'XXX':
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
/**
 * @swagger
 * /api/v1/auth/facebook:
 *   get:
 *     summary: Đăng nhập facebook (test trên trình duyệt, test trên đây không được đâu)
 *     tags:
 *       - Auth
 *     responses:
 *       'XXX':
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
/**
 * @swagger
 * /api/v1/auth/google:
 *   get:
 *     summary: Đăng nhập google (test trên trình duyệt, test trên đây không được đâu)
 *     tags:
 *       - Auth
 *     responses:
 *       'XXX':
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
/**
 * @swagger
 * /api/v1/login/customer:
 *   get:
 *     summary: Test xem đăng nhập đã thành công hay chưa
 *     tags:
 *       - Auth
 *     security:
 *       - bearerAuth: [] # Kết nối security scheme với API
 *     responses:
 *       'XXX':
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
/**
 * @swagger
 * /api/v1/login/admin:
 *   get:
 *     summary: Test xem đăng nhập đã thành công hay chưa
 *     tags:
 *       - Auth
 *     security:
 *       - bearerAuth: [] # Kết nối security scheme với API
 *     responses:
 *       'XXX':
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
/**
 * @swagger
 * /api/v1/login/owner:
 *   get:
 *     summary: Test xem đăng nhập đã thành công hay chưa
 *     tags:
 *       - Auth
 *     security:
 *       - bearerAuth: [] # Kết nối security scheme với API
 *     responses:
 *       'XXX':
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
