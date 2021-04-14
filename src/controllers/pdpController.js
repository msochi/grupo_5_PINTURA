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
    
        var productos = await db.Productos.findAll({
            where: { id: req.params.id },
           include: [
               {association: 'marcas'},
               {association: 'tipo'},
               {association: 'familia'},
               {association: 'terminacion'},
               {association: 'subtipo'},
            ],  
        })
            console.log(productos);
            res.render('pdp', {productos})
    
        },
    }