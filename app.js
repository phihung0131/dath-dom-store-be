const express = require("express");
const cors = require("cors");
const session = require('express-session');
const passport = require('./src/config/passport');
require("dotenv").config();
const setupSwaggerDocs = require("./src/docs/api");
const routes = require("./src/routes");
const { connectionDatabase } = require("./src/config/database");


const app = express();

const hostname = process.env.HOSTNAME;
const port = process.env.PORT || 8081;

// Middleware: Enable CORS for specified origin
let corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// Middleware: Parse requests with JSON payload
app.use(express.json());

// Middleware: Parse requests with x-www-form-urlencoded content type
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'dom-store-project',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/v1", routes); 

// API Document
setupSwaggerDocs(app, port);

// Connect to the database
connectionDatabase();

// Start the server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
