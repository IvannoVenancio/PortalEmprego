const express = require('express')
const indexRoutes = express.Router()
const UserController = require('../controllers/UserController')
const TipoUsuarioController = require('../controllers/TipoUsuarioController')


//indexRoutes.get('/',UserController.users)
indexRoutes.get('/', UserController.view)
indexRoutes.post('/create_user', UserController.create)



indexRoutes.get('/login', UserController.login);

// Rota para a página de cadastro
//indexRoutes.get('/cadastro', UserController.registerPage);
indexRoutes.get('/cadastro', UserController.view);

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

// ROTA PARA A PÁGINA TIPO USUARIOS
indexRoutes.get('/tipo_usuario', TipoUsuarioController.view)
indexRoutes.post('/tipo_usuario', TipoUsuarioController.create)



module.exports = indexRoutes
