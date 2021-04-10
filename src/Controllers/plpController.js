//const fs = require ('fs)');
//const path = require('path');

const db = require("../database/models");
const Sequelize = require('sequelize');
const Marcas = require("../database/models/Marcas");
const Op = Sequelize.Op;


//let productos = fs.readFileSync (path.join(__dirname, '../database/productos.json'), 'utf-8'); // Recuperamos los datos del JSON. Este controlodaro deberìa tener funcionamiento adicional, por eso tenemos que escribir un nuevo metodo que busque cosas en la base de datos, de procesarla y mostrar los datos.

//productos = JSON.parse (productos)

//marca, proveedores, tipo, subtipo

module.exports ={
    plp: async function(req,res){
        console.log(req.query.text);
        //res.send("Bienvenidos al sitio")
        // let marcas = await db.Marcas.findAll({
        //     where: {
        //       marca: {
        //         [Op.like]: "%" + req.query.text + "%"
        //       }
        //     }
        //  })

        // let proveedores = await db.Proveedores.findAll({
        // where: {
        //     proveedor: {
        //     [Op.like]: "%" + req.query.text + "%"
        //     }
        // }
        // })

        // let tipos = await db.Tipo.findAll({
        //     where: {
        //         tipo: {
        //         [Op.like]: "%" + req.query.text + "%"
        //         }
        //     }
        //     })
        
        // let subtipos = await db.Subtipo.findAll({
        //     where: {
        //         subtipo: {
        //         [Op.like]: "%" + req.query.text + "%"
        //         }
        //     }
        //     })

        // for (var i = 0; i < marcas.length; i++) {
        //     console.log(marcas[i].marca);
        // }
        // for (var i = 0; i < proveedores.length; i++) {
        //     console.log(proveedores[i].proveedor);
        // }
        // for (var i = 0; i < tipos.length; i++) {
        //     console.log(tipos[i].tipo);
        // }
        // for (var i = 0; i < subtipos.length; i++) {
        //     console.log(subtipos[i].tipo);
        // }

        db.Productos.findAll({
            include: {model: Marcas, as: 'Marcas'}
            // where: {
            //     [Op.or]:
            //         [
            //             {
            //                 '$Marcas.marca$': {
            //                     [Op.like]: `%${req.query.text}%`
            //                 }
            //             }
            //         ]
            // }
        }).then(productos => console.log(productos))
        // res.render ('./plp', productos)
     },
    //  all: function (req, res){ res.render (productos, { productosEnLaVista: productos }) 
    // Tengo que elegir un nombre con el que lo quiero recuperar en la vista. Una vez completo esto, como es un JSON con datos de multiples productos, para poder visualizar todos tengo que comenzar a escribir el código con ejs en el archivo PLP.ejs. para poder mostrarlo en la vista. Render me sirve para mandar esto a la vista.
    }

