const express = require('express')
const handlebars = require('express-handlebars')
//const UserRoutes = require('./routes/UserRoutes')
const a = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

//Prisma Queries

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const newUsers = await prisma.user.create({
    data:
      { email: 'Igor', password: 'say my name',},
    
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

/*
  async function main() {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
}*/


//Listening on port
app.listen(port, ()=>{
    console.log(`Servidor a rodar na porta ${port}`)
})