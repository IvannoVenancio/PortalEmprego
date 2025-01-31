const isAuthenticated = (req, res, next) => {
    console.log(" Verificando sessão:", req.session.user);
    if (!req.session.user) {
        return res.redirect('/login'); // Se não estiver logado, redireciona para a tela de login
    }
    next(); // Se estiver logado, continua para a próxima função
};

module.exports = isAuthenticated;
