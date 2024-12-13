const express = require('express');
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');
const UserRoutes = require('./routes/UserRoutes');
const app = express();



app.engine('handlebars',engine({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    alloProtoMethodsByDefault: true
  }

}));

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public')); 

app.set('view engine','handlebars');
app.use(UserRoutes);


//Posts requests
app.post('/cadastro', (req, res) => {
  // Access form fields from req.body
  const username_posted = req.body.username
  const password_posted = req.body.userpassword
  const email_posted = req.body.useremail

  // Process the form data
  console.log('Username:', username_posted)
  console.log('Password:', password_posted)
  console.log('Email:', email_posted)

  const cadastrante = {
  name: username_posted,
  password: password_posted,
  email: email_posted
  };


  const { PrismaClient } = require('@prisma/client')

  const prisma = new PrismaClient()

  async function main() {
    const newUsers = await prisma.user.create({
      data:
        { email: cadastrante.email, password: cadastrante.password,user_type_id:1},
      
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


  const fs = require("fs")
  const jsonString = JSON.stringify(cadastrante)
  fs.writeFile('./models/cadastrante.json', jsonString, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
  });
  console.log(cadastrante);

  res.redirect("/fimDeCadastro")

});



app.post('/cadastrocandidato', (req, res) => {
  // Access form fields from req.body
  const username_posted = req.body.form_name
  const form_location_posted = req.body.form_location
  const form_recent_role_posted = req.body.form_recent_role
  const form_additional_info_posted = req.body.form_additional_info

  // Process the form data
  console.log('Nome:', username_posted)
  console.log('Localidade:', form_location_posted)
  console.log('Cargo recente:', form_recent_role_posted)
  console.log('Informação adicional:', form_additional_info_posted)

  const cadastrante_candidato = {
  nome: username_posted,
  localidade: form_location_posted,
  cargo_recente: form_recent_role_posted,
  informacao_adicional: form_additional_info_posted
  };

  const fs = require("fs")
  const jsonString = JSON.stringify(cadastrante_candidato)
  fs.writeFile('./models/cadastrante_candidato.json', jsonString, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
  });
  console.log(cadastrante_candidato);

  res.redirect("/paginainicial")

});




app.post('/cadastrorecrutador', (req, res) => {
  // Access form fields from req.body
  const username_posted = req.body.form_name
  const form_location_posted = req.body.form_location
  const form_company_posted = req.body.form_company
  const form_role_posted = req.body.form_role
  const form_industry_posted = req.body.form_industry
  const form_phone_posted = req.body.form_phone
  const form_email_posted = req.body.form_email
  const form_additional_info_posted = req.body.form_additional_info

  // Process the form data
  console.log('Nome:', username_posted)
  console.log('Localização:', form_location_posted)
  console.log('Empresa:', form_company_posted)
  console.log('Cargo:', form_role_posted)
  console.log('Setor de empresa:', form_industry_posted)
  console.log('Telefone:', form_phone_posted)
  console.log('Email:', form_email_posted)
  console.log('Informação adicional:', form_additional_info_posted)


  const cadastrante_recrutador = {
  nome: username_posted,
  localidade: form_location_posted,
  empresa: form_company_posted,
  cargo: form_role_posted,
  setor_da_empresa: form_industry_posted,
  telefone: form_phone_posted,
  email: form_email_posted,
  informacao_adicional: form_additional_info_posted
  };




  const fs = require("fs")
  const jsonString = JSON.stringify(cadastrante_recrutador)
  fs.writeFile('./models/cadastrante_recrutador.json', jsonString, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
  });
  console.log(cadastrante_recrutador);

  res.redirect("/paginarecrutadores")
});




app.listen(3000,()=>{
  console.log('Servidor rodando na porta 3000')
})



//Prisma Queries



const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const newUserType = await prisma.userType.create({
    data:
      { tipo: "administrador",},
    
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
}
*/