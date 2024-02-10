const Reset = require("../model/reset-model");
const User = require("../model/user-model");

const resetController = async (req, res) => {
  const { email } = req.body;
  const userExist = await User.findOne({ email: email });
  if (!userExist) {
   return res.status(400).json({ message: "User does not exist" });
  }
  const resetToken = Math.floor(100000 + Math.random() * 900000);
  const expirationTime = new Date();
  expirationTime.setMinutes(expirationTime.getMinutes() + 5);

  const resetPassword = await Reset.create({
    email: email,
    resetToken: resetToken,
    expiryDate: expirationTime,
  });


  res.status(200).json({ msg: resetPassword });
};
module.exports = resetController;
