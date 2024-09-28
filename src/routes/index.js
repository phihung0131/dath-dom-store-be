const express = require("express");
const router = express.Router();

const productRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes")

router.use("/", productRoutes);
router.use("/", authRoutes);

module.exports = router;
