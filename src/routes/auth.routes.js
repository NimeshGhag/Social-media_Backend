const express = require("express");

const { registerController,loginController ,logoutController} = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

//Register APT
router.post("/register", registerController);

// LOGIN API
router.post("/login", loginController);

// Logout API
router.post("/logout",authMiddleware,logoutController);

module.exports = router;
