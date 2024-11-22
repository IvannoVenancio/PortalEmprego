const express = require("express")
const app = express()

app.get("/",(req,res) =>{
    console.log("ok")
    res.send("Hello World!")
})

app.listen(3000,  function(){
    console.log("Servidor rodando na URL http://localhost:3000");
    
    });