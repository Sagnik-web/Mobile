const express = require('express')
const { createAdmin, login, adminProtect, myAcount } = require('../Controller/adminController')
const adminRoute = express.Router()

adminRoute.post('/create', createAdmin)
adminRoute.post('/login',login)
adminRoute.get('/myAccount', adminProtect, myAcount)

module.exports = adminRoute