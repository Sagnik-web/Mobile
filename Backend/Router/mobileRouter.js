const express = require('express');
const { protect } = require('../Controller/authController');
const { saveImage } = require('../Controller/imgController');

const { mobileDataGet, mobileDataPost, mobileDataDelete, mobileDataUpdate, mobileDataDetails } = require('../Controller/mobileController');
const { fileupload } = require('../FileHelper/fileUpload');
const mobileRouter = express.Router();

mobileRouter.route('/')
            .get(mobileDataGet)
            .post(mobileDataPost)
            
mobileRouter.post('/imgUpload',fileupload.single('file'),saveImage)

mobileRouter.route('/:id')
            .get(mobileDataDetails)
            .patch(mobileDataUpdate)
            .delete(mobileDataDelete)


module.exports = mobileRouter