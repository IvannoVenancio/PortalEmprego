const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const Vaga = prisma.Vaga

const createVagas = async(data) =>{
    const result = await Vaga.create({data: {...data}})
    return result
}

const findAllVagas = async() =>{
    const result = await Vaga.findMany()    
    return result
}

module.exports = { createVagas, findAllVagas }

