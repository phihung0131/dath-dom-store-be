const mongoose = require("mongoose");

const { connectionDatabase } = require("../config/database");

const {seedCategories} = require ("./categorySeeder")
const {seedProducts} = require ("./productSeeder")

connectionDatabase();

seedProducts(mongoose)