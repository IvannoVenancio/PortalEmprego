const express = require('express')
const indexRoutes = express.Router()
const UserController = require('../controllers/UserController')

indexRoutes.get('/', UserController.home)
indexRoutes.get('/cadastro', UserController.cadastro)
indexRoutes.get('/login', UserController.login)
module.exports = indexRoutes