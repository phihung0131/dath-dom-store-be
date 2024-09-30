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
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),
  authController.loginSuccess
);

//Test
router.get(
  "/login/customer",
  [authMiddleware.verifyToken, authMiddleware.isCustomer],
  authController.loginSuccess
);
router.get(
  "/login/admin",
  [authMiddleware.verifyToken, authMiddleware.isAdminOrOwner],
  authController.loginSuccess
);
router.get(
  "/login/owner",
  [authMiddleware.verifyToken, authMiddleware.isOwner],
  authController.loginSuccess
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
