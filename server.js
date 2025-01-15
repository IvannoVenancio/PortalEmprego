const express = require('express');
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');
const {URLSearchParams} = require('url')
const UserRoutes = require('./routes/UserRoutes');
const app = express();
const path = require('path');
const { upload } = require('./middleware/multer')


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


  let dict0 = {};
  dict0["recrutador"] = 1;
  dict0["candidato"] = 2;

  let dict1 = {};
  dict1[1] = '/cadastrorecrutador';
  dict1[2] = '/cadastrocandidato';

  const cadastrante = {
  name: req.body.form_name,
  password: req.body.form_password,
  email: req.body.form_email,
  type_of_account: dict0[req.body.form_type_of_account],
  };

  console.log(cadastrante);

  const { PrismaClient } = require('@prisma/client')
  const prisma = new PrismaClient()

  async function main() {
    const newUsers = await prisma.user.create({
      data:
        { nome: cadastrante.name,
          email: cadastrante.email,
          password: cadastrante.password,
          user_type_id:cadastrante.type_of_account},
      
    })
    //Depricated
    console.log (newUsers)
    const user0 = await prisma.user.findUnique({
      where: {
        email: cadastrante.email,
      },
    })

    //aqui tera o id
    const fs = require("fs")
    const jsonString = JSON.stringify(user0.id)
    fs.writeFile('./models/cadastrante_id.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    });

    res.redirect(dict1[cadastrante.type_of_account])
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

    //Query de pesquisa, pra pesquisar o usuario que tem o determinado email

});






app.post('/cadastrocandidato',upload.single('file'), (req, res) => {
  // Access form fields from req.body


  const fs = require("fs");
  fs.readFile('./models/cadastrante_id.json', "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const cadastrante_id = JSON.parse(jsonString);
      console.log(cadastrante_id);

      const cadastrante_candidato = {
      location: req.body.form_location,
      recent_role: req.body.form_recent_role,
      aditional_info: req.body.form_additional_info,
      birthdate: req.body.form_birthdate,
      id_user_fk: cadastrante_id
      };

      const { PrismaClient } = require('@prisma/client')

      const prisma = new PrismaClient()

        async function main() {

          const newCertificacoes = await prisma.certificacoes.create({
            data:
              { nome: req.file.filename},
            
          })

          const certificacao0 = await prisma.certificacoes.findUnique({
            where: {
              nome: req.file.filename,
            },
          })

          const newUsers = await prisma.candidato.create({
            data:
              { localizacao: cadastrante_candidato.location,
                cargo_recente:cadastrante_candidato.recent_role,
                informacao_adicional: cadastrante_candidato.aditional_info,

                id_user_fk:cadastrante_candidato.id_user_fk,
                id_certificacoes_fk:certificacao0.id,
                id_habilitacoes_literarias_fk:0,
                id_experiencia_profissional_fk:0,
                id_redes_socias_fk:0,
                id_idiomas_fk:0},
            
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

      console.log(cadastrante_candidato);
      console.log(req.file.filename);
      res.redirect("/paginainicial");



    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  })

});




app.post('/cadastrorecrutador', (req, res) => {


  const fs = require("fs");
  fs.readFile('./models/cadastrante_id.json', (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const cadastrante_id = JSON.parse(jsonString);
      console.log(cadastrante_id);

  // Access form fields from req.body
      const cadastrante_recrutador = {
      location: req.body.form_location,
      company: req.body.form_company,
      role: req.body.form_role,
      industry: req.body.form_industry,
      phone: req.body.form_phone,
      email: req.body.form_email,
      };


      const { PrismaClient } = require('@prisma/client')

      const prisma = new PrismaClient()

        async function main() {
          const newUsers = await prisma.recrutador.create({
            data:
              {
                empresa:cadastrante_recrutador.company,
                localizacao: cadastrante_recrutador.location,
                cargo: cadastrante_recrutador.role,
                setor: cadastrante_recrutador.industry,
                telefone: cadastrante_recrutador.phone,
                email: cadastrante_recrutador.email,
                id_user_fk:cadastrante_id},
            
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



      console.log(cadastrante_recrutador);
      res.redirect("/paginarecrutadores")


    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });


});




app.listen(3000,()=>{
  console.log('Servidor rodando na porta 3000')
})


/*
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

  async function main() {
    const newUsers = await prisma.userType.createMany({
      data:[
        { tipo: "administrador"},
        { tipo: "candidato"},
        { tipo: "recrutador"},
      ]
      
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

*/

//Prisma Queries


/*
  async function main() {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
}
*/