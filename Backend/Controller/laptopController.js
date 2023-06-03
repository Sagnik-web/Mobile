const Laptop = require('../Model/laptopModel')


exports.laptopDataPost = async (req,res)=>{
    // const { laptop_name,os,price,ram,ram_type,memory,
    //         memory_type,battery,display,screen_resolution,
    //         processors,system_on_chip,system_core,refreash_rate,
    //         camera,type_of_laptop,connection_and_more,
    //         design,special_features,other } = req.body

    const newLaptopData = await Laptop.create(
    //     {
    //         laptop_name:laptop_name, os:os, price:price, 
    //         ram:ram,ram_type:ram_type, memory:memory ,
    //         battery:battery,memory_type:memory_type,
    //         display:display, screen_resolution:screen_resolution,
    //         processors:processors,system_on_chip:system_on_chip, 
    //         system_core:system_core, refreash_rate:refreash_rate,
    //         camera:camera,type_of_laptop:type_of_laptop, 
    //         connection_and_more:connection_and_more,
    //         design:design,special_features:special_features, 
    //         other:other
    // }
    req.body
    )

    if(!newLaptopData){
        return res.status(400).json({
            msg:"Laptop Data Not Submited."
        })
    }

    res.status(200).json({
        msg:"Laptop Data Submited Successfully.",
        laptopData:newLaptopData
    })
}

exports.laptopDataGet = async (req, res) => {
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

    const alllaptop = Laptop.find(querySearch).select('name price img_one ram processor camera battery')

    const page = req.query.page * 1
    const limit = req.query.limit * 1
    const skip = (page - 1)*limit
    //console.log(skip,limit)
    // let allTourData = Tour.find()
    if(req.query.page || req.query.limit){
        alllaptop  = alllaptop.skip(skip).limit(limit)
    }

    if(req.query.sort){
        alllaptop = alllaptop.sort(req.query.sort)
    }

    // const mobileData = await alllaptop


    const laptopData = await alllaptop

    if(!laptopData) return res.status(404).json(
        {
            msg:"Laptop Data Not Found."
        }
    )

    res.status(200).json({
        msg:"Successfully Get Laptop Data.",
        laptopData:laptopData    
    })
}

exports.laptopDataDetails = async (req,res) =>{
    const id = req.params.id

    const laptopDetails = await Laptop.findById(id)

    if(!laptopDetails){
        return res.status(404).json(
            {
                msg:"Laptop Data Not Found."
            }
        )
    }

    res.status(200).json({
        msg:"Successfully Get Laptop Data.",
        laptopDetails 
    })
}

exports.laptopDataDelete = async (req,res) => {
    const id = req.params.id
    const deleteLaptopData = await Laptop.findByIdAndDelete(id)

    if(!deleteLaptopData){
        return res.status(400).json(
            {
                msg: 'Laptop Data is not Deleated'
            }
        )
    }

    res.status(200).json(
        {
            msg: 'Laptop Data deleted successfully'
        }
    )
}

exports.LaptopDataUpdate = async (req,res) => {
    const id = req.params.id
    const updateLaptopData = await Laptop.findByIdAndUpdate(id,req.body,{new:true})

    if(!updateLaptopData){
        return res.status(400).json(
            {
                msg: 'Laptop Data Not Updated.'
            }
        )
    }

    res.status(200).json(
        {
            msg: 'Laptop Data Updated Successfully.',
            updateLaptopData
        }
    )
}