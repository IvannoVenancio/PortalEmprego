const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const Recrutador = prisma.recrutador

const createRecrutador = async(data) =>{
    
    const result = await Recrutador.create({data: {...data},

})
    return result
}

const findAllRecrutador = async() =>{
    const result = await Recrutador.findMany()    
    return result
}

const findRecrutadorById = async(userId) =>{
    const result = await Recrutador.findFirst({where:{id_user_fk: userId}})    
    return result
}

module.exports = { createRecrutador, findAllRecrutador,findRecrutadorById }