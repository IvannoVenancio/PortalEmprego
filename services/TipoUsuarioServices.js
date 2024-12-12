const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const UserType = prisma.userType

const createUserType = async(data) =>{
    const result = await UserType.create({data: {...data}})
    return result
}

const findAllUserTypes = async() =>{
    const result = await UserType.findMany()    
    return result
}

module.exports = { createUserType, findAllUserTypes }

