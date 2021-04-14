//El controlador es un objeto literal que exportamos. Tiene muchas funciones agrupadas y que las utilizamos en los callbacks que nos piden para escribir una ruta.
//En los archivos Controllers solo van las responsabilidades del funcionamiento.
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
// let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'),'utf8');
// usuarios = JSON.parse(usuarios);
const db = require('../database/models/index');
const {validationResult } = require("express-validator");


module.exports = {
  login: function (req, res) {
    //res.send("Bienvenidos al sitio")
    res.render("login");
  },

  logout: function (req, res) {
    res.clearCookie('connect.sid');
    res.redirect('/');
  },

  checkUsuario: async function (req, res) {
    let errors= validationResult(req); // tengo que pasar validationResults con el objeto que tenga esos errores.De esta forma me guardo todo en un variable (errors).
     
        if(errors.isEmpty()){
          let usuario= await db.Clientes.findOne({
            where: {
                email: req.body.email,
                   }
        })
       // .then (function (){
            console.log( "entra funcion");
            console.log(req.body.pass);
            //console.log(bcrypt.compareSync(req.body.pass, usuario[0].pass));
            if (usuario) {
               
                if(bcrypt.compareSync(req.body.pass, usuario.pass)) {
                    req.session.usuario = usuario.email;
                             
                return  res.redirect ('/');
                }

            } 

                return res.send ("credenciales invalidas") // agrergar nueva vista
              
            }

/* 
            if(bcrypt.compareSync(req.body.pass, usuario[0].pass) == true){
                // aca ya puedo incluir la variables de session para guardarme registros del usuario.
                console.log( "salgo del if");
                req.session.usuario = usuario[0].email;
                    //return res.send (req.session.usuarioLogueado)            
                return  res.redirect ('/');
            }
        }
        //)}
            else {
                return  res.render ("./login",{
                    errors:errors.mapped(),
                    old: req.body,})
                
            } */
        }
       
}
   

