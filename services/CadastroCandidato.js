const {PrismaClient} = require('@prisma/client')
const { upload } = require('../middleware/multer')
const path = require('path');

const prisma = new PrismaClient()
const candidato = prisma.candidato

const createCandidato = async(data) =>{
    const result = await candidato.create({data: {...data}})
    return result
}

const findAllCandidato = async() =>{
    const result = await candidato.findMany()    
    return result
}

module.exports = { createCandidato, findAllCandidato }