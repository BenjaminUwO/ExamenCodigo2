const express = require('express')
const mysql = require ('mysql')
const rutasbd = express.Router()


const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'retho'
})

conexion.connect((error)=>{
    if (error){
        console.log('no se pudo establecer la conexion')
    }else{
        console.log('Conexion a la base de datos exitosa')
    } 
})

rutasbd.get('/agregar',(req,res)=>{
    let no = 'Impresora'
    let ca = 4
    let pr = 9000

    let da={nombre:no,
        cantidad:ca,
        precio:pr}

    let sql='INSERT INTO datos SET ?'
    let query = conexion.query(sql,da,(error,filas)=>{
        if (error) throw error 
        console.log(filas)
        res.send('registro agregado')
    })
})

rutasbd.get('/agregar2/:no,:ca,:pr',(req,res)=>{
    let no = req.params.no
    let ca = req.params.ca
    let pr = req.params.pr

    let da={nombre:no,
        cantidad:ca,
        precio:pr}

    let sql='INSERT INTO datos SET ?'
    let query = conexion.query(sql,da,(error,filas)=>{
        if (error) throw error 
        console.log(filas)
        res.send('registro agregado')
    })
})

rutasbd.get('/eliminar',(req,res)=>{
    let id=6;
      conexion.query(`DELETE FROM datos WHERE id= ${id}`,(error,filas)=>{
      if (error) throw error
      console.log(filas);
      res.send('Registro Eliminado')
  })
})


rutasbd.get('/eliminar2/:id',(req,res)=>{
    let id = req.params.id;
    conexion.query(`DELETE FROM datos WHERE id= ${id}`,(error,filas)=>{
        if (error) throw error 
        console.log(filas)
        res.send('registro eliminado')
    })
})

rutasbd.get('/actualizar',(req,res)=>{
    let id = 8
    let no = 'mouse'
    let pr = 2300
    conexion.query(`UPDATE datos SET nombre='${no}',precio=${pr} WHERE id= ${id}`,(error,filas)=>{
        if (error) throw error 
        console.log(filas)
        res.send('registro actualizado')
    })
})

rutasbd.get('/actualizar/:id',(req,res)=>{
    let id = req.params.id
    let no = 'microfono'
    let pr = 9300
    conexion.query(`UPDATE datos SET nombre='${no}',precio=${pr} WHERE id= ${id}`,(error,filas)=>{
        if (error) throw error 
        console.log(filas)
        res.send('registro actualizado')
    })
})


rutasbd.get('/consulta',(req,res)=>{
    
    conexion.query(`SELECT * FROM datos`,(error,filas)=>{
        if (error) throw error 
        for (ele of filas){
            console.log(ele.id+" - - - "+ele.nombre+"- - - precio: "+ele.precio)
        }
        console.log(filas)
        res.send('Consulta realizada')
    })
})

rutasbd.get('/consulta2',(req,res)=>{
    
    let id = 5
    conexion.query(`SELECT * FROM datos WHERE id=${id}`,(error,filas)=>{
    
        if (error) throw error 
        for (ele of filas){
            console.log(ele.id+" - - - "+ele.nombre+"- - - precio: "+ele.precio)
        }
        console.log(filas)
        res.send('Consulta realizada')
    })
})

rutasbd.get('/consulta2/:id',(req,res)=>{
    
    let id = req.params.id
    conexion.query(`SELECT * FROM datos WHERE id=${id}`,(error,filas)=>{
    
        if (error) throw error 
        for (ele of filas){
            console.log(ele.id+" - - - "+ele.nombre+"- - - precio: "+ele.precio)
        }
        console.log(filas)
        res.send('Consulta realizada')
    })
})

rutasbd.get('/consulta3/:pr',(req,res)=>{
    
    let pr = req.params.pr
    conexion.query(`SELECT * FROM datos WHERE precio>${pr}`,(error,filas)=>{
    
        if (error) throw error 
        for (ele of filas){
            console.log(ele.id+" - - - "+ele.nombre+"- - - precio: "+ele.precio)
        }
        console.log(filas)
        res.send('Consulta realizada')
    })
})

module.exports = rutasbd