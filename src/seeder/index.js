const mongoose = require("mongoose");
const { connectionDatabase } = require("../config/database");
const { seedProducts } = require("./productSeeder");

// Import your Product model
require('../models/Product');  // Adjust the path as necessary

async function runSeeder() {
  try {
    await connectionDatabase();
    console.log("Connected to database.");
    await seedProducts();
    console.log("Seeding completed.");
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await mongoose.connection.close();
    console.log("Database connection closed.");
  }
}

runSeeder();