const genrateCaption = require("../services/ai.service");
const { v4: uuidv4 } = require("uuid");
const upladFile = require("../services/storage.service");
const postModel = require("../models/post.model");

const createPostController = async (req, res) => {
  try {
    const file = req.file;

    const base64Image = new Buffer.from(file.buffer).toString("base64");

    const { prompt } = req.body;

    const caption = await genrateCaption(base64Image, prompt);

    const result = await upladFile(file.buffer, uuidv4());

    const post = await postModel.create({
      image: result.url,
      caption: caption,
      user: req.user._id,
    });

    return res.status(200).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = { createPostController };
