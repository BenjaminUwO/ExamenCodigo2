// npm init --yes  
// npm i express  
//npm i nodemon 
// npm i mysql
// se corre con npm run start

const express = require("express")
const path = require('path');
const app = express()
const mysql = require('mysql')

app.set('port',process.env.PORT || 3200)
app.listen(app.get('port'),()=>{
    console.log("servidor corriendo")
})

//estaticas
app.use(express.static(path.join(__dirname,"/public")))
//rutas
app.use(require('./routes/generales'))
app.use(require('./routes/bd'))
