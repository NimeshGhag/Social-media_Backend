const express = require("express");

const { registerController } = require("../controllers/auth.controller");

const router = express.Router();

//Register APT
router.post("/register", registerController);

module.exports = router;
