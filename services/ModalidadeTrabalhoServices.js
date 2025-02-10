const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const ModalidadeTrabalho = prisma.modalidadeTrabalho

const findAllModalidadeTrabalho = async() =>{
    const result = await ModalidadeTrabalho.findMany()     
    return result
}

module.exports = {findAllModalidadeTrabalho}