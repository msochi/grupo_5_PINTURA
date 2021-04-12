//const fs = require ('fs)');
const path = require('path');
const db = require('../database/models')


module.exports ={
    // pdp: function(req,res){
    //     //res.send("Bienvenidos al sitio")
    //     res.render ('./pdp')
    // },
    //  all: function (req, res){ res.render (productos, { productosEnLaVista: productos }) 
    // Tengo que elegir un nombre con el que lo quiero recuperar en la vista. Una vez completo esto, como es un JSON con datos de multiples productos, para poder visualizar todos tengo que comenzar a escribir el código con ejs en el archivo PLP.ejs. para poder mostrarlo en la vista. Render me sirve para mandar esto a la vista.

    // pdp: function(req,res){
    //     db.Productos.findAll()
    //     .then(function(productos) {
    //         return res.render('./pdp', { productos: productos})
    //     })
    // }, 

     pdp: function(req,res){
        const productos = db.Productos.findAll();
           return res.render('./pdp', {productos})
         }
     ,
    // buscarproducto: async (req,res)=>{
    //     console.log(req.params.id)
    //     console.log ('no muestro')
    //     const productos = await db.Productos.findAll({
    //       where:{producto: req.params.id}
    //     }) 
    //     console.log(producto)
    //     return res.json (producto)
    //     res.send(marca)
    //   },

    producto: async function(req,res){
       // return res.json (req.body)
        console.log ('Estoy viendo detalle de producto')
    
       await db.Productos.findByPk(req.params.id)
    
      .then( function (productos){
         db.Marcas.findAll()
        .then (function (marcas)
        {
            //res.send (productos.datavalues)
           //return res.json(productos);
          res.render('pdp', {productos:productos,marcas })
      })
    })

    }
}