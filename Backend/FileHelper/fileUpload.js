const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'Upload')
    },
    filename: (req, file, cb) =>{
        const fileName = new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname
        cb(null, fileName)
        req.fileName = fileName
    }
})


const filefilter = (req, file, cb) =>{
    // if (file.mimetype === 'application/pdf' || 
    //     file.mimetype === 'image/jpg' || 
    //     file.mimetype === 'image/png'){
    //     cb(null, true)
    // }else{
    //     cb(null, false)
    // }

    // console.log(file)
    cb(null, true)
}

const fileupload = multer({storage:storage, fileFilter:filefilter})

module.exports = {fileupload}

