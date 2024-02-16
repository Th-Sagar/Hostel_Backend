const User = require('../model/user-model')
const bcrypt = require('bcrypt')

const updateController = async (req,res)=>{
    try {
        const {firstname,lastname,email} = req.body;
        const userExist = await User.findOne({email:email});
        const salt = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(req.body.password,salt)

       const updateUser =  await userExist.updateOne({firstname,lastname,password:hash_password});

        res.status(200).json({message:updateUser})
        
    } catch (error) {
        console.log(error)
        
    }


}

module.exports= updateController;