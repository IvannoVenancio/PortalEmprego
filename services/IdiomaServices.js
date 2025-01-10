const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const Idioma = prisma.idioma

const findAllIdioma = async() =>{
    const result = await Idioma.findMany() 
    console.log("Idiomas encontrados:", result);    
    return result
}

module.exports = {findAllIdioma}