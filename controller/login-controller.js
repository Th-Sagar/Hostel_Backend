const User = require("../model/user-model.js");

const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const userExist = await User.findOne({ email: email });
    if(!userExist){
        res.status(400).json({message:"User does not exist"})
    }

    const user = await userExist.comparePassword(password);

    if(user){
        res.status(200).json({
            msg:"User login successfully",
            token: await userExist.generateToken(),
            userId:userExist._id.toString(),
        })
    }
    else{
        res.status(400).json({message:"Invalid email or password"})
    }
  } catch (error) {
    console.log("Error from the login controller", error);
  }
};

module.exports = login;
