const { createUser, findAllUsers } = require("../services/UserService")
const { findAllUserTypes } = require("../services/TipoUsuarioServices")
const { use } = require("../routes/UserRoutes");

exports.users = async (req, res) => {
    try {
        res.render('home',{ title: 'Home', ishome: true }); // Rende a página home
    } catch (error) {
        console.log(error);
    }
};

exports.login = async (req, res) => {
    try {
        res.render('Teladelogin',{ title: 'login', isTeladelogin: true }); // Rende a página de login
    } catch (error) {
        console.log(error);
    }
};

// exports.registerPage = async (req, res) => {
//     try {
//         res.render('cadastro'); // Rende a página de login
//     } catch (error) {
//         console.log(error);
//     }
// };


exports.Paginainicial = async (req, res) => {
    try {
        res.render('Paginainicial'); // Rende a Página escolha
    } catch (error) {
        console.log(error);
    }
};

// exports.cadastrocandidato = async (req, res) => {
//     try {
//         res.render('cadastrocandidato'); // Rende a Página escolha
//     } catch (error) {
//         console.log(error);
//     }
// };

// exports.cadastrorecrutador = async (req, res) => {
//     try {
//         res.render('cadastrorecrutador'); // Rende a Página escolha
//     } catch (error) {
//         console.log(error);
//     }
// };

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
        res.render('VagasRecrutador'); // Rende a Página vagas
    } catch (error) {
        console.log(error);
    }
};

exports.CadastroVagas = async (req, res) => {
    try {
        res.render('CadastroVagas'); // Rende a Página vagas
    } catch (error) {
        console.log(error);
    }
};

exports.PaginaRecrutadores = async (req, res) => {
    try {
        res.render('PaginaRecrutadores',{ title: 'Pagina Principal', isPaginaRecrutadores: true }); // Rende a Página escolha
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
         const user = await createUser({...data, user_type: Number(data.user_type)})
         // Verifica o tipo de usuário e redireciona adequadamente
          if (Number(data.user_type) === 2) {
             // Tipo 1: Redireciona para Cadastro Candidato
            console.log("user____", user)
            // res.redirect('/cadastrocandidato',{user});
             res.render('cadastrocandidato',{user});
         } else if (Number(data.user_type) === 1) {
             // Tipo 2: Redireciona para Cadastro Recrutador
            //  res.redirect('/cadastrorecrutador',{user});
             res.render('cadastrorecrutador',{user});
        } else {
              // Tipo inválido: Redireciona para uma página de erro ou exibe mensagem
             res.redirect('/error');
         } 
        
     } catch (error) {
         console.log("error:::", error)
     }
 }


