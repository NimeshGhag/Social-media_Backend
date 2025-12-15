const express = require("express");
const authRoutes = require("../src/routes/auth.routes");

const app = express();

// middleware
app.use(express.json());


//Routes
app.use("/api/auth", authRoutes);

module.exports = app;
