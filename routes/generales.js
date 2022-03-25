const express = require("express")
const rutas = express.Router()
const path = require ('path')

// app.listen(3000,()=>{
//     console.log("El servidor esta corriendo")
// })


// app.get("/",(req,res)=>{
//     res.send("Bienvenidos a primer mensaje del servidor papusss")
// })

rutas.get("/otro",(req,res)=>{
    res.send("Bienvenidos papu")
})

rutas.get("/easteregg",(req,res)=>{
    res.send("Venti le gana")
})

rutas.get("/prueba",(req,res)=>{
    res.sendFile(path.join(__dirname,"../index.html"));
})

module.exports = rutas