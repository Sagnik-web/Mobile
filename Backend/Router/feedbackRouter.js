const express = require('express');
const {feedbackGetByUser, feedbackAllGet, feedbackPost, feedbackDelete, feedbackDeleteByUser } = require('../Controller/feedbackController');
const { protect } = require('../Controller/authController');
const feedbackRouter = express.Router();

feedbackRouter.route('/')
              .get(protect,feedbackGetByUser)
              .post(protect,feedbackPost)
              .delete(protect,feedbackDeleteByUser);
              
feedbackRouter.delete('/:id',feedbackDelete)

feedbackRouter.get('/all',feedbackAllGet)

module.exports = feedbackRouter;