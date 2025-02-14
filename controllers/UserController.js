const { createUser, findAllUsers } = require("../services/UserService")
const bcrypt = require('bcryptjs');
const { findUserByEmail } = require("../services/UserService"); // Adicione uma função para buscar o usuário pelo email
const { findAllUserTypes } = require("../services/TipoUsuarioServices");
const { findCandidatoById } = require("../services/Candidato");
const { findRecrutadorById } = require("../services/RecrutadorServices");
const { findAllVagas } = require("../services/VagasServices");
const { findAllTipoContrato } = require("../services/TipoContratoServices");


exports.users = async (req, res) => {
    try {
        const Vaga = await findAllVagas() 
        res.render('home', { title: 'Home', ishome: true,Vaga }); // Rende a página home
    } catch (error) {
        console.log(error);
    }
};

exports.Paginainicial = async (req, res) => {
    try {
        res.render('Paginainicial' , { 
            title: 'Paginainicial', 
            isPaginainicial: true, 
            user: req.session.user 
        }
    );
     // Rende a Página escolha
    } catch (error) {
        console.log(error);
    }
};


exports.Perfil = async (req, res) => {
    try {
        const userId = req.session.user.id
        const candidato = await findCandidatoById(userId)
        res.render('Perfil', {candidato}); // Rende a Página perfilcandidato
    } catch (error) {
        console.log(error);
    }
};

exports.PerfilRecrutador = async (req, res) => {
    try {
        const userIdR = req.session.user.id
        const Recrutador = await findRecrutadorById(userIdR)
        res.render('PerfilRecrutador', {Recrutador}); // Rende a Página perfilrecrutador
    } catch (error) {
        console.log(error);
    }
};

exports.VagasRecrutador = async (req, res) => {
    try {
        const Vaga = await findAllVagas()
        res.render('VagasRecrutador',{Vaga}); // Rende a Página vagasrecrutadores
    } catch (error) {
        console.error("Erro ao listar vagas:", error);
        console.log(error);
    }
};


exports.Vaga = async (req, res) => {
    try {
        const Vaga = await findAllVagas()
        res.render('Vaga',{Vaga}); // Rende a Página vagas
    } catch (error) {
        console.log(error);
    }
};



exports.PaginaRecrutadores = async (req, res) => {
    try {
        res.render('PaginaRecrutadores', { 
            title: 'Pagina Principal',
             isPaginaRecrutadores: true,
             user: req.session.user }); // Rende a Página Recrutadores
    } catch (error) {
        console.log(error);
    }
};


exports.view = async (req, res) => {
    try {
        const user = await findAllUsers()
        const tipoUsuario = await findAllUserTypes()
        res.render('cadastro', { user, tipoUsuario })
    } catch (error) {

    }
}


exports.create = async (req, res) => {
    try {
        const data = req.body
        const user = await createUser({ ...data, user_type: Number(data.user_type) })
        // Verifica o tipo de usuário e redireciona adequadamente
        if (Number(data.user_type) === 1) {
            //Tipo 1: Redireciona para Cadastro Candidato
            console.log("user____", user)
            res.render('cadastrocandidato', { user });
        } else if (Number(data.user_type) === 2) {
            // Tipo 2: Redireciona para Cadastro Recrutador
            res.render('cadastrorecrutador', { user });
        } else {
            // Tipo inválido: Redireciona para uma página de erro ou exibe mensagem
            res.redirect('/error');
        }
    } catch (error) {
        console.log("error:::", error)
    }
}


exports.getlogin = async (req, res) => {
    try {
        res.render('Teladelogin', { title: 'login', isTeladelogin: true }); // Rende a página de login
    } catch (error) {
        console.log(error);
    }
};

//Autenticação para o login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verifica se o email foi fornecido
        if (!email || !password) {
            return res.status(400).send("Email e senha são obrigatórios.");
        }
        // Busca o usuário pelo email
        const user = await findUserByEmail(email);
        console.log("erro email:::",user)
    
        if (!user) {
            // Usuário não encontrado
            return res.status(401).send("Usuário ou senha inválidos.");
        }

        // Verifica a senha usando bcrypt
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            // Senha incorreta
            return res.status(401).send("Usuário ou senha inválidos.");
        }
       
        // Armazena informações do usuário na sessão
        req.session.user = { id: user.id, email: user.email, user_type: user.user_type };
    
        console.log(" Sessão Criada:", req.session);

        // Redireciona para a página inicial do tipo de usuário
        if (user.user_type === 1) {
            res.redirect('/Paginainicial');
        } else if (user.user_type === 2) {
            res.redirect('/PaginaRecrutadores');
        } else {
            res.redirect('/home');
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        res.status(500).send("Erro no servidor.");
    }
};

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Erro ao fazer logout:", err);
        }
        res.redirect('/login');
    });
};