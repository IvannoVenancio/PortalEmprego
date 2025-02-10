const { createCandidato, findAllCandidato } = require("../services/Candidato");


exports.view = async (req, res) => {
    try {
        const candidato = await findAllCandidato()
        res.render('cadastrocandidato',{candidato})
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

