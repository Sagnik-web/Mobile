const mongoose = require('mongoose')
const ObjId = mongoose.Types.ObjectId
const blogSchema = new mongoose.Schema({
    blogTitle:{
        type:String
    },
    blogSubTitle:{
        type:String
    },
    img:String,
    blogMsg:{
        type:String
    },
    userId:{
        type:ObjId,
        ref:'users'
    }
},{
    timestamps:true
})

const Blog = mongoose.model('blog',blogSchema)

module.exports = Blog