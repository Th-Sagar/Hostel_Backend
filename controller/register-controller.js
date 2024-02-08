const User = require("../model/user-model.js");

const register = async (req, res) => {
  try {
    const { username, email, password, phone, isAdmin } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }
    const userCreated = await User.create({
      username,
      email,
      password,
      phone,
      isAdmin,
    });
    res
      .status(201)
      .json({
        msg: "User created successfully",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    console.log("Error in register", error);
  }
};

module.exports = register;
