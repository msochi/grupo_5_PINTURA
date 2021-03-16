//El controlador es un objeto literal que exportamos. Tiene muchas funciones agrupadas y que las utilizamos en los callbacks que nos piden para escribir una ruta.
//En los archivos Controllers solo van las responsabilidades del funcionamiento.
const fs = require('fs');
const path= require ('path');
const bcrypt = require ("bcryptjs");
const db = require('../database/models/index')
// let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'),'utf8');
// usuarios = JSON.parse(usuarios);



module.exports ={
    login: function(req,res){
        //res.send("Bienvenidos al sitio")
        res.render ('./login');
    
    },

    checkUsuario: async function (req, res) {   

        let usuario = await db.Clientes.findAll({
            where: {
                email: req.body.email
            }
        })

        if (usuario[0].email != null) {

            console.log(usuario[0].pass);
            console.log(req.body.pass);
            console.log(bcrypt.compareSync(req.body.pass, usuario[0].pass));

            if(bcrypt.compareSync(req.body.pass, usuario[0].pass) == true){
                // aca ya puedo incluir la variables de session para guardarme registros del usuario.
                
                req.session.usuario = usuario[0].email;
                    //return res.send (req.session.usuarioLogueado)            
                return  res.redirect ('/');
            }
            else {
                return  res.redirect ('/login')
                
            }

        }

        return res.redirect('/');

    },
   
};



