const User = require('../model/user-model')
const bcrypt= require('bcrypt')

const password = async(req,res)=>{
    try {
        const {email,password}= req.body;
        const salt = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(password,salt)
        await User.updateOne({email},{
            $set:{password:hash_password}
        })
        res.status(200).json({message:"Password updated successfully"})
        
    } catch (error) {
        console.log(error)
        
    }

}

module.exports = password