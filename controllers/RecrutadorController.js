const { createRecrutador, findAllRecrutador } = require("../services/CadastroRecrutadorServices")

exports.view = async(req, res) =>{
    try {
        const Recrutador = await findAllRecrutador()
        console.log(Recrutador) 
        res.render('cadastrorecrutador', {Recrutador})        
    } catch (error) {
        
    }
}

exports.create = async(req, res) =>{
    try {
        const data = req.body
        await createRecrutador({...data})
        res.redirect('/PaginaRecrutadores')
        
    } catch (error) {
        console.log("error:::", error)
    }
}