const express = require("express");
const multer = require("multer");

const { createPostController } = require("../controllers/post.controller");

const authMiddleware = require("../middlewares/auth.middleware")


const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

//Create post
router.post("/",authMiddleware, upload.single("image"), createPostController);

module.exports = router;
