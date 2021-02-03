//El controlador es un objeto literal que exportamos. Tiene muchas funciones agrupadas y que las utilizamos en los callbacks que nos piden para escribir una ruta.
//En los archivos Controllers solo van las responsabilidades del funcionamiento.
//const fs = require('fs');
//const path= require ('path');
//let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'),'utf8');
//usuarios = JSON.parse(usuarios);

module.exports ={
    login: function(req,res){
        //res.send("Bienvenidos al sitio")
        res.render ('./loginAlta');
    
    }
}