const express = require('express')
const indexRoutes = express.Router()
const UserController = require('../controllers/UserController')
const TipoUsuarioController = require('../controllers/TipoUsuarioController')
const CadastrovagasController = require('../controllers/CadastrovagasController')
const CandidatoController = require('../controllers/CandidatoController')
const RecrutadorController = require('../controllers/RecrutadorController')

// Rota para a página de home
indexRoutes.get('/home',UserController.users)

// Rota para a página de login
indexRoutes.post('/login', UserController.login)
indexRoutes.get('/login', UserController.getlogin)


// Rota para a página de cadastro
indexRoutes.get('/cadastro', UserController.view)
indexRoutes.post('/cadastro', UserController.create)

// Rota para a página de paginainicial
indexRoutes.get('/Paginainicial', UserController.Paginainicial)

// Rota para a página de cadastrocandidato
indexRoutes.get('/cadastrocandidato', CandidatoController.view)
indexRoutes.post('/cadastrocandidato', CandidatoController.create)

// Rota para a página de cadastrocandidato
indexRoutes.get('/cadastrorecrutador', RecrutadorController.view)
indexRoutes.post('/cadastrorecrutador', RecrutadorController.create)


indexRoutes.get('/paginaRecrutadores', UserController.PaginaRecrutadores)

// Rota para a página de Perfil
indexRoutes.get('/Perfil', UserController.Perfil);

// Rota para a página de Vagas
indexRoutes.get('/Vaga', UserController.Vaga);

// Rota para a página de VagasRecrutador
indexRoutes.get('/VagasRecrutador', UserController.VagasRecrutador)

// Rota para a página de VagasRecrutador
indexRoutes.get('/CadastroVagas', UserController.CadastroVagas)

// Rota para a página de Vagas
indexRoutes.get('/PaginaRecrutadores', UserController.PaginaRecrutadores)

// ROTA PARA A PÁGINA TIPO USUARIOS
indexRoutes.get('/tipo_usuario', TipoUsuarioController.view)
indexRoutes.post('/tipo_usuario', TipoUsuarioController.create)

// ROTA PARA A PÁGINA TIPO USUARIOS
indexRoutes.get('/cadastro_vagas', CadastrovagasController.view)
indexRoutes.post('/cadastro_vagas', CadastrovagasController.create)



module.exports = indexRoutes
