const express = require("express");
const multer = require("multer");

const { createPostController } = require("../controllers/post.controller");


const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

//Create post
router.post("/", upload.single("image"), createPostController);

module.exports = router;
