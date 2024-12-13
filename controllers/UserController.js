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

exports.fimdecadastro = async (req, res) => {
    try {
        res.render('fimdecadastro');
//        res.send('Data received successfully!');
    } catch (error) {
        console.log(error);
    }
};


/*
exports.fimDeCadastro = async (req, res) => {
    try {
        res.render('fimDeCadastro')
        const name = req.body.username;
        const email = req.body.useremail;
        const password = req.body.userpassword;
        console.log(req.body.name);
//        res.send('Data received successfully!');
    } catch (error) {
        console.log(error);
    }
};
*/


exports.escolha = async (req, res) => {
    try {
        res.render('escolha')
    } catch (error) {
        console.log(error);
    }
};


exports.paginainicial = async (req, res) => {
    try {
        const fs = require("fs");
        fs.readFile("./models/cadastrante_candidato.json", "utf8", (err, jsonString) => {
          const candidato = JSON.parse(jsonString);
          console.log(candidato)
        })
        res.render('paginainicial'); // Rende a Página escolha
    
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
        const fs = require("fs");
        fs.readFile("./models/cadastrante_recrutador.json", "utf8", (err, jsonString) => {
          const recrutador = JSON.parse(jsonString);
          console.log(recrutador)
        })
        res.render('paginarecrutadores'); // Rende a Página escolha
    
    } catch (error) {
        console.log(error);
    }
};
