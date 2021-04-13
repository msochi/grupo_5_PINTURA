//const fs = require ('fs)');
//const path = require('path');

//let productos = fs.readFileSync (path.join(__dirname, '../database/productos.json'), 'utf-8'); // Recuperamos los datos del JSON. Este controlodaro deberìa tener funcionamiento adicional, por eso tenemos que escribir un nuevo metodo que busque cosas en la base de datos, de procesarla y mostrar los datos.

//productos = JSON.parse (productos)
const path = require('path');
const db = require('../database/models')
const Sequelize = require('sequelize');
// const Marcas = require("../database/models/Marcas");
const Op = Sequelize.Op;



module.exports ={
   log:  function (req,res){
         
      //res.send("Bienvenidos al sitio")
      
      res.redirect ('/login')
  },

    plp:  async (req,res) => {

      if (req.query.text || req.query.marca || req.query.tipo || req.query.min || req.query.max) {
         console.log("Hay input");
         var productos = await db.Productos.findAll({
            where: {
               [Op.or]:
                   [
                        {
                           titulo_producto: {
                              [Op.like]: `%${req.query.text}%`
                           }
                        },
                        {
                           precio: {
                              [Op.gte]: `${req.query.min}`
                           }
                        },
                       {
                           '$marcas.marca$': {
                               [Op.like]: `${(req.query.marca ? req.query.marca : req.query.text)}`
                           }
                       },
                        {
                           '$tipo.tipo$': {
                              [Op.like]: `${(req.query.tipo ? req.query.tipo : req.query.text)}`
                        }
                     }
                   ]
           },
           include: [
               {association: 'marcas'},
               {association: 'tipo'},
            ],
             
        })
         // console.log(productos);
      } else {
         console.log ('Estoy buscando todo')            
         var productos = await db.Productos.findAll({
            include: [{association: 'marcas'} ],      
         })
      }
      const marcas = await db.Marcas.findAll();
      const tipos = await db.Tipo.findAll();
      let marca_selected = (req.query.marca ? req.query.marca : " ");
      let tipo_selected = (req.query.tipo ? req.query.tipo : " ");
      res.render ('plp',{productos: productos, marcas, tipos, marca_selected, tipo_selected})
            
    },

    interior:  async function (req,res){       
        
        console.log ('Estoy buscando interior')        
           
        const productos = await db.Productos.findAll({
          where: {
              id_subfamilia: 3,
                 },
         include: [{association: 'marcas'} ],
           
      })

         console.log( productos)
         const marcas = await db.Marcas.findAll();
         const tipos = await db.Tipo.findAll();
         res.render ('plp',{productos: productos, marcas, tipos})
  
      },

      exterior:  async function (req,res){       
        
        console.log ('Estoy buscando interior')        
           
        const productos = await db.Productos.findAll({
          where: {
              id_subfamilia: 1,
                 },
         include: [{association: 'marcas'} ]      
      })

                  console.log(productos)
                  const marcas = await db.Marcas.findAll();
                  const tipos = await db.Tipo.findAll();
                  res.render ('plp',{productos: productos, marcas, tipos})

      },
      decoracion:  async function (req,res){       
        
        console.log ('Estoy buscando interior')            
        const productos = db.Productos.findAll({
          where: {
              id_subfamilia: 4,
                 },
         include: [{association: 'marcas'} ]      
      })
         const marcas = await db.Marcas.findAll();
         const tipos = await db.Tipo.findAll();
         res.render ('plp',{productos: productos, marcas, tipos})
    
      },

      herramientas:  async function (req,res){       
        
        console.log ('Estoy buscando interior')        
           
        const productos = await db.Productos.findAll({
          where: {
              id_subfamilia: 2,
                 },
         include: [{association: 'marcas'} ]      
      })
      
         console.log( productos)
         const marcas = await db.Marcas.findAll();
         const tipos = await db.Tipo.findAll();
         res.render ('plp',{productos: productos, marcas, tipos})
             
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
