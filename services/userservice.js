const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const findAllUsers = async() =>{
    const result = await prisma.recrutador.findMany()    
    return result
}

const findAllUsers2 = async() =>{
    const result = await prisma.candidato.findMany()    
    return result
}

const findAllCertificacoes = async() =>{
    const result = await prisma.certificacoes.findMany()    
    return result
}

module.exports = { findAllUsers,findAllUsers2,findAllCertificacoes}