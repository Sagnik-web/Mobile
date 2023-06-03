exports.saveImage = (req,res)=>{
    res.status(200).json({
        msg:"Image Uploaded Successfully",
        filename:req.fileName
    })
}