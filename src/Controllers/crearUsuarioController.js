//El controlador es un objeto literal que exportamos. Tiene muchas funciones agrupadas y que las utilizamos en los callbacks que nos piden para escribir una ruta.
//En los archivos Controllers solo van las responsabilidades del funcionamiento.
const fs = require('fs');
const path= require('path');
const bcrypt = require('bcrypt'); // sirge para guardar el hash de lo que me trae por ejemplo el req.body.password.

let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'),'utf8');
usuarios= JSON.parse(usuarios)


module.exports ={
    crear: function(req,res){
        //res.send("Bienvenidos al sitio")
        res.render ('./crearUsuario');
    
    },
    crearUsuario: function(req,res){
        // en req.body esta la info del usuario
        usuarios.push({
            email: req.body.email,
            pass: bcrypt.hashSync(req.body.pass, 12),
            avatar: req.files[0].filename,
            nombre: req.body.name,
            apellido: req.body.apellido,
            dni:req.body.dni,
            direccion: req.body.street,
            localidad: req.body.location,
            codigoPostal: req.body.zipcode,
            provincia:req.body.province,
            telefono: req.body.phone,
        })
        fs.writeFileSync(path.join(__dirname, '../database/usuarios.json'), JSON.stringify(usuarios))
        res.redirect ('./index');
    },
 
    }
;