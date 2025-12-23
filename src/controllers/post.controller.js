

const createPostController = async (req, res) => {
  try {
    const file = req.file;

    const { prompt } = req.body;

    return res.status(200).json({
      message: "Create post route working 👍",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = { createPostController };
