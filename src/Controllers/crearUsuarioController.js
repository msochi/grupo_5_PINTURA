//El controlador es un objeto literal que exportamos. Tiene muchas funciones agrupadas y que las utilizamos en los callbacks que nos piden para escribir una ruta.
//En los archivos Controllers solo van las responsabilidades del funcionamiento.
const fs = require('fs');
const path= require('path');
const bcrypt = require("bcryptjs"); // sirve para guardar el hash de lo que me trae por ejemplo el req.body.password.
const db = require('../database/models/index')
const {validationResult} = require("express-validator"); // En lugar de llamar check y Body, creamos la variable solamente con validationResults para poder validar la creación de usuario requiriendo express-validator. La ponemos de esta forma para destructurar y no poner todo el objeto (check, body y validationResults).

//let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'),'utf8');
//usuarios= JSON.parse(usuarios)


module.exports ={
    crear: async function(req,res){
        const clientes = await db.Clientes.findAll();
          //res.send("Bienvenidos al sitio")
        res.render ('./crearUsuario', {clientes});    
    },
    crearUsuario: function(req,res){
        // en req.body esta la info del usuario
        
        console.log (req.body);
        //aca preogunto si hay o  no errores en la creación del usuario. Sino hay errores sigo con la creación.
        let errors= validationResult(req); // tengo que pasar validationResults con el objeto que tenga esos errores.De esta forma me guardo todo en un variable (errors).
        if(errors.isEmpty()){
            db.Clientes.create({
            //usuarios.push({
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
       // fs.writeFileSync(path.join(__dirname, '../database/usuarios.json'), JSON.stringify(usuarios))
        res.render ('./index');
        }
        else {
            //return res.send (errors.errors) para verificar si se están mandando los errores.
            //fs.unlinkSync() REVISAR DOCUMENTACION
            //fs.unlink(req.files[0].filename, function (err) {
              //  if (err) throw err;
               
               // console.log('File deleted!')
           // });
            

            res.render ("./crearUsuario", {
                
                errors:errors.mapped(),  
                old: req.body
            })

        }

    },
 
}
;