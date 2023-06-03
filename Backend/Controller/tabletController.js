const Tablet = require("../Model/tabletModel")

exports.tabletDataPost = async (req,res)=>{
    // const { tablet_name,os,price,ram,memory,battery,
    //         display,screen_resolution,processors,
    //         system_on_chip,system_core,refreash_rate,
    //         number_of_front_camera,number_of_main_camera,
    //         resolution_of_front_camera,resolution_of_main_camera,
    //         video,network_type,sim_support,connection_and_more,
    //         design,screen_type,other } = req.body

    const newTabletData = await Tablet.create(
    //     {
    //         tablet_name:tablet_name, os:os, price:price, ram:ram, memory:memory ,battery:battery,
    //         display:display, screen_resolution:screen_resolution, processors:processors,
    //         system_on_chip:system_on_chip, system_core:system_core, refreash_rate:refreash_rate,
    //         number_of_front_camera:number_of_front_camera, number_of_main_camera:number_of_main_camera,
    //         resolution_of_front_camera:resolution_of_front_camera, resolution_of_main_camera:resolution_of_main_camera,
    //         video:video, network_type:network_type, sim_support:sim_support, connection_and_more:connection_and_more,
    //         design:design, screen_type:screen_type, other:other
    // }
    req.body
    )

    if(!newTabletData){
        return res.status(400).json({
            msg:"Tablet Data Not Submited."
        })
    }

    res.status(200).json({
        msg:"Tablet Data Submited Successfully.",
        tabletData:newTabletData
    })
}

exports.tabletDataGet = async (req, res) => {

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

    const alltablets = Tablet.find(querySearch).select('name price img_one ram processor front_camera rear_camera battery internal_memory ')

    const page = req.query.page * 1
    const limit = req.query.limit * 1
    const skip = (page - 1)*limit
    //console.log(skip,limit)
    // let allTourData = Tour.find()
    if(req.query.page || req.query.limit){
        alltablets  = alltablets.skip(skip).limit(limit)
    }

    if(req.query.sort){
        alltablets = alltablets.sort(req.query.sort)
    }

    const tabletData = await alltablets


    // const tabletData = await Tablet.find().select('name price img_one ram processor front_camera rear_camera battery internal_memory')

    if(!tabletData) return res.status(404).json(
        {
            msg:"Tablet Data Not Found."
        }
    )

    res.status(200).json({
        msg:"Successfully Get Tablet Data.",
        tabletData:tabletData    
    })
}

exports.tabletDataDetails = async (req,res) =>{
    const tabletDetails = await Tablet.findById(req.params.id)

    if(!tabletDetails){
        return res.status(404).json(
            {
                msg:"tablet Data Not Found."
            }
        )
    }

    res.status(200).json({
        msg:"Successfully Get tablet Data.",
        tabletDetails 
    })
}

exports.tabletDataDelete = async (req,res) => {
    const id = req.params.id
    const deleteTabletData = await Tablet.findByIdAndDelete(id)

    if(!deleteTabletData){
        return res.status(400).json(
            {
                msg: 'Tablet Data is not Deleated'
            }
        )
    }

    res.status(200).json(
        {
            msg: 'Tablet Data deleted successfully'
        }
    )
}



exports.tabletDataUpdate = async (req,res) => {
    const id = req.params.id
    const updateTabletData = await Tablet.findByIdAndUpdate(id,req.body,{new:true})

    if(!updateTabletData){
        return res.status(400).json(
            {
                msg: 'Tablet Data Not Updated.'
            }
        )
    }

    res.status(200).json(
        {
            msg: 'Tablet Data Updated Successfully.',
            updateTabletData
        }
    )
}

