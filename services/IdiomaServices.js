const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const Idioma = prisma.idioma

const findAllIdioma = async() =>{
     const result = await Idioma.findMany() 
     return result
 }



module.exports = {findAllIdioma}