const express = require("express");

const { registerController,loginController } = require("../controllers/auth.controller");

const router = express.Router();

//Register APT
router.post("/register", registerController);

// LOGIN API
router.post("/login", loginController);

module.exports = router;
