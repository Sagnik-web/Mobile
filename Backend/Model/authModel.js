const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
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
    },
    confirmPassword:{
        type: 'string',
        required: true,
        validate:{
            validator:function(el){
                return el === this.password
            }
        }
    }
},{timestamps:true})

userSchema.pre('save', function(next) {
    if(!this.isModified('password')) return next();

    this.confirmPassword = undefined
    next();
})

userSchema.methods.checkPassword = async function(currentPassword,userPassword){
    return currentPassword == userPassword
}

const User = mongoose.model('users',userSchema)

module.exports = User;