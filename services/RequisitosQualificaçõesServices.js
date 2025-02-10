const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const RequisitosQualificacoes = prisma.requisitosQualificacoes

const findAllRequisitosQualificacoes = async() =>{
    const result = await RequisitosQualificacoes.findMany()     
    return result
}

module.exports = {findAllRequisitosQualificacoes}