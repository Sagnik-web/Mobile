const express = require('express');
const { register, login, protect, myAccount } = require('../Controller/authController');
const authRouter = express.Router();

authRouter.post('/register',register)
authRouter.post('/login',login)
// authRouter.get('/myAccount',protect,myAccount)
// authRouter.get('/protect',protect)
// authRouter.get('/usersDetails')
// authRouter.delete('/delete')


module.exports = authRouter;