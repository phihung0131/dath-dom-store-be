const mongoose = require("mongoose");

const { connectionDatabase } = require("../config/database");

const {seedCategories} = require ("./categorySeeder")
const {seedProducts} = require ("./productSeeder")
const {seedCarts} = require ("./cartSeeder")
connectionDatabase();

seedProducts(mongoose)
seedCarts()