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
    user,
  });
};

const loginController = async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username,
  });

  if (!user) {
    return res.status(404).json({
      message: "User Account Not Found",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid Password",
    });
  }

  const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token,{expries: new Date(Date.now()+ + 1000 * 60 * 60 * 24 * 7)});

  res.status(200).json({
    message: "User Login Successfully",
  });
};

module.exports = {
  registerController,
  loginController,
};
