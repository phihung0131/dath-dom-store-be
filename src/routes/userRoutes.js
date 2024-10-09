const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/auth");

// Xem thông tin cá nhân
router.get(
  "/users/profile",
  authMiddleware.verifyToken,
  userController.getPersonalInfo
);

// Cập nhật thông tin cá nhân
router.put(
  "/users/profile",
  authMiddleware.verifyToken,
  userController.updatePersonalInfo
);

// Đổi mật khẩu
router.put(
  "/users/change-password",
  authMiddleware.verifyToken,
  userController.changePassword
);

module.exports = router;

/**
 * @swagger
 * /api/v1/users/profile:
 *   get:
 *     summary: OWNER/ADMIN/CUSTOMER - Xem thông tin cá nhân
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
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
 * /api/v1/users/profile:
 *   put:
 *     summary: OWNER/ADMIN/CUSTOMER - Sửa thông tin cá nhân
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
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
 * /api/v1/users/change-password:
 *   put:
 *     summary: OWNER/ADMIN/CUSTOMER - Thay đổi mật khẩu
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currentPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
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
