const Mobile = require("../Model/mobileModel")
// const {cloudinary} = require("../Utils/cloudinary")

exports.mobileDataPost = async (req,res)=>{
    // const { mob_name,os,price,ram,memory,battery,
    //         display,screen_resolution,processors,
    //         system_on_chip,system_core,refreash_rate,
    //         number_of_front_camera,number_of_main_camera,
    //         resolution_of_front_camera,resolution_of_main_camera,
    //         video,network_type,sim_support,connection_and_more,
    //         design,screen_type,other } = req.body

    const newMobileData = await Mobile.create(
        // {
        //     mob_name:mob_name, os:os, price:price, ram:ram, memory:memory ,battery:battery,
        //     display:display, screen_resolution:screen_resolution, processors:processors,
        //     system_on_chip:system_on_chip, system_core:system_core, refreash_rate:refreash_rate,
        //     number_of_front_camera:number_of_front_camera, number_of_main_camera:number_of_main_camera,
        //     resolution_of_front_camera:resolution_of_front_camera, resolution_of_main_camera:resolution_of_main_camera,
        //     video:video, network_type:network_type, sim_support:sim_support, connection_and_more:connection_and_more,
        //     design:design, screen_type:screen_type, other:other, img:''
        // }
        req.body
    )

    if(!newMobileData){
        return res.status(400).json({
            msg:"Mobile Data Not Submited."
        })
    }

    res.status(200).json({
        msg:"Mobile Data Submited Successfully.",
        mobileData:newMobileData
    })
}

// exports.mobileImageUpload = async (req,res)=> {
//     const fileStr = req.body.data
//     const uploadedResponse = await cloudinary.uploader.
//     upload(fileStr,{
//         upload_preset: 'Mobile_Img'
//     })
//     console.log(uploadedResponse)
//     res.status(200).json({
//         msg:"Mobile Image Upload Successfully"
//     })
// }

exports.mobileDataGet = async (req, res) => {

    
    const queryObject = { ...req.query };
    const queryFields = ["fields", "page", "sort", "limit"];
    queryFields.forEach((el) => delete queryObject[el]);
  
    // console.log(queryObject)
    let queryStr = JSON.stringify(queryObject)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,match => `$${match}`)
    // console.log(JSON.parse(queryStr))
  
    let querySearch = JSON.parse(queryStr);
    const regexp = new RegExp(req.query.name, "i");
    if (req.query.name) {
      querySearch = { ...querySearch, name: regexp };
    }

    const allmobiles = Mobile.find(querySearch).select('name price img_one ram processor front_camera rear_camera battery internal_memory ')

    const page = req.query.page * 1
    const limit = req.query.limit * 1
    const skip = (page - 1)*limit
    //console.log(skip,limit)
    // let allTourData = Tour.find()
    if(req.query.page || req.query.limit){
        allmobiles  = allmobiles.skip(skip).limit(limit)
    }

    if(req.query.sort){
        allmobiles = allmobiles.sort(req.query.sort)
    }

    const mobileData = await allmobiles

    if(!mobileData) return res.status(404).json(
        {
            msg:"Mobile Data Not Found."
        }
    )

    res.status(200).json({
        msg:"Successfully Get Mobile Data.",
        mobileData:mobileData    
    })
}

exports.mobileDataDetails = async (req,res) =>{
    const mobileDetails = await Mobile.findById(req.params.id)

    if(!mobileDetails){
        return res.status(404).json(
            {
                msg:"mobile Data Not Found."
            }
        )
    }

    res.status(200).json({
        msg:"Successfully Get mobile Data.",
        mobileDetails 
    })
}

exports.mobileDataDelete = async (req,res) => {
    const id = req.params.id
    const deleteMobileData = await Mobile.findByIdAndDelete(id)

    if(!deleteMobileData){
        return res.status(400).json(
            {
                msg: 'Mobile Data is not Deleated'
            }
        )
    }

    res.status(200).json(
        {
            msg: 'Mobile Data deleted successfully'
        }
    )
}

exports.mobileDataUpdate = async (req,res) => {
    const id = req.params.id
    const updateMobileData = await Mobile.findByIdAndUpdate(id,req.body,{new:true})

    if(!updateMobileData){
        return res.status(400).json(
            {
                msg: 'Mobile Data Not Updated.'
            }
        )
    }

    res.status(200).json(
        {
            msg: 'Mobile Data Updated Successfully.',
            updateMobileData
        }
    )
}