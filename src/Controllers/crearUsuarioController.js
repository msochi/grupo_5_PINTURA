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
          //res.send("Bienvenidos al sitio")
        const provincias = await db.Provincias.findAll();
        const localidades = await db.Localidades.findAll();
        res.render('./crearUsuario', {provincias, localidades})    
    },
    buscarLocalidad: async (req,res)=>{
        console.log(req.params.id)
        const localidades = await db.Localidades.findAll({
          where:{id_provincia: req.params.id}
        }) 
        console.log(localidades)
        res.send(localidades)
      },


    crearUsuario: async function(req,res){
        // en req.body esta la info del usuario
        const provincias = await db.Provincias.findAll();
        const localidades = await db.Localidades.findAll();
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
                apellido: req.body.last_name,
                dni:req.body.dni,
                direccion: req.body.street,
                id_localidad: req.body.id_localidad,
                codigoPostal: req.body.zipcode,
                id_provincia:req.body.id_provincia,
                telefono: req.body.phone,
            })
       // fs.writeFileSync(path.join(__dirname, '../database/usuarios.json'), JSON.stringify(usuarios))
       res.render('./crearUsuario', {provincias, localidades}) ;
        }
        else {
            //return res.send (errors.errors) para verificar si se están mandando los errores.
            //fs.unlinkSync() REVISAR DOCUMENTACION
            //fs.unlink(req.files[0].filename, function (err) {
              //  if (err) throw err;
               
               // console.log('File deleted!')
           // });
            

            res.render("./crearUsuario", {
                
                errors:errors.mapped(),  
                old: req.body,
                provincias,
                localidades,
            })

        }

    },
 
}
;