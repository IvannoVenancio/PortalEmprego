const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const Vaga = prisma.vaga

const createVagas = async(data) =>{
    const result = await Vaga.create({data: {...data}})
    return result
}

const findAllVagas = async() =>{
    const result = await Vaga.findMany()    
    return result
}

const findVagasById = async(userId) =>{
    const result = await Vaga.findMany()    
    return result
}

module.exports = { createVagas, findAllVagas,findVagasById }

