const express = require('express');
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');
const UserRoutes = require('./routes/UserRoutes');
const path = require('path');
const app = express()

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


app.use(bodyParser.urlencoded({extended: true}));

app.use(UserRoutes);



//Listening on port
app.listen(3992, ()=>{
    console.log(`Servidor a rodar na porta ${3992}`)
})