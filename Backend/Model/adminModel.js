const mongoose = require('mongoose');
const validator = require('validator');

const adminSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true,
        unique:true,
        validate:[validator.isEmail, 'Enter valid Email Address']
    },
    password:{
        type: 'string',
        required: true,
        minlength:7
    }
})

adminSchema.methods.checkPassword = async function(currentPassword,userPassword){
    return currentPassword == userPassword
}

const Admin = mongoose.model('admin',adminSchema)

module.exports = Admin;