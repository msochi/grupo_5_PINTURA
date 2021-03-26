const db = require('../database/models')

module.exports ={
    pdp: async (req,res)=> {
        const productos = await db.Productos.findAll();
        db.Productos.findByPk(req.params.id)
        .then(function(producto) {
           
            return res.render('PDP', {
                prodcuto: producto
            },{productos})
        })
        console.log (req.params.id)
    },
    
    //  all: function (req, res){ res.render (productos, { productosEnLaVista: productos }) 
    // Tengo que elegir un nombre con el que lo quiero recuperar en la vista. Una vez completo esto, como es un JSON con datos de multiples productos, para poder visualizar todos tengo que comenzar a escribir el código con ejs en el archivo PLP.ejs. para poder mostrarlo en la vista. Render me sirve para mandar esto a la vista.
    }