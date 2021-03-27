
const path = require('path');
const db = require('../database/models')
//let productos = fs.readFileSync (path.join(__dirname, '../database/productos.json'), 'utf-8'); // Recuperamos los datos del JSON. Este controlodaro deberìa tener funcionamiento adicional, por eso tenemos que escribir un nuevo metodo que busque cosas en la base de datos, de procesarla y mostrar los datos.

//productos = JSON.parse (productos)



module.exports ={
    plp:  async (req,res)=>{
        const productos = await db.Productos.findAll();
        //res.send("Bienvenidos al sitio")
        
        res.render ('./plp',{productos})
    },
    //  all: function (req, res){ res.render (productos, { productosEnLaVista: productos }) 
    // Tengo que elegir un nombre con el que lo quiero recuperar en la vista. Una vez completo esto, como es un JSON con datos de multiples productos, para poder visualizar todos tengo que comenzar a escribir el código con ejs en el archivo PLP.ejs. para poder mostrarlo en la vista. Render me sirve para mandar esto a la vista.
    }

