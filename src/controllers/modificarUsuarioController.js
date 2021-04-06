const fs = require('fs');
const path= require('path');
const db = require('../database/models/index')
const bcrypt = require("bcryptjs");
//let productos = fs.readFileSync(path.join(__dirname, '../database/productos.json'),'utf8');
//productos= JSON.parse(productos)


module.exports ={



 mostrar:  async (req,res)=>{
    console.log(req.params.id)
    console.log ('te estoy viendo')
    const localidades = await db.Localidades.findAll();
    const provincias = await db.Provincias.findAll();
       db.Clientes.findByPk(req.params.id)
          .then((cliente) => {
            console.log(cliente);
               res.render ('./modificarusuario', {cliente, localidades, provincias})
            } 
        )

  },
 
  actualizar: function(req,res){
    db.Clientes.update({
          email: req.body.email,
          pass: bcrypt.hashSync(req.body.pass, 12),
          avatar: req.files[0].filename,
          nombre: req.body.name,
          apellido: req.body.last_name,
          dni:req.body.dni,
          direccion: req.body.street,
          id_localidad: req.body.id_localidad,
          codigo_Postal: req.body.codigo_Postal,
          id_provincia:req.body.id_provincia,
          telefono: req.body.phone,
          },{ 
          where:{
            id: req.params.id  
        }
    } )  
    .then((modificado)=>{
    res.redirect("/");
})
.catch(error=>{
    res.send(error);
    });
},
      }
     

