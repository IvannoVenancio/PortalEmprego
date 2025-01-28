const { createCandidato, findAllCandidato } = require("../services/CadastroCandidato");
const { findAllIdioma } = require("../services/IdiomaServices"); // Importa o serviço de idiomas


exports.view = async (req, res) => {
    try {
        const candidato = await findAllCandidato()
        const idiomas = await findAllIdioma() // Busca os idiomas
        console.log(candidato)
        res.render('cadastrocandidato',{candidato, idiomas })
    } catch (error) {
        console.log(error);
    }
};

exports.create = async (req, res) => {
    try {
        const data = req.body
        await createCandidato({...data, id_user_fk:Number(data.id_user_fk), data_nascimento:new Date(data.data_nascimento) });
        res.redirect('/Paginainicial');
    } catch (error) {
        console.error("error:::", error);       
    }
};

