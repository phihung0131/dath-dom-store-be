const express = require("express");
const router = express.Router();

const productRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes");
const cartRoutes = require("./cartRoutes");
const reviewRoutes = require("./reviewRoutes");
const promotionRoutes = require("./promotionRoutes");

router.use("/", productRoutes);
router.use("/", authRoutes);
router.use("/", cartRoutes);
router.use("/", reviewRoutes);
router.use("/", promotionRoutes);

module.exports = router;
