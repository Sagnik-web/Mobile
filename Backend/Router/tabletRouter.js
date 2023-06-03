const express = require('express');
const { protect } = require('../Controller/authController');
const { saveImage } = require('../Controller/imgController');
const { tabletDataGet, tabletDataPost, tabletDataDelete, tabletDataUpdate, tabletDataDetails } = require('../Controller/tabletController');
const { fileupload } = require('../FileHelper/fileUpload');
const tabletRouter = express.Router();

tabletRouter.route('/')
            .get(tabletDataGet)
            .post(tabletDataPost)
           
            
tabletRouter.post('/imgUpload',fileupload.single('file'),saveImage)
            
tabletRouter.route('/:id')
            .get(tabletDataDetails)
            .patch(tabletDataUpdate)
            .delete(tabletDataDelete)

module.exports = tabletRouter;