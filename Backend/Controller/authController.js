const User = require('../Model/authModel')
const jwt = require('jsonwebtoken')

const Token = (id)=>{
    return jwt.sign({id},process.env.JWT_TOKEN,{
        expiresIn:process.env.JWT_EXP
    })
}

exports.register = async(req,res) =>{
    const {name,email,password,confirmPassword} = req.body;

    const newUser = await User.create({name:name,email:email,password:password,confirmPassword:confirmPassword});
    if(!newUser){
        return res.status(400).json(
            {
                msg:"You are not Registered yet."
            }
        )
    }

    res.status(200).json(
        {
            msg:" Your Information Successfully Registered.",
            user:newUser
        }
    )
}


exports.login = async (req, res) =>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(400).json(
            {
                msg:"You are not entered emailId and password."
            }
        )
    }

    const user = await User.findOne({email: email}).select('+password')
    if(!user){
        return res.status(400).json(
            {
                msg:"User Account Not Found. You Need To Register First."
            }
        )
    }
    // console.log(user)
    const passCheck = await user.checkPassword(password,user.password)
    if(!passCheck){
        return res.status(400).json(
            {
                msg:"Password Missmatch."
            }
        )
    }

    const DAY = 7
    const tokenVal = await Token(user._id)
    res.status(200)
        .cookie('mobAuth',tokenVal, { maxAge: DAY * 24 * 60 * 60 * 1000, httpOnly: true })
        .json(
            {
                msg: 'Welcome You Logged In Successfully',
                name:user.name,
                email:user.email
            }
        )
}


exports.protect =async (req,res,next) =>{
    // try{
    // if(!req.headers.authorization || !req.headers.authorization.startsWith('sagnik')){
    //     res.status(404).json({
    //         status:"Fail",
    //         massage:"authorization is incorrect"
    //     })
    // }

    const {mobAuth} = req.cookies
    // console.log(mobAuth)
    if(!mobAuth){
        res.status(404).json({
            status:"Fail",
            massage:"token is incorrect"
        })
    }

    const {id} =await jwt.verify(mobAuth,process.env.JWT_TOKEN)
    // console.log(id)

    if(!id){
        return res.status(404).json({
            status:"Fail",
            massage:"Id is not Found."
        })
    }
    const data = await User.findById(id)
    // console.log(data)
    
    if(!data){
       return res.status(404).json({
            status:"Fail",
            massage:"Hear is no data"
        })
    } 
    req.user = data

    
    next()
// }catch(err=>{
//     res.status(200).json({
//         msg:"You are not loggedin"
//         // massage:err
//     })
// })
   

    // res.status(404).json({
    //     status:"Fail",
    //     massage:"authorization is incorrect"
    // })
   
}


exports.usersDetails = async (req,res)=>{
    const allUsers = await User.find()
    if(!allUsers){
        return res.status(400).json(
            {
                msg:"NO Users Found."
            }
        )
    }

    res.status(200).json(
        {
            msg:"Successfully get user destils.",
            allUsers
        }
    )
}


exports.desleteUser = async (req,res)=>{
    const userId = req.params.id
    if(!userId){
        return res.status(400).json(
            {
                msg:"UserId Not Found."
            }
        )
    }

    const deleteUser = await User.findByIdAndDelete(userId)
    if(!deleteUser){
        return res.status(400).json(
            {
                msg:"User Account is NOT Deleted."
            }
        )
    }

    res.status(400).json(
        {
            msg:"User Account is Deleted Successfully."
        }
    )
}

exports.myAccount = async (req,res)=>{
    if(!req.user){
        return res.status(400).json({
            msg:"Account Not Found."
        })
    }

    res.status(200).json({
        msg:"Successfully Get My Account.",
        // user:req.user
    })
}