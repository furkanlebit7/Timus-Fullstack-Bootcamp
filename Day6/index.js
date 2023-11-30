const express = require("express");
const routes = require("./routes");
const middlewares = require("./middlewares");
require("dotenv").config();

const app = express();

// Setup middlewares
middlewares(app);

// Import database connection and initial queries
require("./initialDbQueries");

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to User and Notes API");
});

// Routes
app.use("/api", routes);

// Runs server on the specified port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
