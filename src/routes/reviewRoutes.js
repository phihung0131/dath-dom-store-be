const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth");
const reviewController = require("../controllers/reviewController");

// Add a new review
router.post(
  "/review",
  [authMiddleware.verifyToken, authMiddleware.isCustomer],
  reviewController.create
);

// Update a review
router.put(
  "/review/:id",
  [authMiddleware.verifyToken, authMiddleware.isCustomer],
  reviewController.update
);

// Delete a review
router.delete(
  "/review/:id",
  [authMiddleware.verifyToken, authMiddleware.isCustomer],
  reviewController.del
);

module.exports = router;
