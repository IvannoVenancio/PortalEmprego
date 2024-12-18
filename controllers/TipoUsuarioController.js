const { createUserType, findAllUserTypes } = require("../services/TipoUsuarioServices")

exports.view = async(req, res) =>{
    try {
        const TipoUsuario = await findAllUserTypes()
        console.log("TipoUsuario::::", TipoUsuario)
        res.render('TipoUsuario', {TipoUsuario})        
    } catch (error) {
        
    }
}
exports.create = async(req, res) =>{
    try {
        const data = req.body
        await createUserType(data)
        res.redirect('/tipo_usuario')
        
    } catch (error) {
        console.log("error:::", error)
    }
}