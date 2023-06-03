const express = require('express');
const { protect } = require('../Controller/authController');
const { createBlog, findBlog, findBlogByUser, updateBlog, deleteBlog } = require('../Controller/blogController');
const blogRouter = express.Router();

blogRouter.route('/')
          .get(findBlog)
         
          .post(protect,createBlog)

blogRouter.get('/my',protect,findBlogByUser)

blogRouter.route('/:id')
          .delete(deleteBlog)
          .patch(protect,updateBlog)


module.exports = blogRouter;