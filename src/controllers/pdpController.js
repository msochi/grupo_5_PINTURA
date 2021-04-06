//const fs = require ('fs)');
const path = require('path');
const db = require('../database/models')


module.exports ={
   
    log:  function (req,res){
        res.redirect ('/login')
    },

     pdp: function(req,res){
        const productos = db.Productos.findAll();
           return res.render('./pdp', {productos})
         }
     ,


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