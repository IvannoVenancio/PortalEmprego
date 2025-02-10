const express = require('express');
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');
const indexRoutes = require('./routes/IndexRoutes');
const path = require('path');
const app = express()
const session = require('express-session');


app.use(session({
    secret: 'seu-segredo-seguro',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));


const { upload } = require('./middleware/Multer');


app.engine('handlebars', engine({
  defaultLayout: 'main',
  runtimeOptions:{
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
   
  }

}));
app.set('view engine', 'handlebars');

// Servir arquivos estáticos
app.use(express.static('public')); 

// Usando o Body Parser para lidar com requisições POST
app.use(bodyParser.urlencoded({extended: true}));

app.use(indexRoutes);



//Listening on port
app.listen(3992, ()=>{
    console.log(`Servidor a rodar na porta ${3992}`)
})