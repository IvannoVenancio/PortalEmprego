const express = require('express')
const indexRoutes = express.Router()
const UserController = require('../controllers/UserController')

indexRoutes.get('/', UserController.home)
indexRoutes.get('/cadastro', UserController.cadastro)
indexRoutes.get('/login', UserController.login)
indexRoutes.get('/',UserController.users)

indexRoutes.get('/login', UserController.login);

// Rota para a página de cadastro
indexRoutes.get('/cadastro', UserController.registerPage);

// Rota para a página de ESCOLHA
indexRoutes.get('/Escolha', UserController.Escolha);

// Rota para a página de paginainicial
indexRoutes.get('/Paginainicial', UserController.Paginainicial);

// Rota para a página de cadastrocandidato
indexRoutes.get('/cadastrocandidato', UserController.cadastrocandidato);

// Rota para a página de cadastrocandidato
indexRoutes.get('/cadastrorecrutador', UserController.cadastrorecrutador);

// Rota para a página de Perfil
indexRoutes.get('/Perfil', UserController.Perfil);

// Rota para a página de Vagas
indexRoutes.get('/Vaga', UserController.Vaga);

// Rota para a página de Vagas
indexRoutes.get('/PaginaRecrutadores', UserController.PaginaRecrutadores);

module.exports = indexRoutes