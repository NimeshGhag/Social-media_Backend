const genrateCaption = require("../services/ai.service");

const createPostController = async (req, res) => {
  try {
    const file = req.file;

    const base64Image = new Buffer.from(file.buffer).toString("base64");

    const { prompt } = req.body;

    const caption = await genrateCaption(base64Image, prompt);

    return res.status(200).json({
      message: "Create post route working 👍",
      caption,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = { createPostController };
