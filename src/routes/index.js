const express = require("express");
const router = express.Router();

const productRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes");
const cartRoutes = require("./cartRoutes");
const reviewRoutes = require("./reviewRoutes");
const promotionRoutes = require("./promotionRoutes");
const orderRoutes = require("./orderRoutes")
const paymentRoutes = require("./paymentRoutes")

router.use("/", productRoutes);
router.use("/", authRoutes);
router.use("/", cartRoutes);
router.use("/", reviewRoutes);
router.use("/", promotionRoutes);
router.use("/", orderRoutes);
router.use("/", paymentRoutes);

module.exports = router;
