const Feedback = require("../Model/feedbackModel")


exports.feedbackPost = async (req,res)=>{
    const {_id} = req.user
    const {ratting,feedbackMsg} = req.body

    const newFeedback = await Feedback.create({userId:_id,ratting:ratting,feedbackMsg:feedbackMsg})
    if(!newFeedback){
        return res.status(400).json(
            {
                msg: 'Your Feedback NOT Submited.'
            }
        )
    }

    res.status(200).json(
        {
            msg: 'Your Feedback Submited Successfully.',
            newFeedback
        }
    )
}

exports.feedbackAllGet = async (req,res) => {
    const allFeedback = await Feedback.find().populate('userId')

    if(!allFeedback){
        return res.status(404).json(
            {
                msg:"Feedbacks Data Not Found."
            }
        )
    }

    res.status(200).json(
        {
            msg:"Feedbacks Data Found.",
            allFeedback
        }
    )
}

exports.feedbackDelete = async (req,res) => {
    const deleteFeedback = await Feedback.findByIdAndDelete(req.params.id)

    if(!deleteFeedback){
        return res.status(404).json(
            {
                msg:"Feedbacks Data Not Deleted."
            }
        )
    }

    res.status(200).json(
        {
            msg:"Feedbacks Data Deleted Successfully."
        }
    )
}


exports.feedbackDeleteByUser = async (req,res) => {
    const ID = req.user._id
    const deleteFeedback = await Feedback.findOneAndDelete({userId:ID})
    if(!deleteFeedback){
        return res.status(400).json(
            {
                msg: "Your Feedback is not deleted."
            }
        )
    }

    res.status(200).json(
        {
            msg: "Feedback deleted Successfully."
        }
    )

}

exports.feedbackGetByUser = async (req,res) => {
    const ID = req.user._id
    const getFeedback = await Feedback.findOne({userId:ID})
    if(!getFeedback){
        return res.status(400).json(
            {
                msg: "Your Feedback is not Found."
            }
        )
    }

    res.status(200).json(
        {
            msg: "Feedback Get Successfully.",
            feedback:getFeedback
        }
    )

}