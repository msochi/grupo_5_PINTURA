//const fs = require ('fs)');
//const path = require('path');

//let productos = fs.readFileSync (path.join(__dirname, '../database/productos.json'), 'utf-8'); // Recuperamos los datos del JSON. Este controlodaro deberìa tener funcionamiento adicional, por eso tenemos que escribir un nuevo metodo que busque cosas en la base de datos, de procesarla y mostrar los datos.

//productos = JSON.parse (productos)
const path = require('path');
const db = require('../database/models')



module.exports ={
    plp:  async (req,res)=>{
        const productos = await db.Productos.findAll();
        //res.send("Bienvenidos al sitio")
        
        res.render ('./plp')
    },




    interior:  async function (req,res){       
        
        console.log ('Estoy buscando interior')        
           
        await db.Productos.findAll({
          where: {
              id_subfamilia: 3,
                 },
         include: [{association: 'marcas'} ],
           
      })
      .then( function (productos) {       
         db.Marcas.findAll()
        .then( function (marcas)
             {
                 console.log( productos)
                res.render ('plp',{productos: productos, marcas})
             }
                )
        
                //return res.json(interior) ;                
               
                } 
            )    
      },

      exterior:  async function (req,res){       
        
        console.log ('Estoy buscando interior')        
           
        await db.Productos.findAll({
          where: {
              id_subfamilia: 1,
                 },
         include: [{association: 'marcas'} ]      
      })
      .then( function (productos) {       
         db.Marcas.findAll()
        .then( function (marcas)
             {
                 console.log( productos)
                res.render ('plp',{productos: productos, marcas})
             }
                )
        
                //return res.json(interior) ;                
               
                } 
            )    
      },
      decoracion:  function (req,res){       
        
        console.log ('Estoy buscando interior')        
      const marcas= db.Marcas.findAll ();     
         db.Productos.findAll({
          where: {
              id_subfamilia: 4,
                 },
         include: [{association: 'marcas'} ]      
      })
      .then( function (productos) {       
         //db.Marcas.findAll()
       // .then( function (marcas)
            // {
                 //console.log( productos)
                res.render ('plp',{productos: productos, marcas})
            // }
                //)
        
                //return res.json(interior) ;                
               
                } 
            )    
      },

      herramientas:  async function (req,res){       
        
        console.log ('Estoy buscando interior')        
           
        await db.Productos.findAll({
          where: {
              id_subfamilia: 2,
                 },
         include: [{association: 'marcas'} ]      
      })
      .then( function (productos) {       
         db.Marcas.findAll()
        .then( function (marcas)
             {
                 console.log( productos)
                res.render ('plp',{productos: productos, marcas})
             }
                )
        
                //return res.json(interior) ;                
               
                } 
            )    
      },


    //   mostrarinterior: async function (req, res) {
        
    //     console.log ('Estoy en MOSTRAR INTERIOR')  ;
    //       await db.Productos.findAll({
    //         where: {
    //             id_tipo: req.params.id_tipo,
    //                });
    //     //  .then(function  (interior) {        
    //               //return res.json(cliente ) ;                
    //             res.render ('./plp', {interior: interior})
    //             } 
    //         )
    //   }, 
        
      // res.render ('./plp')
    //,
    //  all: function (req, res){ res.render (productos, { productosEnLaVista: productos }) 
    // Tengo que elegir un nombre con el que lo quiero recuperar en la vista. Una vez completo esto, como es un JSON con datos de multiples productos, para poder visualizar todos tengo que comenzar a escribir el código con ejs en el archivo PLP.ejs. para poder mostrarlo en la vista. Render me sirve para mandar esto a la vista.
    
    ////BUSCAR PRODUCTO PLP INTERIOR
   // interior:  

//    mostrarinterior: async function (req,res) {
//     console.log(req.query);
//     console.log ('Estoy en MOSTRAR INTERIOR');  
//      await db.Productos.findByPk(req.params.id)
//      .then(function  (interior) {        
//               //return res.json(cliente ) ;                
//             res.render ('./plp', {interior: interior})
//             } 
//         )


// }
    }
