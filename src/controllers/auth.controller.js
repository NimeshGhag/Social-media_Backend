const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

const registerController = async (req, res) => {
  const { username, password } = req.body;

  const isUser = await userModel.findOne({
    username,
  });

  if (isUser) {
    return res.status(400).json({
      message: "User Already Exists",
    });
  }

  const user = await userModel.create({
    username,
    password: await bcrypt.hash(password, 10),
  });

  const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token);

  res.status(201).json({
    message: "User Register Successfully",
    user
  });
};

module.exports = { registerController };
