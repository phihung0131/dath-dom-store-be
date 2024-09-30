const express = require("express");
const router = express.Router();

const productRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes")
const cartRoutes = require("./cartRoutes");

router.use("/", productRoutes);
router.use("/", authRoutes);
router.use("/", cartRoutes);

module.exports = router;
