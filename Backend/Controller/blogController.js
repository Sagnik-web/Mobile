const Blog = require("../Model/blogModel")

exports.createBlog = async (req,res)=>{
    const newBlog = await Blog.create({...req.body,userId:req.user._id})

    if(!newBlog){
        return res.status(400).json({
            msg:"Your Blog is not created."
        })
    }

    res.status(200).json({
        msg:"Your Blog created Successfully.",
        newBlog
    })
}


exports.findBlog = async(req,res)=>{
    const allBlog = await Blog.find().populate('userId')

    if(!allBlog){
        return res.status(400).json({
            msg:"Your Blog is not Found."
        })
    }

    res.status(200).json({
        msg:"Your Blog get Successfully.",
        allBlog
    })
}


exports.findBlogByUser = async(req,res)=>{
    const myBlog = await Blog.find({userId:req.user._id})

    if(!myBlog){
        return res.status(400).json({
            msg:"Your Blog is not Found."
        })
    }

    res.status(200).json({
        msg:"Your Blog get Successfully.",
        myBlog
    })
}


exports.updateBlog = async (req,res)=>{
    const blogs = await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true})

    if(!blogs){
        return res.status(400).json({
            msg:"Your Blog is not Updated."
        })
    }

    res.status(200).json({
        msg:"Your Blog updated Successfully.",
        blogs
    })
}

exports.deleteBlog = async (req,res)=>{
    const blogs = await Blog.findOneAndDelete(req.params.id)

    if(!blogs){
        return res.status(400).json({
            msg:"Your Blog is not Deleted."
        })
    }

    res.status(200).json({
        msg:"Your Blog deleted Successfully.",
        blogs
    })
}
