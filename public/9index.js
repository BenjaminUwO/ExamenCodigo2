let seleccionado = null
let NL=0
let modal=document.getElementById("modal")
let btnAgrega=document.getElementById("btnAgrega")


document.getElementById("productos").addEventListener("submit",function(e){
e.preventDefault()
let nombre = document.getElementById("nombre").value
let precio = document.getElementById("precio").value
let fecha = document.getElementById("fecha").value
let tipo = document.getElementById("tipo").value
let desc = document.getElementById("desc").value
let file = document.getElementById("file").value
let prop = document.getElementById("prop").value

if(seleccionado===null){
    agrega(nombre,precio,fecha,tipo,desc,file,prop)   
}else{
    actualiza(nombre,precio,fecha,tipo,desc,file,prop)
}
limpiar()

})

document.getElementById("datos").addEventListener("click",(e)=>{
    e.preventDefault()
    elimina(e.target)
    modificar(e.target)   
})

btnAgrega.addEventListener("click",()=>{
    abremodal()
})