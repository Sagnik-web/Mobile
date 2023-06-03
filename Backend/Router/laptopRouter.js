const express = require('express');
const { protect } = require('../Controller/authController');
const { saveImage } = require('../Controller/imgController');
const { laptopDataGet, laptopDataPost, LaptopDataUpdate, laptopDataDelete, laptopDataDetails } = require('../Controller/laptopController');
const { fileupload } = require('../FileHelper/fileUpload');
const laptopRouter = express.Router();

laptopRouter.route('/')
            .get(laptopDataGet)
            .post(laptopDataPost)
            
laptopRouter.post('/imgUpload',fileupload.single('file'),saveImage)


laptopRouter.route('/:id')
            .get(laptopDataDetails)
            .patch(LaptopDataUpdate)
            .delete(laptopDataDelete)

module.exports = laptopRouter;