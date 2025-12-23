const express = require("express");
const cookieParser = require("cookie-parser");

const authRoutes = require("../src/routes/auth.routes");
const postRoutes = require("../src/routes/post.route");

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/auth", authRoutes);

app.use("/api/post", postRoutes);

module.exports = app;
