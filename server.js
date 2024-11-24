const express = require('express')
const bodyParser = require('body-parser')
const {engine} = require('express-handlebars')
const indexRoutes = require('./routes/UserRoutes')

const app = express()

app.engine('handlebars',engine({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    alloProtoMethodsByDefault: true
  }

}))


app.set('view engine','handlebars');
app.use(bodyParser.urlencoded({extended:true}))
app.use(indexRoutes)
app.use(express.static('Public'))
app.listen(3000,()=>{
  console.log('Servidor rodando na porta 3000')
})

//Prisma Queries

/*
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
