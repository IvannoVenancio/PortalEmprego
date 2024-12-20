const { createUser, findAllUsers } = require("../services/UserService")
const { findAllUserTypes } = require("../services/TipoUsuarioServices")

exports.users = async (req, res) => {
    try {
        res.render('home'); // Rende a página home
    } catch (error) {
        console.log(error);
    }
};

exports.login = async (req, res) => {
    try {
        res.render('Teladelogin'); // Rende a página de login
    } catch (error) {
        console.log(error);
    }
};

exports.registerPage = async (req, res) => {
    try {
        res.render('cadastro'); // Rende a página de login
    } catch (error) {
        console.log(error);
    }
};


exports.Paginainicial = async (req, res) => {
    try {
        res.render('Paginainicial'); // Rende a Página escolha
    } catch (error) {
        console.log(error);
    }
};

exports.cadastrocandidato = async (req, res) => {
    try {
        res.render('cadastrocandidato'); // Rende a Página escolha
    } catch (error) {
        console.log(error);
    }
};

exports.cadastrorecrutador = async (req, res) => {
    try {
        res.render('cadastrorecrutador'); // Rende a Página escolha
    } catch (error) {
        console.log(error);
    }
};

exports.Perfil = async (req, res) => {
    try {
        res.render('Perfil'); // Rende a Página escolha
    } catch (error) {
        console.log(error);
    }
};

exports.Vaga = async (req, res) => {
    try {
        res.render('Vaga'); // Rende a Página escolha
    } catch (error) {
        console.log(error);
    }
};

exports.VagasRecrutador = async (req, res) => {
    try {
        res.render('VagaRecrutador'); // Rende a Página escolha
    } catch (error) {
        console.log(error);
    }
};

exports.PaginaRecrutadores = async (req, res) => {
    try {
        res.render('PaginaRecrutadores'); // Rende a Página escolha
    } catch (error) {
        console.log(error);
    }
};





exports.view = async(req, res) =>{
    try {
        const user = await findAllUsers()
        const tipoUsuario = await findAllUserTypes()
        console.log("userController::::::",tipoUsuario)
        res.render('cadastro', {user, tipoUsuario})        
    } catch (error) {
        
    }
}


exports.create = async(req, res) =>{
    try {
        const data = req.body
        await createUser({...data, user_type: Number(data.user_type)})
        res.redirect('/cadastrocandidato')
        
    } catch (error) {
        console.log("error:::", error)
    }
}