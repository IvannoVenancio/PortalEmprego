const { createCandidato, findAllCandidato } = require("../services/CadastroCandidato");
const { findAllIdioma } = require("../services/IdiomaServices"); // Importa o serviço de idiomas
const { upload } = require('../middleware/multer')
const path = require('path');

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

        const { PrismaClient } = require('@prisma/client')

        const prisma = new PrismaClient()

            const newCertificacao0 = await prisma.habilitacoes_literarias.create({
                data:
                  { nome: req.file.filename},
                
            })
            const certificacao0 = await prisma.habilitacoes_literarias.findUnique({
                where: {
                  nome: req.file.filename,
                },
            })


            const data = req.body
            await createCandidato({...data, id_user_fk: Number(data.id_user_fk),id_habilitacoes_literarias_fk: Number(certificacao0.id)})

            res.redirect('/Paginainicial')
        
    } catch (error) {
        console.log("error:::", error)
    }
}