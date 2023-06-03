const mongoose = require('mongoose')
const objId = mongoose.Types.ObjectId
const feedbackSchema = new mongoose.Schema({
    userId:{
        type:objId,
        ref:'users'
    },
    ratting:{
        type:Number,
        min:1,
        max:5
    },
    
    feedbackMsg:{
        type:String
    }
},{
    timestamps:true
})

const Feedback = mongoose.model('feedbacks',feedbackSchema)

module.exports = Feedback