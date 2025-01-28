const {PrismaClient} = require('@prisma/client')
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient()
const User = prisma.user

const createUser = async(data) =>{
    const hashedPassword = await bcrypt.hash(data.password, 10); // Criptografar a senha
    const result = await User.create({data: {...data, password: hashedPassword}})
    return result
}
const findAllUsers = async() =>{
    const result = await User.findMany()    
    return result
}
const findUserByEmail = async (email) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });
    return user;
};

module.exports = { createUser, findAllUsers,findUserByEmail}

