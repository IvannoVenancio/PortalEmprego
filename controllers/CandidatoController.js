const { createCandidato, findAllCandidato } = require("../services/CadastroCandidato");
const { findAllIdioma } = require("../services/IdiomaServices"); // Importa o serviço de idiomas


// exports.cadastrocandidato = async (req, res) => {
//     try {
//         const idiomas = await findAllIdioma(); // Busca os idiomas
//         res.render('cadastrocandidato',{idiomas}); // Rende a Página escolha
//     } catch (error) {
//         console.log(error);
//     }
// };



 exports.view = async(req, res) =>{
    try {
        const Candidato = await findAllCandidato()
        console.log(Candidato)
        res.render('cadastrocandidato', {Candidato})        
    } catch (error) {
        console.log(error);
    }
};

exports.create = async(req, res) =>{
    try {
        const data = req.body
        await createCandidato({...data, id_user_fk: Number(data.id_user_fk)})
        res.redirect('/Paginainicial')
        
    } catch (error) {
        console.log("error:::", error)
    }
}