const { findAllUsers,findAllUsers2,findAllCertificacoes } = require("../services/userservice")


exports.home = async (req, res) => {
    try {
        res.render('home'); // Rende a página home
    } catch (error) {
        console.log(error);
    }
};



exports.login = async (req, res) => {
    try {
        res.render('login'); // Rende a página de login
    } catch (error) {
        console.log(error);
    }
};

exports.cadastro = async (req, res) => {
    try {
        res.render('cadastro'); // Rende a página de cadastro
    } catch (error) {
        console.log(error);
    }
};




exports.paginainicial = async (req, res) => {
    try {
        const users = await findAllUsers2()
        const certificacoes = await findAllCertificacoes()
        console.log(users)
        res.render('paginainicial',{users,certificacoes})        
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



exports.perfil = async (req, res) => {
    try {
        res.render('perfil'); // Rende a Página escolha
    } catch (error) {
        console.log(error);
    }
};

exports.vaga = async (req, res) => {
    try {
        res.render('vaga'); // Rende a Página escolha
    } catch (error) {
        console.log(error);
    }
};

exports.paginarecrutadores = async (req, res) => {
    try {
        const users = await findAllUsers()
        console.log(users)
        res.render('paginarecrutadores',{users})        
    } catch (error) {
        console.log(error);
    }

};
