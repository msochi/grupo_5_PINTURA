const path = require('path');
const db = require('../../database/models')


module.exports ={
   
 
    list: function(req,res){
       // return res.json (req.body)
        console.log ('Estoy viendo API detalle de producto')
    
         db.Productos.findAll({           
           include: [
               {association: 'marcas'},
               {association: 'tipo'},
               {association: 'familia'},
               {association: 'terminacion'},
               {association: 'subtipo'},
            ],  
        }).then(function(productos){
            console.log(productos)
            for (let i = 0; i < productos.length; i++) {
              productos[i].setDataValue("endpoint","/apis/productos/"+productos[i].id)
                
            }
        let respuesta= {
            meta: {
                status: 200,
                total: productos.length,
                url:"/apis/productos/"
            },
            data: {
                products: productos
           // data: productos

        }};
        
      
        res.json(respuesta)
    })

       
    
        },
        detalle: function(req,res){
            // return res.json (req.body)
             console.log ('Estoy viendo API detalle de producto')
         
              db.Productos.findAll({
                  where: { id: req.params.id },           
                include: [
                    {association: 'marcas'},
                    {association: 'tipo'},
                    {association: 'familia'},
                    {association: 'terminacion'},
                    {association: 'subtipo'},
                 ],  
                }).then(function(productos){
                 console.log(productos)
                 for (let i = 0; i < productos.length; i++) {
                   productos[i].setDataValue("endpoint","/apis/productos/"+productos[i].id)
                     
                 }
             let respuesta= {
                 meta: {
                     status: 200,
                     total: productos.length,
                     url:"/apis/productos/"
                 },
                 data: productos,
                 count: productos.length,
                 countByType: {
                     CONSOLA: 6,
                     PERIFERICO:1
                    }
             };
             
           
             res.json(respuesta)
         })
     
            
         
             },



    }