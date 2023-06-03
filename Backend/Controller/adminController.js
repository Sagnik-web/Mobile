const Admin = require("../Model/adminModel")
const jwt = require('jsonwebtoken')

const Token = (id)=>{
    return jwt.sign({id},process.env.JWT_TOKEN,{
        expiresIn:process.env.JWT_EXP
    })
}

exports.createAdmin = async(req,res)=>{
    const admin = await Admin.create(req.body)
    if(!admin){
        return res.status(400).json({
            msg:"Data Not Submited Successfully."
        })
    }

    res.status(200).json({
        msg:"Data Submited Successfully.",
        admin
    })
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

    const user = await Admin.findOne({email: email}).select('+password')
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
        .cookie('adminAuth',tokenVal, { maxAge: DAY * 24 * 60 * 60 * 1000, httpOnly: true })
        .json(
            {
                msg: 'Welcome You Logged In Successfully',
               
            }
        )
}


exports.adminProtect =async (req,res,next) =>{
    try{
    // if(!req.headers.authorization || !req.headers.authorization.startsWith('sagnik')){
    //     res.status(404).json({
    //         status:"Fail",
    //         massage:"authorization is incorrect"
    //     })
    // }

    const {adminAuth} = req.cookies
    // console.log(adminAuth)
    if(!adminAuth){
        res.status(404).json({
            status:"Fail",
            massage:"token is incorrect"
        })
    }

    const {id} =await jwt.verify(adminAuth,process.env.JWT_TOKEN)
    // console.log(id)
    const data = await Admin.findById(id)
    // console.log(data)
    
    if(!data){
        res.status(404).json({
            status:"Fail",
            massage:"Hear is no data"
        })
    } 
    req.user = data
    next()
}catch(err){
    res.status(404).json({
        status:"Fail",
        massage:err
    })
}
    // res.status(404).json({
    //     status:"Fail",
    //     massage:"authorization is incorrect"
    // })
   
}

exports.myAcount = async(req,res)=>{
    try{
        res.status(200).json({
            msg:"Successfully get Data",
            loggedIn:true
        })
    }catch(err){
        res.status(400).json({
            err:err,
            loggedIn:false
        })
    }
}