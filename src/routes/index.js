const express = require("express");
const router = express.Router();

const productRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes");
const cartRoutes = require("./cartRoutes");
const reviewRoutes = require("./reviewRoutes");
const promotionRoutes = require("./promotionRoutes");
const orderRoutes = require("./orderRoutes")
const paymentRoutes = require("./paymentRoutes")
const userRoutes = require("./userRoutes")
const voucherRoutes = require("./voucherRoutes")

router.use("/", productRoutes);
router.use("/", authRoutes);
router.use("/", cartRoutes);
router.use("/", reviewRoutes);
router.use("/", promotionRoutes);
router.use("/", orderRoutes);
router.use("/", paymentRoutes);
router.use("/", userRoutes);
router.use("/", voucherRoutes);

module.exports = router;
