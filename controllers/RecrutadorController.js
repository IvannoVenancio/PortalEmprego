const { createRecrutador, findAllRecrutador } = require("../services/RecrutadorServices")

exports.view = async(req, res) =>{
    try {
        const Recrutador = await findAllRecrutador()
        res.render('cadastrorecrutador', {Recrutador})        
    } catch (error) {
        
    }
}
exports.create = async(req, res) =>{
    try {
        const data = req.body
        await createRecrutador({...data,id_user_fk: Number(data.id_user_fk)})
        res.redirect('/PaginaRecrutadores')
        
    } catch (error) {
        console.log("error:::", error)
    }
}

