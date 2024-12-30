const { createVagas, findAllVagas } = require("../services/CadastroVagasServices")

exports.view = async(req, res) =>{
    try {
        const Vaga = await findAllVagas()
        res.render('CadastroVagas', {Vaga})        
    } catch (error) {
        
    }
}
exports.create = async(req, res) =>{
    try {
        const data = req.body
        await createVagas(data)
        res.redirect('/cadastro_vagas')
        
    } catch (error) {
        console.log("error:::", error)
    }
}