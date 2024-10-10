const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth");

const reportController = require("../controllers/reportController");

// API báo cáo đơn hàng
router.get("/reports/orders/summary", reportController.getOrdersSumary);

// API báo cáo doanh thu
router.get("/reports/revenue/:period", reportController.getRevenue);

module.exports = router;

/**
 * @swagger
 * /api/v1/reports/revenue/{period}:
 *   get:
 *     summary: ADMIN/OWNER - Báo cáo doanh thu
 *     tags:
 *       - Reports
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: period
 *         required: true
 *         schema:
 *           type: string
 *         description: Nhóm kết quả theo ngày, tuần hoặc tháng (day/week/year)
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
 * /api/v1/reports/orders/summary:
 *   get:
 *     summary: OWNER/ADMIN - Báo cáo đơn hàng (phân loại từng đơn hàng, số lượng và giá tri trung bình)
 *     tags:
 *       - Reports
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
