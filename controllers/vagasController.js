const { createVagas, findAllVagas } = require("../services/VagasServices")
const { findAllIdioma } = require("../services/IdiomaServices"); // Importa o serviço de idiomas
const { findAllTipoContrato } = require("../services/TipoContratoServices"); // Importa o serviço de TipoContratos
const { findAllModalidadeTrabalho } = require("../services/ModalidadeTrabalhoServices");
const { findAllRequisitosQualificacoes } = require("../services/RequisitosQualificaçõesServices");
const { findRecrutadorById } = require("../services/RecrutadorServices");


exports.view = async(req, res) =>{
    try {
        const Vaga = await findAllVagas()
        const idioma = await findAllIdioma() // Busca os idiomas
        const tipoContrato = await findAllTipoContrato()
        const modalidadeTrabalho = await findAllModalidadeTrabalho()
        const requisitosQualificacoes = await findAllRequisitosQualificacoes()
        const userIdR = req.session.user.id
        const Recrutador = await findRecrutadorById(userIdR)
        res.render('CadastroVagas', {Vaga, idioma,tipoContrato, modalidadeTrabalho, requisitosQualificacoes,Recrutador})        
    } catch (error) {
        
    }
}
exports.create = async(req, res) =>{
    try {
        const data = req.body
        await createVagas({...data,data_criacao:new Date(data.data_criacao), id_idiomas_fk:Number(data.id_idiomas_fk), id_recrutador_fk:Number(data.id_recrutador_fk),id_tipo_contrato_fk:Number(data.id_tipo_contrato_fk),id_modalidade_trabalho_fk:Number(data.id_modalidade_trabalho_fk),id_requisitos_qualificacoes_fk:Number(data.id_requisitos_qualificacoes_fk), salario: parseFloat(data.salario)})
        res.redirect('/CadastroVagas')
        
    } catch (error) {
        console.log("error:::", error)
    }
}