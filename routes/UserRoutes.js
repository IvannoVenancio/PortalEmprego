const express = require('express')
const indexRoutes = express.Router()
const UserController = require('../controllers/UserController')


indexRoutes.get('/',UserController.home)

indexRoutes.get('/login', UserController.login);

// Rota para a página de cadastro
indexRoutes.get('/cadastro', UserController.cadastro);

//Fim de cadastro genêrico
indexRoutes.get('/fimdecadastro', UserController.fimdecadastro);

// Rota para a página de ESCOLHA
indexRoutes.get('/escolha', UserController.escolha);

// Rota para a página de paginainicial
indexRoutes.get('/paginainicial', UserController.paginainicial);

// Rota para a página de cadastrocandidato
indexRoutes.get('/cadastrocandidato', UserController.cadastrocandidato);

// Rota para a página de cadastrocandidato
indexRoutes.get('/cadastrorecrutador', UserController.cadastrorecrutador);

// Rota para a página de Perfil
indexRoutes.get('/perfil', UserController.perfil);

// Rota para a página de Vagas
indexRoutes.get('/vaga', UserController.vaga);

// Rota para a página de Vagas
indexRoutes.get('/paginarecrutadores', UserController.paginarecrutadores);

module.exports = indexRoutes