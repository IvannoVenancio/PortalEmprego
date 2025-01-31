const express = require('express');
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');
const UserRoutes = require('./routes/UserRoutes');
const path = require('path');
const app = express()
const session = require('express-session');


app.use(session({
    secret: 'seu-segredo-seguro',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));


const { upload } = require('./middleware/Multer')

app.engine('handlebars', engine({
  defaultLayout: 'main',
  runtimeOptions:{
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
   
  }

}));
app.set('view engine', 'handlebars');

app.use(express.static('public')); 

// // Rota para cadastro de candidato
// app.post('/cadastrocandidato', upload.single('id_certificacoes_fk'), (req, res) => {
//   // Verifica se o arquivo foi enviado
//   if (!req.file) {
//       return res.status(400).send('Nenhum arquivo enviado.');
//   }

//   console.log("Dados do candidato:", req.body);
//   console.log("Arquivo enviado:", req.file);

//   // Aqui você pode processar os dados do candidato e salvar no banco de dados
//   // ...

//   res.redirect('/Paginainicial'); // Redireciona após o sucesso
// });


app.use(bodyParser.urlencoded({extended: true}));

app.use(UserRoutes);



//Listening on port
app.listen(3992, ()=>{
    console.log(`Servidor a rodar na porta ${3992}`)
})