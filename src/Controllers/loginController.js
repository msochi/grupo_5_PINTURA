//El controlador es un objeto literal que exportamos. Tiene muchas funciones agrupadas y que las utilizamos en los callbacks que nos piden para escribir una ruta.
//En los archivos Controllers solo van las responsabilidades del funcionamiento.
const fs = require('fs');
const path= require ('path');
const bcrypt = require ("bcryptjs");
let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'),'utf8');
usuarios = JSON.parse(usuarios);



module.exports ={
    login: function(req,res){
        //res.send("Bienvenidos al sitio")
        res.render ('./login');
    
    },

    checkUsuario: function (req, res) {   
        
        //return res.send (req.body)
        for (let i= 0; i < usuarios.length; i++) {
            if(usuarios[i].email == req.body.email){
                if(bcrypt.compareSync(req.body.pass, usuarios[i].pass) == true){
                   // aca ya puedo incluir la variables de session para guardarme registros del usuario.
                   
                  req.session.usuarioLogueado = {
                   email: usuarios[i].email,
                    
                   }
                 
                                     
                     //return res.send (req.session.usuarioLogueado)            
                    return  res.redirect ('/')
                }
                else {
                   return  res.redirect ('/login')
                  
                }
            }
        }
        return res.redirect('/login');
        //usuarios.push({
          //  email: req.body.email,
            //pass: bcrypt.hashSync(req.body.pass, 12),
        //res.send ("Revisando el check del usuario")
    },
   
};



