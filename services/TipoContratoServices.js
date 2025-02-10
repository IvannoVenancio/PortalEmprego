const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const TipoContrato = prisma.tipoContrato

const findAllTipoContrato = async() =>{
    const result = await TipoContrato.findMany() 
    // console.log("Idiomas encontrados:", result);    
    return result
}

module.exports = {findAllTipoContrato }