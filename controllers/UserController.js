

/*exports.users = async(req, res) => {
    try {
        res.render('cadastro')
    } catch (error) {
     console.log(error);   
    }
}*/


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

exports.Escolha = async (req, res) => {
    try {
        res.render('Escolha'); // Rende a Página escolha
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

exports.PaginaRecrutadores = async (req, res) => {
    try {
        res.render('PaginaRecrutadores'); // Rende a Página escolha
    } catch (error) {
        console.log(error);
    }
};
