//El controlador es un objeto literal que exportamos. Tiene muchas funciones agrupadas y que las utilizamos en los callbacks que nos piden para escribir una ruta.
//En los archivos Controllers solo van las responsabilidades del funcionamiento.
const path = require('path');
const db = require('../database/models')

module.exports ={
    index: function(req,res){
        //res.send("Bienvenidos al sitio")
        res.render ('./index');
    
    },
 

    ofertas:  async function (req,res){       
        
        console.log ('Estoy buscando interior')        
           
        await db.Productos.findAll({
        
         include: [{association: 'marcas'} ],
           
      })
      .then( function (productos) {       
         db.Marcas.findAll()
        .then( function (marcas)
             {
                 console.log( productos)
                res.render ('index',{productos: productos, marcas})
             }
                )
        
                //return res.json(interior) ;                
               
                } 
            )    
      },
}